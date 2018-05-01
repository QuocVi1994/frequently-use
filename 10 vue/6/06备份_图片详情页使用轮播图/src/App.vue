<template>
	<main>
		<v-header></v-header>
		<!-- 路由占位，路由根据url自动切换对应的组件 -->
		<router-view></router-view>
		<v-footer></v-footer>
		<lg-preview></lg-preview>
	</main>
</template>

<script>
	export default {
		data: function() {
			return {
				
			};
		}
	};
</script>

<style scoped>
	
</style>
