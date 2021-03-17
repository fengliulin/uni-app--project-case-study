<template>
	<view class="contact">
		<image class="img" src="../../static/swiper/2.png"></image>
	
	<view class="info">
		<view>联系电话: 18111111111</view>
		<view>小区地址：xxxxxxxxxxxxxxxxx</view>
	</view>
	<map name="" :longitude="longitude" :latitude="latitiude"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 0,
				latitiude: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.img {
		width: 750rpx;
		width: 300px;
	}
	.info {
		view {
			line-height: 50rpx;
			border-bottom: 1px solid red;
		}
	}
	.map {
		
	}
</style>
