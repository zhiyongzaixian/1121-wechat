// 购物车的状态数据模块
import Vue from 'vue'
import {
	CHANGECARTLIST
} from '../mutation-types'
const state = {
	cartList: [
		{
				"count": 4,
				"promId": 0,
				"showPoints": false,
				"itemTagList": [
						{
								"itemId": 3532007,
								"tagId": 128111155,
								"freshmanExclusive": false,
								"name": "暖冬特惠",
								"subType": 204,
								"forbidJump": false,
								"type": 2
						}
				],
				"rank": 1,
				"id": 3532007,
				"sellVolume": 2532,
				"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/54e9c325ef69dfead72bdb6859feb2f3.png",
				"soldOut": false,
				"sortFlag": 0,
				"commentCount": 0,
				"onSaleTime": 1569859202422,
				"picMode": 1,
				"commentWithPicCount": 0,
				"underShelf": false,
				"status": 2,
				"couponConflict": true,
				"forbiddenBuy": false,
				"promotionDesc": "暖冬特惠",
				"limitedFlag": 204,
				"pieceNum": 0,
				"itemSizeTableDetailFlag": false,
				"forbidExclusiveCal": false,
				"rewardShareFlag": false,
				"updateTime": 1576741386256,
				"showCommentEntrance": true,
				"pieceUnitDesc": "件",
				"specialPromTag": "",
				"counterPrice": 1099,
				"categoryL2Id": 0,
				"retailPrice": 802,
				"primarySkuPreSellPrice": 0,
				"preLimitFlag": 0,
				"itemPromValid": true,
				"promTag": "暖冬特惠",
				"source": 0,
				"points": 0,
				"primarySkuPreSellStatus": 0,
				"extraServiceFlag": 0,
				"flashPageLink": "",
				"autoOnsaleTimeLeft": 0,
				"innerData": {},
				"saleCenterSkuId": 0,
				"pointsStatus": 0,
				"extraPrice": "",
				"colorNum": 4,
				"showTime": 0,
				"autoOnsaleTime": 0,
				"preemptionStatus": 1,
				"isPreemption": 0,
				"zcSearchFlag": false,
				"name": "极地探险都不怕，女式地表强温鹅绒羽绒服",
				"appExclusiveFlag": false,
				"itemType": 1,
				"listPicUrl": "https://yanxuan-item.nosdn.127.net/de6493e42fe69d483df949871585c13e.png",
				"pointsPrice": 0,
				"simpleDesc": "90%白鹅绒，充沛保暖之选",
				"seoTitle": "",
				"newItemFlag": false,
				"buttonType": 0,
				"primarySkuId": 300004186,
				"displaySkuId": 300004193,
				"productPlace": "",
				"itemSizeTableFlag": false
			},
		{
					"count": 1,
			    "promId": 0,
			    "showPoints": false,
			    "itemTagList": [
			        {
			            "itemId": 3533004,
			            "tagId": 128111155,
			            "freshmanExclusive": false,
			            "name": "暖冬特惠",
			            "subType": 204,
			            "forbidJump": false,
			            "type": 2
			        }
			    ],
			    "rank": 1,
			    "id": 3533004,
			    "sellVolume": 1859,
			    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/89c86d80100a5b876a898955c09cd047.png",
			    "soldOut": false,
			    "sortFlag": 0,
			    "commentCount": 0,
			    "onSaleTime": 1569859202763,
			    "picMode": 1,
			    "commentWithPicCount": 0,
			    "underShelf": false,
			    "status": 2,
			    "couponConflict": true,
			    "forbiddenBuy": false,
			    "promotionDesc": "暖冬特惠",
			    "limitedFlag": 204,
			    "pieceNum": 0,
			    "itemSizeTableDetailFlag": false,
			    "forbidExclusiveCal": false,
			    "rewardShareFlag": false,
			    "updateTime": 1576741589742,
			    "showCommentEntrance": true,
			    "pieceUnitDesc": "件",
			    "specialPromTag": "",
			    "counterPrice": 1299,
			    "categoryL2Id": 0,
			    "retailPrice": 896,
			    "primarySkuPreSellPrice": 0,
			    "preLimitFlag": 0,
			    "itemPromValid": true,
			    "promTag": "暖冬特惠",
			    "source": 0,
			    "points": 0,
			    "primarySkuPreSellStatus": 0,
			    "extraServiceFlag": 0,
			    "flashPageLink": "",
			    "autoOnsaleTimeLeft": 0,
			    "innerData": {},
			    "saleCenterSkuId": 0,
			    "pointsStatus": 0,
			    "extraPrice": "",
			    "colorNum": 3,
			    "showTime": 0,
			    "autoOnsaleTime": 0,
			    "preemptionStatus": 1,
			    "isPreemption": 0,
			    "zcSearchFlag": false,
			    "name": "穿上冬日小火炉，女式地表强温宽松羽绒服",
			    "appExclusiveFlag": false,
			    "itemType": 1,
			    "listPicUrl": "https://yanxuan-item.nosdn.127.net/cd41af69033066f251c9fbdcb730c517.png",
			    "pointsPrice": 0,
			    "simpleDesc": "90%白鹅绒，温暖有保障",
			    "seoTitle": "",
			    "newItemFlag": false,
			    "buttonType": 0,
			    "primarySkuId": 300004169,
			    "displaySkuId": 300004207,
			    "productPlace": "",
			    "itemSizeTableFlag": false
			}
	]
}

const mutations = {
	[CHANGECARTLIST](state, shopItem){
		// 情况分析
		/* 
			1. 该商品之前没有添加至购物车， 没有count属性， 需要人为设置count属性
			2. 该商品之前已经添加至购物车，有count属性
			3. Array.prototype.find() 返回值： 1) 符合条件的元素 2) undefined
		 */
		let item = state.cartList.find(item => item.id === shopItem.id)
		if(item){ // 购物车之前有该商品数据
			item.count += 1
			console.log('最新商品的数量： ', item.count)
		}else { // 之前没有该商品数据
			// shopItem.count = 1 // 非响应式属性
			Vue.set(shopItem, 'count', 1) // 响应式属性
			state.cartList.push(shopItem)
		}
	}
} 

const actions = {
	
}


const getters = {
	
}


export default {
	state,
	mutations,
	actions,
	getters
}