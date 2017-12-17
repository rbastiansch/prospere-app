<template>
  <div v-if="hasToken" class="new-contact">
    <Navigation />
    <h2>New Contact</h2>
    <form class="form">
      <div class="control-input">
        <input class="input" v-model="name" type="text" name="name" placeholder="Name">
      </div>
      <div class="control-input">
        <input class="input" v-model="address" type="text" name="email" placeholder="Email">
      </div>
      <div class="control-input">
        <input class="input" v-model="phone" type="text" name="phone" placeholder="Phone">
      </div>
      <div class="control-textarea">
        <textarea v-model="background" name="about" rows="5" cols="46" placeholder="About"></textarea>
      </div>
      <div class="control-button">
        <button class="button" type="button" v-on:click="addContact">Submit</button>
      </div>
    </form>
  </div>  
</template>

<script>
import Navigation from '@/components/Navigation';
import { addContact } from '@/services/contacts';

export default {
  name: 'NewContact',
  components: {
    Navigation,
  },
  data() {
    return {
      name: '',
      address: '',
      phone: '',
      background: '',
      hasToken: '',
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
    email() {
      return this.$store.state.email;
    },
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
    addContact() {
      const { token, email, name, phone, address, background } = this;
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
        background,
      };
      addContact(token, email, data);
    },
  },
};
</script>