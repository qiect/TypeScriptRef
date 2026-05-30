<script setup lang="ts">
import { useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import { ArrowRight } from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
  <section class="py-20 border-t border-paper-300">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-baseline justify-between mb-12">
        <div>
          <p class="font-mono text-xs tracking-widest uppercase text-vermillion mb-3">Tutorial</p>
          <h2 class="font-serif text-3xl sm:text-4xl text-ink">学习路径</h2>
        </div>
        <p class="hidden sm:block text-sm text-ink-muted">8 章 · 32 节</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-0">
        <button
          v-for="(chapter, index) in tutorialChapters"
          :key="chapter.slug"
          class="group text-left px-6 py-5 border-b border-paper-300 hover:bg-paper-200 transition-colors duration-150 flex items-start gap-4"
          @click="router.push(`/tutorial/${chapter.slug}`)"
        >
          <span class="font-mono text-xs text-ink-faint mt-1 shrink-0 w-5">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <div class="min-w-0 flex-1">
            <h3 class="text-base font-medium text-ink group-hover:text-vermillion transition-colors">
              {{ chapter.title }}
            </h3>
            <p class="text-sm text-ink-muted mt-1 line-clamp-1">{{ chapter.description }}</p>
          </div>
          <ArrowRight :size="14" class="text-ink-faint mt-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  </section>
</template>
