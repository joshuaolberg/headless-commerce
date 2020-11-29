import axios from 'axios';

export const state = () => ({
  allBlogposts: [],
  currentBlogpost: [],
});

export const getters = {
  allBlogposts: state => state.allBlogposts,
  currentBlogpost: state => state.currentBlogpost,
};

export const mutations = {
  setBlogposts(state, allBlogposts) {
    state.allBlogposts = allBlogposts;
  },
  setCurrentBlogpost(state, currentBlogpost) {
    console.log(currentBlogpost);
    state.currentBlogpost = currentBlogpost;
  }
};

export const actions = {
  async setBlogposts(state) {
    const allBlogposts = await axios.get('http://localhost:1337/blogposts');
    state.commit('setBlogposts', allBlogposts.data);
  },
  async setCurrentBlogpost(state, blogpostId) {
    const currentBlogpost = await axios.get('http://localhost:1337/blogposts/' + blogpostId);
    state.commit('setCurrentBlogpost', currentBlogpost.data);
  }
}
