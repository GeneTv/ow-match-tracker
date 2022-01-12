export const initialState = () => ({
  accounts: [
    {
      battletag: 'GeneTv',
      discriminator: 2257,
      skillRating: {
        openQueue: 0,
        tank: 0,
        dps: 0,
        support: 0
      }
    }
  ]
});

const getters = {
  id: state => `${state.battletag}#${state.discriminator}`,
}

const actions = {

}

const mutations = {

}

export default {
  state: initialState(),
  getters,
  actions,
  mutations
}
