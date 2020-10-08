<template>
  <div>
  <button @click="AuthLinkTesting">Koppla mot bank (test)</button>
  <button @click="AuthLink">Koppla mot bank (live)</button>
  <br />
  <a href="/callback">Directly to /callback</a>
  </div>
</template>

<script>
export default {
  methods: {
    AuthLinkTesting: function() {
      const callback_url = (process.env.NODE_ENV == 'production') ?
        'https://legendary-octo-winner.herokuapp.com/callback' :
        'http://localhost:8080/callback';

      const link =
        "https://link.tink.com/1.0/authorize/?" +
        "client_id=670b5ec0f79c408fb72406e4d0ad394e" +
        "&redirect_uri=" + callback_url +
        "&scope=accounts:read,transactions:read,investments:read,user:read" +
        "&market=SE" +
        "&locale=en_US"+
        "&test=true"+
        "&iframe=true";
      window.location=link;
    },
    AuthLink: function() {
      const callback_url = (process.env.NODE_ENV == 'production') ?
        'https://legendary-octo-winner.herokuapp.com/callback' :
        'http://localhost:8080/callback';

      const link =
        "https://link.tink.com/1.0/authorize/?" +
        "client_id=670b5ec0f79c408fb72406e4d0ad394e" +
        "&redirect_uri=" + callback_url +
        "&scope=accounts:read,transactions:read,investments:read,user:read" +
        "&market=SE" +
        "&locale=en_US"
      window.location=link;
    }
  }
}
</script>