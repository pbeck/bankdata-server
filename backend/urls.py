"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include, re_path

from rest_framework import routers

from .api.views import index_view, TransmogrifyView

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()

urlpatterns = [
    # http://localhost:8000/
    path('', index_view, name='index'),

    path('api/transmogrify/', TransmogrifyView.as_view()),

    # http://localhost:8000/api/<router-viewsets>
    path('api/', include(router.urls)),

    path('api/token/access/', TokenRefreshView.as_view(), name='token_get_access'),
    path('api/token/both/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),
    re_path(r'^(?P<path>.*)/$', index_view, name='index'),
]


