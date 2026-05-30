<script setup lang="ts">
import { ref, computed } from 'vue'
import { cheatSheetItems, cheatSheetCategories } from '@/data/cheatsheetData'
import CodeBlock from '@/components/CodeBlock.vue'
import { Search, X, Tag } from 'lucide-vue-next'

const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)

const filteredItems = computed(() => {
  let items = cheatSheetItems

  if (selectedCategory.value) {
    items = items.filter((item) => item.category === selectedCategory.value)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        item.code.toLowerCase().includes(query)
    )
  }

  return items
})

const groupedItems = computed(() => {
  const groups: Record<string, typeof cheatSheetItems> = {}
  filteredItems.value.forEach((item) => {
    if (!groups[item.category]) {
      groups[item.category] = []
    }
    groups[item.category].push(item)
  })
  return groups
})

const toggleCategory = (category: string) => {
  if (selectedCategory.value === category) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = category
  }
}

const clearSearch = () => {
  searchQuery.value = ''
}
</script>

<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-3">
          TypeScript 速查表
        </h1>
        <p class="text-ts-muted text-lg">
          快速查找 TypeScript 语法和用法，按分类浏览或搜索
        </p>
      </div>

      <div class="relative mb-6">
        <Search :size="18" class="absolute left-4 top-1/2 -translate-y-1/2 text-ts-muted" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索速查条目... (如: interface, 泛型, Partial)"
          class="w-full pl-11 pr-10 py-3 bg-ts-surface/50 border border-ts-border rounded-xl text-white placeholder-ts-muted focus:outline-none focus:border-ts-accent focus:ring-1 focus:ring-ts-accent/30 transition-all"
        />
        <button
          v-if="searchQuery"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-ts-muted hover:text-white transition-colors"
          @click="clearSearch"
        >
          <X :size="18" />
        </button>
      </div>

      <div class="flex flex-wrap gap-2 mb-8">
        <button
          :class="[
            'px-3 py-1.5 rounded-lg text-sm transition-all duration-200 border',
            selectedCategory === null
              ? 'bg-ts-blue/15 text-ts-blue border-ts-blue/30'
              : 'text-ts-muted hover:text-white border-ts-border hover:border-ts-accent/50',
          ]"
          @click="selectedCategory = null"
        >
          全部
        </button>
        <button
          v-for="category in cheatSheetCategories"
          :key="category"
          :class="[
            'px-3 py-1.5 rounded-lg text-sm transition-all duration-200 border',
            selectedCategory === category
              ? 'bg-ts-blue/15 text-ts-blue border-ts-blue/30'
              : 'text-ts-muted hover:text-white border-ts-border hover:border-ts-accent/50',
          ]"
          @click="toggleCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <div v-if="filteredItems.length === 0" class="text-center py-20">
        <Search :size="48" class="mx-auto text-ts-border mb-4" />
        <h3 class="text-xl font-semibold text-white mb-2">未找到匹配的条目</h3>
        <p class="text-ts-muted">请尝试其他搜索关键词或清除筛选条件</p>
      </div>

      <div v-else class="space-y-10">
        <div v-for="(items, category) in groupedItems" :key="category">
          <h2 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Tag :size="16" class="text-ts-blue" />
            {{ category }}
            <span class="text-xs text-ts-muted font-normal">({{ items.length }})</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="item in items"
              :key="item.id"
              class="group p-4 rounded-xl border border-ts-border bg-ts-surface/30 hover:border-ts-accent/40 hover:bg-ts-surface/50 transition-all duration-300"
            >
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-sm font-semibold text-white group-hover:text-ts-accent transition-colors">
                  {{ item.title }}
                </h3>
                <span class="text-xs text-ts-muted bg-ts-darker px-2 py-0.5 rounded shrink-0 ml-2">
                  {{ item.category }}
                </span>
              </div>
              <p class="text-xs text-ts-muted mb-3">{{ item.description }}</p>
              <CodeBlock :code="item.code" language="typescript" />
              <div v-if="item.tags.length" class="flex flex-wrap gap-1 mt-3">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="text-xs px-2 py-0.5 rounded bg-ts-darker text-ts-muted"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
