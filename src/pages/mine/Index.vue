<!--
 * @Date: 2022-05-31 15:54:20
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 16:51:30
 * @FilePath: \official_web\src\pages\product\Index.vue
-->
<template>
	<div>产品页</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const props = defineProps<{
	data?: any
}>()

onMounted(() => {})
</script>

<style lang="less" scoped>
div {
	color: black;
}
</style>
