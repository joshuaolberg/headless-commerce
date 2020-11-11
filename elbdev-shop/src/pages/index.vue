<template>
  <div class="container">
    {{ products }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import productService from '../services/productService';

export default Vue.extend({
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      await productService.getProducts().then(successResponse => {
        this.products = successResponse.data.data.shop.products.edges;
        console.log(this.products);
      }).catch(errorResponse => {
        console.log(errorResponse);
      });
    },
  },
})


</script>

<style>

</style>
