<template>
  <div class="container">
    {{ joke }}
    <button @click="addJoke">Add</button>

    <h4 v-for="(joke, idx) in jokes" :key="idx" :load="log(jokes)">
      <span>{{ idx + 1 }}</span>
      {{ joke }}
    </h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from 'vuex';

export default Vue.extend({
  name: "jokes",
  mounted() {
    this.$store.dispatch('jokes/setCurrentJoke');
    //this.setCurrentJoke;
  },
  computed: {
    ...mapGetters({
      joke: 'jokes/currentJoke',
      jokes: 'jokes/allJokes'
    }),
    //...mapActions(['setCurrentJoke'])
    /* Replaced by mapGetters
    joke() {
      return this.$store.getters.getCurrentJoke;
    },
    jokes() {
      return this.$store.getters.getAllJokes;
    }
    */
  },
  methods: {
    addJoke() {
      this.$store.dispatch('jokes/setCurrentJoke');
    },
    log(jokes) {
      console.log(jokes);
    }
  }
});
</script>

<style scoped lang="scss">

</style>
