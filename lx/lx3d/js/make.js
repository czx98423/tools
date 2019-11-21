var outWallJson =  
[{"id":"twaver.idc.floor","data":[-2400, 825,2400, 825,2400, -825,-2400, -825,-2400, 825]},
{"id":"twaver.idc.glassWall","wallHeight": 610 ,"data":[-2400, 825,2400, 825,2400, -825,-2400, -825,-2400, 825],
"children":[
{"id":"twaver.idc.door","position":[1200, 0, 825],"width": 350,"height": 280,"depth": 30, 
"glassDepth": 6,},
{"id":"twaver.idc.door","position":[1200, 0, -825],"width": 350,"height": 280,"depth": 30, 
"glassDepth": 6,},
{"id":"twaver.idc.door","position":[-1200, 0, 825],"width": 350,"height": 280,"depth": 30, 
"glassDepth": 6,},
{"id":"twaver.idc.door","position":[-1200, 0,-825],"width": 350,"height": 280,"depth": 30, 
"glassDepth": 6,},
{"id":"twaver.idc.door","position":[2400, 0, 0],"width": 350,"height": 280,"depth": 30, 
"glassDepth": 6,}]},
];


var outWall3d = make.Default.load({id: "twaver.combo",data:outWallJson});
network.getDataBox().addByDescendant(outWall3d);

make.Default.registerObj('conveyor','machine.serva.147','./models/machine.serva.147/');
make.Default.registerObj('machine1','machine.serva.148','./models/machine.serva.148/');
make.Default.registerObj('machine2','machine.serva.157','./models/machine.serva.157/');
make.Default.registerObj('huojia','shelves.serva.151','./models/shelves.serva.151/');
make.Default.registerObj('tuopan','board.serva.154','./models/board.serva.154/');

var machine1,machine2,machine21,secondSplit1,secondSplit2,thirdSplit1,thirdSplit2,huojia1,huojia2,conveyor1,conveyor2,tuopan;

make.Default.load('machine1',function(obj){
  machine1=obj;
  machine1.setPosition(-1000,250,325)
  network.getDataBox().addByDescendant(obj);
  make.Default.load('machine2',function(obj){
    machine2=obj
    machine2.setParent(machine1)
    secondSplit1=new mono.Cube(15,3.5,100);
    secondSplit2=new mono.Cube(15,3.5,100);
    secondSplit1.s({
      'm.color': '#5c6070'
    })
    secondSplit1.setPosition(35,-24,0)
    secondSplit1.setParent(obj)
    secondSplit2.s({
      'm.color':'#5c6070'
    })
    secondSplit2.setPosition(-40,-24,0)
    secondSplit2.setParent(obj)
    box.add(secondSplit1);
    box.add(secondSplit2)

    thirdSplit1=new mono.Cube(22,3.5,100);
    thirdSplit2=new mono.Cube(22,3.5,100);
    thirdSplit1.s({
      'm.color': '#21242f'
    })
    thirdSplit2.s({
      'm.color':'#21242f'
    })
    thirdSplit1.setParent(secondSplit1);
    thirdSplit1.setPosition(0,3.5,0)
    thirdSplit2.setParent(secondSplit2);
    thirdSplit2.setPosition(0,3.5,0)
    box.add(thirdSplit1);
    box.add(thirdSplit2)
    obj.setPosition(0,-130,0)

    network.getDataBox().addByDescendant(obj);
    
    machine21=obj.clonePrefab()
    machine21.setX(-225)
    network.getDataBox().addByDescendant(machine21);
    var track=new mono.Cube(2500,30,25);
    track.setPosition(100,0,-225)
    track.s({
      'm.type': 'phong',
      'm.texture.image':'./img/iron.png'
    })
    var track2=track.clonePrefab();
    track2.setZ(325)
    box.add(track)
    box.add(track2)
  })
},{width:550,height:600,depth:300})

var huojiaList=[
  {
    first:{x:1050,y:150,z:-500},
    num:15
  },
  {
    first:{x:1050,y:150,z:-350},
    num:15
  },
  {
    first:{x:1050,y:150,z:-100},
    num:15
  },
  {
    first:{x:1050,y:150,z:50},
    num:15
  },
  {
    first:{x:1050,y:150,z:200},
    num:15
  },
  {
    first:{x:1050,y:150,z:450},
    num:15
  }
]
make.Default.load('huojia',function(obj){
  obj.setRotationY(Math.PI/2)
  // network.getDataBox().addByDescendant(obj);
  make.Default.load('huojia',function(obj2){
    obj2.setParent(obj)
    obj2.setPosition(0,250,0)
    //network.getDataBox().addByDescendant(obj2);
  })
  huojiaList.forEach(function(e){
    for(var i=0;i<e.num;i++){
      var huojia=obj.clonePrefab()
      huojia.setPosition(e.first.x-132*i,e.first.y,e.first.z)
      network.getDataBox().addByDescendant(huojia);
    }
  })
})



// make.Default.load('conveyor',function(obj){
//   conveyor1=obj
//   obj.setPosition(150,50,120)
//   //obj.setRotationY(Math.PI/2)
//   network.getDataBox().addByDescendant(obj);
// })
// make.Default.load('conveyor',function(obj){
//   conveyor2=obj
//   obj.setPosition(420,50,280)
//   obj.setRotationY(Math.PI/2)
//   network.getDataBox().addByDescendant(obj);
// })

make.Default.load('tuopan',function(obj){
    tuopan=obj
    tuopan.setPosition(420,100,420);
    var node=new mono.Cube(50,55,50);
    node.setPosition(0,35,0)
    node.s({
      'm.type': 'phong',
      'm.texture.image': './img/1.png',
      'top.m.texture.image':'./img/2.png',
      'left.m.texture.image':'./img/3.png',
      'right.m.texture.image':'./img/3.png'
    })
    node.setParent(tuopan)
    network.getDataBox().addByDescendant(obj);
})

