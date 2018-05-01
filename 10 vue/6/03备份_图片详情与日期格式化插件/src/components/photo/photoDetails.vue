<template>
	<section id="photo-details">
		
		<!-- 头部 => MinitUI中的cell组件 -->
		<mt-cell :title="details.title" :label="getLabel()"></mt-cell>
		
		<!-- 这里演示过滤器的使用与传值 -->
		<!--<p>{{ details.add_time | dateFormat('YYYY-MM-DD hh:mm:ss') }}</p>-->
		
		<!-- 缩略图列表 => Mui中的图文表格 -->	
		<ul class="mui-table-view mui-grid-view">
	        <li class="mui-table-view-cell mui-media mui-col-xs-6">
	            <a href="#">
	                <img class="mui-media-object" src="">
	            </a>
	        </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-6">
	            <a href="#">
	                <img class="mui-media-object" src="">
	            </a>
	        </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-6">
	            <a href="#"><img class="mui-media-object" src="">
	            </a>
	        </li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-6">
	            <a href="#">
	                <img class="mui-media-object" src="">
	            </a>
	        </li>
	    </ul>
	    
	    <!-- 详情 -->
	    <p></p>
	
	</section>
</template>

<script>
	// 因为我们是模块化开发，所以是没有全局变量的，这里要使用moment必须先引入
	import moment from 'moment';
	
	export default {
		
		data() {
			return {
				details: {}
			};
		},
		
		created() {
			this.getDetails();
		},
		
		methods: {
			
			// 获取图片详情
			getDetails() {
				var id = this.$route.params.id;
				var url = 'http://139.199.192.48:8888/api/getimageInfo/' + id;
				this.$http.get(url).then(rep=>{
					if(rep.body.status === 0) {
						this.details = rep.body.message[0];  // 注意接口返回的是一个数组
					}
				});
			},
			
			getLabel() {
				return moment(this.details.add_time).format('YYYY-MM-DD hh:mm:ss') + ' 浏览' + this.details.click + '次';
			}
			
		}
		
	};
</script>

<style>
</style>