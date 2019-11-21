var mainChain = Promise.resolve();
var demoUtils = {
  speedOnWay: 0.1,

  speedOnCar: 0.1,
  putInChain: function (callback) {
    mainChain = mainChain.then(function (params) {
      return new Promise(function (resolve) {
        if (callback) {
          callback(resolve, params);
        } else {
          resolve();
        }
      })
    });
  },
  calculatingDistance: function (startPosition, targetPosition) {
    var distance;
    distance = Math.sqrt(Math.pow(startPosition.x - targetPosition.x, 2) + Math.pow(startPosition.y - targetPosition.y, 2) + Math.pow(startPosition.z - targetPosition.z, 2));
    return distance;
  },
}

var lineTo = function (targetPosition) {
  var self = this;
  demoUtils.putInChain(function (resolve, position) {
    var itPosition;
    if (position) {
      itPosition = position;
    } else {
      itPosition = targetPosition;
    }
    var node = tuopan;
    var speed = demoUtils.speedOnWay;
    var startPosition = node.getPosition();
    var l = demoUtils.calculatingDistance(startPosition, itPosition);
    var t = l / speed;
    var dx = itPosition.x - startPosition.x;
    var dy = itPosition.y - startPosition.y;
    var dz = itPosition.z - startPosition.z;
    var animate = new twaver.Animate({
      from: 0,
      to: 1,
      dur: t,
      onUpdate: function (value) {
        var nx = startPosition.x + dx * value;
        var ny = startPosition.y + dy * value;
        var nz = startPosition.z + dz * value;
        node.setPosition(new mono.Vec3(nx, ny, nz));
      },
      onDone: function () {
        resolve();
      }
    });
    animate.play();
  });
  return this;
}
var getAndSend=function(){
  demoUtils.putInChain(function(resolve,type){
    if(type){
      index=130
    }
    else{
      index=100
    }
    var animate = new twaver.Animate({
      from: 0,
      to: 1,
      dur: 2000,
      onUpdate: function (value) {
        if(value>=0.5){         
          secondSplit1.setZ(index-index*value);
          secondSplit2.setZ(index-index*value);
          thirdSplit1.setZ(index-index*value);
          thirdSplit2.setZ(index-index*value);
          if(type){
            tuopan.setPosition(tuopan.getWorldPosition());
            tuopan.setParent(null);
            
          }else{
            tuopan.setParent(thirdSplit1);
            tuopan.setPosition(-35,3,10);
          }
        }else{
        secondSplit1.setZ(index*value);
        secondSplit2.setZ(index*value);
        thirdSplit1.setZ(index*value);
        thirdSplit2.setZ(index*value);
        }
      },
      onDone: function () {
            resolve();
          }
    });
    animate.play();
  })
}
var carMove=function(){
  demoUtils.putInChain(function(resolve){
  var speed = demoUtils.speedOnCar;
  var distance= huojia1.getX()-machine1.getX();
  var t = Math.abs(distance / speed);
    var animate = new twaver.Animate({
      from: 0,
      to: 1,
      dur: t,
      onUpdate: function (value) {
        machine1.setX(distance*value)
      },
      onDone: function () {
            resolve('send');
          }
    });
    animate.play();

  var distanceY=60;
  var t = distanceY / 0.03;
  var statrY=machine2.getY()
    var animate2 = new twaver.Animate({
      from: 0,
      to: 1,
      dur: t,
      onUpdate: function (value) {
        machine2.setY(statrY+distanceY*value)
      },
      onDone: function () {
      }
    });
    animate2.play();
  })  
}
var pointArr = [
  {x:420,y:100,z:120},
  {x:0,y:100,z:120}
]
setTimeout(function () {
  pointArr.forEach(e => {
    lineTo(e)
  })
  getAndSend();
  carMove();
  getAndSend('send')
}, 3000)