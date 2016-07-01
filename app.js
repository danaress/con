var express = require('express');
var app = express();



app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){
	console.log("jhbhbkjhb")
res.sendfile('index.html');
});


app.get('/home',function(req,res){
res.sendfile('landing.html');
});


var port = 80
app.listen(port, function(){
	console.log("running")

})