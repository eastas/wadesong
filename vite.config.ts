/*
 * @Date: 2022-05-31 10:52:44
 * @LastEditors: ql
 * @Description: 描述
<<<<<<< HEAD
 * @LastEditTime: 2022-05-31 18:11:12
=======
 * @LastEditTime: 2022-05-31 17:19:51
>>>>>>> master
 * @FilePath: \official_web\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: '/src',
			},
		],
	},
	server: {
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hmr: true,
		open: '/index.html',
		proxy: {
			'/api': {
				// target: 'http://192.168.1.25:8085', //开发
				changeOrigin: true,
				ws: true,
				rewrite: (path) => path.replace(/^\/api\/api/, ''),
			},
		},
	},
})
