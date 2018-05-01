<template>
	<section>
		<mt-header fixed title="固定在顶部"></mt-header>
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item mui-active" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
	</section>
</template>

<script>
	// 之前咱们在定义组件的时候，会有一个配置对象，这里写的就是那个配置对象
	// 因为现在使用了vue提供的一套开发工具，有了vue文件这个概念，
	// 每个文件中都有模版、脚本、样式，他们是一体的，所以这里就不用再指定template选项了。
	export default {
		data: function() {
			return {
				cxt: '这是根组件'
			};
		}
	};
</script>

<style scoped>
	/*
	这里写当前这个组件的样式,默认这个样式是全局的,
	如果你想让写的样式只在当前组件生效,那么请添加一个属性scoped
	 * */
	p {
		color: red;
	}
</style>
