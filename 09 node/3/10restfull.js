/**
 * Created by j on 2017/6/21.
 */
//restfull
// get  查看
// post 提交 body
// put 修改 body
// delete 删除 body

//get 和post 的区别 method有区别
// 1 get 不安全
// 2 get发送数据小 get的url长度大小限制在 256  1m
// 3. get发送数据在urlParams  post 是body

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//获取随机数
let getId=()=>{
    return Math.random().toString().substring(2);
}

let arr=[
    {id:getId(),text:'css',type:true},
    {id:getId(),text:'js',type:false},
];
//查看数据
app.get('/getdata',(req,res)=>{
    res.send(arr)
});
//添加数据
app.post('/postdata',(req,res)=>{
  if(req.body.text){
      arr.push({id:getId(),text:req.body.text,type:false})
      res.send({type:'ok'})
  }else{
      res.send({type:'error'})
  }

});
//修改
app.put('/putdata/:id',(req,res)=>{
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    console.log(req.params.id);
    //找到id修改内容
    console.log(req.body.text);
    if(req.body.text){
        arr.forEach((item)=>{
            if(item.id==req.params.id){
                item.text=req.body.text
            }
        });
        res.send({type:'ok'})
    }else{
        res.send({type:'error'})
    }

   // res.send({type:'put数据'})
});
app.delete('/deletedata/:id',(req,res)=>{
    if(req.params.id){
        arr.forEach((item,index)=>{
            if(item.id==req.params.id){
                //删除arr数据
                arr.splice(index,1)
            }
        });
        res.send({type:'ok'})
    }else{
        res.send({type:'error'})
    }
});
app.listen(3001);


//api getdata() adddata() editdat() deldat()
//webapi
//http://127.0.0.1:3001/getdata 查看
//http://127.0.0.1:3001/postdata 增加
//http://127.0.0.1:3001/putdata/4769174582787048 修改
//http://127.0.0.1:3001/deletedata/9881958319690933 删除