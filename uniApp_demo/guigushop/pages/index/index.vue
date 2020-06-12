<template>
	<view id="indexContainer">
		<view class="header">
			<image src="/static/images/logo.png" mode=""></image>
			<view class="searchInput">
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button>登录</button>
		</view>
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
				height 60upx
				background #eee
				.placeholder
					font-size 26upx
					text-align center
			button
				width 144upx
				height 60upx
				line-height 60upx
				text-align center
				font-size 24upx
				margin 0 10upx
				color #b4282d
</style>
