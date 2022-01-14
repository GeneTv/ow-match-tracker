<template>
  <div class="Welcome">
    <h1>Welcome, Select your account.</h1>
    <p>Choose an account to log and view stats about your competitive matches!</p>

    <ul id="accountListRender">
      <li v-for="account in accounts" :key="account.id">
        <div class="accountListEntry">
          <div class="left">
            <a href="#" class="username">{{ account.battleTag }}</a>
            <div class="stats">
              <ul>
                <li>Last logged {{ account.lastLogged }}</li>
                <li>{{ account.matchCount }} matches</li>
                <li><a href="#">Edit</a></li>
              </ul>
            </div>
            <div class="right">
              <p>{{ account.skillRating }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getAccounts: 'account/'
    })
  }
};
</script>
<style scoped lang="css">
li {
  list-style-type: none;
}
</style>
