/**
 * Created by j on 2017/6/22.
 */
// 必须要下载
const express =require('express');
const  app=express();
//path核心模块
const path=require('path');

//引用对req.body数据操作  application/x-www-form-urlencoded
const bodyParser = require('body-parser');

//处理req.body 中 form-data
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


//静态资源
app.use(express.static(path.join(__dirname,'public')));

//将post传递过来的body进行转换，完成之后再后面的中间件就能够接收到req.body
app.use(bodyParser.urlencoded({ extended: false }));
 //application/json
 app.use(bodyParser.json());

//post请求
app.post('/postdata',multipartMiddleware,(req,res)=>{

    // req.body



    //以下方式是url发送数据 不是通过body发送
    // query获取参数？
   // console.log(req.query);
    //params获取参数：page
  //  console.log(req.params);
    console.log(req.body);
    res.send( req.body)
});
app.listen(3000);