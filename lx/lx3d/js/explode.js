var box = new mono.DataBox();
var network = new mono.Network3D(box, null, monoCanvas);
mono.Utils.autoAdjustNetworkBounds(network, document.documentElement, 'clientWidth', 'clientHeight');

var pointlight = new mono.PointLight(0xffffff, 0.5)
pointlight.setPosition(1000, 1000, 1000)
box.add(pointlight)
var camera = network.getCamera();
camera.setPosition(-758.4344224813372, 966.1554351353735, 874.8157303237876)
box.add(new mono.AmbientLight(0x888888));
network.setShowAxis(true)
var a=make.Default.load({id: "twaver.scene.terrain"})
network.getDataBox().addByDescendant(a);

make.Default.registerObj('container','container','./models/container/');
make.Default.load('container',function(e){
  e.setPosition(600,250,200)
  e.s({'m.visible':true})
  console.log(e.getBoundingBox().size() )
  box.addByDescendant(e)

  var plane = new mono.Plane(50,50);
  plane.setRotationX(Math.PI/2)
  plane.setPosition(400,270,250)
  plane.s({
    'm.texture.image': './models/box.serva.3344/1.jpg',
    'm.side': mono.DoubleSide,
    'm.texture.repeat': new mono.Vec2(5/13,5/13),
    'm.texture.offset': new mono.Vec2(0,0.3773),
  })
  box.addByDescendant(plane)
})

var outWallJson = [{
    "id": "twaver.idc.floor",
    "data": [-2400, 825, 2400, 825, 2400, -825, -2400, -825, -2400, 825]
  },
  {
    "id": "twaver.idc.glassWall",
    "wallHeight": 610,
    "data": [-2400, 825, 2400, 825, 2400, -825, -2400, -825, -2400, 825],
    "children": [{
        "id": "twaver.idc.door",
        "position": [1200, 0, 825],
        "width": 350,
        "height": 280,
        "depth": 30,
        "glassDepth": 6,
      },
      {
        "id": "twaver.idc.door",
        "position": [1200, 0, -825],
        "width": 350,
        "height": 280,
        "depth": 30,
        "glassDepth": 6,
      },
      {
        "id": "twaver.idc.door",
        "position": [-1200, 0, 825],
        "width": 350,
        "height": 280,
        "depth": 30,
        "glassDepth": 6,
      },
      {
        "id": "twaver.idc.door",
        "position": [-1200, 0, -825],
        "width": 350,
        "height": 280,
        "depth": 30,
        "glassDepth": 6,
      },
      {
        "id": "twaver.idc.door",
        "position": [2400, 0, 0],
        "width": 350,
        "height": 280,
        "depth": 30,
        "glassDepth": 6,
      }
    ]
  },
];
var racks=[
  {
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "42U",
    "depth": 80,
    "position": [
        -117.2831,
        "floor-top",
        105.6503
    ]
},
{
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "42U",
    "depth": 80,
    "position": [
        -153.2077,
        "floor-top",
        107.176
    ]
},
{
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "42U",
    "depth": 80,
    "position": [
        -189.1323,
        "floor-top",
        107.176
    ]
},
{
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "42U",
    "depth": 80,
    "position": [
        -123.531,
        "floor-top",
        110.227
    ]
},
{
    "id": "twaver.idc.headerRack",
    "width": 60,
    "height": "42U",
    "depth": 80,
    "position": [
        -59.455,
        "floor-top",
        111.7528
    ]
},
{
    "id": "twaver.idc.airCondition",
    "position": [
        23.471,
        "floor-top",
        43.1006
    ]
},
{
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "47U",
    "depth": 80,
    "position": [
        -153.2076,
        "floor-top",
        -82.686
    ]
},
{
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "47U",
    "depth": 80,
    "position": [
        -190.658,
        "floor-top",
        -182.689
    ]
},
{
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "47U",
    "depth": 80,
    "position": [
        -128.109,
        "floor-top",
        -181.163
    ]
},
{
    "id": "twaver.idc.airCondition",
    "position": [
        -121.856,
        "floor-top",
        -153.557
    ]
},
{
    "id": "twaver.idc.rack",
    "width": 60,
    "height": "47U",
    "depth": 80,
    "position": [
        -62.5072,
        "floor-top",
        -179.6378
    ]
}
]
var object3d = make.Default.load(racks);
for(var i = 0; i < object3d.length; i++){
  var obj = object3d[i];
  network.getDataBox().addByDescendant(obj);
}

