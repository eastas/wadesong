/*
 * @Author: your name
 * @Date: 2021-10-29 09:53:51
 * @LastEditTime: 2022-05-31 16:52:27
 * @LastEditors: ql
 * @Description: In User Settings Edit
 * @FilePath: \official_web\src\router\index.ts
 */

import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '@/pages/login/Index.vue'

import mainRouter from './mainRouter'
import { defineAsyncComponent, ref } from 'vue'

let routes: Array<RouteRecordRaw & { hidden?: boolean }> = [
	{
		path: '/',
		redirect: '/wadesong',
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/wadesong',
		name: 'Wadesong',
		redirect: '/wadesong/home',
		component: defineAsyncComponent(() => import(`@/pages/main/Index.vue`)),
		children: mainRouter,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const locationTo = ref('')
router.beforeEach((to: any, from: any, next: any) => {
	if (to.name === 'Login') {
		window.sessionStorage.setItem('token', '')
		window.sessionStorage.setItem('userInfo', '')
		next()
	} else {
		next()
		// if (window.sessionStorage.getItem('token')) {
		// 	next()
		// } else {
		// 	if (to.name !== 'Login') {
		// 		locationTo.value = to.name
		// 	} else {
		// 		locationTo.value = ''
		// 	}
		// 	next({ name: 'Login' })
		// }
	}
})
export default router
