<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div v-if="currentBlogpost" :load="log(currentBlogpost)">
            <h1>{{ currentBlogpost.Headline_de }}</h1>
            <h4>{{ currentBlogpost.Teaser_de }}</h4>
            <p>{{ currentBlogpost.Content_de }}</p>
          </div>
          <NuxtLink to="/blog">
            <button>Zurück zur Liste</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
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
