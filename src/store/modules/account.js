import { dbRead } from '@/services/idb.service';

export const initialState = () => ({
  accounts: [];
});

const getters = {
  id: state => `${state.battletag}#${state.discriminator}`,
}

const actions = {
  fetchAll: async context => {
    const accounts = await dbRead('accounts');
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

export default {
  state: initialState(),
  getters,
  actions,
  mutations
}
