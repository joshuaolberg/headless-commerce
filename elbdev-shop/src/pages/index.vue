<template>
  <div>
    <h4 v-for="product in products">{{ product }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';

export default Vue.extend({
  mounted() {
    this.$store.dispatch('products/fetchAllProducts');
  },
  computed: {
    ...mapGetters({
      products: 'products/allProducts'
    })
  }
})
</script>

<style>

</style>
