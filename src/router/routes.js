import Overview from '@/views/Overview.vue';
import Onboarding from '@/views/Welcome.vue';

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: Onboarding
  }
];

export default routes;
