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

  const mockData = await (await fetch('/mock-data.js')).json();
  for(let i = 0; i < mockData.accounts.length; i++) {
    await dbWrite('accounts', mockData.accounts[i]);
  }

  /*await dbWrite('accounts', {
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
    mostPlayedHeros: ['Roadhog', 'Winston', 'Sombra'],
    lastLogged: '2022-01-13',
    recordedMatches: [
      {
        id: 'd084b28e-65ab-470f-9a07-2896dc716b81',
        playedRole: "Tank",
        result: "Draw",
        map: "Havana",
        date: "2022-01-14T00:00:15",
        comment: "Lirum adsjdnalkjsdn satz",
        group: {
          members: ["Jesus#2411", "Hog172#3251"],
          premadeCount: 3
        },
        gotPotg: false,
        joinedVoice: true,
        gameGriefing: {
          thrower: "Self",
          leaver: "Team"
        },
        heroesPlayed: ["Sombra", "Tracer"]
      },
    ]
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
  });*/

  let accounts = await dbRead('accounts');
  console.log('Accounts:', accounts);
})();

createApp(App).use(store).use(router).mount('#app');
