/**
 * Created by j on 2017/6/24.
 */

const express = require('express');
const app = express();
const router=express.Router();
//路由中间件原因：因为请求路径过多以后不便于维护所以才路由中间件的方式来管理路由
//1 调用router ：express.Router();
//2 通过router的方式创建路由
//3 将路由添加到路由中间件中去
//这是一个路由 router.get/router.post /router.put/router.delete
// / /
// router.get('/account',(req,res)=>{
//     res.send('router路由')
// });
router.get('/login',(req,res)=>{
    res.send('loginrouter路由')
});
router.get('/logout',(req,res)=>{
    res.send('logoutrouter路由')
});
app.use('/account',router);
//app.get('/',(req,res))
//中间件其实本质也是可以做http请求
// app.use('/',(req,res,next)=>{
//     res.send('use中间件数据')
// });
app.listen(3000);