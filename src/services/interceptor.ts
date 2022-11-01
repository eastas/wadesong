/*
 * @Date: 2022-02-11 22:30:49
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 17:21:39
 * @FilePath: \official_web\src\services\interceptor.ts
 */

import axios from 'axios'
// import { ElLoading, ElMessage } from 'element-plus'
import qs from 'qs'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const instance = axios.create({
	baseURL: '/api',
	timeout: 20 * 1000,
	headers: { 'Content-Type': 'application/json' },
})
let loading = null
instance.interceptors.request.use(
	(config: any) => {
		if (config.url.indexOf('qiang') !== -1) {
			return config
		}
		// 获得token
		const token = window.sessionStorage.getItem('token') || ''
		if (token) {
			// 组装token
			config.headers['Authorization'] = 'Bearer ' + token
		}

		config.paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: 'brackets' })
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)

instance.interceptors.response.use(
	(res) => {
		if (res.status !== 200) {
		} else {
			if (res.config.url === '/api/common/download/template') {
				// 下载文件模板时，接口就会走这里
				return res
			}
			if (res.data.code === 401 || res.data.code === 403) {
				router.push({ name: 'Login' })
				console.log('权限无效, 请重新登录')
				return
			}
			if (!res.data.success) {
				// ElMessage({
				// 	message: res.data.message,
				// 	duration: 10000,
				// 	'show-close': true,
				// 	type: 'error',
				// } as any)
				return Promise.reject(res.data.message)
			} else {
				return res.data
			}
		}
	},
	(err) => {
		let response = err.response
		let message = response?.data?.message || err.message
		let config = err.config || { url: '' }
		if (response?.status && [401, 403].indexOf(response.status) != -1 && config.url.indexOf('/api/login') == -1) {
			router.push({ name: 'Login' })
		} else {
			if (message == '登录认证失败:Bad credentials') {
				message = '用户名或密码错误'
			}
			// myMessage({
			// 	message: message,
			// 	type: 'error',
			// })
			return Promise.reject(err)
		}
	}
)
export default instance
