<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import CodeBlock from '@/components/CodeBlock.vue'
import { ChevronLeft, ChevronRight, Menu, X, Play, Hash, Layers, Braces, Building, GitBranch, Sparkles, Package } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const isSidebarOpen = ref(true)
const isMobileSidebarOpen = ref(false)

const iconMap: Record<string, any> = {
  Play, Hash, Layers, Braces, Building, GitBranch, Sparkles, Package,
}

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

const handleResize = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="min-h-screen pt-16">
    <div v-if="currentChapter" class="flex">
      <button
        class="lg:hidden fixed bottom-4 left-4 z-40 p-3 bg-ts-blue rounded-full shadow-lg shadow-ts-blue/30"
        @click="isMobileSidebarOpen = !isMobileSidebarOpen"
      >
        <Menu v-if="!isMobileSidebarOpen" :size="20" class="text-white" />
        <X v-else :size="20" class="text-white" />
      </button>

      <aside
        :class="[
          'fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)] w-72 border-r border-ts-border bg-ts-navy/95 backdrop-blur-md overflow-y-auto transition-transform duration-300',
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ]"
      >
        <div class="p-4">
          <h3 class="text-xs font-semibold text-ts-muted uppercase tracking-wider mb-4 px-2">
            教程目录
          </h3>
          <div class="space-y-1">
            <button
              v-for="chapter in tutorialChapters"
              :key="chapter.slug"
              :class="[
                'w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-3',
                chapter.slug === currentSlug
                  ? 'bg-ts-blue/15 text-ts-blue border border-ts-blue/30'
                  : 'text-ts-muted hover:text-white hover:bg-ts-surface border border-transparent',
              ]"
              @click="navigateToChapter(chapter.slug)"
            >
              <component :is="iconMap[chapter.icon] || Play" :size="16" class="shrink-0" />
              <span class="truncate">{{ chapter.title }}</span>
            </button>
          </div>
        </div>
      </aside>

      <div
        v-if="isMobileSidebarOpen"
        class="fixed inset-0 bg-black/50 z-20 lg:hidden"
        @click="isMobileSidebarOpen = false"
      />

      <main class="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 max-w-4xl mx-auto">
        <div class="mb-8">
          <div class="flex items-center gap-2 text-sm text-ts-muted mb-2">
            <span class="font-mono">{{ String(currentChapterIndex + 1).padStart(2, '0') }}</span>
            <span>/</span>
            <span class="font-mono">{{ String(tutorialChapters.length).padStart(2, '0') }}</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-3">
            {{ currentChapter.title }}
          </h1>
          <p class="text-ts-muted text-lg">{{ currentChapter.description }}</p>
        </div>

        <div class="space-y-10">
          <div
            v-for="section in currentChapter.sections"
            :key="section.id"
            :id="section.id"
            class="scroll-mt-24"
          >
            <h2 class="text-xl sm:text-2xl font-semibold text-white mb-4">
              {{ section.title }}
            </h2>
            <p class="text-ts-muted leading-relaxed mb-4 whitespace-pre-line">
              {{ section.content }}
            </p>
            <div v-if="section.codeExample" class="mb-2">
              <p class="text-sm text-ts-muted mb-2">{{ section.codeExample.description }}</p>
              <CodeBlock :code="section.codeExample.code" :language="section.codeExample.language" />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-16 pt-8 border-t border-ts-border">
          <button
            v-if="prevChapter"
            class="flex items-center gap-2 text-ts-muted hover:text-white transition-colors group"
            @click="navigateToChapter(prevChapter.slug)"
          >
            <ChevronLeft :size="18" class="group-hover:-translate-x-1 transition-transform" />
            <div class="text-left">
              <div class="text-xs text-ts-muted">上一章</div>
              <div class="text-sm font-medium">{{ prevChapter.title }}</div>
            </div>
          </button>
          <div v-else />

          <button
            v-if="nextChapter"
            class="flex items-center gap-2 text-ts-muted hover:text-white transition-colors group"
            @click="navigateToChapter(nextChapter.slug)"
          >
            <div class="text-right">
              <div class="text-xs text-ts-muted">下一章</div>
              <div class="text-sm font-medium">{{ nextChapter.title }}</div>
            </div>
            <ChevronRight :size="18" class="group-hover:translate-x-1 transition-transform" />
          </button>
          <div v-else />
        </div>
      </main>
    </div>

    <div v-else class="flex items-center justify-center min-h-[60vh]">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-white mb-4">章节未找到</h2>
        <p class="text-ts-muted mb-6">请从教程目录中选择一个章节</p>
        <button
          class="px-6 py-2.5 bg-ts-blue hover:bg-blue-600 text-white rounded-lg transition-colors"
          @click="router.push('/tutorial/getting-started')"
        >
          从第一章开始
        </button>
      </div>
    </div>
  </div>
</template>
