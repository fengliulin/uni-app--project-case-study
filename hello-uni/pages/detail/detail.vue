<template>
	<view>
		<view class="box2" hover-class="box2-active">
			<view hover-stay-time="0.1" hover-start-time="0.1" hover-stop-propagation hover-class="box-active"
				class="box">
				我是一个大盒子
			</view>
		</view>
		<view>
			<button size="mini" disabled="true">按钮</button>
		</view>
		<view>
			<image mode="aspectFill" src="../../static/tabs/message-active.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(options) { // 接收传过来的参数， options
			console.log(options)
		},
		methods: {

		},
	}
</script>

<style>
	.box {
		width: 100px;
		height: 100px;
		background-color: green;
	}

	.box-active {
		background-color: red;
	}

	.box2 {
		width: 200px;
		height: 200px;
		background-color: blue;
	}

	.box2-active {
		background-color: pink;
	}
</style>
