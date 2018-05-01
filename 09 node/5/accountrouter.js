/**
 * Created by j on 2017/6/24.
 */
//创建路由
const express = require('express');
const router=express.Router();

router.get('/login',(req,res)=>{
    res.send('测试路由login')
});
router.get('/logout',(req,res)=>{
    res.send('测试路由logout')
});
router.get('/userinfo',(req,res)=>{
    res.send('测试路由userinfo')
});

//让外部使用该模块中的路由
// exprots=router
 module.exports=router;
//exports.router=router;

//module.exports=== exports true

//如果有多个
//exports.router=router;
//router =require('./accountrouter.js');
//router.router

//模块引用是通过module.exports=导入出去
//module.exports 如果当前模块只需要引用一个出去

//只有一个引用
// module.exports=router;
//router =require('./accountrouter.js');
//router

//只有一个引用
//module.exports.router=router;
//router =require('./accountrouter.js');
//router.router



