//在node中是没有window对象
//console.log(window); 错误
//console.log(global);
for(let key in global){
    console.log(key);
}

//如果是global.出来的参数或者方法相当于将当前参数和方法暴露出去

//var 或 let 或const 定义出来的参数只能用在当前js中

global.a=100;
var b=200
console.log(a);
console.log(global.b);