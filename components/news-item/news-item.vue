<template>
	<view>
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image src="../../static/icon/cart-active.png"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text> 
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"news-item",
		data() {
			return {
				
			};
		},
		props: ["list"],
		filters: { // 过滤器
			formatDate(date) {
				console.log(date)
				const newDate = new Date(date)
				const year = newDate.getFullYear()
				const month = newDate.getMonth().toString().padStart(2,0)
				const day = newDate.getDay().toString().padStart(2,0)
				return year + "-" + month + "-" + day
				
			}
		},
		methods: {
			navigator(id) {
				this.$emit("itemClick", id)
			}
		}
	}
</script>

<style lang="scss">
.news_item {
			padding: 10rpx 20rpx;
			display: flex;
			image {
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
		}
		.right{
			display: flex;
			margin-left: 15px;
			flex-direction: column;
			justify-content: space-between;
			.tit {
				font-size: 20px;
			}
			text:nth-child(2) {
				margin-left: 30rpx;
			}
		}
</style>
