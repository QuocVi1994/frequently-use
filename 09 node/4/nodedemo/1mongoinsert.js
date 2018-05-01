/**
 * Created by j on 2017/6/22.
 */
//1 下载mongo npm install mongodb --save 通过mongodb来使用node的方式操作数据库
//2 引用mongodb包
//3  连接数据库
const MongoClient = require('mongodb').MongoClient;

//本地地址
  let  url='mongodb://localhost:27017/itcast';
// ip远程地址
//let  url='mongodb://192.168.125.222:27017/itcast';
MongoClient.connect(url,(error,db)=>{
    //获取当前集合
   let user=db.collection('user');
   //db就是一个数据集合
    //user.insert如果后面写一条数据表示插入一条数据
  //  user.insert({"name":"node插入数据"},(error,result)=>{
    user.insert([{"name":"node插入数据1"},{"name":"node插入数据2"},{"name":"node插入数据3"}],(error,result)=>{

      if(error) throw error;
        console.log(result);
        //关闭数据库
        db.close();
    })

});