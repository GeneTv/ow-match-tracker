const context = require.context('.', false, /\.mod\.js$/);
const modules = {};

context.keys().forEach((filename) => {
  const moduleName = filename.replace(/(\.\/|\.mod\.js)/g, '');
  const module = context(filename).default || context(filename);
  const { initialState } = context(filename);

  // We want each module to have a reset mutation
  module.mutations.RESET = () => {
    const newState = initialState();
    Object.keys(newState).forEach((key) => {
      module.state[key] = newState[key];
    });
  };

  modules[moduleName] = { ...module, namespaced: true };
});

export default modules;
