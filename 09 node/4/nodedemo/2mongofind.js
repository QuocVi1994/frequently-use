const MongoClient = require('mongodb').MongoClient;
let  url='mongodb://localhost:27017/itcast';
MongoClient.connect(url,(err,db)=>{
    //查看itcast数据库中 user这个集合
    let user=db.collection('user');
    //通过find找到数据 将其转换成数据

    //精确查找
    // user.find({age:18})

    //数据库查找
    //(>) 大于 - $gt
    // (<) 小于 - $lt
    //(>=) 大于等于 - $gte
    //(<= ) 小于等于 - $lte


    //联合查询
    user.find({age:18,name:"saner2"}).toArray((error,docs)=>{
       if(error)throw  error;
       //如果能够找到数据将其打印出来
        console.log(docs);
        //操作完成以后要关闭数据库连接
        db.close();
    })
 });