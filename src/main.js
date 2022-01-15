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

  await dbWrite('accounts', {
    battletag: 'Oicred007#2118',
    username: 'Oicred007',
    disciminator: 2118,
    gamesCount: 18,
    skillRating: {
      openQueue: 1432,
      tank: 1932,
      dps: 1245,
      support: 4923
    },
    mostPlayedChars: ['Roadhog', 'Winston', 'Sombra'],
    lastLogged: '2022-01-13'
  });

  await dbWrite('accounts', {
    battletag: 'ƓǾMMȆHD#2521',
    username: 'ƓǾMMȆHD',
    disciminator: 2521,
    gamesCount: 22,
    skillRatings: {
      openQueue: 1842,
      tank: 2774,
      dps: 2376,
      support: 2723
    },
    mostPlayedChars: ['Ana', 'Winston', 'Mercy'],
    lastLogged: '2022-01-12'
  });

  let accounts = await dbRead('accounts');
  console.log('Accounts:', accounts);
})();

createApp(App).use(store).use(router).mount('#app');
