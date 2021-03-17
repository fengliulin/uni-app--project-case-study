<template>
	<view>
		<view>导航跳转到学习</view>
		<navigator url="/pages/detail/detail?id=80&age=19">跳转至详情页</navigator>
		
		<!-- 跳转到带有tabbar页面的属性配置 -->
		<navigator url="/pages/message/message" open-type="switchTab">跳转至信息页</navigator>
	
		<!-- 也就是页面卸载了，重新打开页面 重定向，没有返回箭头了 -->
		<navigator url="/pages/detail/detail" open-type="redirect">跳转至详情页</navigator>
	
	
		<button @click="goDetail">跳转至详情页（编程式导航）</button>
		
		<button @click="goMessage">跳转至信息页（编程式导航）</button>
		
		<button @click="redirectDetail()">跳转到详情页并关闭当前页面（编程式导航）</button>
	</view>
</template>

<script>
	export default {
		onUnload() { // 页面卸载加载
			console.log("导航页面卸载了")
		},
		methods:{
			goDetail() { // 跳转到普通页面
				uni.navigateTo({
					url: "/pages/detail/detail?id=90"
				})
			},
			goMessage() { // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
				uni.switchTab({
					url: "/pages/message/message"
				})
			},
			redirectDetail() { // 关闭当前页面，跳转到应用内的某个页面。
				uni.redirectTo({
					url: "/pages/detail/detail"
				}) 
			}
		}
	}
</script>

<style>
</style>
