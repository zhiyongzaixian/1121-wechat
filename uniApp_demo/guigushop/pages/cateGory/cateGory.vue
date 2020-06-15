<template>
	<view id='cateGoryContainer'>
		<view class="searchHeader">
			<view class="search">
				搜索商品
			</view>
		</view>
		<!-- 内容区 -->
		<view class="contentContainer">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class='navList'>
					<view class="navItem activeClass">
						居家生活
					</view>
				</scroll-view>
			</view>
			<view class="rightContainer"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	#cateGoryContainer
		.searchHeader
			padding 10upx 0
			.search
				width 90%
				height 60upx
				line-height 60upx
				text-align center
				margin 0 auto
				background #ededed
				border-radius 10upx
				font-size 26upx
		.contentContainer
			height calc(100vh - 80upx)
			display flex
			/* border-box 怪异盒模型： 计算宽高的时候： content + padding + border  标准盒模型: content-box*/
			box-sizing border-box
			border-top 1upx solid #333 /*有滚动条: 需要真机调试一下 */
			.leftContainer
				width 20%
				border-right 1upx solid #333333
				box-sizing border-box
				.navList
					height calc(100vh - 80upx)
					.navItem
						position relative
						font-size 28upx
						height 80upx
						line-height 80upx
						text-align center
						&.activeClass:after
							position: absolute
							top 10upx
							left 5upx
							content ''
							height 60upx
							width 2upx
							background #BB2C08
			.rightContainer
				width 80%
				
.test
	font-size 0
</style>
