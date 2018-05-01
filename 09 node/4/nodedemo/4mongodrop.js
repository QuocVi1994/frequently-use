/**
 * Created by j on 2017/6/22.
 */
    //删除数据
const MongoClient = require('mongodb').MongoClient;
let  url='mongodb://localhost:27017/itcast';
MongoClient.connect(url,(err,db)=>{
    //对user集合中的数据进行修改

    //在公司中很少去删除某条数据
    //在公司合理处理删除数据应该是 加删除
    let user=db.collection('user');
    user.remove({name:"张三4",isdelte:false},(err,result)=>{
        if(err)throw  err;
        console.log(result);
        //关闭数据库
        db.close();
    })
});