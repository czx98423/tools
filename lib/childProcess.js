const child_process = require('child_process');
const path = require('path');
const event = require('events');
const eventEmiter = new event()
let list;
// const cpuNum = require('os').cpus().length//cpu核数

// for (let i = 0; i < cpuNum; ++i) {
//   child_process.fork('./work.js')
// }

//子进程实例，用来发送接收子进程消息
eventEmiter.on('cloth',function(msg){
  msg.result.forEach(function(e){
    console.log(e)
  })
})


function creatProcess(io){
  console.log('connect')
  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });
  
  const work = child_process.fork(path.join(__dirname, './work.js'))
  //接收子进程消息
  work.on('message',function(msg){
    eventEmiter.emit('cloth',JSON.parse(msg))
  })
  process.on('exit', (msg) => {
    console.log('主进程退出，kill子进程'+msg)  
  });
}
function handle(){

}
exports.creatProcess=creatProcess;