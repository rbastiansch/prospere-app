<template>
  <div>
    <h2>New Contact</h2>
    <form>
      <div>
        <input v-model="name" type="text" name="name" placeholder="Type name...">
      </div>
      <div>
        <input v-model="address" type="text" name="email" placeholder="Type email...">
      </div>
      <div>
        <input v-model="phone" type="text" name="phone" placeholder="Type phone...">
      </div>
      <button type="button" v-on:click="addContact">Add contact</button>
    </form>
  </div>  
</template>

<script>
import { addContact } from '@/services/contacts';

export default {
  name: 'NewContact',
  data() {
    return {
      name: '',
      address: '',
      phone: '',
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
  methods: {
    addContact() {
      const { token, email, name, phone, address } = this;
      const code = phone.substring(0, 2);
      const number = phone.substring(2);
      const data = {
        name,
        phones: [{
          code,
          number,
        }],
        emails: [{
          address,
        }],
      };
      addContact(token, email, data);
    },
  },
};
</script>