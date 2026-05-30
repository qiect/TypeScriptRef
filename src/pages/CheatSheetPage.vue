<script setup lang="ts">
import { ref, computed } from 'vue'
import { cheatSheetItems, cheatSheetCategories } from '@/data/cheatsheetData'
import CodeBlock from '@/components/CodeBlock.vue'
import { Search, X } from 'lucide-vue-next'

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
  <div class="min-h-screen">
    <div class="max-w-5xl mx-auto px-6 py-10">
      <div class="mb-8">
        <p class="font-mono text-xs tracking-widest uppercase text-vermillion mb-3">
          Cheat Sheet
        </p>
        <h1 class="font-serif text-3xl sm:text-4xl text-ink mb-2">
          TypeScript 速查表
        </h1>
        <p class="text-ink-muted">
          快速查找 TypeScript 语法和用法
        </p>
      </div>

      <div class="relative mb-6">
        <Search :size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索... (interface, 泛型, Partial)"
          class="w-full pl-9 pr-9 py-2.5 bg-paper-50 border border-paper-300 text-ink text-sm placeholder-ink-faint focus:outline-none focus:border-ink transition-colors"
        />
        <button
          v-if="searchQuery"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink transition-colors"
          @click="clearSearch"
        >
          <X :size="16" />
        </button>
      </div>

      <div class="flex flex-wrap gap-2 mb-10">
        <button
          :class="[
            'px-3 py-1.5 text-xs font-mono tracking-wider transition-colors duration-150 border',
            selectedCategory === null
              ? 'bg-ink text-paper-100 border-ink'
              : 'text-ink-muted border-paper-300 hover:border-ink hover:text-ink',
          ]"
          @click="selectedCategory = null"
        >
          ALL
        </button>
        <button
          v-for="category in cheatSheetCategories"
          :key="category"
          :class="[
            'px-3 py-1.5 text-xs transition-colors duration-150 border',
            selectedCategory === category
              ? 'bg-ink text-paper-100 border-ink'
              : 'text-ink-muted border-paper-300 hover:border-ink hover:text-ink',
          ]"
          @click="toggleCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <div v-if="filteredItems.length === 0" class="text-center py-20">
        <p class="font-serif text-xl text-ink mb-2">未找到匹配的条目</p>
        <p class="text-sm text-ink-muted">请尝试其他搜索关键词或清除筛选条件</p>
      </div>

      <div v-else class="space-y-12">
        <div v-for="(items, category) in groupedItems" :key="category">
          <h2 class="font-serif text-lg text-ink mb-4 pb-2 border-b border-ink">
            {{ category }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              v-for="item in items"
              :key="item.id"
              class="group"
            >
              <div class="flex items-baseline justify-between mb-1.5">
                <h3 class="text-sm font-semibold text-ink">
                  {{ item.title }}
                </h3>
              </div>
              <p class="text-xs text-ink-muted mb-3">{{ item.description }}</p>
              <CodeBlock :code="item.code" language="typescript" />
              <div v-if="item.tags.length" class="flex flex-wrap gap-1 mt-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="text-xs font-mono text-ink-faint"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
