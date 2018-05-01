/**
 * Created by j on 2017/6/22.
 */
// 必须要下载
const express =require('express');
const  app=express();

//只要有人访问/getdata    get
app.get('/getdata/:page',(req,res)=>{
    // query获取参数？
    console.log(req.query);
    //params获取参数：page
    console.log(req.params);
    res.send({"text":"测试get","data":req.query})
});

app.listen(3000);