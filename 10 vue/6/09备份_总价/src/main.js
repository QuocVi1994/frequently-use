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
import '../lib/mui/css/icons-extra.css';

// 1.5 引入moment日期格式化包，该包没有任何依赖
import moment from 'moment';

// 1.6 引入vue-picture-preview图片预览包，这是vue插件，所以需要use
import vuePricturePreview from 'vue-picture-preview';
Vue.use(vuePricturePreview);

// 二、引入我们自己写的各种组件

// 2.1、引入项目根组件
import App from './App.vue';

// 2.2、引入项目头部尾部组件
import comHeader from './components/frame/header.vue';
import comFooter from './components/frame/footer.vue';

// 2.3、引入项目首页组件
import comHome from './components/home/home.vue';

// 2.3、引入新闻相关组件
import comNewsList from './components/news/newsList.vue';

// 2.4、引入图片相关组件
import comPhotoList from './components/photo/photoList.vue';
import comPhotoDetails from './components/photo/photoDetails.vue';

// 2.5 引入商品相关组件
import comGoodsList from './components/goods/goodsList.vue';
import comGoodsDetails from './components/goods/goodsDetails.vue';

// 2.6 引入数字输入框组件
import comNumbox from './components/common/numbox.vue';

// 2.7 引入购物车组件
import comShopCart from './components/shopcart/shopcart.vue';

// 三、注册全局组件
Vue.component('v-header', comHeader);
Vue.component('v-footer', comFooter);
Vue.component('v-numbox', comNumbox);

// 注册全局过滤器
Vue.filter('dateFormat', function(val, formatStr) {
	return moment(val).format(formatStr);
});

// 四、创建vue实例，启动整个项目

// 4.1 创建实例
var vm = new Vue({
	
	// 4.2、关联页面视图
	el: '#app',
	
	// 4.3、把根组件的内容渲染到el属性指定的位置
	// 这个render是必须的，要不不加就报错
	// 这个代码的含义是使用App.vue这个组件的视图替换#app元素
	// 以后关于根组件的东西都写在App.vue里，就不要再修改index.html了
	render: function(c) {
		return c(App);
	},
	
	// 4.4、添加页面路由配置，根据url切换页面中间部分的组件
	router: new VueRouter({
		routes: [
			{ path: '/', component: comHome },
			{ path: '/news/list', component: comNewsList },
			{ path: '/photo/list', component: comPhotoList },
			{ path: '/photo/details/:id', component: comPhotoDetails },
			{ path: '/goods/list', component: comGoodsList },
			{ path: '/goods/details/:id', component: comGoodsDetails },
			{ path: '/shopcart', component: comShopCart },
		]
	})
});
