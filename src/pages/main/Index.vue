<template>
	<div class="bg_wrap">
		<div class="tabs f_vc flex">
			<div class="head_box">{{ 'wadeSong'.toLocaleUpperCase() }}</div>

			<template v-for="item in all">
				<div
					@click="itemClick(item)"
					class="item"
					:class="{ act: route.matched[1].meta?.title === item?.meta?.title }"
				>
					{{ item.meta?.title }}
				</div>
			</template>
		</div>
		<div class="views">
			<router-view />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
defineProps<{
	data?: any
}>()
const router = useRouter()

const route = useRoute()
const all = computed(() => {
	return route.matched[0].children.filter((item) => !item.meta.notInNav)
})

function itemClick(item) {
	if (item.meta?.isForbidden) return
	if (route.matched[1].meta.title === item.meta.title) return
	router.push(item.path)
}

onMounted(() => {})
</script>

<style lang="less" scoped>
.bg_wrap {
	box-sizing: border-box;
	background-color: #b7cfe7;
	background-color: #051e38;
	background-color: #000000;
	height: 100vh;
	width: 100vw;
	color: #b7cfe7;
	.views {
		max-width: 80vw;
		min-width: 700px;
		margin: 0 auto;
	}
	.tabs {
		.head_box {
			// position: fixed;
			// top: 0;
			font-size: 34px;
			padding: 4px;
			
			color: antiquewhite;
			text-shadow: #000;

			font-weight: bold;
			font-style: italic;
			// background-color: #fff9;
			width: 100%;
			z-index: 1;
		}
		position: fixed;
		background-color: #051e38;
		background-color: #000000;
		// background-color: rgb(5, 184, 238);
		justify-content: space-around;
		font-size: 20px;
		font-weight: bold;
		width: 100%;
		top: 0;
		padding: 8px 20px;
		.item {
			color: #cdd7e0;
			color: #718ca3;

			padding: 8px;
			cursor: pointer;

			&.act {
				color: #1b3f5e;
				color: antiquewhite;

				font-size: 24px;
			}
		}
	}
}
</style>
