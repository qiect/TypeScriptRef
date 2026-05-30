<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import CodeBlock from '@/components/CodeBlock.vue'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const currentSlug = computed(() => route.params.slug as string)

const currentChapter = computed(() =>
  tutorialChapters.find((c) => c.slug === currentSlug.value)
)

const currentChapterIndex = computed(() =>
  tutorialChapters.findIndex((c) => c.slug === currentSlug.value)
)

const prevChapter = computed(() =>
  currentChapterIndex.value > 0
    ? tutorialChapters[currentChapterIndex.value - 1]
    : null
)

const nextChapter = computed(() =>
  currentChapterIndex.value < tutorialChapters.length - 1
    ? tutorialChapters[currentChapterIndex.value + 1]
    : null
)

const navigateToChapter = (slug: string) => {
  router.push(`/tutorial/${slug}`)
}

const chapterColors: Record<string, string> = {
  'getting-started': '#00d4ff',
  'basic-types': '#00d4ff',
  'interfaces': '#00d4ff',
  'functions': '#00d4ff',
  'classes': '#00d4ff',
  'generics': '#ffd700',
  'advanced-types': '#ff6b9d',
  'modules': '#00ff88',
}

const currentColor = computed(() => chapterColors[currentSlug.value] || '#6c63ff')
</script>

<template>
  <div v-if="currentChapter" class="h-full flex flex-col">
    <header class="h-12 flex items-center gap-3 px-5 border-b border-cosmos-border bg-cosmos-deep/80 backdrop-blur-sm shrink-0">
      <button
        class="text-cosmos-dim hover:text-cosmos-text transition-colors"
        @click="router.push('/')"
      >
        <ArrowLeft :size="16" />
      </button>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: currentColor }"></span>
        <span class="text-xs font-mono text-cosmos-muted">
          {{ String(currentChapterIndex + 1).padStart(2, '0') }} / {{ String(tutorialChapters.length).padStart(2, '0') }}
        </span>
        <span class="text-sm text-cosmos-text font-medium">{{ currentChapter.title }}</span>
      </div>
    </header>

    <div class="flex-1 overflow-y-auto">
      <div class="max-w-3xl mx-auto px-6 py-8">
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-cosmos-text mb-2">{{ currentChapter.title }}</h1>
          <p class="text-sm text-cosmos-dim">{{ currentChapter.description }}</p>
        </div>

        <div class="space-y-10">
          <div
            v-for="section in currentChapter.sections"
            :key="section.id"
            :id="section.id"
            class="scroll-mt-16"
          >
            <h2 class="text-base font-semibold text-cosmos-text mb-3 flex items-center gap-2">
              <span class="w-1 h-4 rounded" :style="{ backgroundColor: currentColor }"></span>
              {{ section.title }}
            </h2>
            <p class="text-sm text-cosmos-dim leading-relaxed mb-4 whitespace-pre-line">
              {{ section.content }}
            </p>
            <div v-if="section.codeExample">
              <p class="text-xs text-cosmos-muted mb-2">{{ section.codeExample.description }}</p>
              <CodeBlock :code="section.codeExample.code" :language="section.codeExample.language" />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-14 pt-4 border-t border-cosmos-border">
          <button
            v-if="prevChapter"
            class="flex items-center gap-1.5 text-xs text-cosmos-dim hover:text-cosmos-text transition-colors group"
            @click="navigateToChapter(prevChapter.slug)"
          >
            <ChevronLeft :size="14" class="group-hover:-translate-x-0.5 transition-transform" />
            {{ prevChapter.title }}
          </button>
          <div v-else />

          <button
            v-if="nextChapter"
            class="flex items-center gap-1.5 text-xs text-cosmos-dim hover:text-cosmos-text transition-colors group"
            @click="navigateToChapter(nextChapter.slug)"
          >
            {{ nextChapter.title }}
            <ChevronRight :size="14" class="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <div v-else />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="flex items-center justify-center h-full">
    <div class="text-center">
      <p class="text-sm text-cosmos-dim mb-3">章节未找到</p>
      <button
        class="text-xs text-cosmos-accent hover:text-cosmos-accent-glow transition-colors"
        @click="navigateToChapter('getting-started')"
      >
        从第一章开始 →
      </button>
    </div>
  </div>
</template>
