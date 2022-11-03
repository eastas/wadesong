<!--
 * @Date: 2022-05-31 15:54:20
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 16:51:30
 * @FilePath: \official_web\src\pages\product\Index.vue
-->
<template>
	<div class="head_box">wadeSong</div>
	<div class="list_box">
		<template v-for="item in product_list">
			<div class="prod_item" @click="curItem = item">
				<img class="img" :src="getAssetsFile(item.imgSrc)" alt="" />
			</div>
		</template>
	</div>
	<div class="content_wrap">
		<div class="card b1r">
			<img :src="getAssetsFile(curItem.imgSrc)" alt="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import getAssetsFile from '@/utils/pub-use'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const props = defineProps<{
	data?: any
}>()

const product_list = ref([
	{
		name: '袄',
		type: 'gentel',
		sex: 'man',
		imgSrc: 'draft/aozi.jpg',
	},
	{
		name: 'jezz',
		type: 'cough',
		sex: 'man',
		imgSrc: 'draft/tao2.jpg',
	},
	{
		name: '卫衣',
		type: 'cough',
		sex: 'man',
		imgSrc: 'draft/wyi.jpg',
	},
	{
		name: '西',
		type: 'cough',
		sex: 'man',
		imgSrc: 'draft/xifu.jpg',
	},
])

const curItem = ref(product_list.value[0])
onMounted(() => {})
</script>

<style lang="less" scoped>
.head_box {
	position: fixed;
	top: 0;
	font-size: 30px;
	padding: 8px 12px;
	background-color: #fff9;
	width: 100%;
	z-index: 1;
}
.list_box {
	padding-top: 42px;
	// height: calc(100vh - 150px);
	display: flex;
	// flex-flow: row wrap;
	justify-content: space-around;
	.prod_item {
		width: 46%;
		margin-bottom: 4px;
		.img {
			width: 100%;
		}
	}
}
.content_wrap {
	width: 100%;
	.card {
		margin: 0 auto;
		width: 90%;
		height: calc(100vh - 300px);
		border-radius: 8px;
		box-shadow: 0 0 2px #ccc;
		overflow: hidden;
		border: 1px dashed #fff;
		img {
			width: 100%;
		}
	}
}
</style>
