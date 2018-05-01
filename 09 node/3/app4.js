const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'www')));

//REST full设计模式

app.post('/postData', multipartMiddleware, function(req, res) {
   // res.setHeader('Content-Type', 'application/json;charset=utf-8');
    console.log(req.body);
    res.send(req.body)
});
app.get('/home',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send('测试')
})
app.listen(3200);