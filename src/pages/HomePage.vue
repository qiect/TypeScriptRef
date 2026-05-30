<script setup lang="ts">
import { useRouter } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import TutorialGrid from '@/components/TutorialGrid.vue'
import CheatSheetEntry from '@/components/CheatSheetEntry.vue'
</script>

<template>
  <div>
    <HeroSection />
    <TutorialGrid />
    <CheatSheetEntry />

    <footer class="border-t border-paper-300 py-8">
      <div class="max-w-6xl mx-auto px-6 flex items-baseline justify-between">
        <p class="text-xs text-ink-faint font-mono">
          TS Guide — TypeScript 教程与速查
        </p>
        <p class="text-xs text-ink-faint">
          Built with Vue + TypeScript
        </p>
      </div>
    </footer>
  </div>
</template>
