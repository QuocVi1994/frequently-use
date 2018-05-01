/**
 * import是es6规范中定义的模块引入关键字:
 * 
 * 使用了模块化开发之后就拥有了一些特征：
 * 1、不在拥有全局变量
 * 2、解决了模块之间依赖的问题，使用js来描述每个的依赖关系
 * */
import '../css/index.css';   // css不需要返回值所以直接导入不接收
import $ from './jquery-3.1.0.js'; // jq需要返回值所以要接收

console.log($('body').width() + ' : ' +$('body').height());
