<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { cheatSheetItems, cheatSheetCategories } from '@/data/cheatsheetData'
import CodeBlock from '@/components/CodeBlock.vue'
import { Search, X } from 'lucide-vue-next'

const route = useRoute()

const searchQuery = ref('')
const currentCategory = computed(() => route.params.category as string || null)

const filteredItems = computed(() => {
  let items = cheatSheetItems

  if (currentCategory.value) {
    items = items.filter((item) => item.category === currentCategory.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        item.code.toLowerCase().includes(q)
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
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-8">
    <div class="mb-6">
      <h1 class="text-xl font-bold text-dev-text mb-1">
        {{ currentCategory || '速查表' }}
      </h1>
      <p class="text-sm text-dev-text-secondary" v-if="!currentCategory">
        TypeScript 语法速查，按分类浏览或搜索
      </p>
    </div>

    <div class="relative mb-6">
      <Search :size="14" class="absolute left-3 top-1/2 -translate-y-1/2 text-dev-text-muted" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索... (interface, 泛型, Partial)"
        class="w-full pl-8 pr-8 py-2 bg-dev-surface border border-dev-border text-sm text-dev-text placeholder-dev-text-muted focus:outline-none focus:border-dev-accent transition-colors rounded"
      />
      <button
        v-if="searchQuery"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-dev-text-muted hover:text-dev-text transition-colors"
        @click="searchQuery = ''"
      >
        <X :size="14" />
      </button>
    </div>

    <div v-if="filteredItems.length === 0" class="py-16 text-center text-sm text-dev-text-muted">
      未找到匹配的条目
    </div>

    <div v-else class="space-y-8">
      <div v-for="(items, category) in groupedItems" :key="category">
        <h2 class="text-xs font-semibold text-dev-text-muted uppercase tracking-wider mb-3 pb-1.5 border-b border-dev-border">
          {{ category }}
          <span class="font-normal normal-case tracking-normal ml-1">({{ items.length }})</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="item in items" :key="item.id">
            <div class="flex items-baseline gap-2 mb-1">
              <h3 class="text-sm font-medium text-dev-text">{{ item.title }}</h3>
            </div>
            <p class="text-xs text-dev-text-muted mb-2">{{ item.description }}</p>
            <CodeBlock :code="item.code" language="typescript" />
            <div v-if="item.tags.length" class="flex flex-wrap gap-1.5 mt-1.5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="text-[11px] font-mono text-dev-text-muted"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
