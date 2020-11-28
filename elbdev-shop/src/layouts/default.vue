<template>
  <div>
    <Navbar/>
    <main class="page-content">
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Navbar from '../components/shared/navbar.vue';
  import Footer from "../components/shared/footer.vue";

  export default {
    components: {Footer, Navbar}
  }
</script>

<style lang="scss">

</style>
