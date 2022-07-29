import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RouteNames from '@/enums/route-names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.NewsFeed,
    component: () => import('../views/newsfeed-view.vue'),
  },
  {
    path: '/user',
    name: RouteNames.Home,
    component: () => import('../views/user-view.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
