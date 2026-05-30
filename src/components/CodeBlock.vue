<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-tomorrow.css'
import { Copy, Check } from 'lucide-vue-next'

const props = defineProps<{
  code: string
  language?: string
}>()

const codeRef = ref<HTMLElement>()
const copied = ref(false)

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

onMounted(async () => {
  await nextTick()
  if (codeRef.value) {
    Prism.highlightElement(codeRef.value)
  }
})
</script>

<template>
  <div class="relative border border-cosmos-border bg-cosmos-deep">
    <div class="flex items-center justify-between px-3 py-1 border-b border-cosmos-border bg-cosmos-surface">
      <span class="text-[11px] font-mono text-cosmos-muted">{{ language || 'typescript' }}</span>
      <button
        class="flex items-center gap-1 text-[11px] text-cosmos-muted hover:text-cosmos-text transition-colors"
        @click="copyCode"
      >
        <Check v-if="copied" :size="11" class="text-cosmos-green" />
        <Copy v-else :size="11" />
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <pre class="!m-0 !rounded-none !border-none"><code ref="codeRef" :class="`language-${language || 'typescript'}`">{{ code }}</code></pre>
  </div>
</template>
