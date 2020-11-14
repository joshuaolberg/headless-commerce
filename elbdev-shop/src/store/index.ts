import jokes from './modules/jokes';
import todos from './modules/todos';
import products from './modules/products';

import Vuex, {createLogger} from 'vuex';


const debug = process.env.NODE_ENV !== 'production';

export const createStore = () => {
  return new Vuex.Store({
    modules: {
      jokes,
      todos,
      products
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
  })
}
export default createStore;
