<script setup lang="ts">
import { useRouter } from 'vue-router'
import { cheatSheetCategories } from '@/data/cheatsheetData'
import { Zap, ArrowRight } from 'lucide-vue-next'

const router = useRouter()

const categoryIcons: Record<string, string> = {
  '基础类型': '🔢',
  '接口与类型别名': '📋',
  '函数': '⚡',
  '类': '🏗️',
  '泛型': '🔀',
  '枚举': '🎯',
  '高级类型': '✨',
  '模块与命名空间': '📦',
  '装饰器': '🎨',
  '工具类型': '🛠️',
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
        速查手册
      </h2>
      <p class="text-ts-muted text-lg max-w-2xl mx-auto">
        按主题分类的速查卡片，快速查找所需语法
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <div
        v-for="category in cheatSheetCategories"
        :key="category"
        class="group p-4 rounded-xl border border-ts-border bg-ts-surface/30 hover:border-purple-500/50 hover:bg-ts-surface/60 transition-all duration-300 cursor-pointer text-center"
        @click="router.push(`/cheatsheet`)"
      >
        <div class="text-2xl mb-2">{{ categoryIcons[category] || '📄' }}</div>
        <h3 class="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
          {{ category }}
        </h3>
        <ArrowRight :size="12" class="mx-auto mt-2 text-ts-muted opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>

    <div class="text-center mt-8">
      <button
        class="px-6 py-3 border border-ts-border hover:border-purple-500/50 text-ts-muted hover:text-white rounded-xl hover:bg-ts-surface/50 transition-all duration-300 inline-flex items-center gap-2"
        @click="router.push('/cheatsheet')"
      >
        <Zap :size="16" />
        查看全部速查表
      </button>
    </div>
  </section>
</template>
