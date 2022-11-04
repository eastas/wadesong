<!--
 * @Date: 2022-05-31 15:54:20
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 16:51:30
 * @FilePath: \official_web\src\pages\product\Index.vue
-->
<template>
	<div class="p_a" v-if="tip">{{ tip }}</div>
	<canvas class="full_screen" :ref="(e) => (canvasDom = e)"></canvas>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import * as THREE from 'three'
import CameraControls from 'camera-controls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' //控制器
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js' // gltf加载器
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js' // obj加载器
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js' // gltf加载器

// import { SubdivisionModifier } from 'three/examples/jsm/modifiers/SubdivisionModifier'

// import { GLTFLoader } from 'three'

import type {
	AmbientLight,
	AxesHelper,
	Clock,
	DirectionalLight,
	SpotLight,
	LightShadow,
	Mesh,
	OrthographicCamera,
	Scene,
	WebGLRenderer,
} from 'three'

import { useStore } from 'vuex'
import { TO_DISPLAY_STRING } from '@vue/compiler-core'
const props = defineProps<{
	data?: any
}>()
const tip = ref('')
const canvasDom = ref()
const scene: Scene = new THREE.Scene()

function init() {
	// Sizes
	const sizes = {
		width: canvasDom.value.offsetHeight,
		height: canvasDom.value.offsetHeight,
	}
	// Renderer
	const renderer = new THREE.WebGLRenderer({
		canvas: canvasDom.value,
		antialias: true,
		alpha: true,
	})
	// 创建雾

	// 创建场景
	const color = new THREE.Color('#051e38')
	scene.background = color
	// 环境光
	const ambient = new THREE.AmbientLight(0xfcfcfc, 0.8)

	scene.add(ambient)

	//平行光
	// const sl: DirectionalLight = new THREE.DirectionalLight(0xcccccc, 0.8)
	const sl: SpotLight = new THREE.SpotLight(0xfcfcfc, 0.8, 0)
	// const sl: SpotLight = new THREE.AmbientLight(0xfcfcfc)
	sl.castShadow = true
	sl.shadow.mapSize.width = 1024
	sl.shadow.mapSize.height = 1024
	sl.shadow.camera.near = 2
	sl.shadow.camera.far = 50

	// sl.position.set(10, -100, 400)

	scene.add(sl)

	// helper
	const cameraHelper = new THREE.CameraHelper(sl.shadow.camera)
	// scene.add(cameraHelper)

	// Camera相机
	const camera = new THREE.PerspectiveCamera(13, sizes.width / sizes.height, 1, 1000)
	camera.position.z = 20
	camera.position.x = 0
	camera.position.y = 0
	camera.rotateZ(Math.PI / 2)
	scene.add(camera)

	// 网格互助
	const gh = new THREE.GridHelper(sizes.width / 10, sizes.height / 10, 0x2c2c2c, 0x888888)
	// gh.rotateX(Math.PI / 2)
	scene.add(gh)

	//坐标辅助
	const axesHelper = new THREE.AxesHelper(5)
	scene.add(axesHelper)

	//
	//
	const loaderGlf = new GLTFLoader()
	const dracoLoader = new DRACOLoader()
	dracoLoader.setDecoderPath('/examples/js/libs/draco/')
	loaderGlf.setDRACOLoader(dracoLoader)
	// Load a glTF resource
	loaderGlf.load(
		// resource URL
		'/public/model/person/scifi_girl.glb',
		// called when the resource is loaded
		function (gltf) {
			tip.value = ''
			scene.add(gltf.scene)
			gltf.animations // Array<THREE.AnimationClip>
			gltf.scene // THREE.Group
			gltf.scenes // Array<THREE.Group>
			gltf.cameras // Array<THREE.Camera>
			gltf.asset // Object
			nextTick(() => {
				// camera.position.z = 20
				renderer.render(scene, camera)
			})
		},
		// called while loading is progressing
		function (xhr) {
			tip.value = ((xhr.loaded / xhr.total) * 100).toFixed(0) + '% loaded'
			console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
		},
		// called when loading has errors
		function (error) {
			console.log('An error happened')
		}
	)
	// obj
	const loaderObj = new OBJLoader()

	loaderObj.load(
		// resource URL
		'/public/model/person/xiong/男女_01.obj',

		// called when resource is loaded
		function (object) {
			scene.add(object)
		},
		// called when loading is in progresses
		function (xhr) {
			tip.value = ((xhr.loaded / xhr.total) * 100).toFixed(0) + '% loaded'

			console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
		},
		// called when loading has errors
		function (error) {
			console.log('An error happened')
		}
	)

	CameraControls.install({ THREE })

	const cameraControls = new CameraControls(camera, renderer.domElement)
	cameraControls.draggingDampingFactor = 1 // 拖动阻尼惯性

	renderer.setClearColor(0xcccccc)
	renderer.setSize(window.innerWidth, window.innerHeight)
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.shadowMap.enabled = true
	renderer.render(scene, camera)

	// 鼠标互助

	const ct = new OrbitControls(camera, renderer.domElement)
	ct.update()
	//监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
	ct.addEventListener('change', function () {
		renderer.render(scene, camera) //执行渲染操作
	})
	setTimeout(() => {
		// camera.position.z = 20
		renderer.render(scene, camera)
	}, 100)
}
function loaderGlb() {}
onMounted(() => {
	init()
})
</script>

<style lang="less" scoped>
div {
	color: rgb(240, 240, 240);
}
</style>
