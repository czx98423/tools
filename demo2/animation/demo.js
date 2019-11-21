var DEBUG=false;
var NODE_SIZE=12;
var SPEED=0.4;
var NODE_DROP_SPEED=800;
var TOUCH_GAP=1;
var PATH_WIDTH=DEBUG ? 1: 0;
var RENDER_PERIOD=5;
var UNIT_ENTRY_X=237, UNIT_ENTRY_Y=490;
var UNIT_COUNT_LIMIT=150;

var fps=0;
var pause=false;
var box;
var network;
var units=[];
for(var i=0;i<6;i++){
	units.push({x: i*280, y:0});
}

function registerNormalImage(url, name, callback) {
	var image = new Image();
	image.src = url;
	image.onload = function() {
		twaver.Util.registerImage(name, image, image.width, image.height);
		image.onload = null;
		if(network){
			network.invalidateElementUIs();
		}
		if(callback){
			callback();
		}
	};
}
registerNormalImage('unit.png','unit');

var boxImageStatus={};
var tempCanvas=document.createElement('canvas');

function setBoxNodeImage(key, node){
	var status=boxImageStatus[key];
	if(status==='registered'){
		node.setImage(key);
	}else{
		createAndRegisterBoxImage(key, node);
	}
}

function createAndRegisterBoxImage(key, node){
	var scale=2; //scale so not too fuzzy when zoom in.
	var canvas=tempCanvas;
	canvas['width']=NODE_SIZE*scale;
	canvas['height']=NODE_SIZE*scale;
	var context = canvas.getContext('2d');

	context.clearRect(0,0,NODE_SIZE*scale,NODE_SIZE*scale);
	
	var width=NODE_SIZE/3*scale;
	var height=NODE_SIZE/2*scale;

	context.lineWidth=1*scale;
	for(var i=0;i<6;i++){
		context.fillStyle=(key[i]=='1') ? '#FE2E2E' : '#00FF40';
		context.strokeStyle='#045FB4';
		var x=(i%3)*width;
		var y=parseInt(i/3)*height;
		context.fillRect(x, y, width, height);		
		context.strokeRect(x, y, width, height);
	}

	context.strokeStyle=key.indexOf('1')>=0 ? '#FE2E2E' : '#045FB4';
	context.lineWidth=3*scale;
	context.strokeRect(0,0,NODE_SIZE*scale,NODE_SIZE*scale);

	var url=canvas.toDataURL();
	registerNormalImage(url, key, function(){
		node.setImage(key);
		boxImageStatus[key]='registered';
	});
}

function init() {
	var button=document.createElement('button');
	button.innerHTML='Pause';
	button.type='button';
	button.onclick=function(){
		pause=!pause;
	}
	document.body.appendChild(button);

	var button=document.createElement('button');
	button.innerHTML='Clear';
	button.type='button';
	button.onclick=function(){
		for(var x=0;x<units.length;x++){
			for(var i=0;i<units[x].paths.length;i++){
				var path=units[x].paths[i];
				var nodes=path.nodes;
				while(nodes.length>0){
					box.remove(nodes[0]);
					nodes.shift();
				}
			}
		}
	}
	document.body.appendChild(button);

	var span=document.createElement('span');
	span.id='info';
	span.style['font']='12px Arial';
	span.style['padding-left']='20px';
	document.body.appendChild(span);
	
	box = new twaver.ElementBox();
	network = new twaver.vector.Network(box);
	document.body.appendChild(network.getView());
	network.adjustBounds({x:0,y:30,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight});
	window.onresize = function (e) { 
		network.adjustBounds({x:0,y:30,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight});
	};

	network.setMovableFunction(function(element){
		return false;
	});
	network.setSendToTopOnSelected(false);

	for(var i=0;i<units.length;i++){
		createUnit(units[i]);
	}

	setTimeout(function(){
		network.zoomOverview();
	},0);

	setInterval(nextFrame, RENDER_PERIOD);
	var frameFunction=function(){
		if(pause){
			return;
		}
		for(var x=0;x<units.length;x++){
			var unit=units[x];
			var unitTotal=0;
			for(var i=0;i<unit.paths.length;i++){
				unitTotal+=unit.paths[i].nodes.length;
			}
			unit.node.setName(unitTotal);
			
			if(unitTotal<UNIT_COUNT_LIMIT){
				createNode(unit);
			}
		}
	};
	frameFunction();
	setInterval(frameFunction, NODE_DROP_SPEED);

	setInterval(function(){
		document.getElementById('info').innerHTML=('fps: '+fps+', count: '+box.size());
		fps=0;
	}, 1000);

	
}

