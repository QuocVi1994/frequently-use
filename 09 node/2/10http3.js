//1.引用http
const http=require('http');
const fs=require('fs');
const path=require('path');
//2.创建服务
const server=http.createServer((req,res)=>{
    console.log(req.url);
    //用来处理html
    if(req.url.substring(1)==='home'){
       fs.readFile(path.join(__dirname,'2test.html'),(error,data)=>{
           //有错误抛出错误
           if(error) {
               throw  error;
           }
           //有页面数据将数据返回给浏览器
           res.write(data);
           res.end();
       })
    }else if(req.url.substring(1)==='info'){
        res.end();

    }
    //处理css样式
    else if(req.url.substring(1).endsWith('main.css')){
        fs.readFile(path.join(__dirname,'css','main.css'),(error,data)=>{
            //有错误抛出错误
            if(error) {
                throw  error;
            }
            //有页面数据将数据返回给浏览器
            res.write(data);
            res.end();
        })
    }else {
        res.end();
    }
   // res.end();
});
//3 监听端口
server.listen(4456);