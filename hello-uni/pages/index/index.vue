<template>
	<view class="content">
		<test v-if="flag" v-bind:title="title" @myEven="getNum"></test>
		<button @click="checkTest">切换test组件</button>

		这是子组件传递过来的数据{{num}}

		<p></p>
		<p></p>
		<br>
		<test-a></test-a>
		<test-b></test-b>
		<view>
		    <uni-calendar 
		    :insert="true"
		    :lunar="true" 
		    :start-date="'2019-3-2'"
		    :end-date="'2019-5-20'"
		    @change="change"
		     />
		</view>
		<view>
			<uni-calendar ref="calendar" :insert="false" @confirm="confirm" />
			<button @click="open">打开日历</button>
		</view>
	</view>
</template>

<script>
	import test from "../../components/test.vue"
	import testA from "../../components/a.vue"
	import testB from "../../components/b.vue"
	import uniCalendar from "../../components/uni-calendar/uni-calendar.vue"
	
	export default {
		components: {
			test,
			"test-a": testA,
			"test-b": testB,
			uniCalendar
			
		},
		data() {
			return {
				title: 'Hello',
				flag: true,
				num: 0
			}
		},
		methods: {
			getNum(num) {
				console.log(num)
				this.num = num
			},
			checkTest() {
				this.flag = !this.flag
			},
			open() {
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			},
			change(data) {
				console.log(data)
			}
		},
		onLoad(options) { // 参数会从上一个页面跳转到这里
			console.log("页面加载了", options);
		},
		onShow() {
			console.log("页面显示了");
		},
		onReady() {
			console.log("页面初次渲染完成了");
		},
		onHide() { // tabbar切换也会触发
			console.log("页面隐藏了");
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