function createUnit(unit){
	var unitNode = new twaver.Node();
	unitNode.setImage('unit');
	unitNode.setLocation(unit.x, unit.y);
	unitNode.setStyle('label.font', '14px Arial');
	box.add(unitNode);
	unit.node=unitNode;

	loadPathData(unit);
	createPathNodes(unit);
}

function createPath(unit, startX, startY, stops){
	var path=[];
	path.x=startX+unit.x;
	path.y=startY+unit.y;
	var lastX=path.x;
	var lastY=path.y;
	for(var i=0;i<stops.length;i++){
		var stop=stops[i];
		var x=stop[0]+unit.x;
		var y=stop[1]+unit.y;
		var stopInfo={
			x: x,
			y: y,
			stay: stop.length==3 ? stop[2] : 0,
			angle: getStopAngle(lastX, lastY, x, y),
		};
		path.push(stopInfo);

		lastX=stopInfo.x;
		lastY=stopInfo.y;
	}
	path.nodes=[];
	return path;
}
function getStopAngle(x1, y1, x2, y2){
	if(y2>y1) return 180;
	if(y2<y1) return 0;
	if(x2>x1) return 90;
	if(x2<x1) return -90;

	return 0;
}

function loadPathData(unit){
	var paths=[];
	var path=createPath(unit, 237, 490,
		[
		[237, 461],
		[171, 461, 200],
		[154, 461, 200],
		[138, 461, 200],
		[121, 461, 200],
		[80, 461],
		[80, 424],
		]);
	path.nextPathIndex=[1, 2];
	paths.push(path);

	var path=createPath(unit, 80, 424,
		[
		[130, 424, 500],
		[164, 424, 500],
		[238, 424],
		[238, 390],
		]);
	path.nextPathIndex=3;
	paths.push(path);

	var path=createPath(unit, 80, 424,
		[
		[80, 390],
		[130, 390, 200],
		[164, 390, 200],
		[238, 390],
		]);
	path.nextPathIndex=3;
	paths.push(path);

	var path=createPath(unit, 238, 390,
		[
		[238, 370, 100],
		[238, 358, 100],
		[238, 202],
		[210, 202],
		]);
	path.nextPathIndex=[];
	paths.push(path);

	var childPositions=[14, 49, 97, 132, 168, 202, 237, 285, 319, 355];
	var lastConnectPath;
	for(var childIndex=0;childIndex<childPositions.length;childIndex++){
		var stops=[];
		var childPosition=childPositions[childIndex]
		stops.push([211, childPosition]);
		for(var stopIndex=0;stopIndex<15;stopIndex++){
			stops.push([190-stopIndex*11.5, childPosition, 2500]);
		}
		stops.push([8, childPosition]);
		
		var childPath=createPath(unit, 211, 302, stops);
		path.nextPathIndex.push(paths.length);
		paths.push(childPath);

		if(childIndex<childPositions.length-1){
			var connectPath=createPath(unit, 8, childPosition, [[8, childPositions[childIndex+1]]]);
			paths.push(connectPath);
			childPath.nextPathIndex=paths.length-1;
			if(lastConnectPath){
				lastConnectPath.nextPathIndex=paths.length-1;
			}
			lastConnectPath=connectPath;
		}
	}

	var tailPath=createPath(unit, 8, 355,
		[
		[8, 485],
		[14, 485],
		[14, 540]
		]);
	paths.push(tailPath);	
	if(lastConnectPath){
		lastConnectPath.nextPathIndex=paths.length-1;
	}
	if(childPath){
		childPath.nextPathIndex=paths.length-1;
	}

	unit.paths=paths;
}

function createPathNodes(unit){
	if(!DEBUG){
		return;
	}
	var paths=unit.paths;
	for(var pathIndex=0;pathIndex<paths.length;pathIndex++){
		var path=paths[pathIndex];
		var node = new twaver.ShapeNode();
		node.setStyle('shapenode.closed', false);
		node.setStyle('vector.fill', false);
		node.setStyle('vector.outline.color', 'red');
		node.setStyle('vector.outline.width', PATH_WIDTH);
		node.setStyle('label.position', 'right');
		node.setStyle('label.color', 'red');
		node.setStyle('label.visible', DEBUG);
		
		var stopCount = path.length;
		node.addPoint({x: path.x, y: path.y});

		for(var i=0;i<stopCount;i++){
			var stop=path[i];
			node.addPoint({x: stop.x, y: stop.y});
			if(stop.stay){
				var equipment = new twaver.Node();
				equipment.setSize(NODE_SIZE+1, NODE_SIZE+1);
				equipment.setCenterLocation(stop.x, stop.y);
				equipment.setStyle('body.type', 'vector');
				equipment.setStyle('vector.fill', false);
				equipment.setStyle('vector.outline', true);
				equipment.setStyle('vector.outline.width', PATH_WIDTH);
				equipment.setStyle('vector.outline.color', 'red');
				box.add(equipment); 
			}
		}
		box.add(node);
		box.sendToTop(node);
	}
}

