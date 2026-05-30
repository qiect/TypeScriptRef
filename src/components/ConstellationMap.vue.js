/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, onMounted, computed } from 'vue';
const props = defineProps();
const emit = defineEmits();
const svgRef = ref();
const viewBox = ref('0 0 1200 700');
const hoveredNode = ref(null);
const nodes = [
    { id: 'ts', label: 'TypeScript', x: 600, y: 350, size: 'lg', color: '#6c63ff', path: '/', type: 'tutorial' },
    { id: 'getting-started', label: '入门', x: 280, y: 180, size: 'md', color: '#00d4ff', path: '/tutorial/getting-started', type: 'tutorial' },
    { id: 'basic-types', label: '基础类型', x: 450, y: 140, size: 'md', color: '#00d4ff', path: '/tutorial/basic-types', type: 'tutorial' },
    { id: 'interfaces', label: '接口', x: 620, y: 120, size: 'md', color: '#00d4ff', path: '/tutorial/interfaces', type: 'tutorial' },
    { id: 'functions', label: '函数', x: 780, y: 150, size: 'md', color: '#00d4ff', path: '/tutorial/functions', type: 'tutorial' },
    { id: 'classes', label: '类', x: 920, y: 200, size: 'md', color: '#00d4ff', path: '/tutorial/classes', type: 'tutorial' },
    { id: 'generics', label: '泛型', x: 880, y: 380, size: 'md', color: '#ffd700', path: '/tutorial/generics', type: 'tutorial' },
    { id: 'advanced-types', label: '高级类型', x: 720, y: 500, size: 'md', color: '#ff6b9d', path: '/tutorial/advanced-types', type: 'tutorial' },
    { id: 'modules', label: '模块', x: 480, y: 520, size: 'md', color: '#00ff88', path: '/tutorial/modules', type: 'tutorial' },
    { id: 'cs-basic', label: '基础类型速查', x: 180, y: 320, size: 'sm', color: '#00d4ff', path: '/cheatsheet/基础类型', type: 'cheatsheet' },
    { id: 'cs-interface', label: '接口速查', x: 350, y: 280, size: 'sm', color: '#00d4ff', path: '/cheatsheet/接口与类型别名', type: 'cheatsheet' },
    { id: 'cs-function', label: '函数速查', x: 830, y: 280, size: 'sm', color: '#00d4ff', path: '/cheatsheet/函数', type: 'cheatsheet' },
    { id: 'cs-class', label: '类速查', x: 1020, y: 300, size: 'sm', color: '#00d4ff', path: '/cheatsheet/类', type: 'cheatsheet' },
    { id: 'cs-generic', label: '泛型速查', x: 1020, y: 450, size: 'sm', color: '#ffd700', path: '/cheatsheet/泛型', type: 'cheatsheet' },
    { id: 'cs-advanced', label: '高级类型速查', x: 800, y: 580, size: 'sm', color: '#ff6b9d', path: '/cheatsheet/高级类型', type: 'cheatsheet' },
    { id: 'cs-utility', label: '工具类型', x: 550, y: 600, size: 'sm', color: '#ff8c42', path: '/cheatsheet/工具类型', type: 'cheatsheet' },
    { id: 'cs-module', label: '模块速查', x: 300, y: 560, size: 'sm', color: '#00ff88', path: '/cheatsheet/模块与命名空间', type: 'cheatsheet' },
    { id: 'cs-enum', label: '枚举速查', x: 150, y: 480, size: 'sm', color: '#00ff88', path: '/cheatsheet/枚举', type: 'cheatsheet' },
    { id: 'cs-decorator', label: '装饰器', x: 1060, y: 160, size: 'sm', color: '#ff6b9d', path: '/cheatsheet/装饰器', type: 'cheatsheet' },
];
const edges = [
    { from: 'ts', to: 'getting-started' },
    { from: 'ts', to: 'basic-types' },
    { from: 'ts', to: 'interfaces' },
    { from: 'ts', to: 'functions' },
    { from: 'ts', to: 'classes' },
    { from: 'ts', to: 'generics' },
    { from: 'ts', to: 'advanced-types' },
    { from: 'ts', to: 'modules' },
    { from: 'basic-types', to: 'interfaces' },
    { from: 'interfaces', to: 'functions' },
    { from: 'functions', to: 'classes' },
    { from: 'classes', to: 'generics' },
    { from: 'generics', to: 'advanced-types' },
    { from: 'advanced-types', to: 'modules' },
    { from: 'getting-started', to: 'cs-basic' },
    { from: 'basic-types', to: 'cs-basic' },
    { from: 'interfaces', to: 'cs-interface' },
    { from: 'functions', to: 'cs-function' },
    { from: 'classes', to: 'cs-class' },
    { from: 'classes', to: 'cs-decorator' },
    { from: 'generics', to: 'cs-generic' },
    { from: 'advanced-types', to: 'cs-advanced' },
    { from: 'advanced-types', to: 'cs-utility' },
    { from: 'modules', to: 'cs-module' },
    { from: 'modules', to: 'cs-enum' },
];
const nodeMap = computed(() => {
    const map = {};
    nodes.forEach((n) => { map[n.id] = n; });
    return map;
});
const stars = ref([]);
onMounted(() => {
    const generated = [];
    for (let i = 0; i < 120; i++) {
        generated.push({
            x: Math.random() * 1200,
            y: Math.random() * 700,
            r: Math.random() * 1.2 + 0.3,
            delay: Math.random() * 5,
        });
    }
    stars.value = generated;
});
const isEdgeActive = (edge) => {
    return hoveredNode.value === edge.from || hoveredNode.value === edge.to;
};
const isNodeActive = (node) => {
    return props.activeId === node.id || hoveredNode.value === node.id;
};
const getNodeRadius = (size) => {
    return size === 'lg' ? 18 : size === 'md' ? 10 : 6;
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ref: "svgRef",
    viewBox: (__VLS_ctx.viewBox),
    ...{ class: "w-full h-full" },
    xmlns: "http://www.w3.org/2000/svg",
});
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.defs, __VLS_intrinsics.defs)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.filter, __VLS_intrinsics.filter)({
    id: "glow-lg",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feGaussianBlur)({
    stdDeviation: "6",
    result: "blur",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMerge, __VLS_intrinsics.feMerge)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMergeNode)({
    in: "blur",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMergeNode)({
    in: "SourceGraphic",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.filter, __VLS_intrinsics.filter)({
    id: "glow-md",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feGaussianBlur)({
    stdDeviation: "4",
    result: "blur",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMerge, __VLS_intrinsics.feMerge)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMergeNode)({
    in: "blur",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMergeNode)({
    in: "SourceGraphic",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.filter, __VLS_intrinsics.filter)({
    id: "glow-sm",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feGaussianBlur)({
    stdDeviation: "2.5",
    result: "blur",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMerge, __VLS_intrinsics.feMerge)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMergeNode)({
    in: "blur",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.feMergeNode)({
    in: "SourceGraphic",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.radialGradient, __VLS_intrinsics.radialGradient)({
    id: "center-glow",
    cx: "50%",
    cy: "50%",
    r: "50%",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.stop)({
    offset: "0%",
    'stop-color': "#6c63ff",
    'stop-opacity': "0.15",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.stop)({
    offset: "100%",
    'stop-color': "#6c63ff",
    'stop-opacity': "0",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.circle)({
    cx: "600",
    cy: "350",
    r: "300",
    fill: "url(#center-glow)",
});
for (const [star, i] of __VLS_vFor((__VLS_ctx.stars))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
        key: ('s' + i),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.circle, __VLS_intrinsics.circle)({
        cx: (star.x),
        cy: (star.y),
        r: (star.r),
        fill: "#e8e8f0",
        opacity: (0.15 + star.r * 0.2),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.animate)({
        attributeName: "opacity",
        values: (`${0.1 + star.r * 0.15};${0.4 + star.r * 0.3};${0.1 + star.r * 0.15}`),
        dur: "3s",
        begin: (`${star.delay}s`),
        repeatCount: "indefinite",
    });
    // @ts-ignore
    [viewBox, stars,];
}
for (const [edge, i] of __VLS_vFor((__VLS_ctx.edges))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
        key: ('e' + i),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.line)({
        x1: (__VLS_ctx.nodeMap[edge.from]?.x),
        y1: (__VLS_ctx.nodeMap[edge.from]?.y),
        x2: (__VLS_ctx.nodeMap[edge.to]?.x),
        y2: (__VLS_ctx.nodeMap[edge.to]?.y),
        stroke: (__VLS_ctx.isEdgeActive(edge) ? __VLS_ctx.nodeMap[edge.from]?.color : '#1e1e4a'),
        'stroke-width': (__VLS_ctx.isEdgeActive(edge) ? 1.5 : 0.5),
        'stroke-opacity': (__VLS_ctx.isEdgeActive(edge) ? 0.8 : 0.4),
        'stroke-linecap': "round",
    });
    // @ts-ignore
    [edges, nodeMap, nodeMap, nodeMap, nodeMap, nodeMap, isEdgeActive, isEdgeActive, isEdgeActive,];
}
for (const [node] of __VLS_vFor((__VLS_ctx.nodes))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
        ...{ onMouseenter: (...[$event]) => {
                __VLS_ctx.hoveredNode = node.id;
                // @ts-ignore
                [nodes, hoveredNode,];
            } },
        ...{ onMouseleave: (...[$event]) => {
                __VLS_ctx.hoveredNode = null;
                // @ts-ignore
                [hoveredNode,];
            } },
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.emit('navigate', node.path);
                // @ts-ignore
                [emit,];
            } },
        key: (node.id),
        ...{ class: "cursor-pointer" },
    });
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    if (node.size === 'lg') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.circle, __VLS_intrinsics.circle)({
            cx: (node.x),
            cy: (node.y),
            r: (40),
            fill: (node.color),
            'fill-opacity': "0.06",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.animate)({
            attributeName: "r",
            values: "38;44;38",
            dur: "4s",
            repeatCount: "indefinite",
        });
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.circle)({
        cx: (node.x),
        cy: (node.y),
        r: (__VLS_ctx.getNodeRadius(node.size)),
        fill: (__VLS_ctx.isNodeActive(node) ? node.color : node.color),
        'fill-opacity': (__VLS_ctx.isNodeActive(node) ? 1 : 0.7),
        filter: (node.size === 'lg' ? 'url(#glow-lg)' : node.size === 'md' ? 'url(#glow-md)' : 'url(#glow-sm)'),
    });
    if (__VLS_ctx.isNodeActive(node)) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.circle, __VLS_intrinsics.circle)({
            cx: (node.x),
            cy: (node.y),
            r: (__VLS_ctx.getNodeRadius(node.size) + 4),
            fill: "none",
            stroke: (node.color),
            'stroke-width': "1",
            'stroke-opacity': "0.4",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.animate)({
            attributeName: "r",
            values: (`${__VLS_ctx.getNodeRadius(node.size) + 2};${__VLS_ctx.getNodeRadius(node.size) + 8};${__VLS_ctx.getNodeRadius(node.size) + 2}`),
            dur: "2s",
            repeatCount: "indefinite",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.animate)({
            attributeName: "stroke-opacity",
            values: "0.4;0.1;0.4",
            dur: "2s",
            repeatCount: "indefinite",
        });
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.text, __VLS_intrinsics.text)({
        x: (node.x),
        y: (node.y + __VLS_ctx.getNodeRadius(node.size) + (node.size === 'lg' ? 22 : node.size === 'md' ? 16 : 13)),
        'text-anchor': "middle",
        fill: (__VLS_ctx.isNodeActive(node) ? '#e8e8f0' : '#8888aa'),
        'font-size': (node.size === 'lg' ? 13 : node.size === 'md' ? 11 : 9),
        'font-weight': (node.size === 'lg' ? 600 : 400),
        'font-family': "Space Grotesk, sans-serif",
    });
    (node.label);
    if (node.type === 'tutorial' && node.size !== 'lg') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.text, __VLS_intrinsics.text)({
            x: (node.x),
            y: (node.y - __VLS_ctx.getNodeRadius(node.size) - 6),
            'text-anchor': "middle",
            fill: "#555580",
            'font-size': "8",
            'font-family': "Fira Code, monospace",
        });
        (node.id.split('-').map(w => w[0]).join('').toUpperCase());
    }
    // @ts-ignore
    [getNodeRadius, getNodeRadius, getNodeRadius, getNodeRadius, getNodeRadius, getNodeRadius, getNodeRadius, isNodeActive, isNodeActive, isNodeActive, isNodeActive,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
