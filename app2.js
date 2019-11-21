var express = require('express');
var app = express();
var http = require('http')
var server = http.Server(app);
var io = require('socket.io')(server);
var path = require('path')
var childProcess = require('./lib/childProcess.js')



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/fileread/sock.html');
});

let option={
	host: '127.0.0.1',
	port: 3000,
	path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
}

http.request(option,function(res){
  console.log('STATUS: ' + res.statusCode); 
  console.log('HEADERS: ' + JSON.stringify(res.headers)); 
  res.setEncoding('utf8'); 
  res.on('data', function (chunk) { 
  console.log('BODY: ' + chunk); 
})
})
app.use(express.static(path.join(__dirname,'./fileread')))
app.use(express.static(path.join(__dirname,'./lib')))
server.listen(8083, function(){
  console.log('listening on *:8083');
});