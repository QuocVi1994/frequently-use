<template>
	<section id="goods-details">
		
		<!-- 引入轮播图子组件 -->
		<v-swipe :swipes="lunbos"></v-swipe>
		
	</section>
</template>

<script>
	import comSwipe from '../common/swipe.vue'; 
	
	export default {
		
		data() {
			return {
				lunbos: []
			};
		},
		
		created() {
			this.getLunbos();
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
			}
			
		},
		
		components: {
			'v-swipe': comSwipe
		}
		
	};
</script>

<style>
</style>