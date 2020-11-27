<template>
  <div id="app">

    <Navbar />

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
  import Navbar from './components/Navbar.vue';
  import { mapActions, mapState } from 'vuex';  

  export default {
    name: 'navbar',
    components: {
      Navbar
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
