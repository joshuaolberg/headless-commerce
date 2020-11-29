<template>
  <div class="container">
    <div v-if="currentBlogpost" :load="log(currentBlogpost)">
      <h1>{{ currentBlogpost.Headline_de }}</h1>
      <h3>{{ currentBlogpost.Teaser_de }}</h3>
      <p>{{ currentBlogpost.Content_de }}</p>
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
  methods: {
    log(currentBlogpost) {
      console.log(currentBlogpost);
    }
  }
})
</script>

<style scoped lang="scss">

</style>
