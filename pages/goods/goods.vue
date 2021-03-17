<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">-----我是有底线的------</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	
	export default {
		data() {
			return {
				pageindex: 1,
				goods:[],
				flag: false
			}
		},
		components: {
			"goods-list": goodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() { // 滑动底部获取数据
			if (this.goods.length < this.pageindex *10) {
				this.flag = true
			}
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh() { // 下拉刷新了
			this.pageindex = 1
			this.goods = []
			this.flag = false
			
			setTimeout(()=> {
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callBack) {
				const res = await this.$myRuquest({
					url: '/api/getgoods?pageindex=' + this.pageindex
				})
				console.log(res)
				this.goods = this.goods.concat(res.data.message)
				// if (callBack != null) {
				// 	callBack()
				// }
				callBack && callBack()
			},
			
			// 导航到商品详情页
			goGoodsDetail(id) {
				console.log("触发")
				uni.navigateTo({
					url: "/pages/good-detail/good-detail?id=" + id
				})
			},
			test() {
				console.log("Df")
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background-color: #eee;
	}
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		background-color: #FFFFFF;
	}
</style>
