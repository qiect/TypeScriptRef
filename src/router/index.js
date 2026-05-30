import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import TutorialPage from '@/pages/TutorialPage.vue';
import CheatSheetPage from '@/pages/CheatSheetPage.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/tutorial/:slug',
        name: 'tutorial',
        component: TutorialPage,
    },
    {
        path: '/cheatsheet',
        name: 'cheatsheet',
        component: CheatSheetPage,
    },
    {
        path: '/cheatsheet/:category',
        name: 'cheatsheet-category',
        component: CheatSheetPage,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});
export default router;
