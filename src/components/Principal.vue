<template>
  <div v-if="hasToken" class="principal">
    <ContactList></ContactList>
    <button class="button" type="button" name="new_contact" v-on:click="newContact">New contact</button>
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