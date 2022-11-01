/*
 * @Author: your name
 * @Date: 2021-10-29 13:52:21
 * @LastEditTime: 2022-05-31 16:44:39
 * @LastEditors: ql
 * @Description: In User Settings Edit
 * @FilePath: \official_web\src\store\index.ts
 */
import { createStore } from 'vuex'
const store = createStore({
	state: {
		userInfo: null, //当前用户信息
		areaCodeStatue: false, //记录区域是否修改

		focusStatu: false,
		// 页面间 路由跳转传值,
		fromItem: null,
		fromItemMainInd: null,
		// 面包屑导航数据
		breadNavData: null,
		// 缩略导航数据
		OmitNavData: null,
		// 地图传的areaCode
		areaCode: null,
		// 词云数据
		wordData: null,
	},
	mutations: {
		userInfo(state: any, data?: boolean) {
			state.userInfo = data
			window.sessionStorage.setItem('userInfo', JSON.stringify(data))
		},
		areaCodeStatue(state: any, data?: boolean) {
			state.areaCodeStatue = data
		},
		focusStatu(state: any, data?: boolean) {
			state.focusStatu = data
		},
		OmitNavData(state: any, data?: any) {
			if (data) {
				state.OmitNavData = data
				window.sessionStorage.setItem('OmitNavData', JSON.stringify(data))
			} else {
			}
		},
		//   面包屑
		breadNavData(state: any, data?: any) {
			if (data) {
				state.breadNavData = data
			}
			if (state.breadNavData) window.sessionStorage.setItem('breadNavData', JSON.stringify(data))
		},
		fromItem(state: any, data: any) {
			state.fromItem = data
			window.sessionStorage.setItem('fromItem', JSON.stringify(data))
		},

		areaCode(state: any, data: any) {
			state.areaCode = data
		},
		wordData(state: any, data: any) {
			state.wordData = data
		},
	},
	actions: {},
	getters: {
		userInfo(state) {
			if (state.userInfo) {
				return state.userInfo
			} else {
			}
			//   const res = await getUserInfo()
			//   return res
		},
	},
})
export default store
