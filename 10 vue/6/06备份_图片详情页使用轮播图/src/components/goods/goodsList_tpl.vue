<template>
	<section id="goods-list">
		
		<!-- 商品列表 =》卡片视图 MUI -->
		<ul class="goods-list">
			<li class="mui-col-xs-6">
				<router-link to="#/">
					<div class="mui-card">
						<div class="mui-card-header mui-card-media" style="height: 150px"></div>
						<div class="mui-card-footer">
							<p>大范甘迪水电费</p>
						</div>
						<div class="mui-card-content">
								<p class="price" style="color: #333;">
									<span>￥233</span>
									<s>￥2342</s>
								</p>
								<p class="tip">
									<span>热卖中</span>
									<span>剩余5654件</span>
								</p>
						</div>
					</div>
				</router-link>
			</li>
			<li class="mui-col-xs-6">
				<router-link to="#/">
					<div class="mui-card">
						<div class="mui-card-header mui-card-media" style="height: 150px"></div>
						<div class="mui-card-footer">
							<p>大范甘迪水电费</p>
						</div>
						<div class="mui-card-content">
								<p class="price" style="color: #333;">
									<span>￥233</span>
									<s>￥2342</s>
								</p>
								<p class="tip">
									<span>热卖中</span>
									<span>剩余5654件</span>
								</p>
						</div>
					</div>
				</router-link>
			</li>
			<li class="mui-col-xs-6">
				<router-link to="#/">
					<div class="mui-card">
						<div class="mui-card-header mui-card-media" style="height: 150px"></div>
						<div class="mui-card-footer">
							<p>大范甘迪水电费</p>
						</div>
						<div class="mui-card-content">
								<p class="price" style="color: #333;">
									<span>￥233</span>
									<s>￥2342</s>
								</p>
								<p class="tip">
									<span>热卖中</span>
									<span>剩余5654件</span>
								</p>
						</div>
					</div>
				</router-link>
			</li>
			<li class="mui-col-xs-6">
				<router-link to="#/">
					<div class="mui-card">
						<div class="mui-card-header mui-card-media" style="height: 150px"></div>
						<div class="mui-card-footer">
							<p>大范甘迪水电费</p>
						</div>
						<div class="mui-card-content">
								<p class="price" style="color: #333;">
									<span>￥233</span>
									<s>￥2342</s>
								</p>
								<p class="tip">
									<span>热卖中</span>
									<span>剩余5654件</span>
								</p>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
		
	</section>
</template>

<script>
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
	
</style>