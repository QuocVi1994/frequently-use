/**
 * Created by j on 2017/6/21.
 */
/**
 * Created by j on 2017/6/21.
 */


const express=require('express');
const app=express();
//如果能够匹配上home页面表示交给这个路由做处理
app.get('/home', (req,res)=>{
    //send中包含了禁止往下处理end app
    res.send('home end')
    //next()
});
app.get('/index', (req,res)=>{
    //send中包含了禁止往下处理end app
    res.send('index end')
});

//根据筒子模型会由上往下依次执行 use是中间件 需要通过next()
app.use((req,res,next)=>{
    console.log('404')
   res.send('<h1>404 error</h1>')
});
app.listen(3000);