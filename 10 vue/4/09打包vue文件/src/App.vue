<template>
	<section>
		<p>{{ cxt }}</p>
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
