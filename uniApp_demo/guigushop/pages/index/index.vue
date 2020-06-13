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
		<scroll-view scroll-x="true" class='navScroll' enable-flex>
			<view class="scrollItem activeClass">推荐</view>
			<view class="scrollItem">居家生活</view>
			<view class="scrollItem">美食酒水</view>
			<view class="scrollItem">服饰鞋包</view>
			<view class="scrollItem">推荐</view>
			<view class="scrollItem">居家生活</view>
			<view class="scrollItem">美食酒水</view>
			<view class="scrollItem">服饰鞋包</view>
			<view class="scrollItem">推荐</view>
			<view class="scrollItem">居家生活</view>
			<view class="scrollItem">美食酒水</view>
			<view class="scrollItem">服饰鞋包</view>
			<view class="scrollItem">推荐</view>
			<view class="scrollItem">居家生活</view>
			<view class="scrollItem">美食酒水</view>
			<view class="scrollItem">服饰鞋包</view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		
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
