import Vue from 'vue';
import axios from 'axios';

export const state = () => ({
  allBlogposts: [],
  blogpost: {}
});

export const getters = {
  allBlogposts: state => state.allBlogposts,
};

export const mutations = {
  setBlogposts(state, allBlogposts) {
    state.allBlogposts = allBlogposts;
  }
};

export const actions = {
  async setBlogposts(state) {
    const allBlogposts = await axios.get('http://localhost:1337/blogposts');
    state.commit('setBlogposts', allBlogposts.data);
  }
}
