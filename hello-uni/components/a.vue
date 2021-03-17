<template>
	<view>
		<button @click="addNum">
			修改b组件的数据
		</button>
	</view>
</template>

<script>
	export default {
		name:"testa",
		data() {
			return {
				
			};
		},
		methods: {
			addNum() {
				// 触发全局的自定事件
				uni.$emit("updateNum", 10)
			}
		}
	}
</script>

<style>

</style>
