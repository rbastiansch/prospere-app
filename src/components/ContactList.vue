<template>
  <div>
    <h2>Contact List</h2>
    <div v-for="contact in contacts">
      <div>
        <p>{{ contact.name }}</p>
      </div>
      <button type="button" v-on:click="viewContact(contact.id)">View</button>
    </div>
  </div>  
</template>

<script>
import contacts from '@/services/contacts';

export default {
  name: 'ContactList',
  data() {
    return {
      contacts: [],
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
    email() {
      return this.$store.state.email;
    },
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      const { token, email } = this;
      contacts.getContacts(token, email)
        .then((response) => {
          this.contacts = response.data.contacts;
        });
    },
    viewContact(id) {
      this.$router.push({ name: 'contact', params: { id } });
    },
  },
};
</script>