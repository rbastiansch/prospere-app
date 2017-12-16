<template>
  <div class="hello">
    <h1>Principal</h1>
  </div>
</template>

<script>
export default {
  name: 'Principal',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push('/login');
    }
  },
};
</script>