import { createRouter, createWebHistory } from 'vue-router'

// 路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  // 404页面配置
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notfound/index.vue')
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 白名单路由
const whiteList = ['/login']

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  
  if (token) {
    if (to.path === '/login') {
      // 已登录状态下访问登录页面，重定向到首页
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      // 未登录可以访问白名单页面
      next()
    } else {
      // 未登录且访问非白名单页面，重定向到登录页
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router
