<script setup lang="ts">
import { useRouter } from 'vue-router'
import ConstellationMap from '@/components/ConstellationMap.vue'
import { Search, BookOpen, Zap, X } from 'lucide-vue-next'

const router = useRouter()

const handleNavigate = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="relative w-full h-full flex flex-col">
    <header class="h-12 flex items-center justify-between px-5 border-b border-cosmos-border bg-cosmos-deep/80 backdrop-blur-sm shrink-0 z-10">
      <div class="flex items-center gap-3">
        <div class="w-6 h-6 bg-cosmos-accent rounded flex items-center justify-center text-[10px] font-mono font-bold text-white">TS</div>
        <span class="text-sm font-semibold text-cosmos-text tracking-wide">Constellation</span>
        <span class="text-xs text-cosmos-muted font-mono hidden sm:inline">TypeScript 知识星图</span>
      </div>
      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-1.5 text-xs text-cosmos-dim hover:text-cosmos-text transition-colors"
          @click="router.push('/tutorial/getting-started')"
        >
          <BookOpen :size="13" />
          <span class="hidden sm:inline">教程</span>
        </button>
        <button
          class="flex items-center gap-1.5 text-xs text-cosmos-dim hover:text-cosmos-text transition-colors"
          @click="router.push('/cheatsheet')"
        >
          <Zap :size="13" />
          <span class="hidden sm:inline">速查表</span>
        </button>
      </div>
    </header>

    <div class="flex-1 relative overflow-hidden">
      <ConstellationMap @navigate="handleNavigate" />

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p class="text-xs text-cosmos-muted">
          点击星图中的节点探索 TypeScript 知识体系
        </p>
      </div>

      <div class="absolute top-4 right-4 flex flex-col gap-2 pointer-events-none">
        <div class="flex items-center gap-2 text-[10px] text-cosmos-muted">
          <span class="w-2 h-2 rounded-full bg-cosmos-cyan"></span>
          教程章节
        </div>
        <div class="flex items-center gap-2 text-[10px] text-cosmos-muted">
          <span class="w-2 h-2 rounded-full bg-cosmos-gold"></span>
          泛型
        </div>
        <div class="flex items-center gap-2 text-[10px] text-cosmos-muted">
          <span class="w-2 h-2 rounded-full bg-cosmos-rose"></span>
          高级类型
        </div>
        <div class="flex items-center gap-2 text-[10px] text-cosmos-muted">
          <span class="w-2 h-2 rounded-full bg-cosmos-green"></span>
          模块
        </div>
        <div class="flex items-center gap-2 text-[10px] text-cosmos-muted">
          <span class="w-1.5 h-1.5 rounded-full bg-cosmos-orange"></span>
          速查条目
        </div>
      </div>
    </div>
  </div>
</template>
