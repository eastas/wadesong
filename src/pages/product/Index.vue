<!--
 * @Date: 2022-05-31 15:54:20
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 16:51:30
 * @FilePath: \official_web\src\pages\product\Index.vue
-->
<template>
	<div class="head_box">{{ 'wadeSong'.toLocaleUpperCase() }}</div>

	<div class="sideNav">
		<div class="item">列表</div>
		<div class="item">卡片</div>
	</div>

	<div class="content_wrap">
		<div class="card">
			<img :src="getAssetsFile(curItem.imgSrc)" alt="" />
		</div>
	</div>
	<div class="list_box">
		<template v-for="item in product_list">
			<div class="prod_item b1b" @click="curItem = item">
				<img class="img" :src="getAssetsFile(item.imgSrc)" alt="" />
			</div>
		</template>
	</div>
	<!-- <div class="list_box">
		<template v-for="item in product_list2">
			<div class="prod_item b1b" @click="curItem = item">
				<img class="img" :src="getAssetsFile(item.imgSrc)" alt="" />
			</div>
		</template>
	</div> -->
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
const product_list2 = ref([
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

const curItem = ref(product_list.value[1])
onMounted(() => {})
</script>

<style lang="less" scoped>
.head_box {
	position: fixed;
	top: 0;
	font-size: 34px;
	padding: 4px 12px;
	color: antiquewhite;
	color: rgb(233, 35, 206);
	color: rgb(42, 233, 35);
	font-weight: bold;
	font-style: italic;
	// background-color: #fff9;
	width: 100%;
	z-index: 1;
}
.sideNav {
	position: fixed;
	right: 0;
	top: 40%;
	.item {
		padding: 4px;
		box-shadow: 0 0 1px #ccc;
		background-color: #fff6;
		margin: 4px;
	}
}
.list_box {
	// box-shadow: 0 0 1px rgba(231, 231, 231, 0.671);
	border-top: 1px solid #ccc;
	margin: 0 10px;
	margin-top: 10px;
	border-radius: 4px;
	overflow: hidden;

	// padding-top: 46px;
	// height: calc(100vh - 150px);
	display: flex;
	// flex-flow: row wrap;
	justify-content: space-around;
	height: 80px;

	.prod_item {
		width: 22%;
		text-align: center;
		background-color: #fffe;
		border: 1px solid #ccc;
		border-top: none;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		// margin-bottom: 4px;
		.img {
			height: 100%;
		}
	}
}
.content_wrap {
	width: 100%;
	padding-top: 30px;
	.card {
		margin: 0 auto;
		width: 90%;
		height: calc(100vh - 300px);
		border-radius: 8px;
		box-shadow: 0 0 2px #ccc;
		overflow: hidden;
		border: 1px dashed #fff;
		text-align: center;
		img {
			height: 100%;
		}
	}
}
</style>
