/*
 * @Author: your name
 * @Date: 2021-10-29 16:52:01
 * @LastEditTime: 2022-05-31 16:58:20
 * @LastEditors: ql
 * @Description: In User Settings Edit
 * @FilePath: \official_web\src\router\mainRouter.ts
 */

import { RouteRecordRaw } from 'vue-router'

import Home from '@/pages/home/Index.vue'

let routes: Array<RouteRecordRaw> = [
	{
		path: '/home',
		name: 'Home',

		meta: {
			title: '首页',
		},
		component: Home,
	},
	{
		path: '/product',
		name: 'Product',

		meta: {
			title: '产品',
			showSub: false,
		},
		component: () => import('@/pages/product/Index.vue'),
	},
]

export default routes
