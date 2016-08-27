var express = require('express');
var app = express();



app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){
res.sendfile('landing.html');
});


app.get('/home',function(req,res){
res.sendfile('index2.html');
});


var port = 80
app.listen(port, function(){

})