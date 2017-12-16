import Vue from 'vue';
import Router from 'vue-router';
import Principal from '@/components/Principal';
import SignIn from '@/components/SignIn';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal,
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn,
    },
  ],
});
