<template>
  <div v-if="hasToken">
    <h1>Prospere App</h1>
    <ContactList></ContactList>
    <button type="button" v-on:click="newContact">Add Contact</button>
  </div>
</template>

<script>
import ContactList from './ContactList';

export default {
  name: 'Principal',
  components: {
    ContactList,
  },
  data() {
    return {
      hasToken: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push('/login');
    } else {
      this.hasToken = true;
    }
  },
  methods: {
    newContact() {
      this.$router.push('/new');
    },
  },
};
</script>