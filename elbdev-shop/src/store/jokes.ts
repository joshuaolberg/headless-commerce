import axios from 'axios';
// source: https://www.youtube.com/watch?v=oxUyIzDbZts&t=104s

const url = 'https://icanhazdadjoke.com';
const headers = {Accept: 'application/json'};

export const state = () => ({
  currentJoke: '',
  allJokes: []
});

export const getters = {
  currentJoke: state => state.currentJoke,
  allJokes: state => state.allJokes,
};

export const mutations = {
  setCurrentJoke(state, payload) {
    state.currentJoke = payload;
    state.allJokes.push(payload);
  }
};

export const actions = {
  // async
  async setCurrentJoke(state) {
    const joke = await axios.get(url, {headers});
    state.commit('setCurrentJoke', joke.data.joke);
  }
};
