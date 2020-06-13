<template>
	<view class="recommendContainer">
		<swiper class='banner' :indicator-dots="true" indicator-color='green' :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/28dd7f8d396e00d05e068d39b03055a4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/ed313fcf20496bcc34d2a5367c9eb836.png?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/377eb935638b3dd0547d6723de259fa3.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList 三个横向图标 -->
		<view class="policyDescList">
			<view class="policyDescItem" v-for='(item, index) in indexData.policyDescList' :key='index'>
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- kingKongList 10个小图标的列表 -->
		<view class="kingKongList" v-if="indexData.kingKongModule">
			<view class="kingKongItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key='index'>
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		
		<CateGorys />
	</view>
</template>

<script>
	import {mapActions, mapState} from 'vuex'
	import CateGorys from '../cateGorys/cateGorys.vue'
	export default {
		components: {
			CateGorys
		},
		mounted() {
			this.getIndexDataAction()
		},
		methods: {
			...mapActions({
				getIndexDataAction: 'getIndexDataAction'
			})
		},
		computed: {
			...mapState({
				indexData: state => state.indexData.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.recommendContainer
		.banner
			width 100%
			height 350upx
			image
				width 100%
				height 100%
		.policyDescList
			display flex
			.policyDescItem
				flex 1
				text-align center
				image
					width 32upx
					height 32upx
					vertical-align middle
				text
					font-size 24upx
					vertical-align middle


		.kingKongList
			display flex
			flex-wrap wrap
			margin 20upx 0
			.kingKongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				image
					width 110upx
					height 110upx
				text
					font-size 24upx
					line-height 50upx
.test
	font-size 0
</style>
