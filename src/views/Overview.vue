<style src="@/styles/Overview.scss" lang="scss" scoped></style>
<template>
  <div>
    <header class="header__profile">
      <div class="profile__user">
        <p class="user__name">{{ account.username }}</p>
        <p class="user__games-count">{{ account.recordedMatches.length }} Games</p>
      </div>
    </header>

    <main class="main-content">


      <div>
        <line-chart :chart-data="dataCollection"></line-chart>
        <button @click="fillData()">RandomShit</button>
      </div>
      <!-- TODO: Add a list of games -->

    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LineChart from "./charts/LineChart.js";

export default {
  name: 'Dashboard',
  components: {
    LineChart
  },
  data() {
    return {
      dataCollection: null
    }
  },
  computed: {
    ...mapGetters({
      account: 'selectedAccount'
    })
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData() {
      this.dataCollection = {
        lables: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#234f12",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#734314",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  },
};
</script>

<style></style>
