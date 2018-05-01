
const express      = require('express');
const app = express();
//引用session npm install express-session
const session = require('express-session');

//使用session
app.use(session({
    secret: 'keyboard cat' //会对session进行加密处理
}));

//首页
app.get('/',(req,res)=>{
   //检测是否有过登录
    if(req.session.isLogin){
        //欢迎某某
        res.send('欢迎'+req.session.name)
    }else{
        res.send('请登录')
    }
});

app.get('/login/:name',(req,res)=>{
    //将名字存储起来
   req.session.name=req.params.name;
   req.session.isLogin=true;
   res.send(req.params.name+'您已经成功登录')
});
app.get('/logout',(req,res)=>{
    //将名字存储起来
   req.session.isLogin=false;
    req.session.name=null;
    res.send('您已经推出')
});
app.listen(3000);