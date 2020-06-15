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
					<view class="navItem " :class="{activeClass: navId === navItem.id}" @click="changeNavId(navItem.id)" v-for="(navItem, index) in cateGoryList" :key='navItem.id'>
						{{navItem.name}}
					</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class='rightScroll'>
					<view class='contentList'>
						<image class="contentImg" :src="cateGoryObj.imgUrl" mode=""></image>
						<view class="listItem" v-for='(item, index) in cateGoryObj.subCateList' :key='item.id'>
							<image :src="item.wapBannerUrl" mode=""></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				cateGoryList: [],
				navId: '', // 导航标识id
			};
		},
		mounted() {
			// 发送请求的函数
			this.getCateGoryDatas()
		},
		methods: {
			async getCateGoryDatas(){
				this.cateGoryList = await request('/getCateGoryDatas')
				this.navId = this.cateGoryList[0].id
			},
			changeNavId(navId){
				this.navId = navId
			}
		},
		computed: {
			cateGoryObj(){
				// find查找（根据已知条件返回条件为true的元素）   filter过滤(返回条件为true的元素，返回一个过滤后的子数组)
				return this.cateGoryList.find(item => item.id === this.navId)
			}
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
			border-top 1upx solid #eee /*有滚动条: 需要真机调试一下 */
			.leftContainer
				width 20%
				border-right 1upx solid #eee
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
				.rightScroll
					height calc(100vh - 80upx)
					.contentList
						display flex
						flex-wrap wrap
						.contentImg
							width 520upx
							height 190upx
							margin 20upx auto
						.listItem
							width 33.33%
							display flex
							flex-direction column
							align-items center
							image
								width 90%
								height 142upx
							text
								font-size 24upx
								text-align center
						
					
				
				
				
.test
	font-size 0
</style>
