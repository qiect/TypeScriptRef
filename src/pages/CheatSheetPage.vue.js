/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { cheatSheetItems, cheatSheetCategories } from '@/data/cheatsheetData';
import CodeBlock from '@/components/CodeBlock.vue';
import { Search, X, ArrowLeft } from 'lucide-vue-next';
const route = useRoute();
const router = useRouter();
const searchQuery = ref('');
const currentCategory = computed(() => route.params.category || null);
const filteredItems = computed(() => {
    let items = cheatSheetItems;
    if (currentCategory.value) {
        items = items.filter((item) => item.category === currentCategory.value);
    }
    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase().trim();
        items = items.filter((item) => item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.tags.some((tag) => tag.toLowerCase().includes(q)) ||
            item.code.toLowerCase().includes(q));
    }
    return items;
});
const groupedItems = computed(() => {
    const groups = {};
    filteredItems.value.forEach((item) => {
        if (!groups[item.category]) {
            groups[item.category] = [];
        }
        groups[item.category].push(item);
    });
    return groups;
});
const categoryColors = {
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
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
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
            __VLS_ctx.router.push('/');
            // @ts-ignore
            [router,];
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
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-sm text-cosmos-text font-medium" },
});
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cosmos-text']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
(__VLS_ctx.currentCategory || '速查表');
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-xs font-mono text-cosmos-muted" },
});
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
(__VLS_ctx.filteredItems.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-1 overflow-y-auto" },
});
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "max-w-4xl mx-auto px-6 py-6" },
});
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative mb-5" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Search} */
Search;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    size: (14),
    ...{ class: "absolute left-3 top-1/2 -translate-y-1/2 text-cosmos-muted" },
}));
const __VLS_7 = __VLS_6({
    size: (14),
    ...{ class: "absolute left-3 top-1/2 -translate-y-1/2 text-cosmos-muted" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-3']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    value: (__VLS_ctx.searchQuery),
    type: "text",
    placeholder: "搜索... (interface, 泛型, Partial)",
    ...{ class: "w-full pl-8 pr-8 py-2 bg-cosmos-surface border border-cosmos-border text-sm text-cosmos-text placeholder-cosmos-muted focus:outline-none focus:border-cosmos-accent transition-colors rounded" },
});
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-8']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-8']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-cosmos-surface']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-cosmos-border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cosmos-text']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder-cosmos-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-cosmos-accent']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
if (__VLS_ctx.searchQuery) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.searchQuery))
                    return;
                __VLS_ctx.searchQuery = '';
                // @ts-ignore
                [currentCategory, filteredItems, searchQuery, searchQuery, searchQuery,];
            } },
        ...{ class: "absolute right-3 top-1/2 -translate-y-1/2 text-cosmos-muted hover:text-cosmos-text transition-colors" },
    });
    /** @type {__VLS_StyleScopedClasses['absolute']} */ ;
    /** @type {__VLS_StyleScopedClasses['right-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
    /** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:text-cosmos-text']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.X} */
    X;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        size: (14),
    }));
    const __VLS_12 = __VLS_11({
        size: (14),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-wrap gap-1.5 mb-6" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.router.push('/cheatsheet');
            // @ts-ignore
            [router,];
        } },
    ...{ class: ([
            'px-2.5 py-1 text-xs rounded transition-colors border',
            !__VLS_ctx.currentCategory
                ? 'bg-cosmos-accent/20 text-cosmos-accent-glow border-cosmos-accent/40'
                : 'text-cosmos-dim border-cosmos-border hover:border-cosmos-border-bright hover:text-cosmos-text'
        ]) },
});
/** @type {__VLS_StyleScopedClasses['px-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
for (const [category] of __VLS_vFor((__VLS_ctx.cheatSheetCategories))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.router.push(`/cheatsheet/${category}`);
                // @ts-ignore
                [router, currentCategory, cheatSheetCategories,];
            } },
        key: (category),
        ...{ class: ([
                'px-2.5 py-1 text-xs rounded transition-colors border',
                __VLS_ctx.currentCategory === category
                    ? 'border-cosmos-accent/40 text-cosmos-text'
                    : 'text-cosmos-dim border-cosmos-border hover:border-cosmos-border-bright hover:text-cosmos-text'
            ]) },
        ...{ style: (__VLS_ctx.currentCategory === category ? { backgroundColor: (__VLS_ctx.categoryColors[category] || '#6c63ff') + '20', borderColor: (__VLS_ctx.categoryColors[category] || '#6c63ff') + '60', color: __VLS_ctx.categoryColors[category] } : {}) },
    });
    /** @type {__VLS_StyleScopedClasses['px-2.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    (category);
    // @ts-ignore
    [currentCategory, currentCategory, categoryColors, categoryColors, categoryColors,];
}
if (__VLS_ctx.filteredItems.length === 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "py-16 text-center text-sm text-cosmos-muted" },
    });
    /** @type {__VLS_StyleScopedClasses['py-16']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "space-y-8" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-8']} */ ;
    for (const [items, category] of __VLS_vFor((__VLS_ctx.groupedItems))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (category),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
            ...{ class: "text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" },
            ...{ style: ({ color: __VLS_ctx.categoryColors[category] || '#6c63ff' }) },
        });
        /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
        /** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
        /** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "w-1.5 h-1.5 rounded-full" },
            ...{ style: ({ backgroundColor: __VLS_ctx.categoryColors[category] || '#6c63ff' }) },
        });
        /** @type {__VLS_StyleScopedClasses['w-1.5']} */ ;
        /** @type {__VLS_StyleScopedClasses['h-1.5']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
        (category);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-cosmos-muted font-normal normal-case tracking-normal" },
        });
        /** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-normal']} */ ;
        /** @type {__VLS_StyleScopedClasses['normal-case']} */ ;
        /** @type {__VLS_StyleScopedClasses['tracking-normal']} */ ;
        (items.length);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "grid grid-cols-1 md:grid-cols-2 gap-4" },
        });
        /** @type {__VLS_StyleScopedClasses['grid']} */ ;
        /** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
        for (const [item] of __VLS_vFor((items))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                key: (item.id),
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
                ...{ class: "text-sm font-medium text-cosmos-text mb-1" },
            });
            /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
            /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-cosmos-text']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
            (item.title);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "text-xs text-cosmos-muted mb-2" },
            });
            /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
            (item.description);
            const __VLS_15 = CodeBlock;
            // @ts-ignore
            const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
                code: (item.code),
                language: "typescript",
            }));
            const __VLS_17 = __VLS_16({
                code: (item.code),
                language: "typescript",
            }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            if (item.tags.length) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "flex flex-wrap gap-1.5 mt-1.5" },
                });
                /** @type {__VLS_StyleScopedClasses['flex']} */ ;
                /** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
                /** @type {__VLS_StyleScopedClasses['gap-1.5']} */ ;
                /** @type {__VLS_StyleScopedClasses['mt-1.5']} */ ;
                for (const [tag] of __VLS_vFor((item.tags))) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                        key: (tag),
                        ...{ class: "text-[11px] font-mono text-cosmos-muted" },
                    });
                    /** @type {__VLS_StyleScopedClasses['text-[11px]']} */ ;
                    /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
                    /** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
                    (tag);
                    // @ts-ignore
                    [filteredItems, categoryColors, categoryColors, groupedItems,];
                }
            }
            // @ts-ignore
            [];
        }
        // @ts-ignore
        [];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
