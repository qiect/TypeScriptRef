<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { BookOpen, Search, Menu, X } from 'lucide-vue-next'

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navigateTo = (path: string) => {
  router.push(path)
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-ts-navy/95 backdrop-blur-md border-b border-ts-border shadow-lg shadow-black/20'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div
          class="flex items-center gap-2 cursor-pointer group"
          @click="navigateTo('/')"
        >
          <div class="w-8 h-8 bg-ts-blue rounded-lg flex items-center justify-center font-mono font-bold text-white text-sm group-hover:shadow-lg group-hover:shadow-ts-blue/40 transition-shadow">
            TS
          </div>
          <span class="text-lg font-semibold text-white">
            TS Guide
          </span>
        </div>

        <div class="hidden md:flex items-center gap-1">
          <button
            class="px-4 py-2 text-sm text-ts-muted hover:text-white hover:bg-ts-surface rounded-lg transition-all duration-200 flex items-center gap-2"
            @click="navigateTo('/')"
          >
            <BookOpen :size="16" />
            首页
          </button>
          <button
            class="px-4 py-2 text-sm text-ts-muted hover:text-white hover:bg-ts-surface rounded-lg transition-all duration-200 flex items-center gap-2"
            @click="navigateTo('/tutorial/getting-started')"
          >
            <BookOpen :size="16" />
            教程
          </button>
          <button
            class="px-4 py-2 text-sm text-ts-muted hover:text-white hover:bg-ts-surface rounded-lg transition-all duration-200 flex items-center gap-2"
            @click="navigateTo('/cheatsheet')"
          >
            <Search :size="16" />
            速查表
          </button>
        </div>

        <button
          class="md:hidden p-2 text-ts-muted hover:text-white rounded-lg"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-ts-navy/95 backdrop-blur-md border-b border-ts-border"
      >
        <div class="px-4 py-3 space-y-1">
          <button
            class="w-full text-left px-4 py-2 text-sm text-ts-muted hover:text-white hover:bg-ts-surface rounded-lg transition-colors flex items-center gap-2"
            @click="navigateTo('/')"
          >
            <BookOpen :size="16" />
            首页
          </button>
          <button
            class="w-full text-left px-4 py-2 text-sm text-ts-muted hover:text-white hover:bg-ts-surface rounded-lg transition-colors flex items-center gap-2"
            @click="navigateTo('/tutorial/getting-started')"
          >
            <BookOpen :size="16" />
            教程
          </button>
          <button
            class="w-full text-left px-4 py-2 text-sm text-ts-muted hover:text-white hover:bg-ts-surface rounded-lg transition-colors flex items-center gap-2"
            @click="navigateTo('/cheatsheet')"
          >
            <Search :size="16" />
            速查表
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