var outWall3d = make.Default.load({
  id: "twaver.combo",
  data: outWallJson
});
network.getDataBox().addByDescendant(outWall3d);
//一个面、由多个小块 组成跟面一样的预先隐藏 ready。
//点击面，隐藏面，显示块，执行爆炸动画
//
class explodeFace {
  constructor(network, box) {
    this.network = network;
    this.box = box;
    this.planeList = [];
    this.plist = [];
    this.init();
  }
  init() {
    var plane = new mono.Plane(500, 500);
    plane.setRotationX(-Math.PI * 0.5)
    plane.setY(500)
    plane.s({
      'm.texture.image': './img/3.png',
      'm.side': mono.DoubleSide,
      //'m.opacity':0
    })
    plane.setClient('type', 'face')
    this.box.addByDescendant(plane)
    this.plane = plane;
    this.plist.push(plane)

    this.handleMouseDownEvent = this.handleMouseDownEvent.bind(this);
    this.network.getRootView().addEventListener('mousedown', this.handleMouseDownEvent);

    plane = this.plane.clonePrefab()
    plane.setY(10)
    this.box.addByDescendant(plane);
    //this.plist.push(plane)
    plane = this.plane.clonePrefab()
    plane.setRotation(0, 0, 0)
    plane.setPosition(0, 250, 250)
    this.box.addByDescendant(plane);
    this.plist.push(plane)
    plane = this.plane.clonePrefab()
    plane.setRotation(0, 0, 0)
    plane.setPosition(0, 250, -250)
    this.box.addByDescendant(plane);
    //this.plist.push(plane)
    plane = this.plane.clonePrefab()
    plane.setPosition(250, 250, 0)
    plane.setRotation(0, Math.PI / 2, 0)
    this.box.addByDescendant(plane);
    
    plane = this.plane.clonePrefab()
    plane.setRotation(0, Math.PI / 2, 0)
    plane.setPosition(-250, 250, 0)
    this.box.addByDescendant(plane);
    this.plist.push(plane)

    this.plist.forEach(e => {
      var num = 10
      for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
          var splane = new mono.Plane(500 / num, 500 / num)
          splane.setParent(e)
          splane.setPosition((num-1)* 500 /(2*num) - 500 * (i - 1) / num, (num-1)* 500 /(2*num) - 500 * (j - 1) / num, 1)
          splane.s({
            'm.texture.image': './img/3.png',
            'm.transparent': true,
            'm.texture.repeat': new mono.Vec2(1 / num, 1 / num),
            'm.texture.offset': new mono.Vec2((1 / num) * (num - i), (1 / num) * (num - j)),
            'm.side': mono.DoubleSide,
            'm.opacity': 0
          })
          splane.setClient("position",splane.getPosition())
          splane.setClient("rotation",splane.getRotation())
          this.planeList.push(splane)
        }
      }
    })
    this.planeList.forEach(e => {
      this.box.addByDescendant(e)
    })
  }
  handleMouseDownEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    var element = this.network.getFirstElementByMouseEvent(e);
    var node = element.element;
    if (node.getClient('type') == 'face') {
      this.explode(node);
    }
  }
  explode(node) {
    var self = this;
    //全炸
    this.plist.forEach(e=>{
      e.s({
        'm.visible': false
      })
    }) 
    this.planeList.forEach(e => {
      e.s({
        'm.opacity': 1
      })
      self.doExplodeAnimate(e)
    })
    
    //单面炸
    // node.s({'m.visible': false});
    // node.getChildren()._as.forEach(e => {
    //     e.s({
    //       'm.opacity': 1
    //     })
    //     self.doExplodeAnimate(e)
    //   })
  }
  doExplodeAnimate(e) {
    //向外爆炸
    //随机位置，随机旋转
    var index;
    Math.random() > 0.5 ? index = 1 : index = -1;
    var x = (Math.random() * 400 + 200) * index;
    Math.random() > 0.5 ? index = 1 : index = -1;
    var y = (Math.random() * 400 + 200) * index,
      z = Math.random() * 200 + 100,
      rx = Math.PI * (Math.random() * 8 + 4),
      ry = Math.PI * (Math.random() * 8 + 4),
      rz = Math.PI * (Math.random() * 8 + 4),
      oldX = e.getX(),
      oldY = e.getY(),
      oldZ = e.getZ(),
      oldRX = e.getRotationX(),
      oldRY = e.getRotationY(),
      oldRZ = e.getRotationZ();
    var animate = new twaver.Animate({
      from: 0,
      to: 1,
      dur: 2000,
      easing:'easeOut',
      onUpdate: function (value) {
        e.setPosition(oldX + x * value, oldY + y * value, oldZ + z * value);
        e.setRotation(oldRX + rx * value, oldRY + ry * value, oldRZ + rz * value)
        e.s({
          'm.opacity': 1 - value
        })
      },
      onDone: function () {

      }
    });
    animate.play();
  }
  recover(){
    var self=this;
    this.planeList.forEach(e => {
      self.doRecoverAnimate(e)
    })
    // node.getChildren()._as.forEach(e => {
    //   self.doRecoverAnimate(e,node)
    // })
  }
  doRecoverAnimate(e,index){
      var oldX = e.getX(),
      oldY = e.getY(),
      oldZ = e.getZ(),
      oldRX = e.getRotationX(),
      oldRY = e.getRotationY(),
      oldRZ = e.getRotationZ(),
      pos=e.getClient('position'),
      rot=e.getClient('rotation'),
      x=oldX-pos.x,
      y=oldY-pos.y,
      z=oldZ-pos.z,
      rx=oldRX-rot.x,
      ry=oldRY-rot.y,
      rz=oldRZ-rot.z;
      
    var animate = new twaver.Animate({
      from: 0,
      to: 1,
      dur: 2000,
      easing:'easeOut',
      onUpdate: function (value) {
        e.setPosition(oldX - x * value, oldY - y * value, oldZ - z * value);
        e.setRotation(oldRX - rx * value, oldRY - ry * value, oldRZ - rz * value)
        e.s({
          'm.opacity': value
        })
      },
      onDone: function () {
        e.s({
          'm.opacity': 0
        })
        e.getParent().s({'m.visible':true })
      }
    });
    animate.play();
  }
}
var ex = new explodeFace(network, box)