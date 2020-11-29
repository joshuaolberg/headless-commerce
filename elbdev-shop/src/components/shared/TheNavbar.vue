<template>
  <nav class="navbar">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/catalogue">Produkte</NuxtLink>
    <!--<NuxtLink to="/todos">ToDos</NuxtLink>-->
    <NuxtLink to="/blog">Blog</NuxtLink>
  </nav>
</template>

<script lang="ts">
export default {
  name: "TheNavbar"
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/imports.scss';

</style>
