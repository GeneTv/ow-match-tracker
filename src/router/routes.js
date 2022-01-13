import Dashboard from '@/views/Dashboard.vue';
import Welcome from '@/views/Welcome.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/onboarding',
    name: 'Welcome',
    component: Welcome
  }
];

export default routes;
