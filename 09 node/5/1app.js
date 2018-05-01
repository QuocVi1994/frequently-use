/**
 * Created by j on 2017/6/24.
 */
//反向代理

const express=require('express');
const app=express();


//引用request 来请求数据
const request=require('request');
//请求页面获取数据
app.get('/',(req,res)=>{
    //req是你自己请求过来的数据
    //在这请求数据 豆瓣数据
    request('https://api.douban.com/v2/book/1220562',(error,reponse,body)=>{
        console.log(body);
        res.send(body)

    });

});
app.listen(3000);