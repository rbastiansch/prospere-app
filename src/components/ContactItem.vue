<template>
  <div>
      <h2>{{ contact.name }}</h2>
      <div v-for="email in contact.emails">
        <p>{{ email.address }}</p>
      </div>
      <div v-for="phone in contact.phones">
        <p><span>({{ phone.code}})</span> {{ phone.number }}</p>
      </div>
  </div>  
</template>

<script>
import contacts from '@/services/contacts';

export default {
  name: 'ContactItem',
  props: ['id'],
  data() {
    return {
      contact: '',
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
    this.getContact();
  },
  methods: {
    getContact() {
      const { token, email, id } = this;
      contacts.getContact(token, email, id)
        .then((response) => {
          this.contact = response.data;
        });
    },
  },
};
</script>