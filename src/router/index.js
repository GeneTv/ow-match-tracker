import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import routing from './routing';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(routing);

export default router;
