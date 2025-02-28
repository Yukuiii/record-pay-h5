<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 顶部导航栏 -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- 左侧 Logo 和导航链接 -->
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold text-indigo-600">Logo</h1>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                首页
              </a>
              <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                产品
              </a>
              <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                关于
              </a>
            </div>
          </div>

          <!-- 右侧用户信息 -->
          <div class="flex items-center">
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <!-- 用户头像下拉菜单 -->
              <div class="ml-3 relative">
                <div>
                  <button
                    @click="toggleUserMenu"
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span class="sr-only">打开用户菜单</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  v-show="isUserMenuOpen"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    个人信息
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    设置
                  </a>
                  <a
                    @click="handleLogout"
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    退出登录
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容区 -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">欢迎回来！</h2>
          <p class="text-gray-600">这里是首页内容区域，你可以根据需要自定义内容。</p>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="bg-white shadow mt-8">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 text-sm">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const router = useRouter()
const isUserMenuOpen = ref(false)

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const handleLogout = () => {
  // 清除token
  localStorage.removeItem('token')
  // 跳转到登录页
  router.push('/login')
}

// 点击其他地方关闭用户菜单
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target
    if (!target.closest('.relative')) {
      isUserMenuOpen.value = false
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', () => {})
})
</script> 