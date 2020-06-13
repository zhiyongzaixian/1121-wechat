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
		
	</view>
</template>

<script>
	export default {
		
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
				
</style>
