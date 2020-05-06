var express = require('express');
var app = express();
var http = require('http')
var server = http.Server(app);
const mosca = require('mosca');
var path = require('path')
var mqtt = require('mqtt');

var MqttServer = new mosca.Server({
  http: {
    port: 3000,
    bundle: true,
    static: './'
  }
});
//对服务器端口进行配置， 在此端口进行监听
MqttServer.on('clientConnected', function(client) {
  //监听连接
  console.log('client connected', client.id);
});
/**
* 监听MQTT主题消息
**/
MqttServer.on('published', function(packet, client) {
  //当客户端有连接发布主题消息
  var topic = packet.topic;
  //console.log(packet);
  switch (topic) {
      case 'test':
          console.log('message-publish', packet.payload.toString());
          //MQTT转发主题消息
          //MqttServer.publish({ topic: 'other', payload: 'sssss' });
          break;
      case 'other':
          console.log('message-123', packet.payload.toString());
          break;
  }
});

MqttServer.on('ready', function() {
  //当服务开启时
  console.log('mqtt is running...');
});


app.use(express.static(path.join(__dirname+'/js')))
app.use(express.static(path.join(__dirname+'/js')))
server.listen(8083, function(){
  console.log('listening on *:8083');
});


var client = mqtt.connect('mqtt://127.0.0.1'); //连接到服务端
//client.subscribe('presence');
var num = 0;
var qtt = {}; //定义消息（可以为字符串、对象等）
setInterval(function() {
  qtt = Math.random()*10+'';
    client.publish('test', qtt, { qos: 0, retain: true });  
}, 5000);
 