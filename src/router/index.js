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
            path: '/hunting',
            name: 'hunting',
            component: () => import('@/views/huntingView.vue'),
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
            path: '/distribution',
            name: 'distribution',
            component: () => import('@/views/distribution.vue'),
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
        {
            path: '/character',
            name: 'character',
            component: () => import('@/views/Character.vue'),
        },
        {
            path: '/redeem-code',
            name: 'redeem-code',
            component: () => import('@/views/RedeemCode.vue'),
        },
        {
            path: '/fetter',
            name: 'fetter',
            component: () => import('@/views/Fetter.vue'),
        },
    ],
})

export default router
