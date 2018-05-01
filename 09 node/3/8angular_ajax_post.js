
const express=require('express');
const app=express();
const path=require('path');
//如果需要url解析
const url=require('url');

//用来处理post中的 body数据 Content-Type: application/x-www-form-urlencoded
const bodyParser = require('body-parser')

//用来处理post中的 body数据 form-data
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

app.use(express.static(path.join(__dirname,'www')));
//用来处理post数据中Content-Type: application/x-www-form-urlencoded  类型数据
//app.use(bodyParser.urlencoded({ extended: false }))
//app.get 和app.method 本质是1.需要url地址能够匹配2.请求类型也能匹配
app.get('/getdata/:page',(req,res)=>{
    //console.log(req.method);
    //console.log(req.url);
    //通过url.parse将url地址进行转换获取到url参数，如果碰到有中文需要在后面添加true保证url解析url编码
   // console.log(url.parse(req.url,true));
   // let urlParams=url.parse(req.url,true).query;

    //通过req.params获取到url的参数路径
    console.log(req.params);
    //获取？后面的参数
    console.log(req.query);

    //req.body 用来做post这一类含有数据体的内容解析
     console.log(req.body);
    res.send(req.body)
});


//1 post处理数据通过bodyParser Content-Type: application/x-www-form-urlencoded
//app.post('/getdata/:page',(req,res)=>{

//2 post处理数据通过multipartMiddleware 处理form-data数据
app.post('/getdata/:page',multipartMiddleware,(req,res)=>{
    console.log(req.method);
    //通过req.params获取到url的参数路径
    console.log(req.params);
    //获取？后面的参数
    console.log(req.query);
    //req.body 用来做post这一类含有数据体的内容解析
    console.log(req.body);
    res.send('{"text":"这是一个post测试"}')
});

//全匹配 主要用来全局权限控制器
app.all('/alldata',(req,res)=>{
    console.log(req.method);
    res.send('{"text":"这是一个alldata测试"}')
});
//404错误
app.use((req,res,next)=>{
    res.send('<h1>404错误</h1>')
});
app.listen(3003);