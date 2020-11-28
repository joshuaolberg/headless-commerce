import Vue from 'vue';

export const state = () => ({
  products: {}
});

export const getters = {
  allProducts: state => state.products,
};

export const mutations = {
  setProducts(state, product) {
    state.products = product;
  }
};

export const actions = {
  async fetchAllProducts({commit}, {app}) {
    //const products = await app.$shopify.product.fetchAll();
    //commit('setProducts', products);
  }
};


