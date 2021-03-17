<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		components: {
			"news-item": newsItem
		},
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$myRuquest({
					url: "/api/getnewslist"
				})
				console.log(res)
				this.newsList = res.data.message
			},
			goDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: "/pages/news-detail/news-detail?id=" + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.news{
		
	}
</style>
