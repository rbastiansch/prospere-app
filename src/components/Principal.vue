<template>
  <div>
    <h1>Prospere App</h1>
    <ContactList></ContactList>
  </div>
</template>

<script>
import ContactList from './ContactList';

export default {
  name: 'Principal',
  components: {
    ContactList,
  },
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