/**
 * Created by j on 2017/6/24.
 */
const express      = require('express');
//引用cookie处理的中间件
const cookieParser = require('cookie-parser');
const app = express();
//使用cookie的中间件处理数据
app.use(cookieParser());
//表示1天过期时间
let tiemout=1*24*60*60*1000;
//登录 在登录中设置cookie
app.get('/login/:name',(req,res)=>{
    //expires 设置过期时间
   // res.cookie('name','张三',{expires:new Date()(Date.now()+tiemout)})
    res.cookie("name",req.params.name,{expires:new Date(Date.now()+tiemout)});
    res.send('测试');
});
//other页面 获取cookie
app.get('/other',(req,res)=>{
    //接受从浏览器获取过来的cookie信息
    console.log(req.cookies.name);
    res.send('other页面')
});
app.listen(3000,(err,data)=>{
    if(err)console.log(err);
    console.log('启动3000端口')
});