<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item>
				<image src="../../static/swiper/1.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/swiper/2.png"></image>
			</swiper-item>
		</swiper>

		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navIiemClick(item.paht)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods= "goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	
	export default {
		components: {
			"goods-list":goodsList
		},
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: "iconfont icon-ziyuan",
						title: "黑马超市",
						paht: "/pages/goods/goods"
					},
					{
						icon: "iconfont icon-guanyuwomen",
						title: "联系我们",
						paht: "/pages/contact/contact"
					},
					{
						icon: "iconfont icon-tupian",
						title: "社区图片",
						paht: "/pages/pics/pics"
					},
					{
						icon: "iconfont icon-shipin",
						title: "学习视频",
						paht: "/pages/videos/videos"
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			async getSwipers() {
				const res = await this.$myRuquest({
					url: '/api/getlunbo'
				})
				console.log(res)
				this.swipers = res.data.message
			},
			async getHotGoods() {
				const res = await this.$myRuquest({
					url: '/api/getgoods?pageindex=1'
				})
				console.log(res)
				this.goods = res.data.message
			},
			
			// 导航点击的处理函数
			navIiemClick(url) {
				uni.navigateTo({
					url
				})
			},
			
			// 导航到商品详情页
			goGoodsDetail(id) {
				console.log("触发")
				uni.navigateTo({
					url: "/pages/good-detail/good-detail?id=" + id
				})
			}
		}
	}
</script>

<style lang="scss">
	/* 推荐商品 */
	.hot_goods {
		
		background-color: #eee;
		overflow: hidden;
		margin-top: 10px;

		.tit {
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 10px auto;
		}
		
		
	}
	.home swiper {
		width: 750rpx;
		height: 380rpx;
	}

	.home swiper swiper-item image {
		height: 100%;
		width: 100%;
	}

	.nav {
		display: flex;
		justify-content: space-around;
	}

	.nav .nav_item {
		width: 20%;
		text-align: center;
	}

	.nav .nav_item view {
		width: 120rpx;
		height: 120rpx;
		background-color: #b50e03;
		border-radius: 60rpx;
		margin: 10px auto;
		line-height: 120rpx;
		color: #fff;
		font-size: 50rpx;
	}

	.nav .nav_item .icon-tupian {
		font-size: 40rpx;
	}

	.nav .nav_item text {
		font-size: 30rpx;
	}
</style>
