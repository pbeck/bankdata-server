<template>
  <div id="app">

    <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <span class="logo">Bankdata</span>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">

            <router-link v-if="!isLoggedIn" to="/login">
              <a class="button">Login</a>
            </router-link>
            <a v-else v-on:click="handleLogout" class="button">Logout</a>
            <!--
            <a class="button is-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSce12TK1UxHdvRy24Ke-f_JoTNwPAeoq9o9qlIR6TAP7EYArQ/viewform?usp=sf_link">
              <span>Anmäl dig till betatesting</span>
            </a>
            -->
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

    <div class="container">
      <div id="nav">
        <!-- <button @click="Debug">Debug</button> -->
        <!-- <router-link :to="{ name: 'home' }">Vue</router-link> | -->
        <!-- <router-link :to="{ name: 'messages' }">Django Rest</router-link> -->
      </div>
      <router-view/>
    </div>

  </div>
</template>

<script>
  //import Navbar from './components/Navbar.vue';
  import { mapActions, mapState } from 'vuex';  

  export default {
    name: 'navbar',
    components: {
      //Navbar
    },
    computed: {
    ...mapState(['isLoggedIn']),
    },
    methods: {
      Debug: function() {
        // eslint-disable-next-line
        console.log(process.env.NODE_ENV);
      },
      handleLogout(event) {
        event.preventDefault();
        this.logout();
        this.$router.push('/');
      },
    ...mapActions(['logout']),
    }
  }
</script>
