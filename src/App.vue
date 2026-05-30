<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tutorialChapters } from '@/data/tutorialData'
import { cheatSheetCategories } from '@/data/cheatsheetData'
import {
  Search, BookOpen, Zap, Home, ChevronDown, ChevronRight,
  Menu, X, Command
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const sidebarOpen = ref(true)
const searchOpen = ref(false)
const searchQuery = ref('')
const expandedSections = ref<Record<string, boolean>>({
  tutorial: true,
  cheatsheet: false,
})

const currentSlug = computed(() => route.params.slug as string)
const currentCategory = computed(() => route.params.category as string)

const toggleSection = (key: string) => {
  expandedSections.value[key] = !expandedSections.value[key]
}

const navigateTo = (path: string) => {
  router.push(path)
}

const isActive = (path: string) => route.path === path
const isTutorialActive = computed(() => route.path.startsWith('/tutorial'))
const isCheatSheetActive = computed(() => route.path.startsWith('/cheatsheet'))

const handleResize = () => {
  if (window.innerWidth < 1024) {
    sidebarOpen.value = false
  } else {
    sidebarOpen.value = true
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    searchOpen.value = !searchOpen.value
    if (searchOpen.value) {
      setTimeout(() => {
        document.querySelector<HTMLInputElement>('#global-search')?.focus()
      }, 50)
    }
  }
  if (e.key === 'Escape') {
    searchOpen.value = false
  }
}

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const q = searchQuery.value.toLowerCase().trim()
  const results: { type: string; title: string; path: string; desc: string }[] = []

  tutorialChapters.forEach((ch) => {
    if (ch.title.toLowerCase().includes(q) || ch.description.toLowerCase().includes(q)) {
      results.push({ type: '教程', title: ch.title, path: `/tutorial/${ch.slug}`, desc: ch.description })
    }
    ch.sections.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)) {
        results.push({ type: '教程', title: `${ch.title} → ${s.title}`, path: `/tutorial/${ch.slug}#${s.id}`, desc: s.content.slice(0, 80) })
      }
    })
  })

  return results.slice(0, 12)
})

