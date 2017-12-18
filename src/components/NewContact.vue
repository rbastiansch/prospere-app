<template>
  <div v-if="hasToken" class="new-contact">
    <Navigation />
    <h2>New Contact</h2>
    <form class="form" v-on:submit.prevent="validateBeforeSubmit">
      <div class="control-input">
        <input v-validate="'required|alpha|min:3'" class="input" v-model="name" type="text" name="name" placeholder="Name">
        <span v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span>
      </div>
      <div class="control-input">
        <input v-validate="'required|email'" class="input" v-model="address" type="text" name="email" placeholder="Email">
      </div>
      <div class="control-input">
        <input class="input" v-model="phone" type="text" name="phone" placeholder="Phone">
      </div>
      <div class="control-textarea">
        <textarea v-model="background" name="about" rows="5" cols="46" placeholder="About"></textarea>
      </div>
      <div class="control-errors">
        <span v-if="submitted" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        <span v-if="submitted" v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </div>
      <div class="control-button">
        <button class="button" type="submit" name="submit">Submit</button>
      </div>
    </form>
  </div>  
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Navigation from '@/components/Navigation';
import { addContact } from '@/services/contacts';

Vue.use(VeeValidate);
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
      submitted: false,
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
    validateBeforeSubmit() {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.addContact();
            return;
          }
          this.submitted = true;
        });
    },
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
      this.$router.go(-1);
    },
  },
};
</script>