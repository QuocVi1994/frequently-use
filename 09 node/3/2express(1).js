/**
 * Created by j on 2017/6/21.
 */

//1 下载 npm install express --save
//2 引用 requrie('express')
//3 调用express
//4 接受每个请求
//5 监听端口
const express=require('express');
const app=express();

//处理一个请求
// /faicon
//   /
app.get('/', (req,res)=>{
    //  /favicon.icon
   //req 请求
    //res 响应
    console.log(req.url);
    console.log(req.method);
    //返回响应结果
    res.send('hello express')
});
app.get('/a', (req,res)=>{
    //  /favicon.icon
    //req 请求
    //res 响应
    console.log(req.url);
    console.log(req.method);
    //返回响应结果
    res.send('hello express')
});
// /b
app.listen(3000);