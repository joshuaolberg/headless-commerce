<template>
  <nav class="navbar">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/catalogue">Produkte</NuxtLink>
    <NuxtLink to="/todos">ToDos</NuxtLink>
    <NuxtLink to="/jokes">Jokes</NuxtLink>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/imports.scss';

</style>
