<template>
  <div class="container">
    <ul v-if="products">
      <li v-for="product in products" :key="product.id" :load="log(product)">
        {{ product.description }}
      </li>
      <li v-for="productKey in productKeys" :load="log(productKeys)">
        {{ productKey }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';

export default Vue.extend({
  name: "productList",
  mounted() {
    this.$store.dispatch('products/setAllProducts');
  },
  computed: {
    ...mapGetters({
      products: 'products/allProducts',
      productKeys: 'products/productKeys'
    }),
  },
  methods: {
    log(product) {
      console.log('test', product);
    }
  }
})
</script>

<style scoped>

</style>
