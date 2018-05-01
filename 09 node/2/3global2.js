/**
 * Created by j on 2017/6/19.
 */
// 一个文件就能看成一个模块或者一个包

//在node中引用包
//如果直接other表示引用核心模块或者引用node_modules文件夹中的模块
//如果读到模块会将模块保存起来方便下次使用
require('./js/other.js');
console.log(a);
var a=300
console.log(a);
//console.log(b);