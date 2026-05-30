<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import TutorialGrid from '@/components/TutorialGrid.vue'
import CheatSheetEntry from '@/components/CheatSheetEntry.vue'
</script>

<template>
  <div>
    <HeroSection />
    <TutorialGrid />
    <CheatSheetEntry />

    <footer class="border-t border-ts-border py-8 text-center text-sm text-ts-muted">
      <div class="max-w-6xl mx-auto px-4">
        <p>TS Guide — TypeScript 教程与速查</p>
      </div>
    </footer>
  </div>
</template>
