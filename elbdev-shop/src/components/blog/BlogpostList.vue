<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Meine Blogposts</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div v-for="blogpost in allBlogposts" :key="blogpost.id">
            <div v-if="blogpost.Hidden === false">
              <h2><span>[{{ blogpost.id }}]</span> {{ blogpost.Headline_de }}</h2>
              <p>{{ blogpost.Teaser_de }}</p>
              <NuxtLink :to="{name: 'blog-id', params: {id: blogpost.id}}">Mehr lesen</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

<style scoped lang="scss">

</style>
