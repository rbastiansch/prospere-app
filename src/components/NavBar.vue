<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'principal'}">Home
    </router-link>
    <a href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>