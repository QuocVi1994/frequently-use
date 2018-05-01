const express=require('express');
const app=express();

//中间件
app.use(function (req,res,next) {
    console.log(req.url);
    console.log(req.method);
    console.log('A中间件');
    //next表示这一级的中间件处理完成以后交给后面的中间件做处理
    next();
});
app.use(function (req,res,next) {
    console.log('c中间件');

});
app.use(function (req,res,next) {
    console.log('B中间件');
    //next();

});


app.listen(3000)