watch(searchQuery, () => {
  if (searchQuery.value.trim()) {
    searchOpen.value = true
  }
})

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-dev-bg">
    <aside
      v-if="sidebarOpen"
      class="w-60 shrink-0 border-r border-dev-border bg-dev-surface flex flex-col overflow-hidden"
    >
      <div class="h-10 flex items-center justify-between px-3 border-b border-dev-border shrink-0">
        <button
          class="flex items-center gap-2 text-dev-text hover:text-white transition-colors"
          @click="navigateTo('/')"
        >
          <div class="w-5 h-5 bg-dev-accent rounded flex items-center justify-center text-[10px] font-mono font-bold text-white">TS</div>
          <span class="text-xs font-semibold tracking-wide">TS Guide</span>
        </button>
        <button
          class="p-1 text-dev-text-muted hover:text-dev-text transition-colors lg:hidden"
          @click="sidebarOpen = false"
        >
          <X :size="14" />
        </button>
      </div>

      <button
        class="mx-2 mt-2 flex items-center gap-2 px-2 py-1.5 text-xs text-dev-text-muted hover:text-dev-text bg-dev-bg hover:bg-dev-overlay border border-dev-border rounded transition-colors"
        @click="searchOpen = !searchOpen"
      >
        <Search :size="12" />
        <span>搜索...</span>
        <kbd class="ml-auto text-[10px] font-mono bg-dev-surface px-1 py-0.5 rounded border border-dev-border">⌘K</kbd>
      </button>

      <nav class="flex-1 overflow-y-auto mt-2 px-2 pb-4">
        <button
          :class="[
            'w-full text-left flex items-center gap-2 px-2 py-1.5 text-xs rounded transition-colors',
            isActive('/') ? 'text-dev-text bg-dev-accent/15' : 'text-dev-text-secondary hover:text-dev-text hover:bg-dev-overlay'
          ]"
          @click="navigateTo('/')"
        >
          <Home :size="13" />
          首页
        </button>

        <div class="mt-3">
          <button
            class="w-full text-left flex items-center gap-1 px-2 py-1 text-[11px] font-semibold text-dev-text-muted uppercase tracking-wider hover:text-dev-text-secondary transition-colors"
            @click="toggleSection('tutorial')"
          >
            <ChevronDown v-if="expandedSections.tutorial" :size="11" />
            <ChevronRight v-else :size="11" />
            教程
          </button>
          <div v-if="expandedSections.tutorial" class="space-y-0.5 mt-0.5">
            <button
              v-for="(chapter, index) in tutorialChapters"
              :key="chapter.slug"
              :class="[
                'w-full text-left flex items-center gap-2 pl-5 pr-2 py-1 text-xs rounded transition-colors',
                currentSlug === chapter.slug
                  ? 'text-dev-accent-bright bg-dev-accent/10'
                  : 'text-dev-text-secondary hover:text-dev-text hover:bg-dev-overlay'
              ]"
              @click="navigateTo(`/tutorial/${chapter.slug}`)"
            >
              <span class="font-mono text-[10px] text-dev-text-muted w-4">{{ index + 1 }}</span>
              <span class="truncate">{{ chapter.title }}</span>
            </button>
          </div>
        </div>

        <div class="mt-3">
          <button
            class="w-full text-left flex items-center gap-1 px-2 py-1 text-[11px] font-semibold text-dev-text-muted uppercase tracking-wider hover:text-dev-text-secondary transition-colors"
            @click="toggleSection('cheatsheet')"
          >
            <ChevronDown v-if="expandedSections.cheatsheet" :size="11" />
            <ChevronRight v-else :size="11" />
            速查表
          </button>
          <div v-if="expandedSections.cheatsheet" class="space-y-0.5 mt-0.5">
            <button
              :class="[
                'w-full text-left flex items-center gap-2 pl-5 pr-2 py-1 text-xs rounded transition-colors',
                isActive('/cheatsheet') && !currentCategory
                  ? 'text-dev-accent-bright bg-dev-accent/10'
                  : 'text-dev-text-secondary hover:text-dev-text hover:bg-dev-overlay'
              ]"
              @click="navigateTo('/cheatsheet')"
            >
              <span class="font-mono text-[10px] text-dev-text-muted w-4">*</span>
              <span>全部</span>
            </button>
            <button
              v-for="category in cheatSheetCategories"
              :key="category"
              :class="[
                'w-full text-left flex items-center gap-2 pl-5 pr-2 py-1 text-xs rounded transition-colors',
                currentCategory === category
                  ? 'text-dev-accent-bright bg-dev-accent/10'
                  : 'text-dev-text-secondary hover:text-dev-text hover:bg-dev-overlay'
              ]"
              @click="navigateTo(`/cheatsheet/${category}`)"
            >
              <span class="font-mono text-[10px] text-dev-text-muted w-4">-</span>
              <span class="truncate">{{ category }}</span>
            </button>
          </div>
        </div>
      </nav>

      <div class="px-3 py-2 border-t border-dev-border text-[10px] text-dev-text-muted font-mono">
        v1.0 · TypeScript 5.x
      </div>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="h-10 flex items-center gap-3 px-4 border-b border-dev-border bg-dev-surface shrink-0">
        <button
          v-if="!sidebarOpen"
          class="p-1 text-dev-text-muted hover:text-dev-text transition-colors"
          @click="sidebarOpen = true"
        >
          <Menu :size="16" />
        </button>
        <div class="flex items-center gap-1.5 text-xs text-dev-text-muted font-mono">
          <button
            :class="isActive('/') ? 'text-dev-text' : 'hover:text-dev-text-secondary'"
            @click="navigateTo('/')"
          >
            ts-guide
          </button>
          <template v-if="isTutorialActive">
            <span>/</span>
            <button
              :class="'text-dev-accent-bright'"
              @click="navigateTo('/tutorial/getting-started')"
            >
              tutorial
            </button>
            <span v-if="currentSlug">/</span>
            <span v-if="currentSlug" class="text-dev-text">{{ currentSlug }}</span>
          </template>
          <template v-if="isCheatSheetActive">
            <span>/</span>
            <button
              :class="'text-dev-accent-bright'"
              @click="navigateTo('/cheatsheet')"
            >
              cheatsheet
            </button>
            <span v-if="currentCategory">/</span>
            <span v-if="currentCategory" class="text-dev-text">{{ currentCategory }}</span>
          </template>
        </div>
        <div class="ml-auto flex items-center gap-2">
          <button
            class="flex items-center gap-1 text-[11px] text-dev-text-muted hover:text-dev-text transition-colors"
            @click="searchOpen = !searchOpen"
          >
            <Search :size="12" />
            <span class="hidden sm:inline">搜索</span>
            <kbd class="hidden sm:inline text-[10px] font-mono bg-dev-bg px-1 py-0.5 rounded border border-dev-border">⌘K</kbd>
          </button>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>

    <Teleport to="body">
      <div
        v-if="searchOpen"
        class="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      >
        <div class="fixed inset-0 bg-black/60" @click="searchOpen = false" />
        <div class="relative w-full max-w-lg mx-4 bg-dev-surface border border-dev-border rounded-lg shadow-2xl overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 border-b border-dev-border">
            <Search :size="16" class="text-dev-text-muted shrink-0" />
            <input
              id="global-search"
              v-model="searchQuery"
              type="text"
              placeholder="搜索教程、速查条目..."
              class="flex-1 bg-transparent text-sm text-dev-text placeholder-dev-text-muted outline-none"
              autocomplete="off"
            />
            <kbd class="text-[10px] font-mono text-dev-text-muted bg-dev-bg px-1.5 py-0.5 rounded border border-dev-border">ESC</kbd>
          </div>
          <div v-if="searchQuery.trim() && searchResults.length" class="max-h-72 overflow-y-auto py-1">
            <button
              v-for="result in searchResults"
              :key="result.path"
              class="w-full text-left px-4 py-2.5 hover:bg-dev-overlay transition-colors"
              @click="navigateTo(result.path); searchOpen = false; searchQuery = ''"
            >
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dev-accent/15 text-dev-accent-bright">
                  {{ result.type }}
                </span>
                <span class="text-sm text-dev-text">{{ result.title }}</span>
              </div>
              <p class="text-xs text-dev-text-muted mt-0.5 truncate">{{ result.desc }}</p>
            </button>
          </div>
          <div v-else-if="searchQuery.trim() && !searchResults.length" class="py-8 text-center text-xs text-dev-text-muted">
            未找到匹配结果
          </div>
          <div v-else class="py-6 text-center text-xs text-dev-text-muted">
            输入关键词开始搜索
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
