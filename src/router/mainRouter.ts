/*
 * @Author: your name
 * @Date: 2021-10-29 16:52:01
 * @LastEditTime: 2022-05-31 16:58:20
 * @LastEditors: ql
 * @Description: In User Settings Edit
 * @FilePath: \official_web\src\router\mainRouter.ts
 */

import { RouteRecordRaw } from 'vue-router'

import Home from '@/pages/discover/Index.vue'
import { defineAsyncComponent } from 'vue'

let routes: Array<RouteRecordRaw> = [
	{
		path: '/wadesong/home',
		name: 'Home',

		meta: {
			title: '发现',
		},
		component: defineAsyncComponent(() => import(`@/pages/discover/Index.vue`)),
	},
	{
		path: '/wadesong/product',
		name: 'Product',

		meta: {
			title: '橱窗',
			showSub: false,
		},
		component: defineAsyncComponent(() => import(`@/pages/product/Index.vue`)),
	},
	{
		path: '/wadesong/dressRoom',
		name: 'DressRoom',

		meta: {
			title: '试衣',
			showSub: false,
		},
		component: defineAsyncComponent(() => import(`@/pages/dressRoom/Index.vue`)),
	},
	{
		path: '/wadesong/mine',
		name: 'Mine',

		meta: {
			title: '我的',
			showSub: false,
		},
		component: defineAsyncComponent(() => import(`@/pages/mine/Index.vue`)),
	},
]

export default routes
