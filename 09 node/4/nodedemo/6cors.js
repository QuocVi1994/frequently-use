/**
 * Created by j on 2017/6/22.
 */
/**
 * Created by j on 2017/6/22.
 */
const express=require('express');
const app=express();
//添加请求头 支持cors跨域
app.get('/getdata',(req,res)=>{
    //添加响应头
    res.header("Access-Control-Allow-Origin","*");
   // res.header("Content-Type","text/json; charset=utf-8");
    res.send({"name":"测试cors跨域"})
});

app.listen(3000);
