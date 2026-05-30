<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { cheatSheetItems, cheatSheetCategories } from '@/data/cheatsheetData'
import CodeBlock from '@/components/CodeBlock.vue'
import { Search, X, ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

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

const categoryColors: Record<string, string> = {
  '基础类型': '#00d4ff',
  '接口与类型别名': '#00d4ff',
  '函数': '#00d4ff',
  '类': '#00d4ff',
  '泛型': '#ffd700',
  '枚举': '#00ff88',
  '高级类型': '#ff6b9d',
  '模块与命名空间': '#00ff88',
  '装饰器': '#ff6b9d',
  '工具类型': '#ff8c42',
}
</script>

<template>
  <div class="h-full flex flex-col">
    <header class="h-12 flex items-center gap-3 px-5 border-b border-cosmos-border bg-cosmos-deep/80 backdrop-blur-sm shrink-0">
      <button
        class="text-cosmos-dim hover:text-cosmos-text transition-colors"
        @click="router.push('/')"
      >
        <ArrowLeft :size="16" />
      </button>
      <span class="text-sm text-cosmos-text font-medium">
        {{ currentCategory || '速查表' }}
      </span>
      <span class="text-xs font-mono text-cosmos-muted">
        {{ filteredItems.length }} 条
      </span>
    </header>

    <div class="flex-1 overflow-y-auto">
      <div class="max-w-4xl mx-auto px-6 py-6">
        <div class="relative mb-5">
          <Search :size="14" class="absolute left-3 top-1/2 -translate-y-1/2 text-cosmos-muted" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索... (interface, 泛型, Partial)"
            class="w-full pl-8 pr-8 py-2 bg-cosmos-surface border border-cosmos-border text-sm text-cosmos-text placeholder-cosmos-muted focus:outline-none focus:border-cosmos-accent transition-colors rounded"
          />
          <button
            v-if="searchQuery"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-cosmos-muted hover:text-cosmos-text transition-colors"
            @click="searchQuery = ''"
          >
            <X :size="14" />
          </button>
        </div>

        <div class="flex flex-wrap gap-1.5 mb-6">
          <button
            :class="[
              'px-2.5 py-1 text-xs rounded transition-colors border',
              !currentCategory
                ? 'bg-cosmos-accent/20 text-cosmos-accent-glow border-cosmos-accent/40'
                : 'text-cosmos-dim border-cosmos-border hover:border-cosmos-border-bright hover:text-cosmos-text'
            ]"
            @click="router.push('/cheatsheet')"
          >
            全部
          </button>
          <button
            v-for="category in cheatSheetCategories"
            :key="category"
            :class="[
              'px-2.5 py-1 text-xs rounded transition-colors border',
              currentCategory === category
                ? 'border-cosmos-accent/40 text-cosmos-text'
                : 'text-cosmos-dim border-cosmos-border hover:border-cosmos-border-bright hover:text-cosmos-text'
            ]"
            :style="currentCategory === category ? { backgroundColor: (categoryColors[category] || '#6c63ff') + '20', borderColor: (categoryColors[category] || '#6c63ff') + '60', color: categoryColors[category] } : {}"
            @click="router.push(`/cheatsheet/${category}`)"
          >
            {{ category }}
          </button>
        </div>

        <div v-if="filteredItems.length === 0" class="py-16 text-center text-sm text-cosmos-muted">
          未找到匹配的条目
        </div>

        <div v-else class="space-y-8">
          <div v-for="(items, category) in groupedItems" :key="category">
            <h2 class="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" :style="{ color: categoryColors[category] || '#6c63ff' }">
              <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: categoryColors[category] || '#6c63ff' }"></span>
              {{ category }}
              <span class="text-cosmos-muted font-normal normal-case tracking-normal">({{ items.length }})</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="item in items" :key="item.id">
                <h3 class="text-sm font-medium text-cosmos-text mb-1">{{ item.title }}</h3>
                <p class="text-xs text-cosmos-muted mb-2">{{ item.description }}</p>
                <CodeBlock :code="item.code" language="typescript" />
                <div v-if="item.tags.length" class="flex flex-wrap gap-1.5 mt-1.5">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="text-[11px] font-mono text-cosmos-muted"
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
  </div>
</template>
