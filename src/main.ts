/*
 * @Date: 2022-05-31 10:52:44
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 16:46:08
 * @FilePath: \official_web\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/common.less'

createApp(App).use(router).use(store).mount('#app')
