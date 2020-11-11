<template>
  <div class="container">
    {{ joke }}
    <button @click="addJoke">Add</button>

    <h4 v-for="(joke, idx) in jokes" :key="idx">
      <span>{{ idx + 1 }}</span>
      {{ joke }}
    </h4>
  </div>
</template>

<script lang="ts">
import {mapActions, mapGetters} from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: "jokes",
  mounted() {
    this.$store.dispatch('setCurrentJoke');
    //this.setCurrentJoke;
  },
  computed: {
    ...mapGetters({
      joke: 'getCurrentJoke',
      jokes: 'getAllJokes'
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
      this.$store.dispatch('setCurrentJoke');
    },
  }
});
</script>

<style scoped lang="scss">

</style>
