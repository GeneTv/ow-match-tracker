import Overview from '@/views/Overview.vue';
import Welcome from '@/views/Welcome.vue';

const routes = [
  {
    path: '/',
    name: 'Onboarding',
    component: Welcome
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  }
];

export default routes;
