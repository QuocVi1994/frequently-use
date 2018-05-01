
const express = require('express');
const app = express();
//引用子模块中的路由
const router =require('./accountrouter.js');

//使用不同的路由中间件即可
app.use('/account',router);


app.listen(3000);