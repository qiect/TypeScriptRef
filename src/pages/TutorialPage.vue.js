/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { tutorialChapters } from '@/data/tutorialData';
import CodeBlock from '@/components/CodeBlock.vue';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-vue-next';
const route = useRoute();
const router = useRouter();
const currentSlug = computed(() => route.params.slug);
const currentChapter = computed(() => tutorialChapters.find((c) => c.slug === currentSlug.value));
const currentChapterIndex = computed(() => tutorialChapters.findIndex((c) => c.slug === currentSlug.value));
const prevChapter = computed(() => currentChapterIndex.value > 0
    ? tutorialChapters[currentChapterIndex.value - 1]
    : null);
const nextChapter = computed(() => currentChapterIndex.value < tutorialChapters.length - 1
    ? tutorialChapters[currentChapterIndex.value + 1]
    : null);
const navigateToChapter = (slug) => {
    router.push(`/tutorial/${slug}`);
};
const chapterColors = {
    'getting-started': '#00d4ff',
    'basic-types': '#00d4ff',
    'interfaces': '#00d4ff',
    'functions': '#00d4ff',
    'classes': '#00d4ff',
    'generics': '#ffd700',
    'advanced-types': '#ff6b9d',
    'modules': '#00ff88',
};
const currentColor = computed(() => chapterColors[currentSlug.value] || '#6c63ff');
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.currentChapter) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "h-full flex flex-col" },
    });
    /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
        ...{ class: "h-12 flex items-center gap-3 px-5 border-b border-cosmos-border bg-cosmos-deep/80 backdrop-blur-sm shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['h-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-b']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-cosmos-border']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-cosmos-deep/80']} */ ;
    /** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.currentChapter))
                    return;
                __VLS_ctx.router.push('/');
                // @ts-ignore
                [currentChapter, router,];
            } },
        ...{ class: "text-cosmos-dim hover:text-cosmos-text transition-colors" },
    });
    /** @type {__VLS_StyleScopedClasses['text-cosmos-dim']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:text-cosmos-text']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.ArrowLeft} */
    ArrowLeft;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        size: (16),
    }));
    const __VLS_2 = __VLS_1({
        size: (16),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-center gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "w-2 h-2 rounded-full" },
        ...{ style: ({ backgroundColor: __VLS_ctx.currentColor }) },
    });
    /** @type {__VLS_StyleScopedClasses['w-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-xs font-mono text-cosmos-muted" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
    (String(__VLS_ctx.currentChapterIndex + 1).padStart(2, '0'));
    (String(__VLS_ctx.tutorialChapters.length).padStart(2, '0'));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-sm text-cosmos-text font-medium" },
    });
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-text']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    (__VLS_ctx.currentChapter.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-1 overflow-y-auto" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "max-w-3xl mx-auto px-6 py-8" },
    });
    /** @type {__VLS_StyleScopedClasses['max-w-3xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-8']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mb-8" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "text-2xl font-bold text-cosmos-text mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-text']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    (__VLS_ctx.currentChapter.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-sm text-cosmos-dim" },
    });
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-dim']} */ ;
    (__VLS_ctx.currentChapter.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-y-10" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-10']} */ ;
    for (const [section] of __VLS_vFor((__VLS_ctx.currentChapter.sections))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (section.id),
            id: (section.id),
            ...{ class: "scroll-mt-16" },
        });
        /** @type {__VLS_StyleScopedClasses['scroll-mt-16']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
            ...{ class: "text-base font-semibold text-cosmos-text mb-3 flex items-center gap-2" },
        });
        /** @type {__VLS_StyleScopedClasses['text-base']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-cosmos-text']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "w-1 h-4 rounded" },
            ...{ style: ({ backgroundColor: __VLS_ctx.currentColor }) },
        });
        /** @type {__VLS_StyleScopedClasses['w-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
        (section.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-sm text-cosmos-dim leading-relaxed mb-4 whitespace-pre-line" },
        });
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-cosmos-dim']} */ ;
        /** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['whitespace-pre-line']} */ ;
        (section.content);
        if (section.codeExample) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "text-xs text-cosmos-muted mb-2" },
            });
            /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
            (section.codeExample.description);
            const __VLS_5 = CodeBlock;
            // @ts-ignore
            const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
                code: (section.codeExample.code),
                language: (section.codeExample.language),
            }));
            const __VLS_7 = __VLS_6({
                code: (section.codeExample.code),
                language: (section.codeExample.language),
            }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        }
        // @ts-ignore
        [currentChapter, currentChapter, currentChapter, currentChapter, currentColor, currentColor, currentChapterIndex, tutorialChapters,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-center justify-between mt-14 pt-4 border-t border-cosmos-border" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-t']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-cosmos-border']} */ ;
    if (__VLS_ctx.prevChapter) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.currentChapter))
                        return;
                    if (!(__VLS_ctx.prevChapter))
                        return;
                    __VLS_ctx.navigateToChapter(__VLS_ctx.prevChapter.slug);
                    // @ts-ignore
                    [prevChapter, prevChapter, navigateToChapter,];
                } },
            ...{ class: "flex items-center gap-1.5 text-xs text-cosmos-dim hover:text-cosmos-text transition-colors group" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-1.5']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-cosmos-dim']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:text-cosmos-text']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
        /** @type {__VLS_StyleScopedClasses['group']} */ ;
        let __VLS_10;
        /** @ts-ignore @type { | typeof __VLS_components.ChevronLeft} */
        ChevronLeft;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
            size: (14),
            ...{ class: "group-hover:-translate-x-0.5 transition-transform" },
        }));
        const __VLS_12 = __VLS_11({
            size: (14),
            ...{ class: "group-hover:-translate-x-0.5 transition-transform" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        /** @type {__VLS_StyleScopedClasses['group-hover:-translate-x-0.5']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
        (__VLS_ctx.prevChapter.title);
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div)({});
    }
    if (__VLS_ctx.nextChapter) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.currentChapter))
                        return;
                    if (!(__VLS_ctx.nextChapter))
                        return;
                    __VLS_ctx.navigateToChapter(__VLS_ctx.nextChapter.slug);
                    // @ts-ignore
                    [prevChapter, navigateToChapter, nextChapter, nextChapter,];
                } },
            ...{ class: "flex items-center gap-1.5 text-xs text-cosmos-dim hover:text-cosmos-text transition-colors group" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-1.5']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-cosmos-dim']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:text-cosmos-text']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
        /** @type {__VLS_StyleScopedClasses['group']} */ ;
        (__VLS_ctx.nextChapter.title);
        let __VLS_15;
        /** @ts-ignore @type { | typeof __VLS_components.ChevronRight} */
        ChevronRight;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
            size: (14),
            ...{ class: "group-hover:translate-x-0.5 transition-transform" },
        }));
        const __VLS_17 = __VLS_16({
            size: (14),
            ...{ class: "group-hover:translate-x-0.5 transition-transform" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        /** @type {__VLS_StyleScopedClasses['group-hover:translate-x-0.5']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div)({});
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-center justify-center h-full" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-sm text-cosmos-dim mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-dim']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.currentChapter))
                    return;
                __VLS_ctx.navigateToChapter('getting-started');
                // @ts-ignore
                [navigateToChapter, nextChapter,];
            } },
        ...{ class: "text-xs text-cosmos-accent hover:text-cosmos-accent-glow transition-colors" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-accent']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:text-cosmos-accent-glow']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
