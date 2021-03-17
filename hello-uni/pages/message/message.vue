<template>
	<view>
		<button type="default" @click="chooseImg">上传图片</button>
		<image v-for="item in imgArr" @click="previewImg(item)"  v-bind:src="item"></image>
	
	<!-- #ifdef H5 -->
	<view>
		我希望只在h5页面中看见
	</view>
	<!-- #endif -->
	
	<!-- #ifdef MP-WEIXIN -->
	<view>
		我希望只在微信小程序中看见中看见
	</view>
	<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: []
			}
		},
		onLoad() {
			// #ifdef H5
			console.log("我希望在h5中打印")
			// #endif
			console.log("我希望在微信小程序中打印")
		},
		methods: {
			chooseImg() {
				console.log("上传图片")
				uni.chooseImage({
					count: 5, // 显示数量，在h5限制不住
					success: (res)=> { // 改成箭头函数，不用箭头函数this指向不到
						this.imgArr = res.tempFilePaths
						console.log(res)
					}
				})
			},
			
			previewImg(current) {
				uni.previewImage({ // 点击图片显示全屏预览
					current: current, 
					urls: this.imgArr,
					loop:true,
					indicator: "number"
				})
				console.log(current)
			}
		}
	}
</script>

<style>
</style>
