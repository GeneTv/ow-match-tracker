import store from '@/store';

export default (to, from, next) => {

  if(!store.getters.isPresent) {
    store.dispatch('fetchAll');
  }

  // TODO: If user has no account, redirect to thingy -> /onboarding
  next();
}
