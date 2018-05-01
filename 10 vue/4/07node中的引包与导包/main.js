var obj = require('./more');  // 这个模块导出的是一个对象
var fn = require('./only');  // 这个模块导出的是一个函数

obj.err('错误');
obj.log('打印');
fn(10, 50);
