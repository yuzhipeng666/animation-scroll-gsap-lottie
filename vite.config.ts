import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path"; // 此处如果报错则安装 node/path依赖

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },

})
