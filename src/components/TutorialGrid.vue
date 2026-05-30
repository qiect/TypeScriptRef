<script setup lang="ts">
import { useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import { ArrowRight, Play, Hash, Layers, Braces, Building, GitBranch, Sparkles, Package } from 'lucide-vue-next'

const router = useRouter()

const iconMap: Record<string, any> = {
  Play, Hash, Layers, Braces, Building, GitBranch, Sparkles, Package,
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
        系统化学习路径
      </h2>
      <p class="text-ts-muted text-lg max-w-2xl mx-auto">
        从零基础到高级用法，8 个章节带你全面掌握 TypeScript
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="(chapter, index) in tutorialChapters"
        :key="chapter.slug"
        class="group relative p-5 rounded-xl border border-ts-border bg-ts-surface/30 hover:border-ts-blue/50 hover:bg-ts-surface/60 transition-all duration-300 cursor-pointer"
        :style="{ animationDelay: `${index * 0.05}s` }"
        @click="router.push(`/tutorial/${chapter.slug}`)"
      >
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-lg bg-ts-blue/15 flex items-center justify-center shrink-0 group-hover:bg-ts-blue/25 transition-colors">
            <component :is="iconMap[chapter.icon] || Play" :size="18" class="text-ts-blue" />
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-mono text-ts-muted">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="text-sm font-semibold text-white group-hover:text-ts-blue transition-colors truncate">
              {{ chapter.title }}
            </h3>
            <p class="text-xs text-ts-muted mt-1 line-clamp-2">{{ chapter.description }}</p>
          </div>
        </div>
        <ArrowRight :size="14" class="absolute top-5 right-5 text-ts-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
      </div>
    </div>
  </section>
</template>
