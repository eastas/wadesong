<!--
 * @Date: 2022-05-31 10:52:44
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 10:55:50
 * @FilePath: \official_web\src\components\HelloWorld.vue
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
	<h1>{{ msg }}</h1>
</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
