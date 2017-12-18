<template>
  <div class="login">
    <h2>Sign In Prospere</h2>
    <div class="control-input">
      <input class="input" v-model="email" type="text" name="email" placeholder="email">
      <input class="input" v-model="password" v-on:keyup.enter="login" type="password" name="password" placeholder="password">
    </div>
    <button class="button" type="button" name="submit" v-on:click="login">Sign In</button>
  </div>
  
</template>

<script>
  import login from '@/services/login';

  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: {
      token() {
        return this.$store.state.token;
      },
      isLoggedIn() {
        return this.$store.state.isLoggedIn;
      },
    },
    mounted() {
      if (this.isLoggedIn) {
        this.$router.push('/');
      }
    },
    methods: {
      login() {
        const { email, password } = this;
        login(email, password)
          .then((response) => {
            const { token } = response.data;
            this.setLogin(token);
          });
      },
      setLogin(token) {
        const { email } = this;
        const info = { email, token };
        this.$store.dispatch('signin', { info });
        this.$router.push('/');
      },
    },
  };
</script>