<template>
	<section id="home">
		
		<!-- 首页轮播图 => 使用mint-ui中的swipe组件 -->
		<v-swipe v-bind:swipes="lunbos"></v-swipe>
		
		<!-- 主体导航 => 受使用Mui中的9宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        		<router-link to="/news/list">
        			<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
	                <div class="mui-media-body">新闻咨询</div>
        		</router-link>
	        </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	        	<router-link to="/photo/list">
	                <span class="mui-icon mui-icon-image"></span>
	                <div class="mui-media-body">图片分享</div>
	        	</router-link>
	        </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                <span class="mui-icon mui-icon-chatbubble"></span>
	                <div class="mui-media-body">啥</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                <span class="mui-icon mui-icon-search"></span>
	                <div class="mui-media-body">搜一搜</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                <span class="mui-icon mui-icon-phone"></span>
	                <div class="mui-media-body">联系我们</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                <span class="mui-icon mui-icon-info"></span>
	                <div class="mui-media-body">关于</div></a></li>
	    </ul>
	    
	</section>
</template>

<script>
	import comSwipe from '../common/swipe.vue';
	
	// 这里导出的对象写法与咱们之前Vue.component定义组件时传入的对象写法一致
	// 只是这里不需要指定template模版了。
	export default {
		
		// 这里使用的是es6的语法，es6中对象定义方法通过这种语法可以省去function关键字，
		// 类似于箭头函数也省去了function关键字。
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
				var url = 'http://139.199.192.48:8888/api/getlunbo';
				this.$http.get(url).then(rep=>{
					if(rep.body.status === 0) {
						this.lunbos = rep.body.message;
					}
				});
			}
			
		},
		
		// 用来定义子组件
		components: {
			'v-swipe': comSwipe
		}
		
	};
	
</script>

<style scoped>

</style>
