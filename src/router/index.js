import Vue from 'vue';
import Router from 'vue-router';
import Principal from '@/components/Principal';
import SignIn from '@/components/SignIn';
import ContactItem from '@/components/ContactItem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Principal,
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: ContactItem,
      props: true,
    },
    {
      path: '/login',
      name: 'signIn',
      component: SignIn,
    },
  ],
});
