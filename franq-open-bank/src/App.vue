<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './views/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
    <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
  </header>

  <RouterView />
</template>

<style scoped></style>
