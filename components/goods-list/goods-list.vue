<template>
	<view class="goods_list">
		<view @click="navigator(item.id)" class="goods_item" v-for="item in goods" :key="item.id">
			<image src="../../static/img.png"></image>
			<view class="price">
				<text>¥{{item.sell_price}}</text>
				<text>¥{{item.market_price}}</text>
			</view>
			<view class="name">
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			"goods"
		],
		methods: {
			navigator(id) {
				this.$emit("goodsItemClick", id)
			}
		}
	}
</script>

<style lang="scss">
.goods_list {
			padding: 0 15px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.goods_item {
				background-color: #fff;
				width: 310rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;
				
				image {
					width: 80%;
					height: 150px;
					display: block;
					margin: auto;
				}
				
				.price {
					color: $shop-color;
					font-size: 30rpx;
				}
			}
		}
</style>
