import jokes from './modules/jokes';
import todos from './modules/todos';
import Vuex from 'vuex';

export const store = () => {
  return new Vuex.Store({
    modules: {
      jokes,
      todos,
    }
  })
}
export default store;
