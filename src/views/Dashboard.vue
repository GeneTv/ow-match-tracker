<template>
  <h1>lmao</h1>
</template>

<script>
/* eslint-disable */
import { dbCreate, dbWrite, dbRead } from '@/services/idb.service';

export default {
  name: 'Dashboard',
  async mounted() {
    await dbCreate();

    await dbWrite('accounts', {
      battletag: "Oicred007#2118",
      username: "Oicred007",
      disciminator: 2118,
      gamesCount: 18,
      skillRating: {
        openQueue: 1432,
        tank: 1932,
        dps: 1245,
        support: 4923
      },
      mostPlayedChars: ["Roadhog", "Winston", "Sombra"],
      lastLogged: "2022-01-13"
    });

    await dbWrite('accounts', {
      battletag: "ƓǾMMȆHD#2521",
      username: "ƓǾMMȆHD",
      disciminator: 2521,
      gamesCount: 22,
      skillRatings: {
        openQueue: 1842,
        tank: 2774,
        dps: 2376,
        support: 2723
      },
      mostPlayedChars: ["Ana", "Winston", "Mercy"],
      lastLogged: "2022-01-12"
    });

    let games = await dbRead('accounts');
    console.log('Accounts:', games);
  }
}
</script>

<style>

</style>
