<!--
 * @Date: 2022-05-31 15:54:20
 * @LastEditors: ql
 * @Description: 描述
 * @LastEditTime: 2022-05-31 16:51:30
 * @FilePath: \official_web\src\pages\product\Index.vue
-->
<template>
	<div class="sideNav">
	  <div class="item">列表</div>
	  <div class="item">卡片</div>
	</div>
  
	<div class="content_wrap ">
	  <div class="card p_r">
		<img :src="getAssetsFile(curItem.imgSrc)" alt="" />
		<template v-for="(el, i) in curItem?.commpont">
		  <div
			class="sub p_a"
			v-if="el.name"
			:class="{
			  p_lt: i === 0,
			  p_lb: i === 1,
			  p_lc: i === 2,
			  p_rt: i === 3,
			  p_rc: i === 4,
			  p_rb: i === 5,
			  p_cb: i === 6,
			  p_cc: i === 7,
			}"
		  >
			<img :src="getAssetsFile(el.imgSrc)" alt="" />
			<h4 class="">{{ el.name }}</h4>
			<div class="">
			  ￥<b style="font-size: 26px">{{ el.price }}</b>
			</div>
		  </div>
		</template>
	  </div>
	</div>
  
	<div class="list_wrap p_lt">
	  <span style="padding-left: 12px"> WADESONG2023aw 橡树系列</span>
	  <div class="list_box p_r">
		<div class="classType p_a p_lt">套装</div>
		<template v-for="item in tao_list.filter((el) => el.type === 't')">
		  <div
			class="prod_item"
			:class="{ act: curItem.name === item.name }"
			@click="curItem = item"
		  >
			<img class="img" :src="getAssetsFile(item.imgSrc)" alt="" />
		  </div>
		</template>
	  </div>
	  <div class="list_box singel p_r">
		<div class="classType p_a p_lt">单件</div>
  
		<template v-for="item in sigle_list.filter((el) => el.type === 't')">
		  <div
			class="prod_item p_r"
			:class="{ act: curItem.name === item.name }"
			@click="curItem = item"
		  >
			<img class="img" :src="getAssetsFile(item.imgSrc)" alt="" />
			<div class="tip p_a p_lb">
			  <h6>
				{{ item.name }}
			  </h6>
			  <div style="text-align: center">￥{{ item.price }}</div>
			</div>
		  </div>
		</template>
	  </div>
	</div>
  
	<div class="info" style="">
		<h3 style="color: #fff;margin-bottom: 4px;">设计灵感</h3> 
		<p>源于舒婷致橡树</p>
	  <p>爱情是是伟大的 ，因为爱情我们充满希望。 爱情可以使我们跨越国籍、 肤色、 种族甚至性别 。
		<br>
		所以在第一个系列我想以爱情为起点， 希望每个人在爱的包围下变得坚强勇敢。不同于传统关于两个人的爱情，我这次选的是两棵树的爱情。<br>听他们在风里呢喃，但没有人听懂他们的言语。</p>
	</div>
  </template>
  
  <script setup lang="ts">
  import getAssetsFile from "@/utils/pub-use";
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { sigle_list, tao_list } from "../mockData";
  const props = defineProps<{
	data?: any;
  }>();
  
  const curItem = ref(tao_list.filter((el) => el.type === 't')[0]);
  onMounted(() => {});
  </script>
  
  <style lang="less" scoped>
  .info{
	position:fixed ;top:150px;right:80px;width:300px;white-space: wrap;max-height: 60vh;
	p{
		line-height: 1.6em;
	}

  }
  .head_box {
	// position: fixed;
	top: 0;
	font-size: 34px;
	padding: 4px;
	color: rgb(233, 35, 206);
	color: rgb(42, 233, 35);
	color: rgb(22, 1, 1);
	color: antiquewhite;
	text-shadow: #000;
  
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
  .list_wrap {
	position: absolute;
	top: 80px;
	width: 386px;
	overflow-y: auto;
	height: calc(100vh - 100px);
  }
  .list_box {
	border-top: 1px solid #ccc;
	margin: 0 10px;
	margin-top: 10px;
	border-radius: 4px;
	padding-left: 30px;
  
	display: flex;
	flex-flow: row wrap;
  
	height: 180px;
	.classType {
	  font-size: 12px;
	  color: #fff;
	  top: 10px;
	  left: 4px;
	}
	.prod_item {
	  cursor: pointer;
	  width: 44%;
	  height: 100%;
	  text-align: center;
	  background-color: #fffe;
	  border: 1px solid #ccc;
	  border-top: none;
	  border-bottom-left-radius: 4px;
	  border-bottom-right-radius: 4px;
	  margin: 4px;
	  &.act {
		background-color: #fff;
		transition: all 300ms ease-in-out;
		.tip {
		  color: rgb(0, 0, 0);
		}
	  }
  
	  .img {
		height: 90%;
	  }
  
	  .tip {
		width: 100%;
		font-size: 14px;
		color: rgb(94, 67, 67);
		padding-left: 6px;
	  }
	}
  }
  
  .singel {
	.prod_item {
	  .img {
		height: 80%;
	  }
	}
  }
  .content_wrap {
	width: 100%;
	padding-top: 100px;
  
	.card {
	  // background-color: #fff;
	  // margin: 0 auto;
	  margin-left: 200px;
	  width: 80%;
	  height: calc(100vh - 450px);
	  height: calc(100vh - 250px);
	  border-radius: 8px;
	//   box-shadow: 0 0 2px #ccc;
	  overflow: hidden;
	  border: 1px dashed rgba(255, 255, 255, 0.5);
	  text-align: center;
	  img {
		height: 100%;
	  }
	  .sub {
		background-color: rgba(255, 255, 255, 0.3);
  
		width: 25%;
		height: 30%;
		//   border: 1px dashed #ccc;
		text-align: center;
  
		img {
		  height: 80%;
		}
	  }
	}
  }
  </style>
  