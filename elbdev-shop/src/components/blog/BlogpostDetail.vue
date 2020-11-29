<template>
  <div class="container">
    <div v-if="currentBlogpost">
      <h1>{{ currentBlogpost.Headline_de }}</h1>
      <h3>{{ currentBlogpost.Teaser_de }}</h3>
      <p>{{ currentBlogpost.Content_de }}</p>
      <p>{{ currentBlogpost.Hidden }}</p>
    </div>
    <NuxtLink to="/blog">
      <button>Zurück zur Liste</button>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';

export default Vue.extend({
  name: "BlogpostDetail",
  data() {
    return {
      blogpostId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters({
      currentBlogpost: 'blogposts/currentBlogpost'
    })
  },
  mounted() {
    this.$store.dispatch('blogposts/setCurrentBlogpost', this.blogpostId);
  },
})
</script>

<style scoped>

</style>
