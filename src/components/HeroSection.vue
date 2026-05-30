<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
  <section class="relative py-24 sm:py-32 lg:py-40">
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-3xl">
        <p class="font-mono text-xs tracking-widest uppercase text-vermillion mb-6">
          TypeScript Learning Platform
        </p>

        <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.1] mb-8">
          写出更可靠的<br />
          <span class="italic text-ink-light">JavaScript</span>
        </h1>

        <p class="text-lg text-ink-muted leading-relaxed max-w-xl mb-10">
          系统化教程与速查手册，帮助你掌握 TypeScript 的类型系统、泛型、高级类型等核心概念，写出更安全、更可维护的代码。
        </p>

        <div class="flex flex-col sm:flex-row items-start gap-4">
          <button
            class="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper-100 text-sm font-medium hover:bg-vermillion transition-colors duration-200"
            @click="router.push('/tutorial/getting-started')"
          >
            开始阅读
            <ArrowRight :size="16" />
          </button>
          <button
            class="inline-flex items-center gap-2 px-6 py-3 border border-ink text-ink text-sm font-medium hover:bg-paper-200 transition-colors duration-200"
            @click="router.push('/cheatsheet')"
          >
            速查表
          </button>
        </div>
      </div>

      <div class="mt-20 border-t-2 border-ink pt-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6">
          <div>
            <p class="font-mono text-xs text-ink-faint tracking-wider uppercase mb-2">01</p>
            <h3 class="font-serif text-xl text-ink mb-2">系统教程</h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              8 个章节从入门到高级，循序渐进掌握 TypeScript 全部核心概念
            </p>
          </div>
          <div>
            <p class="font-mono text-xs text-ink-faint tracking-wider uppercase mb-2">02</p>
            <h3 class="font-serif text-xl text-ink mb-2">速查手册</h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              50+ 速查条目按主题分类，即查即用，日常开发的最佳参考
            </p>
          </div>
          <div>
            <p class="font-mono text-xs text-ink-faint tracking-wider uppercase mb-2">03</p>
            <h3 class="font-serif text-xl text-ink mb-2">代码示例</h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              每个概念配有真实可运行的代码示例，一键复制到你的项目中
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
