<template>
	<div class="listContainer">
		<div @click='toDetail(item)' class="listItem" v-for='(item, index) in shopList' :key='index'>
			<image :src="item.listPicUrl" mode=""></image>
			<p>{{item.name}}</p>
			<p style='color: red;font-weight: bold;'>$ {{item.retailPrice}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['shopList'],
		methods: {
			toDetail(shopItem){
				uni.navigateTo({
					url: '/pages/detail/detail?shopItem=' + JSON.stringify(shopItem)
				})
			}
		}
	}
</script>

<style lang="stylus">
	.listContainer
		display flex
		flex-wrap wrap
		justify-content space-around
		/* 解决最后一行只有一个元素的时候不能靠左布局 */
		&:after
			content ''
			width 345upx
			height 0
		.listItem
			width 345upx
			display flex
			flex-direction column
			image 
				width 345upx
				height 345upx
			p
				white-space pre-wrap
				font-size 28upx
				line-height 50upx
				text-align left
</style>
