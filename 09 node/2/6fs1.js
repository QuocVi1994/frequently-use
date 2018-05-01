//这个时候是去加载核心模块fs
const fs=require('fs');
// console.log(fs);

//readFile通过异步操作用来读取文件
//1 路径
//2 回调函数

//错误先行 error放在获取数据的前面

// 同步有顺序 异步是没有顺序
fs.readFile('C:/Users/j/Desktop/day02/demo/package.json',function (err,data) {
    if(!err){
        //如果文件读取正常的情况下获取到的数据是个二进制文件 010101
        console.log(data.toString());
        console.log(1);
    }

});
fs.readFile('C:/Users/j/Desktop/day02/demo/package.json',function (err,data) {
    if(!err){
        //如果文件读取正常的情况下获取到的数据是个二进制文件 010101
        console.log(data.toString());
        console.log(2);
    }

});