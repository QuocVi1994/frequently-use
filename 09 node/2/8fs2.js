//这个时候是去加载核心模块fs
const fs=require('fs');

//对文件路径操作模块
const path=require('path');

//查看文件

fs.readFile(path.join(__dirname,'package.json'),(error,data)=>{
    //获取到数据
    if(error) {
        throw  error;
    }
    let  json=JSON.parse(data);
    json.name='这是修改后的名字'
   // 插入到1.txt
    fs.writeFile(path.join(__dirname,'1.txt'),JSON.stringify(json),(error)=>{
        if(error) {
            throw  error;
        }
    })
});