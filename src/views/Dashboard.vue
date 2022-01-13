<template>
  <h1>lmao</h1>
</template>

<script>
import { dbCreate, dbWrite, dbRead } from '@/common/indexed-db';

export default {
  name: 'Dashboard',
  mounted() {
    dbCreate().then( () => {
      dbWrite('games', {
        id: 2,
        start: 'idk',
        end: 'idk',
        kills: 15,
        deaths: 9023420 // fucking feeder
      });

      dbRead('games');

    })
  }
}
</script>

<style>

</style>
