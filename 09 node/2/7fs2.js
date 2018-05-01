//这个时候是去加载核心模块fs
const fs=require('fs');

//对文件路径操作模块
const path=require('path');

//__dirname __filename
// fs.readFile(__dirname+'/package.json',function (err,data) {
//异步读取
fs.readFile(path.join(__dirname,'package.json'),function (err,data) {
    if(!err){
        //如果文件读取正常的情况下获取到的数据是个二进制文件 010101
        console.log(data.toString());
        console.log('------------------------------');
    }
});
//同步读取文件操作
console.log(fs.readFileSync(path.join(__dirname,'package.json')).toString());


//写创建文件并写文件
// fs.writeFile(path.join(__dirname,'1.txt'),'---测试文件2',(error)=>{
//     if(!error){
//         console.log(error);
//     }
// });

//追加操作
fs.appendFile(path.join(__dirname,'1.txt'),'---测试文件3',(error)=>{
    if(!error){
        console.log(error);
    }
});

//删除
fs.unlink(path.join(__dirname,'1.txt'),(err)=>{
    if(!err){
        console.log(err);
    }
});