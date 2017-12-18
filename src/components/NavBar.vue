<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'principal'}" id="home">Home</router-link>
    <a v-on:click="logout" id="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout() {
      this.$store.dispatch('signout');
      this.$router.push('/login');
    },
  },
};
</script>