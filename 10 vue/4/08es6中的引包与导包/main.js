// es6引入1个东东的方式：import 变量名 from '.only.js';
// es6引入多个东东的方式：import { 变量名1, 变量名2, xxx。。。 } from '.only.js';

// err，log变量的名词必须和more.js中导出的东西名称一样，因为是多个，要通过名字区分
import { err, log, a, b } from './more.js'  // 这个模块导出的是多个东东，这里可以实现按需加载，只需那些东西就写哪些

// fn变量的名称可以任意取，因为就是一个东东
import fn from './only.js'   // 这个模块导出的是一个函数

err('错误');
log('打印');
fn(10, 50);
console.log(a);
console.log(b);
