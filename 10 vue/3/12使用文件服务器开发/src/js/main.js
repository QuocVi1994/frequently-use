// 因为我们要使用vue234这个js模块的返回值，必须使用Vue变量接收才能用。
// import from 都是es中的关键字
import '../css/index.css';
import '../less/header.less';
import '../sass/footer.scss';
import tplArticle from '../tpl/article.tpl';
import Vue from './vue234.js';

let vm = new Vue({
	el: '#app',
	data: {
		test: '演示啊!!牛逼啊'
	}
});

// 把引入的模版添加到body中
document.querySelector('#tpl').innerHTML = tplArticle;

var obj = {
	fn(){
		console.log('es6语法，对象方法的新定义方式');
	},
	fn2: ()=>console.log('箭头函数')
};
obj.fn();
obj.fn2();
