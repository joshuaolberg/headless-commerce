export const state = () => ({
  currentLanguage: [],
});

export const getters = {
  currentLanguage: state => state.currentLanguage,
};

export const mutations = {
  setCurrentLanguage(state, value) {
    console.log(value);
    state.currentLanguage = value;
  }
}

export const actions = {
  async setCurrentLanguage(state, {app}) {
    const localePath = app.localePath('index')
    state.commit('setCurrentLanguage', localePath);
  }
}