function createNode(unit){
	var node = new twaver.Node();
	node.setSize(NODE_SIZE, NODE_SIZE);
	node.setCenterLocation(unit.x+UNIT_ENTRY_X, unit.y+UNIT_ENTRY_Y);
	setBoxNodeImage('000000', node);
	node.setStyle('label.position', 'center');
	node.setStyle('label.color', 'white');
	node.setStyle('label.font', '6px arial');
	node.setStyle('label.visible', DEBUG);
	node.setClient('type', 'box');
	box.add(node);

	node.setClient('stop_index', 0);

	unit.paths[0].nodes.unshift(node);
	setName(node, '0.0');
}

function nextFrame(){
	if(pause){
		return;
	}

	for(var m=0;m<units.length;m++){
		var unit=units[m];
		var paths=unit.paths;
		for(var pathIndex=0;pathIndex<paths.length;pathIndex++){
			var path=paths[pathIndex];
			for(var i=0;i<path.nodes.length;i++){
				var node=path.nodes[i];
				var stopIndex=node.getClient('stop_index');
				if(stopIndex==path.length){
					path.nodes.splice(i);
					i--;
					node.setClient('stop_index', 0);
					setName(node, '-');
					if(path.nextPathIndex){
						var selectedNextPath=null;
						if(path.nextPathIndex instanceof Array){
							for(var x=0;x<path.nextPathIndex.length;x++){
								var thisPath=paths[path.nextPathIndex[x]];
								if(selectedNextPath){
									if(thisPath.nodes.length<selectedNextPath.nodes.length){
										selectedNextPath=thisPath;
									}
								}else{
									selectedNextPath=thisPath;
								}
							}
						}else{
							selectedNextPath=paths[path.nextPathIndex];
						}
						selectedNextPath.nodes.unshift(node);	
						for(var z=0;z<paths.length;z++){
							if(selectedNextPath===paths[z]){
								setName(node, z+'.0');
							}
						}
					}else{
						box.remove(node);
					}
				}else{
					if(i<path.nodes.length-1){
						var nextNodePosition=path.nodes[i+1].getCenterLocation();
						var position=node.getCenterLocation();
						if(Math.abs(position.x-nextNodePosition.x)<=(NODE_SIZE+TOUCH_GAP) && Math.abs(position.y-nextNodePosition.y)<=(NODE_SIZE+TOUCH_GAP)){
							continue;
						}
					}
					if(node.getClient('stay')){
						if(new Date().getTime()-node.getClient('stay_from')>node.getClient('stay_value')){
							node.setClient('stay_from', null);
							node.setClient('stay_value', null);
							node.setClient('stay', null);
						}else{
							//create random fault
							if(Math.random()<0.00001){
								var faultIndex=parseInt(Math.random()*6);
								var imageKey=node.getImage();
								if(imageKey[faultIndex]=='0'){
									imageKey=imageKey.substring(0, faultIndex)+'1'+imageKey.substring(faultIndex+1, imageKey.length);
									setBoxNodeImage(imageKey, node);
								}
							}
							continue;
						}
					}
					var stop=path[stopIndex];
					var from=node.getCenterLocation();
					var dist=getDistance(from.x, from.y, stop.x, stop.y);
					node.setAngle(stop.angle);

					if(dist<=SPEED){
						node.setCenterLocation(stop.x, stop.y);
						node.setClient('stop_index', stopIndex+1);
						setName(node, pathIndex+'.'+(stopIndex+1));
						if(stop.stay){
							node.setClient('stay_from', new Date().getTime());
							node.setClient('stay_value', stop.stay);
							node.setClient('stay', true);
						}
					}else{
						var percent=SPEED/dist;
						var x=from.x+percent*(stop.x-from.x);
						var y=from.y+percent*(stop.y-from.y);
						node.setCenterLocation(x,y);
					}
				}
			}
		}
	}

	fps++;
}

function getDistance(x1, y1, x2, y2){
	return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

function setName(element, name){
	if(DEBUG){
		element.setName(name);
	}
}