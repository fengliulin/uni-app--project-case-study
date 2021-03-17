<template>
	<view id="myView">
		这是一个test组件{{num}}
		这是父组件传递过来的数据{{title}}
		
		
		<button @click="sendNum" type="default">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		name:"test",
		data() {
			return {
				num: 3,
				intId: null
			};
		},
		props:[ // 接收父组件传来的信息
			"title"
		],
		
		methods: {
			sendNum() {
				console.log("给父亲传值")
				// 给父组件传值，第一个参数要在父组件模板使用的子组件属性添加事件@MyEven
				this.$emit("myEven", this.num)
			}
		},
		
		
		
		beforeCreate() { // 在实例初始化之后被调用
			console.log("实例已经开始初始化了") // 但是没有渲染
			console.log(this.num) // 拿不到数据
		},
		created() { // 在实例创建完成后被立即调用   一般初始化数据用
			console.log(this.num) // 可以拿到数据
			/* this.intId = setInterval(()=>{
				console.log("执行定时器")
			},1000) */
		},
		beforeMount() { // 在挂载开始之前被调用
			// 组件都还没挂载到页面上，输出result: null
			console.log("beforeMount测试" +  document.getElementById("myView")) 
		},
		mounted() { // 挂载到实例上去之后调用  // 一般操作dom
			// result:<uni-view data-v-3c06e94d="" data-v-57280228="" id="myView">这是一个test组件3</uni-view>
			console.log("mounted测试", document.getElementById("myView")) 
		},
		beforeDestroy() { // 实例销毁之前调用, 也就是v-if, 控制让组件消失，就会触发这个事件
			console.log("组件销毁了")
			clearInterval(this.intId) // 清除定时器
		}
	}
</script>

<style>

</style>
