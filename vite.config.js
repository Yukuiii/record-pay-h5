import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: [
        'vue',
        'vue-router',
      ],
      // 生成自动导入的类型声明文件
      dts: 'src/auto-imports.d.ts',
      // 自动导入目录下的模块
      dirs: [
        'src/composables/**',
        'src/stores/**'
      ],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 自动导入的组件目录
      dirs: ['src/components'],
      // 组件的有效文件扩展名
      extensions: ['vue'],
      // 配置type文件生成位置
      dts: 'src/components.d.ts',
      // 自动导入组件
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
