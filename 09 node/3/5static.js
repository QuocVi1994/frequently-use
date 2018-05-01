/**
 * Created by j on 2017/6/21.
 */
//静态页面
const express=require('express');
const app=express();
const path=require('path');

//1.静态资源或者是一些请求头放最上面,以便于节省服务器资源
//2. 对于页面的处理放在中间
// 3. 对于错误页面和页面没关系的操作放在最后面



//如果静态资源多了以后
//express.static 用来处理静态资源,不会动态生成的资源
// 只能写绝对路径
app.use(express.static(path.join(__dirname,'www')));

//一般处理
app.get('/home',(req,res)=>{
    res.send('<h1>home</h1>')
});

//404处理
app.use((req,res,next)=>{
    res.send('<h1>404错误页面</h1>')
});

app.listen(3000);