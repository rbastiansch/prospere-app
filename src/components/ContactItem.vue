<template>
  <div v-if="contact && hasToken" class="contact-item">
    <Navigation></Navigation>
    <div class="main-info">
      <h2>{{ contact.name }}</h2>
    </div>
    <div class="secundary-info">
      <div v-if="contact.emails.length" class="item">
        <span class="tag">Email: </span>
        <div class="list">
          <div class="list-item" v-for="email in contact.emails">
            <p>{{ email.address }}</p>
          </div>
        </div>
      </div>
      <div v-if="contact.phones.length" class="item">
        <span class="tag">Phone: </span>
        <div class="list">
          <div class="list-item" v-for="phone in contact.phones">
            <p>({{ phone.code}}) {{ phone.number }}</p>
          </div>
        </div>
      </div>
      <div v-if="contact.background" class="item">
        <span class="tag">About: </span>
        <p>{{ contact.background }}</p>
      </div>
    </div>
  </div>  
</template>

<script>
import Navigation from '@/components/Navigation';
import { getContact } from '@/services/contacts';

export default {
  name: 'ContactItem',
  components: {
    Navigation,
  },
  props: ['id'],
  data() {
    return {
      contact: '',
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
      this.getContact();
    }
  },
  methods: {
    getContact() {
      const { token, email, id } = this;
      getContact(token, email, id)
        .then((response) => {
          this.contact = response.data;
        });
    },
  },
};
</script>