import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginImp from "vite-plugin-imp";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: "ant-design-vue",
          style: (name) => `ant-design-vue/es/${name}/style`,
        },
      ],
    }),
  ], 
  base: '/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
 resolve: {
   alias: [
    { find: "@", replacement: path.resolve(__dirname, "src") },
    { find: /^~/, replacement: "" },
   ],
  }, 
});
