<script setup lang="ts">
import { useRouter } from 'vue-router'
import { cheatSheetCategories } from '@/data/cheatsheetData'

const router = useRouter()
</script>

<template>
  <section class="py-20 border-t border-paper-300">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-baseline justify-between mb-12">
        <div>
          <p class="font-mono text-xs tracking-widest uppercase text-vermillion mb-3">Cheat Sheet</p>
          <h2 class="font-serif text-3xl sm:text-4xl text-ink">速查手册</h2>
        </div>
        <button
          class="hidden sm:block text-sm text-ink-muted hover:text-vermillion transition-colors"
          @click="router.push('/cheatsheet')"
        >
          查看全部 →
        </button>
      </div>

      <div class="flex flex-wrap gap-3">
        <button
          v-for="category in cheatSheetCategories"
          :key="category"
          class="px-4 py-2 text-sm text-ink-muted border border-paper-300 hover:border-ink hover:text-ink transition-colors duration-150"
          @click="router.push('/cheatsheet')"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </section>
</template>
