// 1 导入项目依赖的Vue相关包
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// 1.1 因为咱们模块化开发一个文件代表一个模块，每个模块中的变量都不是全局变量，
// 我们引入的Vue也不是全局变量，那么相应的VueResource与VueRouter插件在
// 执行的时候就无法自动完成初始化工作。
// 所以我们要手动use一下。
Vue.use(VueResource);
Vue.use(VueRouter);

// 2 引入我们自己写的各种组件
import App from './App.vue';


// 3 写自己的代码
var vm = new Vue({
	el: '#app',
	
	// 这个render是必须的，要不不加就报错
	// 这个代码的含义是使用App.vue这个组件的视图替换#app元素
	// 以后关于根组件的东西都写在App.vue里，就不要再修改index.html了
	render: function(c) {
		return c(App);
	}
});
