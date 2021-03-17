<template>
	<view>
		<view>
			这是列表页
		</view>
		<!-- <view class="box-item" v-for="item in list">
			{{item}}
		</view> -->
		<button @click="pullDown">下拉刷新</button>
		
		<button type="primary" @click="setStorage">存储数据</button>
		<button type="primary" @click="getStorage">获取数据</button>
		<button type="primary" @click="removeId">移除id</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					"前端", "java", "UI", "测试", "大数据","前端", "java", "UI", "测试", "大数据"
				]
			}
		},
		onPullDownRefresh() {
			console.log("触发了下拉刷新");
			this.list=["前端1", "java2", "UI3", "测试4", "大数据5"]
			setTimeout(()=>{
				uni.stopPullDownRefresh(); //关闭下拉刷新
			},1000)
		},
		onReachBottom() { // 左侧的滚动条到底部
			console.log("页面触底了")
			this.list = [...this.list, ...["前端1", "java2", "UI3", "测试4", "大数据5"]]
		},
		methods: {
			setStorage() {
				/* uni.setStorage({
					key: "id",
					data: "80",
					success() { // 成功的回调
						console.log("存储成功")
					}
				}) */
				uni.setStorageSync("id", 100);
			},
			getStorage() {
				/* uni.getStorage({
					key: "id",
					success(res) {
						console.log("获取成功," + res.data)
					}
				}) */
				try {
				    const value = uni.getStorageSync('id');
				    if (value) {
				        console.log(value);
				    }
				} catch (e) {
				    // error
				}
			},
			removeId() {
				/* uni.removeStorage({
					key:"id",
					success() {
						console.log("删除成功");
					}
				}) */
			uni.removeStorageSync('id');
			},
			
			
			pullDown() { // 点击按钮触发下
				uni.startPullDownRefresh()
			}
		}
	}
</script>

<style>
	.box-item {
		height: 100px;
		line-height: 100px;
	}
</style>
