<!--
 * @Date: 2022-05-31 10:52:44
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 17:00:51
 * @FilePath: \official_web\src\pages\home\Index.vue
-->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()

const focusStatu = computed(() => store.getters.focusStatu)

defineProps<{ msg?: string }>()
</script>

<template>
	<div></div>
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
