<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import CodeBlock from '@/components/CodeBlock.vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

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
</script>

<template>
  <div v-if="currentChapter" class="max-w-3xl mx-auto px-6 py-8">
    <div class="mb-8">
      <p class="text-xs font-mono text-dev-text-muted mb-1">
        {{ String(currentChapterIndex + 1).padStart(2, '0') }} / {{ String(tutorialChapters.length).padStart(2, '0') }}
      </p>
      <h1 class="text-xl font-bold text-dev-text mb-1">{{ currentChapter.title }}</h1>
      <p class="text-sm text-dev-text-secondary">{{ currentChapter.description }}</p>
    </div>

    <div class="space-y-8">
      <div
        v-for="section in currentChapter.sections"
        :key="section.id"
        :id="section.id"
        class="scroll-mt-12"
      >
        <h2 class="text-base font-semibold text-dev-text mb-3 pb-1.5 border-b border-dev-border">
          {{ section.title }}
        </h2>
        <p class="text-sm text-dev-text-secondary leading-relaxed mb-4 whitespace-pre-line">
          {{ section.content }}
        </p>
        <div v-if="section.codeExample">
          <p class="text-xs text-dev-text-muted mb-2">{{ section.codeExample.description }}</p>
          <CodeBlock :code="section.codeExample.code" :language="section.codeExample.language" />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between mt-12 pt-4 border-t border-dev-border">
      <button
        v-if="prevChapter"
        class="flex items-center gap-1.5 text-xs text-dev-text-secondary hover:text-dev-text transition-colors group"
        @click="navigateToChapter(prevChapter.slug)"
      >
        <ChevronLeft :size="14" class="group-hover:-translate-x-0.5 transition-transform" />
        {{ prevChapter.title }}
      </button>
      <div v-else />

      <button
        v-if="nextChapter"
        class="flex items-center gap-1.5 text-xs text-dev-text-secondary hover:text-dev-text transition-colors group"
        @click="navigateToChapter(nextChapter.slug)"
      >
        {{ nextChapter.title }}
        <ChevronRight :size="14" class="group-hover:translate-x-0.5 transition-transform" />
      </button>
      <div v-else />
    </div>
  </div>

  <div v-else class="flex items-center justify-center min-h-[50vh]">
    <div class="text-center">
      <p class="text-sm text-dev-text mb-3">章节未找到</p>
      <button
        class="text-xs text-dev-accent-bright hover:underline"
        @click="navigateToChapter('getting-started')"
      >
        从第一章开始 →
      </button>
    </div>
  </div>
</template>
