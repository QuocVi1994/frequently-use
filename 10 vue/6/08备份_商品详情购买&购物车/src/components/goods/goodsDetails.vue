<template>
	<section id="goods-details">
		
		<!-- 引入轮播图子组件 -->
		<v-swipe :swipes="lunbos"></v-swipe>
		
		<!-- 商品购买 => Mui中的卡片视图 -->
		<div class="mui-card">
			<div class="mui-card-header">{{ details.title }}</div>
			<div class="mui-card-content mui-card-content-inner">
				<div class="price" style="color: rgb(51, 51, 51);">
					<s>市场价:￥{{ details.market_price }} </s>
					<span>销售价:</span>
					<em>￥{{ details.sell_price }}</em>
				</div>
				<div>
					<span>购买数量：</span>
					<!-- 引用我们定义的公共数字输入框组件 -->
					<v-numbox v-bind:initNum="goodsBuyNum" @change="getGoodsBuyNum"></v-numbox>
				</div>
			</div>
			<div class="mui-card-footer">
				<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">购买</button>
				<div></div>
				<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" @click="addShopcart">加入购物车</button>
			</div>
		</div>
		
	</section>
</template>

<script>
	import comSwipe from '../common/swipe.vue'; 
	import { goodsBuySet, goodsBuyGet, goodsBuyGetAll, goodsBuyTotal } from '../../js/goodsBuy';
	
	export default {
		
		data() {
			return {
				lunbos: [],
				details: {},
				goodsBuyNum: goodsBuyGet(this.$route.params.id) || 0  // 这个属性即用来配置子组件的默认值，又要接收子组件操作后的新值
			};
		},
		
		created() {
			this.getLunbos();
			this.getGoodsDetails();
		},
		
		methods: {
			
			// 获取轮播图数据
			getLunbos() {
				var id = this.$route.params.id;
				var url = 'http://139.199.192.48:8888/api/getthumimages/' + id;
				
				this.$http.get(url).then(rep=>{
					if(rep.body.status === 0) {
						this.lunbos = rep.body.message; 
					}
					
					// 因为接口返回的数据中，图片url地址有问题，为了项目看起来完整，
					// 所有我们手动把图片的src参数替换为我们本地图片的url。
					this.lunbos.forEach((photo, i)=>{
						i %= 16;
						photo.src = '../src/img/' + i + '.jpg';
						
						//  因为这里使用了轮播图组件，轮播图中使用的是img属性，
						// 所以做个转换，把src转为img属性。
						photo.img = photo.src;
					});
				});
			},
			
			// 获取商品的价格等详细信息
			getGoodsDetails() {
				var id = this.$route.params.id;
				var url = 'http://139.199.192.48:8888/api/goods/getinfo/' + id;
				
				this.$http.get(url).then(rep=>{
					if(rep.body.status === 0) {
						this.details = rep.body.message[0];  // 这里接口返回的是数组，需要注意一下
					}
					
					console.log(goodsBuyGet(this.details.id));
					
				});
			},
			
			// 每次数字输入框子组件的值发生变化时，父都会监听到，并调用该方法接收修改后的值
			// 每次值变化时把值记录下来，将来用户点击加入购物车时方便获取
			getGoodsBuyNum(numbers) {
				this.goodsBuyNum = numbers;
			},
			
			// 添加购买的数量到购物车
			addShopcart() {
				
				// 以当前商品的ID为可以，把该商品购买的数量存储起来
				goodsBuySet(this.details.id, this.goodsBuyNum);
				
				// 每次购买数量修改后，都需要手动修改dom的值，因为这个值底部footer监听不到变化
				document.querySelector('.mui-badge').innerText = goodsBuyTotal();
			}
			
		},
		
		components: {
			'v-swipe': comSwipe
		}
		
	};
</script>

<style>
	
	.mui-card-footer div{
		width: 100%;
	}
	
	.mui-card-footer .mui-btn {
		padding: 8px 0;
		font-size: 16px;
	}
	
	.mui-card-content .price {
		margin-bottom: 4px;
	}
	
	.mui-card-content .price span {
		margin-left: 6px;
	}
	
	#goods-details .price em {
		font-size: 18px;
		color: red;
	}
	
	.mui-card-content .tip {
		overflow: hidden;
		padding: 0 8px;
	}
	
	.mui-card-content .tip span:first-child {
		float: left;
	}
	
	.mui-card-content .tip span:last-child {
		float: right;
	}
	
</style>