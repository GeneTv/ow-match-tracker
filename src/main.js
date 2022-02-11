import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { dbCreate, dbWrite, dbRead } from './services/idb.service';

(async () => {
  await dbCreate([
    { name: 'accounts', options: { keyPath: 'battletag' } },
    { name: 'settings', options: { keyPath: 'id' } }
  ]);

  const mockData = require('./mock_data.json');
  console.log(mockData)
  for(let i = 0; i < mockData.length; i++) {
    await dbWrite('accounts', mockData[i]);
  }

  let accounts = await dbRead('accounts');
  console.log('Accounts:', accounts);
})();

createApp(App).use(store).use(router).mount('#app');
