/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';
import { Copy, Check } from 'lucide-vue-next';
const props = defineProps();
const codeRef = ref();
const copied = ref(false);
const copyCode = async () => {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 2000);
};
onMounted(async () => {
    await nextTick();
    if (codeRef.value) {
        Prism.highlightElement(codeRef.value);
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative border border-cosmos-border bg-cosmos-deep" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-cosmos-border']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-cosmos-deep']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-between px-3 py-1 border-b border-cosmos-border bg-cosmos-surface" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-cosmos-border']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-cosmos-surface']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-[11px] font-mono text-cosmos-muted" },
});
/** @type {__VLS_StyleScopedClasses['text-[11px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
(__VLS_ctx.language || 'typescript');
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.copyCode) },
    ...{ class: "flex items-center gap-1 text-[11px] text-cosmos-muted hover:text-cosmos-text transition-colors" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[11px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cosmos-muted']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-cosmos-text']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
if (__VLS_ctx.copied) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Check} */
    Check;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        size: (11),
        ...{ class: "text-cosmos-green" },
    }));
    const __VLS_2 = __VLS_1({
        size: (11),
        ...{ class: "text-cosmos-green" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['text-cosmos-green']} */ ;
}
else {
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.Copy} */
    Copy;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        size: (11),
    }));
    const __VLS_7 = __VLS_6({
        size: (11),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
(__VLS_ctx.copied ? '已复制' : '复制');
__VLS_asFunctionalElement1(__VLS_intrinsics.pre, __VLS_intrinsics.pre)({
    ...{ class: "!m-0 !rounded-none !border-none" },
});
/** @type {__VLS_StyleScopedClasses['!m-0']} */ ;
/** @type {__VLS_StyleScopedClasses['!rounded-none']} */ ;
/** @type {__VLS_StyleScopedClasses['!border-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({
    ref: "codeRef",
    ...{ class: (`language-${__VLS_ctx.language || 'typescript'}`) },
});
(__VLS_ctx.code);
// @ts-ignore
[language, language, copyCode, copied, copied, code,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
