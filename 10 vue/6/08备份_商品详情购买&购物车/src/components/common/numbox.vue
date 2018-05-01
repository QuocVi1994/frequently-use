<template>
	
	<!-- 数字输入框 => 使用的Mui -->
	<div class="mui-numbox">
		<button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtract">-</button>
		<input class="mui-input-numbox" type="number" v-model="numbers">
		<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
	</div>
					
</template>

<script>
	export default {
		
		data() {
			return {
				numbers: 0
			};
		},
		
		// 这里要配置来自父传递的初始值
		props: ['initNum'],
		
		created() {
			this.init();
		},
		
		methods: {
			
			// 把来自父的数据设置给numbers，作为初始值使用
			init() {
				this.numbers = this.initNum;
			},
			
			// 数据--，成功后发送事件与数据
			subtract() {
				if(this.numbers > 0) {
					this.numbers--;
					this.$emit('change', this.numbers);
				}
			},
			
			// 数据++，成功后发送事件与数据
			add() {
				this.numbers++;
				this.$emit('change', this.numbers);
			}
		},
		
		watch: {
			
			numbers(newVal, oldVal) {
				this.$emit('change', newVal);
			}
		}
		
	};
</script>

<style>
</style>