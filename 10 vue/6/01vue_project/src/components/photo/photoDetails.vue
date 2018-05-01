<template>
	<section id="photo-details">
		
		<!-- 头部 => MinitUI中的cell组件 -->
		<mt-cell :title="details.title" :label="getLabel()"></mt-cell>
		
		<!-- 这里演示过滤器的使用与传值 -->
		<!--<p>{{ details.add_time | dateFormat('YYYY-MM-DD hh:mm:ss') }}</p>-->
		
		<!-- 缩略图列表 => Mui中的图文表格 -->	
		<ul class="mui-table-view mui-grid-view">
	        <li v-for="item in thums" class="mui-table-view-cell mui-media mui-col-xs-6">
                <img class="mui-media-object" v-preview="item.src" v-bind:src="item.src">
	        </li>
	    </ul>
	    
	    <!-- 详情 -->
	    <!-- 这里输出的文本内容一般都是富文本编辑器来写的，所以内容中会含有各种html标签 -->
	    <!-- 要让这些标签生效，必须使用v-html指令，同时为了防止元素嵌套问题，最好使用div -->
	    <div class="content" v-html="details.content"></div>
	    
	</section>
</template>

<script>
	// 因为我们是模块化开发，所以是没有全局变量的，这里要使用moment必须先引入
	import moment from 'moment';
	
	export default {
		
		data() {
			return {
				details: {},
				thums: []
			};
		},
		
		created() {
			this.getDetails();
			this.getThums();
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
			
			// 获取缩略图
			getThums() {
				var id = this.$route.params.id;
				var url = 'http://139.199.192.48:8888/api/getthumimages/' + id;
				this.$http.get(url).then(rep=>{
					if(rep.body.status === 0) {
						this.thums = rep.body.message; 
					}
					
					// 因为接口返回的数据中，图片url地址有问题，为了项目看起来完整，
					// 所有我们手动把图片的src参数替换为我们本地图片的url。
					this.thums.forEach((photo, i)=>{
						i %= 16;
						photo.src = '../src/img/' + i + '.jpg';
					});
				});
			},
			
			getLabel() {
				return moment(this.details.add_time).format('YYYY-MM-DD hh:mm:ss') + ' 浏览' + this.details.click + '次';
			}
			
		}
		
	};
</script>

<style>
	
	/**
	 * 这里咱们把mintUI中的组件样式给修改了一下，
	 * 如果要让样式生效不能加scoped，因为加了之后只对当前的组件元素生效。
	 * */
	#photo-details .mint-cell {
		padding: 6px;
	}
	
	#photo-details .mint-cell-text {
		color: deepskyblue
	}
	
	#photo-details .content {
		padding: 4px 6px;
		font-size: 14px;
	}
	
	.mui-table-view-cell {
		height: 110px;
	}
	
	.mui-table-view img {
		width: 100%;
	}
	
	/*
	 * 修改预览插件的一个小bug
	 * */
	.lg-preview-wrapper {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>