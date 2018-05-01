<template>
	<section id="goods-list">
		
		<!-- 商品列表 =》卡片视图 MUI -->
		<ul class="goods-list">
			<li v-for="item in goodsList" class="mui-col-xs-6">
				<!-- 这里注意设计字符串拼接，需要以对象的方式设置 -->
				<!-- 这里使用的是理由插件提供的router-link标签，url路径不用添加#前缀了 -->
				<router-link v-bind="{ to: '/goods/details/' + item.id }">
					<div class="mui-card">
						<div class="mui-card-header mui-card-media" :style="getGoodsBgStyle(item.img_url)"></div>
						<div class="mui-card-footer">
							<p>{{ item.title }}</p>
						</div>
						<div class="mui-card-content">
								<p class="price" style="color: #333;">
									<span>￥{{ item.sell_price }}</span>
									<s>￥{{ item.market_price }}</s>
								</p>
								<p class="tip">
									<span>热卖中</span>
									<span>剩余{{ item.stock_quantity }}件</span>
								</p>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
		
		<!-- 引用自Mui -->
		<button @click="getGoodsList(pageindex++)" type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加载更多</button>
		
	</section>
</template>

<script>
	export default {
		
		data() {
			return {
				goodsList: [],
				pageindex: 1
			};
		},
		
		created() {
			this.getGoodsList();
		},
		
		methods: {
			
			// 获取商品列表
			getGoodsList() {
				var url = 'http://139.199.192.48:8888/api/getgoods?pageindex=' + this.pageindex;
				this.$http.get(url).then(function(rep) {
					if(rep.body.status === 0) {
						// 这里使用apply可以平铺数组的特性，但是需要注意给谁push，第一个参数就得传谁
						this.goodsList.push.apply(this.goodsList, rep.body.message);
					}
				});
			},
			
			// 设置图片背景
			getGoodsBgStyle(imgUrl) {
				return  'height: 170px; background-image: url(' + imgUrl + ');';
			}
		}
		
	};
</script>

<style scoped>
	
	ul, li, p {
		margin: 0;
		padding: 0;
	}
	
	li {
		list-style: none;
	}
	
	.goods-list {
		overflow: hidden;
		padding: 8px 4px;
	}
	
	.goods-list li{
		float: left;
		margin-bottom: 6px;
	}
	
	.goods-list .mui-card {
		margin: 0 2px;
	}
	
	.mui-card-footer {
		height: 80px;
		overflow: hidden;
	}
	
	.mui-card-content {
		padding: 0 4px;
		text-align: center;
	}
	
	.mui-card-content .price {
		margin-bottom: 4px;
	}
	
	.mui-card-content .price span {
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
	
	.goods-list .mui-btn {
		margin: 0 auto;
		width: 97%;
	}
	
</style>