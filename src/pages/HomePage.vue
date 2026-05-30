<script setup lang="ts">
import { useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import { cheatSheetCategories } from '@/data/cheatsheetData'
import { ArrowRight, BookOpen, Zap, Search } from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-10">
    <div class="mb-10">
      <h1 class="text-2xl font-bold text-dev-text mb-2">TypeScript 教程与速查</h1>
      <p class="text-sm text-dev-text-secondary">
        从左侧导航选择教程章节或速查分类，或使用 <kbd class="text-[11px] font-mono bg-dev-surface px-1.5 py-0.5 rounded border border-dev-border">⌘K</kbd> 快速搜索
      </p>
    </div>

    <div class="mb-8">
      <h2 class="text-xs font-semibold text-dev-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
        <BookOpen :size="13" />
        教程
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
        <button
          v-for="(chapter, index) in tutorialChapters"
          :key="chapter.slug"
          class="group text-left px-3 py-2.5 rounded hover:bg-dev-overlay transition-colors flex items-center gap-3"
          @click="router.push(`/tutorial/${chapter.slug}`)"
        >
          <span class="font-mono text-xs text-dev-text-muted w-5 shrink-0">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="min-w-0">
            <p class="text-sm text-dev-text group-hover:text-dev-accent-bright transition-colors">{{ chapter.title }}</p>
            <p class="text-xs text-dev-text-muted truncate">{{ chapter.description }}</p>
          </div>
        </button>
      </div>
    </div>

    <div>
      <h2 class="text-xs font-semibold text-dev-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
        <Zap :size="13" />
        速查表
      </h2>
      <div class="flex flex-wrap gap-1.5">
        <button
          class="px-3 py-1.5 text-xs text-dev-text-secondary border border-dev-border rounded hover:border-dev-accent hover:text-dev-accent-bright transition-colors"
          @click="router.push('/cheatsheet')"
        >
          全部
        </button>
        <button
          v-for="category in cheatSheetCategories"
          :key="category"
          class="px-3 py-1.5 text-xs text-dev-text-secondary border border-dev-border rounded hover:border-dev-accent hover:text-dev-accent-bright transition-colors"
          @click="router.push(`/cheatsheet/${category}`)"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </div>
</template>
