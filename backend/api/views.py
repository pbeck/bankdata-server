from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

from rest_framework.views import APIView
import requests
import sys
import json

# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))

class TransmogrifyView(APIView):
    base_url = 'https://api.tink.se/api/v1'

    def post(self, request):
      '''
      TODO: This error handling is crude, what we're really
      trying to do is making sure the 'code' param is set
      '''      
      try:
        body = {
          'code': request.data['code'],
          'client_id': self.TINK_CLIENT_ID,
          'client_secret': self.TINK_CLIENT_SECRET,
          'grant_type': 'authorization_code'
        }

      except:
        return Response(status=422, data={'message': 'No code'})

      body_headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }

      response_token = requests.post(self.base_url + '/oauth/token',
        data=body, headers=body_headers)
      resjson = json.loads(response_token.text)

      try:
        token = resjson['access_token']
        #bearer = resjson['bearer']
      except:
        return Response(status=422, data={'message': 'No token'})

      # TODO: Can't we just return the token to our client
      # and let it handle the rest?
      response_data = requests.post(self.base_url + '/search',
        headers = { 
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        data = json.dumps({ 
          "queryString": "food this week"
        })
      )

      print(response_data.text, file=sys.stderr)
      
      return Response(response_data.json())