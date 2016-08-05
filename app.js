var express = require('express');
var app = express();



app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){
res.sendfile('landing.html');
});


app.get('/home',function(req,res){
res.sendfile('index2.html');
});


var port = 3000
app.listen(port, function(){
	console.log("running")

})