<template>
  <div id="app">
    <NavBar v-if="nameRoute !== 'signIn'"></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
  },
  computed: {
    nameRoute() {
      return this.$route.name;
    },
  },
};
</script>
