import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import ProfileDetails from '@/components/ProfileDetails.vue';
import BirthdayPicker from '@/components/BirthdayPicker.vue';
import InterestsSelection from '@/components/InterestsSelection.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile-details',
    name: 'ProfileDetails',
    component: ProfileDetails,
  },
  {
    path: '/birthday-picker',
    name: 'BirthdayPicker',
    component: BirthdayPicker,
  },
  {
    path: '/interests-selection',
    name: 'InterestsSelection',
    component: InterestsSelection,
  },
];

const router = new Router({
  routes,
});

export default router;
