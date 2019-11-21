var axiox = require('axios')
const config = require('../config')
//console.log('Worker-' + process.pid + ': Hello world.')
//接收主进程的消息
process.on('message', (msg) => {
  console.log('[Worker] Received message from master: ' + msg)
  //返回主进程消息
})
console.log(config)
setTimeout(() => {
  axiox.get('https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&')
  .then(function (response) {
    process.send(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
}, 3000)