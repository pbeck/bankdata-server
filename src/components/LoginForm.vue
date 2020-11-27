<template>
  <div class="form">
    <form v-on:submit="handleLogin">

         <label for="text-password">User</label>
        <b-input
          type="text"
          id="text-username"
          required
          v-model="username"
          aria-describedby="password-help-block"></b-input>
        <label for="text-password">Password</label>
        <b-input
          type="password"
          id="text-password"
          v-model="password"
          aria-describedby="password-help-block"></b-input>

      <b-button @click="handleLogin">Login</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      nextPath: '/home',
      errorMessage: '',
    };
  },
  mounted() {
    this.updateAfterLoginNextPath();
  },
  methods: {
    handleLogin(event) {
      event.preventDefault();
      this.login({ username: this.username, password: this.password })
        .then(() => {
          this.$router.push(this.nextPath);
        });
    },
    updateAfterLoginNextPath() {
      if ('next' in this.$route.query) {
        this.nextPath = this.$route.query.next;
      }
    },
    ...mapActions([
      'login',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  max-width:400px;
  margin: 0 auto;
}
</style>