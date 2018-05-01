/**
 * Created by j on 2017/6/21.
 */
const express=require('express');
const app=express();
const path=require('path');
const bodyParser = require('body-parser')

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname,'www')));

app.post('/postdata',multipartMiddleware,(req,res)=>{
    //form-data
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    console.log(req.body);
    res.send(req.body);
});
app.listen(3100);