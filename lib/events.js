const event = require('events');
const emitter = new event();

let do1= function(){
  console.log(1)
}

let do2 = function(){
  console.log(2)
}

emitter.on('do',do1);
emitter.on('do',do2);
emitter.emit('do')