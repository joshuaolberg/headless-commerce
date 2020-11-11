<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "productList",
  mounted() {
    console.log(this.$store.state.counter);
  }
})
</script>

<style scoped>

</style>
