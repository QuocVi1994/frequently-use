/**
 * Created by j on 2017/6/24.
 */
const express = require('express');
const app = express();
//引用验证码模块
const  captchapng = require('captchapng');

//返回验证码图片
app.get('/getpng',(req,res)=>{
    //求随机数
    var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    //设置响应头
    res.setHeader('Content-Type','image/png');
    //将图片传输出去
    res.send(imgbase64);
});

app.listen('3000');