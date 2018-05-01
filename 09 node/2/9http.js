//1.引用http
const http=require('http');
//2.创建服务
const server=http.createServer((req,res)=>{
    //查看地址
    console.log(req.url);
    //req请求过来的数据
    //res响应数据
    //console.log('有人访问了');
    //数据响应完成以后得结束
    res.end('<h1>hello world</h1>');
});
//3 监听端口
server.listen(3001);