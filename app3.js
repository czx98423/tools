var express=require('express')
var app =express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path')
const child_process = require('child_process');
const event = require('events');
const config = require('./config');
const load = require('./lib/lodash').sss
const eventEmiter = new event()

load()
app.get('/', function(req, res){
  res.sendFile(__dirname + '/fileread/sock.html');
  res.json({code:200,msg:"ok"})
});
app.post('/room/getElement/1R1', function(req, res){
  console.log('1R1'+req.headers['cookie'])
  var obj={
    "elementPojoList": [
      {
        "time": "2019-05-14T01:58:05.336Z",
        "value": Math.random().toFixed(2)*100,
        "unit": "%",
        "elementName": "demo11",
        "metricId": "1R137",
        "elementDefinitionId": "sb",
        "elementDefinitionName": "sb",
        "roomId": "1R1",
        "isCross": "string",
        "dataType": "string",
        "metricName": "string",
        "metricDefinitionId": "ENV_09_06",
        "elementDisplayName": "湿度",
        "metricDefinitionName": "湿度"
      },
      {
        "time": "2019-05-14T01:58:05.336Z",
        "value": "43",
        "unit": "%",
        "elementName": "demo11",
        "metricId": "1R139",
        "elementDefinitionId": "sb",
        "elementDefinitionName": "sb",
        "roomId": "1R1",
        "isCross": "string",
        "dataType": "string",
        "metricName": "string",
        "metricDefinitionId": "ENV_09_06",
        "elementDisplayName": "湿度",
        "metricDefinitionName": "湿度"
      },
      {
        "time": "2019-05-14T01:58:05.336Z",
        "value": "51",
        "unit": "%",
        "elementName": "demo11",
        "metricId": "1R138",
        "elementDefinitionId": "sb",
        "elementDefinitionName": "sb",
        "roomId": "1R1",
        "isCross": "string",
        "dataType": "string",
        "metricName": "string",
        "metricDefinitionId": "ENV_09_06",
        "elementDisplayName": "湿度",
        "metricDefinitionName": "湿度"
      },
    ]
  }
  res.statusCode = 502;
  res.json(obj);
  res.end()
});

app.post('/room/getElement/1R2', function(req, res){
  console.log('1R2'+req.headers['cookie'])
  var obj={
    "elementPojoList": [
      {
        "time": "2019-05-14T01:58:05.336Z",
        "value": "54",
        "unit": "%",
        "elementName": "demo12",
        "metricId": "1R237",
        "elementDefinitionId": "sb",
        "elementDefinitionName": "sb",
        "roomId": "1R2",
        "isCross": "string",
        "dataType": "string",
        "metricName": "string",
        "metricDefinitionId": "ENV_09_06",
        "elementDisplayName": "湿度",
        "metricDefinitionName": "湿度"
      }
    ]
  }
  res.statusCode = 200 ;
  res.json(obj);
  res.end()
});
app.get('/adapter/login', function(req, res){
  var token="sso:"+new Date().getTime()
  res.setHeader('Set-Cookie',token);
  console.log(token)
  res.statusCode = 200 ;
  res.json({success:'true'});
  res.end()
})
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  setInterval(function(){
    socket.emit('a','sb')
  },2000)
});

eventEmiter.on('cloth',function(msg){
  msg.result.forEach(function(e){
    console.log(e)
  })
})
config.msg='111'
console.log(config)
const work = child_process.fork(path.join(__dirname, './lib/work.js'))
  //接收子进程消息
work.on('message',function(msg){
    eventEmiter.emit('cloth',JSON.parse(msg))
  })
work.send('ok')
process.on('exit', (msg) => {
    console.log('主进程退出，kill子进程'+msg)  
});
app.use(express.static(path.join(__dirname,'./lib')))
app.use(express.static(path.join(__dirname,'./fileread')))
http.listen(3000, function(){
  console.log('listening on *:3000');
});
    

