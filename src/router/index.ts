import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/check/index.vue'),
    meta: {
      title: 'Check',
    },
  },
  {
    path: '/offer',
    component: () => import('@/views/offer/index.vue'),
    meta: {
      title: 'Offer',
    },
  },
  {
    path: '/failure',
    component: () => import('@/views/failure/index.vue'),
    meta: {
      title: 'Failure',
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
