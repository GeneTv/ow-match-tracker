import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { dbCreate } from './services/idb.service';

dbCreate([
  { name: 'accounts', options: { keyPath: 'id'} },
  { name: 'games', options: { keyPath: 'id'} },
]);

createApp(App).use(store).use(router).mount('#app');
