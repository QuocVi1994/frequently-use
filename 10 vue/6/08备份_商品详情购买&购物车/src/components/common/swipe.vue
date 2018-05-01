<template>
	<section id="swipe">
		
		<!-- 使用mint-ui中的swipe组件 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in swipes">
		  	<a v-bind:href="item.url">
		  		<img v-bind:src="item.img" />
		  	</a>
		  </mt-swipe-item>
		</mt-swipe>
		
	</section>
</template>

<script>
	export default {
		
		// 声明要获取的来自父的数据，这里接收一个lunbos属性值，然后在咱们的模版中使用它
		props: ['swipes']
		
	};
</script>

<style>
	.mint-swipe {
		height: 230px;
	}
	
	.mint-swipe img {
		width: 100%;
		height: 230px;
	}
</style>