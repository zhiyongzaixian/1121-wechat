<template>
	<view class="cateGorysContainer">
		<view class="cateGoryItem" v-for="(item, index) in indexData.categoryModule" :key='index'>
			<image class='cateImg' :src="item.titlePicUrl" mode=""></image>
			<scroll-view scroll-x="true" class='scrollView'>
				<view class="scrollItem" v-for="(scrollItem, index) in item.itemList" :key='index'>
					<image :src="scrollItem.showPicUrl" mode=""></image>
					<text>{{scrollItem.name}}</text>
				</view>
				<view class="scrollItem more">
					查看更多>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed: {
			...mapState({
				indexData: state => state.indexData.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cateGorysContainer
		.cateGoryItem
			margin-top 20upx
			.cateImg
				width 100%
				height 370upx
			.scrollView
				width 100%
				white-space nowrap
				.scrollItem
					display inline-block
					width 200upx
					margin-left 20upx
					vertical-align top
					&.more
						width 200upx
						height 200upx
						text-align center
						line-height 200upx
						font-size 28upx
						background #eee
					image
						width 200upx
						height 200upx
						background #eee
					text
						display block
						font-size 26upx
						display -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow hidden
						white-space pre-wrap
</style>
