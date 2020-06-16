// 购物车的状态数据模块
import Vue from 'vue'
import {
	CHANGECARTLIST,
	CHANGECOUNTMUTAION,
	CHANGESELECTEDMUTATION,
	CHANGEALLSELECTEDMUTATION
} from '../mutation-types'
const state = {
	cartList: [
		{
				"count": 1,
				"selected": true,
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
					"selected": false,
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
	// 添加至购物车
	[CHANGECARTLIST](state, shopItem){
		// 情况分析
		/* 
			1. 该商品之前没有添加至购物车， 没有count属性， 需要人为设置count属性
			2. 该商品之前已经添加至购物车，有count属性
			3. Array.prototype.find() 返回值： 1) 符合条件的元素 2) undefined
			4. Array.find() 对象Array自身的方法   Array.prototype.find Array实例的方法
		 */
		let item = state.cartList.find(item => item.id === shopItem.id)
		if(item){ // 购物车之前有该商品数据
			item.count += 1
			console.log('最新商品的数量： ', item.count)
		}else { // 之前没有该商品数据
			// shopItem.count = 1 // 非响应式属性
			// Object.defineProperty(obj, {
			// 	count: {
			// 		get(){},
			// 		set(){}
			// 	}
			// })
			Vue.set(shopItem, 'count', 1) // 响应式属性
			Vue.set(shopItem, 'selected', true);
			state.cartList.push(shopItem)
		} 
	},
	// 注意： mutation的参数有2个： 1) state 2) 交给mutation的数据，如果同时需要交给mutation多条数据，需要整合成对象的形式
	// 修改购物车商品的数量
	[CHANGECOUNTMUTAION](state, {isAdd, index}){
		console.log('mutation: ', isAdd, index)
		if(isAdd){ // 累加
			state.cartList[index].count += 1
		}else {// 累减
			if(state.cartList[index].count > 1){
				state.cartList[index].count -= 1
			}else {
				// state.cartList[index].count = 0
				// splice(startIndex, count) 对数组进行CRUD操作的
				state.cartList.splice(index, 1)
			}
			
		}
	},
	[CHANGESELECTEDMUTATION](state, {selected, index}){
		state.cartList[index].selected = selected
	},
	[CHANGEALLSELECTEDMUTATION](state, selected){
		state.cartList.forEach(item => item.selected = selected)
	}
} 

const actions = {
	// 注意： action参数有2个： 1) store对象 2) 调用action的是传给action的参数数据，如果有多条数据，需要整合成对象
	testAction({commit}, {a, b}){
		console.log('action: ', a, b)
	}
}

const getters = {
	isAllSelected(state){
		/* 
			思路分析： 
				1. 遍历cartList数组
				2. 根据所有商品的是否选中状态来决定全选的状态
				3. 一旦有一个商品是未选中，全选的状态就是全不选
				4. 所有的商品个体的状态是选中的话，全选的状态就是全部选中
				5. 最终计算的结果是一个布尔值： 全选/全不选 ---> true/false
		 */
		
		// forEach()
		// let result = true; // 默认为全选
		// state.cartList.forEach(item => !item.selected && (result = false))
		// return result;
		
		// every() 
		/* 
		 1. 返回值：布尔值
		 2. 作用：根据指定的条件对每一个元素进行测试，只要有一个元素没有通过测试，返回值就是false
		 */
		
		/* 
			扩展： some()
			1. 返回值：布尔值
			2. 作用： 只要有一个元素满足测试条件，返回值就是true，相反的所有的元素都不满足指定的条件，返回值才是false
		 */
		// return state.cartList.some(item => item.selected)
		// 判断购物车数组的商品是否 都是 选中状态
		return state.cartList.every(item => item.selected)
	},
	/* 
		reduce() 累加器
		1. 作用： 可以对数组的元素进行累加操作
		2. 语法：arr.reduce((pre, next) => {}, 累加的起始值)
		3. 如果不传第二个参数(累加的起始值), pre的值就是从数组的第一项开始， next就是第二项  --> 第一次遍历的时候
		4. 如果传第二个参数(累加的起始值)， pre的值就是累加的起始值，next就是数的第一项--> 第一次遍历的时候
		5. 再次循环遍历的时候pre是上一次累加的结果，next是数组的下一项个体
		
	 */
	
	// 总数量
	totalCount(state){
		return state.cartList.reduce((pre, shopItem) => {
			return pre += shopItem.selected?shopItem.count:0;
		}, 0)
	},
	// 总价格
	totalPrice(){
		return state.cartList.reduce((pre, shopItem) => {
			return pre += shopItem.selected ? shopItem.count * shopItem.retailPrice : 0;
		}, 0)
	}
}


export default {
	state,
	mutations,
	actions,
	getters
}