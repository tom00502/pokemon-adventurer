import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: '/pokoQ&A',
            name: 'pokoQ&A',
            component: () => import('@/views/pokoQ&A.vue'),
        },
        {
            path: '/fieldwork',
            name: 'fieldwork',
            component: () => import('@/views/fieldwork.vue'),
        },
        {
            path: '/guild',
            name: 'guild',
            component: () => import('@/views/guildBattleView.vue'),
        },
        {
            path: '/flute',
            name: 'flute',
            component: () => import('@/views/fluteView.vue'),
        },
        {
            path: '/reincarnation',
            name: 'reincarnation',
            component: () => import('@/components/Reincarnation.vue'),
        },
        {
            path: '/star',
            name: 'star',
            component: () => import('@/views/StarView.vue'),
        },
    ],
})

export default router
