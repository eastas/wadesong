/*
 * @Author: your name
 * @Date: 2021-11-22 15:31:28
 * @LastEditTime: 2022-05-31 17:25:07
 * @LastEditors: ql
 * @Description: 项目 北京2441
 * @FilePath: \official_web\src\services\api\beijing.ts
 */

import api from '@/services/interceptor'

// 获取企业数量
export function getCampanyNumber(parm) {
	return api.get('/beijing/numberOfCompany', { params: parm })
}
// 获取企业融资事件
export function getFinanceEvent(parm) {
	return api.get('/beijing/financeEvent', { params: parm })
}
// 获取企业分布
export function getCompanyDistribute(parm) {
	return api.get('/beijing/companyDistribute', { params: parm })
}

// ***********************************************************

// 模板下载
export function downLoadTempleApi() {
	return api.post(
		'/admin/downtemple',
		{},
		{
			responseType: 'blob',
		}
	)
}

export function downLoadCompanyMsgApi() {
	return api.post(
		'/admin/downCompanyMsg',
		{},
		{
			responseType: 'blob',
		}
	)
}

// 上传文件
export function upLoadApi(parm) {
	return api.post('/upload/upload', parm, { withCredentials: true })
}
