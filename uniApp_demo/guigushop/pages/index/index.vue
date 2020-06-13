<template>
	<view id="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image src="/static/images/logo.png" mode=""></image>
			<view class="searchInput">
				<i class='iconfont icon-sousuo'></i>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button>登录</button>
		</view>
		<!-- 导航 -->
		<scroll-view scroll-x="true" class='navScroll' enable-flex v-if="indexData.kingKongModule">
			<view class="scrollItem activeClass"  v-for="(navItem, index) in indexData.kingKongModule.kingKongList"  :key='index'>{{navItem.text}}</view>
		</scroll-view>
	</view>

</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data(){
			return {
				indexData: {}
			}
		},
		// uni-app中即支持小程序的声明周期函数，也支持Vue的生命周期函数
		// 尽可能使用Vue的生命周期函数，小程序的生命周期能不用就不用
		// onLoad(){
		// 	console.log('onLoad')
		// 	console.log('页面开始加载')
		// },	
		mounted() {
			// let result = await request('/getIndexData')
			this.getIndexData()
		},
		methods: {
			async getIndexData(){
				let result =  await request('/api/getIndexData')
				if(result){
					this.indexData = result
				}
			}
		}
		
	}
</script>

<style lang="stylus">
	#indexContainer
		.header
			display flex
			padding 10upx 0
			image 
				width 140upx
				height 40upx
				margin 10upx 20upx
			.searchInput
				position relative
				height 60upx
				background #eee
				input
					margin-left 50upx
				.placeholder
					font-size 26upx
					text-align center
				.iconfont
					position absolute
					left 10upx
					top 25%
					font-size 30upx
			button
				width 144upx
				height 60upx
				line-height 60upx
				text-align center
				font-size 24upx
				margin 0 10upx
				color #b4282d
		.navScroll
			display flex
			white-space nowrap
			height 80upx
			.scrollItem 
				display inline-block
				height 80upx
				line-height 80upx
				width 140upx
				text-align center
				font-size 28upx
				margin 0 10upx
				box-sizing border-box
				&.activeClass
					border-bottom 1upx solid #B4282D
				
.test
	font-size 0
</style>
