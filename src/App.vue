<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-paper-100">
    <NavBar />
    <router-view />
  </div>
</template>
