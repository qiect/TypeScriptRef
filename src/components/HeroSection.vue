<script setup lang="ts">
import { useRouter } from 'vue-router'
import { BookOpen, Zap, Search, ArrowRight } from 'lucide-vue-next'

const router = useRouter()

const features = [
  {
    icon: BookOpen,
    title: '系统教程',
    description: '从入门到精通，循序渐进的 TypeScript 学习路径，涵盖所有核心概念',
    color: 'from-ts-blue to-blue-400',
  },
  {
    icon: Zap,
    title: '速查手册',
    description: '按主题分类的速查卡片，即查即用，快速找到所需语法和用法',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Search,
    title: '实时搜索',
    description: '全局搜索教程内容和速查条目，毫秒级响应，精准定位',
    color: 'from-emerald-500 to-teal-400',
  },
]
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-ts-navy via-ts-dark to-ts-navy" />
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-ts-blue/10 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s" />
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" style="animation-delay: -1.5s" />
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <div class="animate-fade-in">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ts-border bg-ts-surface/50 text-ts-muted text-sm mb-8">
          <span class="w-2 h-2 rounded-full bg-ts-blue animate-pulse" />
          TypeScript 学习平台
        </div>
      </div>

      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 animate-slide-up leading-tight">
        掌握
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-ts-blue via-blue-400 to-cyan-400">
          TypeScript
        </span>
        <br />
        从这里开始
      </h1>

      <p class="text-lg sm:text-xl text-ts-muted max-w-2xl mx-auto mb-10 animate-slide-up" style="animation-delay: 0.15s">
        系统化教程 + 即查即用速查表，一站式解决 TypeScript 学习与日常查阅需求
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style="animation-delay: 0.3s">
        <button
          class="px-8 py-3.5 bg-ts-blue hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-ts-blue/30 hover:shadow-ts-blue/50 transition-all duration-300 flex items-center gap-2 group"
          @click="router.push('/tutorial/getting-started')"
        >
          开始学习
          <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          class="px-8 py-3.5 border border-ts-border hover:border-ts-accent text-ts-muted hover:text-white font-semibold rounded-xl hover:bg-ts-surface/50 transition-all duration-300 flex items-center gap-2"
          @click="router.push('/cheatsheet')"
        >
          <Zap :size="18" />
          速查表
        </button>
      </div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 mt-20 w-full">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="animate-slide-up p-6 rounded-2xl border border-ts-border bg-ts-surface/30 backdrop-blur-sm hover:border-ts-accent/50 hover:bg-ts-surface/50 transition-all duration-300 group cursor-default"
          :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
        >
          <div :class="['w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform', feature.color]">
            <component :is="feature.icon" :size="22" class="text-white" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-ts-muted leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
