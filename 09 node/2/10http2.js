//1.引用http
const http=require('http');
//2.创建服务
const server=http.createServer((req,res)=>{
   // for(let key in req){
   //     console.log(key)
   // }
    console.log(req.url);
    console.log(req.method);
    if(req.url.substring(1)==='home'){
        //设置响应头数据编码
        res.setHeader('Content-Type',"text/html;charset=UTF-8");
        //write也能用来写页面
        res.write('<h1>中文测试2</h1>')
        res.write('<h1>中文测试3</h1>')
        res.write('<h1>中文测试4</h1>')
        res.write('<h1>中文测试5</h1>')
        res.end('中文测试1');
    }else if(req.url.substring(1)==='info'){
        res.end('info');
    }
    res.end();
});
//3 监听端口
server.listen(4456);