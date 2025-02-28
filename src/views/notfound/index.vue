<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
        <div class="space-y-6">
          <!-- 404数字 -->
          <h1 class="text-9xl font-extrabold text-indigo-600">404</h1>
          
          <!-- 错误信息 -->
          <div class="text-center space-y-4">
            <h2 class="text-2xl font-bold text-gray-900">页面未找到</h2>
            <p class="text-gray-500">
              抱歉，您访问的页面不存在或已被移除。
            </p>
          </div>

          <!-- 返回按钮 -->
          <div class="mt-6">
            <button
              @click="goHome"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              返回首页
            </button>
          </div>

          <!-- 装饰图案 -->
          <div class="mt-8 flex justify-center">
            <svg
              class="h-32 w-32 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 14h.01M12 16h.01M12 18h.01M12 20h.01M12 22h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script> 