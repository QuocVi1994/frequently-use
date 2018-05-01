/**
 * Created by j on 2017/6/24.
 */
const express      = require('express');
const app = express();

//引用session npm install express-session
const session = require('express-session');

//使用session
app.use(session({
    secret: 'keyboard cat' //会对session进行加密处理
}));

app.get('/ ',(req,res)=>{
    //express中session是交给req来进行处理的
    req.session.name='xiaoming';
    //id用来划分每一个用户的唯一值
    console.log(req.session.id);
    res.send('session测试'+req.session.id);
});
app.get('/other',(req,res)=>{

    res.send(`other测试id:${req.session.id} name:${req.session.name}`);
});
app.listen(3000);