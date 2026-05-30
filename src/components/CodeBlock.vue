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
  <div class="relative group rounded-lg overflow-hidden border border-ts-border bg-ts-navy">
    <div class="flex items-center justify-between px-4 py-2 bg-ts-darker border-b border-ts-border">
      <span class="text-xs text-ts-muted font-mono">{{ language || 'typescript' }}</span>
      <button
        class="flex items-center gap-1 text-xs text-ts-muted hover:text-white transition-colors px-2 py-1 rounded hover:bg-ts-surface"
        @click="copyCode"
      >
        <Check v-if="copied" :size="14" class="text-green-400" />
        <Copy v-else :size="14" />
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <pre class="!m-0 !rounded-none !border-none"><code ref="codeRef" :class="`language-${language || 'typescript'}`">{{ code }}</code></pre>
  </div>
</template>
