<template>
  <div class="container">
    <h1>Blog Listenansicht</h1>
    <div v-for="blogpost in allBlogposts" :key="blogpost.id">
      <h2>{{ blogpost.Headline_de }}</h2>
      <p>{{ blogpost.Teaser_de }}</p>
      <!--<p v-html="blogPost.Content_de"></p>-->
      <!--<NuxtLink to="/blog/${blogPost.id}">Mehr lesen</NuxtLink>-->
      <NuxtLink :to="{name: `/blog-id`, params: {id: blogpost.id}}">Mehr lesen</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';

export default Vue.extend({
  name: "BlogpostList",
  computed: {
    ...mapGetters({
      allBlogposts: 'blogposts/allBlogposts'
    })
  },
  mounted() {
    this.$store.dispatch('blogposts/setBlogposts');
  },
  methods: {}
})
</script>

<style scoped>

</style>
