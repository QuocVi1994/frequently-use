<template>
	<div id="tmpl">
		
		<div v-for="item in goodsBuyList" class="row">
			<mt-switch class="switch" v-model="item.isSelected"></mt-switch>
			<img class="img" :src="item.thumb_path">
			<div class="inforight">
				<h4>{{ item.title }}</h4>
				<div class="bottom">
					<ul>
						<li>￥{{ item.sell_price }}</li>
						<li>
							<!-- 引用我们定义的公共数字输入框组件 -->
							<!-- goodsBuyTotal是咱们存储所有购买商品数量的对象，item.id是当前遍历到的商品ID -->
							<v-numbox v-bind:initNum="goodsBuyTotal[item.id]"></v-numbox>
						</li>
						<li><a href="javascript:void(0)">删除</a></li>
					</ul>
				</div>
			</div>
		</div>

		<div id="total">
			<div class="desc">
				<ul>
					<li>总计（不含运费）</li>
					<li>已勾选商品{{ selectedGoodsCount }}件,总价:￥{{ selectedPriceCount }}元</li>
				</ul>
			</div>
			<div id="button">
				<mt-button  type="danger" size="small">去结算</mt-button>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { goodsBuyGetAll } from '../../js/goodsBuy.js';
	
	export default {
		
		data() {
			return {
				goodsBuyList: [],   // 这是所有的商品列表数据
				goodsBuyTotal: goodsBuyGetAll()  // 这是本地存储的所有购买商品数量
			};
		},
		
		created() {
			this.getGoodsBuyList();
		},
		
		methods: {
			
			// 获取所有购买商品的信息
			getGoodsBuyList() {
				
				// goodsBuyGetAll()获取所有数据，Object.keys获取对象的所有key，key刚好是id，最后使用,拼接
				var ids = Object.keys(this.goodsBuyTotal).join(',');
				var url = 'http://139.199.192.48:8888/api/goods/getshopcarlist/' + ids;
				
				this.$http.get(url).then(rep=>{
					
					if(rep.body.status === 0) {
						
						/**
						 * 这里面在给goodsBuyList赋值前，我们先偷偷在message列表里面给每个对象添加一个isSelected属性，
						 * 然后再赋值给goodsBuyList，那么我们在使用这个对象的时候，就有isSelected属性了。
						 * */
						rep.body.message.forEach(obj=> {
							obj.isSelected = true;
						});
						
						this.goodsBuyList = rep.body.message;
					}
					
					// 因为接口返回的数据中，图片url地址有问题，为了项目看起来完整，
					// 所有我们手动把图片的src参数替换为我们本地图片的url。
					this.goodsBuyList.forEach((photo, i)=>{
						i %= 16;
						photo.thumb_path = '../src/img/' + i + '.jpg';
					});
				});
			}
		},
		
		// 计算属性
		computed: {
			
			
			// 计算属性 总数量
			selectedGoodsCount() {
				var sum = 0;
				
				// 遍历所有的商品，把每个商品是否被勾选的值提取出来。
				var tempObj = {};
				this.goodsBuyList.forEach((goods, i)=>{
					tempObj[goods.id] = goods.isSelected;
				});
				
				
				// 遍历存储购买数量的对象，依次遍历，如果该商品是勾选状态，那么把他的值累加起来
				for(var id in this.goodsBuyTotal) {
					if(tempObj[id]) {
						sum += this.goodsBuyTotal[id];
					}
				}
				
				return sum;
			},
			
			// 计算属性 总价格
			selectedPriceCount() {
				var sum = 0;
				
				// 遍历所有的商品列表，依次遍历，
				// 如果这个商品是勾选状态的话，
				// 得到每个商品对象的价格 *  this.goodsBuyTotal[id]购买数量得到该商品的总价累加到sum中
				this.goodsBuyList.forEach((goods, i)=>{
					if(goods.isSelected) {
						sum += goods.sell_price * this.goodsBuyTotal[goods.id];
					}
				});
				
				return sum;
			}
			
		}
		
	};
</script>

<style scoped>
	.row{
		border-bottom: 1px solid rgba(0,0,0,0.3);
		height: 102px;
		display: flex;
		padding: 5px;
	}

	.switch{
		flex:0 0 52px;
	}

	.img{
		margin-left: 5px;
		height: 75px;
		width: 75px;
		flex: 0 0 85px;
	}

	.inforight{
		margin-left: 5px;
		flex:1;
	}
	
	.inforight ul{
		padding-left: 0px;
	}
	
	.inforight li{
		list-style: none;
		display: inline-block;
	}

	.inforight h4{
		color: #0094ff;
		font-size: 14px;
	}

	.bottom li:first-child{
		color:red;
		margin-right: 5px;
	}

	.bottom li:last-child{
		margin-left: 5px;
	}
	
	#total{
		height: 100px;
		background-color: rgba(0,0,0,0.1);
		display: flex;
		padding: 5px;;
	}

	#total ul {
	 padding-left: 0px;
	}
	
	#total li{
		list-style: none;
		font-size: 14px;
	}

	#button{
		flex:0 0 60px;
		margin: 30px 0 0 0 ;
	}

	.desc{

		flex:1;
	}
</style>