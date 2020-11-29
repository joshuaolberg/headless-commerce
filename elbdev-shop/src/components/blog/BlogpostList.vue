<template>
  <div class="container">
    <h1>Blog Listenansicht</h1>
    <div v-for="blogpost in allBlogposts" :key="blogpost.id">
      <div v-if="blogpost.Hidden === false">
        <h2>{{ blogpost.Headline_de }}</h2>
        <p>{{ blogpost.Teaser_de }}</p>
        <span>[{{ blogpost.id }}]</span>
        <NuxtLink :to="{name: 'blog-id', params: {id: blogpost.id}}">Mehr lesen</NuxtLink>
      </div>
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
