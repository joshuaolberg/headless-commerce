<template>
  <nav class="navbar">
    <div class="container">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink :to="localePath('shop')">Shop</NuxtLink>
      <NuxtLink :to="localePath('/blog')">Blog</NuxtLink>
      <div>
        <!--
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">{{ locale.name }}
        </NuxtLink>
        -->
        <NuxtLink
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">{{ locale.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "TheNavbar",
  computed: {
    /*
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
    */
  }
})
</script>

<style scoped lang="scss">
@import '../../assets/scss/imports.scss';

* {
  margin-top: 10px;
}

</style>
