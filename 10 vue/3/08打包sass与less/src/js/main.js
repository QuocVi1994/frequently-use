// 因为我们要使用vue234这个js模块的返回值，必须使用Vue变量接收才能用。
// import from 都是es中的关键字
import '../css/index.css';
import '../less/header.less';
import '../sass/footer.scss';
import Vue from './vue234.js';

var vm = new Vue({
	el: '#app',
	data: {
		test: '演示'
	}
});
