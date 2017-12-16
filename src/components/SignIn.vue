<template>
  <div>
    <h2>Sign In</h2>
    <div>
      <input v-model="email" type="text" placeholder="email">
      <input v-model="password" type="password" placeholder="password">
      <button type="button" v-on:click="login">Sign In</button>
    </div>
  </div>
  
</template>

<script>
  import login from '@/services/index';

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
        this.$store.dispatch('signin', { token });
        this.$router.push('/');
      },
    },
  };
</script>