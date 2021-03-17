<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image src="../../static/swiper/2.png"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>¥{{info.sell_price}}</text>
				<text>¥{{info.market_price}}</text>
			</view>
			<view class="goods_name">
				{{info.title}}
			</view>
		</view>

		<view class="line"></view>

		<view class="box2">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>

		<view class="line"></view>

		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>

		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'

	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				id: 0,
				swipers: [],
				info: {},
				content: "",
				options: [

					{
						icon: 'headphones',
						text: '客服'
					},
					{
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor: '#007aff',
						infoColor: "red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}
				],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.getSwipers()
			this.getDetailInfo()
			this.getDetailContent()
		},
		methods: {
			async getSwipers() {
				const res = await this.$myRuquest({
					url: '/api/getthumimages/' + this.id
				})
				console.log(res)
				this.swipers = res.data.message
			},
			async getDetailInfo() {
				const res = await this.$myRuquest({
					url: '/api/goods/getinfo/' + this.id
				})
				console.log(res)
				this.info = res.data.message[0]
			},
			async getDetailContent() {
				const res = await this.$myRuquest({
					url: '/api/goods/getdesc/' + this.id
				})
				console.log(res)
				this.content = res.data.message[0].content
			},
			
			onClick (e) {
			  uni.showToast({
			    title: `点击${e.content.text}`,
			    icon: 'none'
			  })
			},
			buttonClick (e) {
			  console.log(e)
			  this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		height: 700rpx;

		image {
			height: 100%;
			width: 100%;
		}
	}

	.box1 {
		padding: 10px;

		.price {
			font-size: 30rpx;
			color: $shop-color;

			text:nth-child(2) {
				color: #ccc;
				font-size: 28px;
				text-decoration: line-through;
			}
		}

		.goods_name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}

	.box2 {
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}

	.box3 {
		.tit {
			font-size: 32rpx;
			padding-left: 10px;
		}

		.content {
			padding: 10px;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;

		}
	}
	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
