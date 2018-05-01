/**
 * Created by j on 2017/6/22.
 */
const express=require('express');
const app=express();
//jsonp
//cors
// 反向代理
app.get('/getdata',(req,res)=>{
   ///getdata？callback=jsonp
    // json：{name："zhangsan"}
    //jsonp: jsonp({name："zhangsan"})
    if(req.query.callback){
        //检测是否含有callback参数
        let data={name:"张三"};
        //req.query.callback+{name:"张三"}=jsonp({name："zhangsan"})
        res.send(`${req.query.callback}(${JSON.stringify(data)})`)
    }
});

app.listen(3000)
