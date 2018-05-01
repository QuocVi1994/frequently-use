 //更新数据
const MongoClient = require('mongodb').MongoClient;
let  url='mongodb://localhost:27017/itcast';
MongoClient.connect(url,(err,db)=>{
    //对user集合中的数据进行修改
    let user=db.collection('user');
    user.update({name:"zhangsan3"},{$set:{name:"张三4"}},(err,result)=>{
        if(err)throw  err;
        console.log(result);
        //关闭数据库
        db.close();
    })
});