
/*
* Install Rabbitmq Server
* Install nodejs && nmp
* Run those commands:
* [leekwen@ubuntu ~] mkdir node-amqp; cd node-amqp
* [leekwen@ubuntu node-amqp]$ npm install rabbitmq
* [leekwen@ubuntu node-amqp]$ npm install amqp
*/
var amqp = require('amqp');
 
var connection = amqp.createConnection({url: "amqp://admin:admin@127.0.0.1:5672"});
connection.on('ready', function () {
    var callbackCalled = false;
	exchange = connection.exchange('exchange_name', {type: 'direct',autoDelete:false});
    connection.queue("queue_name",{autoDelete:false}, function(queue){
    queue.bind('exchange_name','queue_name', function() {
		exchange.publish('queue_name', 'this is message is testing ......');
		 callbackCalled = true;
		 
	 setTimeout(function() {
     console.log("Single queue bind callback succeeded");
	 //exchange.destroy();
     //queue.destroy();
	 connection.end();
     connection.destroy();
     }, 5000); 
		 
  });
 
    queue.subscribe(function (message) {
      console.log('At 5 second recieved message is:'+ message.data);
    });
	
  });
});
