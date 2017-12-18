<template>
  <div v-if="contacts" class="contact-list">
    <h2>Contacts</h2>
    <div class="item" v-for="contact in contacts">
      <div class="info">
        <p>Name: {{ contact.name }}</p>
        <button class="button" type="button" name="view" v-on:click="viewContact(contact.id)">View</button>
      </div>
    </div>
  </div>  
</template>

<script>
import { getContacts } from '@/services/contacts';

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
      getContacts(token, email)
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