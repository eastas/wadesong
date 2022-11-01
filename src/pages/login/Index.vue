<!--
 * @Date: 2022-05-31 16:32:41
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 16:33:02
 * @FilePath: \official_web\src\pages\login\Index.vue
-->
<template>
	<div>登录页</div>
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
