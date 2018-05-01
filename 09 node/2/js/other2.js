//通过var let const 定义参数和方法只能使用在当前模块
var a=100;
//1.global 将属性或者方法暴露出去 (不推荐)
//2.module.exports 相当于将当前模块中的属性暴露出去
//3.exports相当于将当前模块中的属性暴露出去

//注意 不要直接赋值
module.exports.a=a;
module.exports.b=200;
exports.d=400 //正确
exports.add=(a,b)=>{
    return a+b;
}
//exports=400 错误
// exports={
//     d:400
// };
console.log(module.exports===exports);
//console.log(module);