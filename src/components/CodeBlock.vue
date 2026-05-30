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
  <div class="relative bg-code-bg border border-code-border">
    <div class="flex items-center justify-between px-4 py-2 border-b border-code-border">
      <span class="text-xs font-mono text-ink-faint">{{ language || 'typescript' }}</span>
      <button
        class="flex items-center gap-1 text-xs text-ink-faint hover:text-code-text transition-colors"
        @click="copyCode"
      >
        <Check v-if="copied" :size="12" class="text-green-400" />
        <Copy v-else :size="12" />
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <pre class="!m-0 !rounded-none !border-none"><code ref="codeRef" :class="`language-${language || 'typescript'}`">{{ code }}</code></pre>
  </div>
</template>
