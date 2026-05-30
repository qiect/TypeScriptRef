<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)

const navigateTo = (path: string) => {
  router.push(path)
  isMobileMenuOpen.value = false
}

const isActive = (path: string | RegExp) => {
  if (typeof path === 'string') return route.path === path
  return path.test(route.path)
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-paper-100/95 backdrop-blur-sm border-b border-paper-300">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-14">
        <button
          class="flex items-baseline gap-2 group"
          @click="navigateTo('/')"
        >
          <span class="font-serif text-2xl text-ink leading-none">TS</span>
          <span class="text-xs font-mono text-ink-muted tracking-wider uppercase">Guide</span>
        </button>

        <nav class="hidden md:flex items-center gap-6">
          <button
            :class="[
              'text-sm font-sans transition-colors',
              isActive('/') ? 'text-vermillion font-semibold' : 'text-ink-muted hover:text-ink'
            ]"
            @click="navigateTo('/')"
          >
            首页
          </button>
          <button
            :class="[
              'text-sm font-sans transition-colors',
              isActive(/^\/tutorial/) ? 'text-vermillion font-semibold' : 'text-ink-muted hover:text-ink'
            ]"
            @click="navigateTo('/tutorial/getting-started')"
          >
            教程
          </button>
          <button
            :class="[
              'text-sm font-sans transition-colors',
              isActive(/^\/cheatsheet/) ? 'text-vermillion font-semibold' : 'text-ink-muted hover:text-ink'
            ]"
            @click="navigateTo('/cheatsheet')"
          >
            速查表
          </button>
        </nav>

        <button
          class="md:hidden p-1 text-ink-muted"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-paper-300 bg-paper-100"
    >
      <div class="px-6 py-3 space-y-1">
        <button
          :class="[
            'block w-full text-left py-2 text-sm',
            isActive('/') ? 'text-vermillion font-semibold' : 'text-ink-muted'
          ]"
          @click="navigateTo('/')"
        >
          首页
        </button>
        <button
          :class="[
            'block w-full text-left py-2 text-sm',
            isActive(/^\/tutorial/) ? 'text-vermillion font-semibold' : 'text-ink-muted'
          ]"
          @click="navigateTo('/tutorial/getting-started')"
        >
          教程
        </button>
        <button
          :class="[
            'block w-full text-left py-2 text-sm',
            isActive(/^\/cheatsheet/) ? 'text-vermillion font-semibold' : 'text-ink-muted'
          ]"
          @click="navigateTo('/cheatsheet')"
        >
          速查表
        </button>
      </div>
    </div>
  </header>
</template>
