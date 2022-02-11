import { createStore } from 'vuex';
import { dbRead } from '@/services/idb.service';

export const initialState = () => ({
  isPresent: false,
  accounts: []
});

const getters = {
  isPresent: state => state.isPresent,
  id: state => `${state.battletag}#${state.discriminator}`,
  selectedAccount: (state) => state.accounts[0] || {username: 'JeffKaplan', recordedMatches: []},
  allAccounts: state => state.accounts,
}

const actions = {
  fetchAll: async context => {
    const accounts = await dbRead('accounts');
    console.log('Imretard')
    context.commit('SET_ACCOUNTS', accounts);
  }
}

const mutations = {
  ADD_ACCOUNT(state, account) {
    state.accounts.push(account);
  },
  SET_ACCOUNTS(state, accounts) {
    state.accounts = accounts;
    console.log('Store accounts:', state.accounts)
  }
}

export default createStore({
  state: initialState(),
  getters,
  actions,
  mutations,
  strict: true
});
