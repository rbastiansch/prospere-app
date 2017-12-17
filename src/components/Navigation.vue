<template>
  <div class="navigation">
    <a v-on:click="goBack">Go back</a>
  </div>  
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>