<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view v-for="(item, index) in cates" :key=item.id @click="leftClickHandle(index, item.id)" :class="active===index? 'active' : ''">
			{{item.title}}
			</view>
			
		</scroll-view>
		
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData">
				<image @click="previewImg" src="../../static/swiper/1.png"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData:[]
			}
		},
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRuquest({
					url: "/api/getimgcategory"
				})
				console.log(res)
				this.cates = res.data.message
				
				this.leftClickHandle(0, this.cates[0].id)
			},
			async leftClickHandle(index, id) {
				this.active = index
				console.log(id)
				// 获取右侧数据
				const res = await this.$myRuquest({
					url: "/api/getimages/" + id
				})
				
				console.log(res)
				this.secondData = res.data.message
			},
			previewImg(current) { // 参数显示的 {type: "click", timeStamp: 7438.205000013113, detail: {…}, target: {…}, currentTarget: {…}, …}
				console.log(current)
				const urls = this.secondData.map((item)=>{
					return item.img_url
				})
				console.log(urls)
				uni.previewImage({
					urls: urls, // 预览显示的所有图片，左右滑动看
					current: current
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	
	.pics {
		display: flex;
		height: 100%;
		.left {
			height: 100%;
			width: 200rpx;
			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
		}
		.active {
			background-color: $shop-color;
			color: #fff;
		}
		.right {
			height: 100%;
			width: 500rpx;
			margin: 0 auto;
			.item {
				image {
					width: 530rpx;
					height: 530rpx;
					border-radius: 5px;
				}
			}
		}
	}
</style>
