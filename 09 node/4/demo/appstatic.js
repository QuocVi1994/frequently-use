/**
 * Created by j on 2017/6/22.
 */
// 必须要下载
const express =require('express');
const  app=express();
//path核心模块
const path=require('path');
//静态资源
app.use(express.static(path.join(__dirname,'public')));
app.listen(3000);