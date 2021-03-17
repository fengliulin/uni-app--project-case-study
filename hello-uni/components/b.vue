<template>
	<view>
		这是b组件的数据：{{num}}
	</view>
</template>

<script>
	export default {
		name: "testb",
		data() {
			return {
				num: 0
			};
		},
		created() {
			// 监听全局的自定义事件
			uni.$on("updateNum", (data) => {
				this.num += data
			})
		}

	}
</script>

<style>

</style>
