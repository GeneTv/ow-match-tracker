<template>
  <div class="Welcome">
    <h1>Welcome, Select your account.</h1>
    <p>Choose an account to log and view stats about your competitive matches!</p>

    <ul id="accountListRender">
        <li v-for="account in accounts" :key="account.id" >
            <div class="accountListEntry">
               <div class="left">
                <a href="#" class="username">{{account.battleTag}}</a>
                <div class="stats">
                    <ul>
                        <li>Last logged {{account.lastLogged}}</li>
                        <li>{{account.matchCount}} matches</li>
                        <li><a href="#">Edit</a></li>
                    </ul>
                </div>
                <div class="right">
                    <p>{{account.skillRating}}</p>
                </div>
               </div>
            </div>
        </li>
    </ul>

  </div>
</template>
<script>
export default {
    data() {
        return {
            accounts: [
                {
                    battleTag: "Oicred007",
                    disciminator: 2118,
                    id: "Oicred007#2118",
                    matchCount: 18,
                    skillRating: {OpenQuere: 1432, Tank: 1932, DPS: 1245, Support: 4923},
                    mostPlayedChars: ["Roadhog", "Winston", "Sombra"],
                    lastLogged: "12.01.2022"
                },
                {
                    battleTag: "ƓǾMMȆHD",
                    disciminator: 2521,
                    id: "test#2521",
                    matchCount: 22,
                    skillRatings: {OpenQuere: 1842, Tank: 2774, DPS: 2376, Support: 2723},
                    mostPlayedChars: ["Ana", "Winston", "Mercy"],
                    lastLogged: "14.01.2022"
                }
            ]
        }
    },
}
</script>
<style scoped lang="css">
    li {
        list-style-type: none;
    }
</style>
