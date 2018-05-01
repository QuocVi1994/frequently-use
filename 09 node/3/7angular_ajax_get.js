/**
 * Created by j on 2017/6/21.
 */
const express=require('express');
const app=express();
const path=require('path');
//静态资源处理

// app.use((req,res,next)=>{
//     if(req.url=='/1angular.html'){
//         res.send('<h1>angular网站</h1>')
//     }
//     //console.log(req.url);
//     next();
// })
//1angular.html
app.use(express.static(path.join(__dirname,'www')));
//ajax
//get 是特殊的中间件，不符合条件自动next()
app.get('/getdata',(req,res)=>{
    res.send('{"text":"这是一个测试"}')
});
//404错误
app.use((req,res,next)=>{
    res.send('<h1>404错误</h1>')
});
app.listen(3000);