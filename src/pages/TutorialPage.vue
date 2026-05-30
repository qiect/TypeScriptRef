<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import CodeBlock from '@/components/CodeBlock.vue'
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const isMobileSidebarOpen = ref(false)

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
  isMobileSidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen">
    <div v-if="currentChapter" class="flex">
      <aside
        :class="[
          'fixed lg:sticky top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-64 border-r border-paper-300 bg-paper-100 overflow-y-auto transition-transform duration-200 shrink-0',
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ]"
      >
        <div class="p-5">
          <p class="font-mono text-xs tracking-widest uppercase text-vermillion mb-4">
            目录
          </p>
          <div class="space-y-0.5">
            <button
              v-for="(chapter, index) in tutorialChapters"
              :key="chapter.slug"
              :class="[
                'w-full text-left px-3 py-2 text-sm transition-colors duration-150 flex items-center gap-3',
                chapter.slug === currentSlug
                  ? 'text-vermillion font-semibold bg-paper-200'
                  : 'text-ink-muted hover:text-ink hover:bg-paper-200',
              ]"
              @click="navigateToChapter(chapter.slug)"
            >
              <span class="font-mono text-xs text-ink-faint w-5 shrink-0">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="truncate">{{ chapter.title }}</span>
            </button>
          </div>
        </div>
      </aside>

      <div
        v-if="isMobileSidebarOpen"
        class="fixed inset-0 bg-ink/20 z-20 lg:hidden"
        @click="isMobileSidebarOpen = false"
      />

      <main class="flex-1 min-w-0 px-6 lg:px-12 py-10 max-w-3xl">
        <button
          class="lg:hidden mb-4 text-sm text-ink-muted hover:text-ink flex items-center gap-1"
          @click="isMobileSidebarOpen = !isMobileSidebarOpen"
        >
          <Menu :size="14" />
          目录
        </button>

        <div class="mb-10">
          <p class="font-mono text-xs text-ink-faint mb-2">
            {{ String(currentChapterIndex + 1).padStart(2, '0') }} / {{ String(tutorialChapters.length).padStart(2, '0') }}
          </p>
          <h1 class="font-serif text-3xl sm:text-4xl text-ink mb-3">
            {{ currentChapter.title }}
          </h1>
          <p class="text-ink-muted">{{ currentChapter.description }}</p>
        </div>

        <div class="space-y-12">
          <div
            v-for="section in currentChapter.sections"
            :key="section.id"
            :id="section.id"
            class="scroll-mt-20"
          >
            <h2 class="font-serif text-xl sm:text-2xl text-ink mb-4 border-b border-paper-300 pb-2">
              {{ section.title }}
            </h2>
            <p class="text-ink-light leading-relaxed mb-5 whitespace-pre-line">
              {{ section.content }}
            </p>
            <div v-if="section.codeExample">
              <p class="text-sm text-ink-muted mb-2">{{ section.codeExample.description }}</p>
              <CodeBlock :code="section.codeExample.code" :language="section.codeExample.language" />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-16 pt-6 border-t-2 border-ink">
          <button
            v-if="prevChapter"
            class="flex items-center gap-2 text-ink-muted hover:text-ink transition-colors group"
            @click="navigateToChapter(prevChapter.slug)"
          >
            <ChevronLeft :size="16" class="group-hover:-translate-x-0.5 transition-transform" />
            <div class="text-left">
              <p class="text-xs text-ink-faint">上一章</p>
              <p class="text-sm font-medium">{{ prevChapter.title }}</p>
            </div>
          </button>
          <div v-else />

          <button
            v-if="nextChapter"
            class="flex items-center gap-2 text-ink-muted hover:text-ink transition-colors group"
            @click="navigateToChapter(nextChapter.slug)"
          >
            <div class="text-right">
              <p class="text-xs text-ink-faint">下一章</p>
              <p class="text-sm font-medium">{{ nextChapter.title }}</p>
            </div>
            <ChevronRight :size="16" class="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <div v-else />
        </div>
      </main>
    </div>

    <div v-else class="flex items-center justify-center min-h-[60vh]">
      <div class="text-center">
        <h2 class="font-serif text-2xl text-ink mb-3">章节未找到</h2>
        <p class="text-ink-muted mb-6">请从教程目录中选择一个章节</p>
        <button
          class="px-5 py-2 bg-ink text-paper-100 text-sm hover:bg-vermillion transition-colors"
          @click="router.push('/tutorial/getting-started')"
        >
          从第一章开始
        </button>
      </div>
    </div>
  </div>
</template>
