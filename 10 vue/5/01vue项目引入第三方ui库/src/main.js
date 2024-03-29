// 一、引导各种包

// 1.1 导入项目依赖的Vue相关包
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// 1.2 因为咱们模块化开发一个文件代表一个模块，每个模块中的变量都不是全局变量，
// 我们引入的Vue也不是全局变量，那么相应的VueResource与VueRouter插件在
// 执行的时候就无法自动完成初始化工作。
// 所以我们要手动use一下。
Vue.use(VueResource);
Vue.use(VueRouter);

// 1.3 引入mint-ui包
// 因为mintUI是一个Vue组件库，所以这里需要先use一下，
// use完毕后就可以使用mintUI提供的各种组件了。
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
Vue.use(MintUI);  

// 1.4 引入mui包，mui不依赖vue
import '../lib/mui/css/mui.css';

// 二、引入我们自己写的各种组件

// 2.1、引入项目根组件
import App from './App.vue';

// 三、创建vue实例，启动整个项目

// 3.1 创建实例
var vm = new Vue({
	
	// 3.2、关联页面视图
	el: '#app',
	
	// 3.3、把根组件的内容渲染到el属性指定的位置
	// 这个render是必须的，要不不加就报错
	// 这个代码的含义是使用App.vue这个组件的视图替换#app元素
	// 以后关于根组件的东西都写在App.vue里，就不要再修改index.html了
	render: function(c) {
		return c(App);
	}
});
