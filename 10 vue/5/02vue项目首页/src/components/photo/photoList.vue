<template>
	<section id="photo-list">
		
		<!-- 图片分类导航 -->
		<ul>
			<!--这里全部的话需要传个0参数 -->
			<li @click="getPhotoList(0)">全部</li>
			<li v-for="item in photoCategorys" @click="getPhotoList(item.id)">{{ item.title }}</li>
		</ul>
		
		<!-- 图片列表 => 这里使用Mui的cardview卡片视图 -->
		<div>
			<div v-for="item in photoList" class="mui-card">
				
				<!-- 点击每个图片跳转到对应的图片详情，需要把这张图片的id传递过去 -->
				<a v-bind="{ href: '#/photo/details/' + item.id }">
					
					<!-- 这里要给div动态设置style样式属性值，设计到字符串拼接，使用一个小技巧，就是使用对象配置属性方式，这样就可以使用字符串拼接 -->
					<!--<div class="mui-card-header mui-card-media" v-bind="{ style: 'height:40vw; background-image:url(' + item.img_url + ')' }"></div>-->
					
					<!-- 使用mintUI中的图片懒加载指令，只需把图片的img赋值给v-lazy指令即可 -->
					<div>
						<img v-lazy="item.img_url" />
					</div>
					<div class="mui-card-content">
						<div class="mui-card-content-inner">
							<p>{{ item.title }}</p>
							<p style="color: #333;">{{ item.zhaiyao }}</p>
						</div>
					</div>
				</a>
			</div>
		</div>
		
	</section>
</template>

<script>
	
	export default {
		
		data() {
			return {
				photoCategorys: [],
				photoList: []
			};
		},
		
		created() {
			this.getPhotoCategory();
			this.getPhotoList();
		},
		
		methods: {
			
			// 1、获取图片分类列表
			getPhotoCategory() {
				var url = 'http://139.199.192.48:8888/api/getimgcategory';
				this.$http.get(url).then(function(rep) {
					if(rep.body.status === 0) {
						this.photoCategorys = rep.body.message;
					}
				});
			},
			
			// 2、获取图片列表
			getPhotoList(id) {

				// 如果没有传入id，那么就是获取全部图片	
				id = id || 0;
				var url = 'http://139.199.192.48:8888/api/getimages/' + id;
				this.$http.get(url).then(function(rep) {
					if(rep.body.status === 0) {
						this.photoList = rep.body.message;
					}
					
					// 因为接口返回的数据中，图片url地址有问题，为了项目看起来完整，
					// 所有我们手动把图片的img_url参数替换为我们本地图片的url。
					this.photoList.forEach((photo, i)=>{
						i %= 16;
						// 因为这里的图片都是div的背景，将来加载的时候都是依据html路径加载的，
						// 所有这里的路径就从dist/index.html这个路径开始算起，来计算url。
						photo.img_url = '../src/img/' + i + '.jpg';
					});
				})
			},
		}
	};
	
</script>

<style scoped>
	
	ul, li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	ul {
		padding: 4px 8px;
		overflow: hidden;
	}
	
	ul li {
		float: left;
		margin: 2px 4px;
		color: deepskyblue;
	}
	
	#photo-list img {
		width: 100%;
	}
	
	#photo-list img[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
	
</style>
