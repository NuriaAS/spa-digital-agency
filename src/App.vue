<template>
    <v-app>
      <navigation></navigation>
      <v-main transition="slide-x-transition">
              <router-view></router-view>
      </v-main>
    </v-app>
</template>
<script>
import Navigation from '@/components/Navigation.vue';
    export default {
      name: 'App',
      components: {
        Navigation,
      }
    }
</script>
<style>
  html {
    scroll-behavior: smooth;
  }
</style>
