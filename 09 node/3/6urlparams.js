const express=require('express');
const app=express();
//: 表示参数可以变化
//？ 可以为空
//home/name

app.get('/home/:page?',(req,res)=>{
    console.log(req.url);
    res.send(req.url)
    console.log(1)
});

app.get('/home2/name',(req,res)=>{
    console.log(req.url);
    res.send(req.url)
    console.log(2)
});
//正则表达式
app.get(/.*fly$/, function(req, res) {
    res.send(req.url);
});
app.listen(3000);