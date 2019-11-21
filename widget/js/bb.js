  var json={
    "id":"1#阀井",
    "控制状态":"就地",
    "出口压力":"100",
    "1#":'1',
    "2#":'1',
    "3#":'0'
  };
  var lineInfo={
    "side":"right",
    "offset":40
  }
  var canvasInfo={
    startX:10,
    startY:20
  }
  var t1=new Image()
  t1.src='../img/t1.png';
  var t2=new Image('../img/t2.png');
  t2.src='../img/t2.png'
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext("2d")
  ctx.font ="16px Arial";
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#2dc7e2';
  var width = 125,height=0;
  var create = function(data){
    var row = 0;
    for(var index in data){
      var l = ctx.measureText(index+"："+data[index])
      //高度
      if(l.width>width){
        width=l.width
      }
      //宽度
      if(!(index.indexOf('#')>=0)){
        row++;
      }
    }
    height = row*30 + 30 ;
    imgWidth = width + 30 ;
    canWidth= width +100;
    canvas.width=mono.Utils.nextPowerOfTwo(canWidth);
    canvas.height=mono.Utils.nextPowerOfTwo(height);

    if(lineInfo.side=='left'){
      canvasInfo.startX+=100
      createBg(100,width,height)
      // ctx.drawImage(t1,100,0,130,36)
      // ctx.drawImage(t2,100,36,width,height-36);
      createLine(ctx,canWidth)
    }else{
      canvasInfo.startX+=256-canWidth
      createBg(256-canWidth,width,height)
      // ctx.drawImage(t1,0,0,130,36)
      // ctx.drawImage(t2,0,36,width,height-36);
      createLine(ctx,canWidth)
    }

    row=0;
    var column=0;
    ctx.font ="14px Arial";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#39E0FF';
    ctx.fillText('阀门：',canvasInfo.startX-3,canvasInfo.startY+2)
    for(var index in data){
      var val = index +"："+data[index];
      if(!(index.indexOf('#')>=0)){
        ctx.fillText(val,canvasInfo.startX,(36+canvasInfo.startY+row*24));
        row++
      }else{
        ctx.fillStyle='#39E0FF'
        ctx.fillText(index,canvasInfo.startX+40+column*24,canvasInfo.startY+2);
        if(typeof(data[index])=='string'&&(data[index].trim()=='1'||data[index].trim()=='0')){
          var pointColor=Number.parseFloat(data[index])?'#e80210':'#0cf25a';
          ctx.lineWidth=1
          ctx.fillStyle=pointColor;
          ctx.strokeStyle=pointColor;
          ctx.beginPath();
          ctx.moveTo(canvasInfo.startX+45+column*24,10);
          ctx.lineTo(canvasInfo.startX+55+column*24,10);
          ctx.lineTo(canvasInfo.startX+58+column*24,8);
          ctx.lineTo(canvasInfo.startX+48+column*24,8);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();

        }
        column++;
      }

      
    }
  }
  var createBg=function(x,width,height){
    var sLine=2,  bLine=3;
    ctx.fillStyle='#041C40';
    ctx.fillRect(x+1,0+1,125-3,36-2)
    ctx.lineWidth=sLine;
    ctx.strokeStyle='#1FC4FF'
    //上半
    ctx.moveTo(x,7);
    ctx.lineTo(x,0);
    ctx.lineTo(x+7,0);
    ctx.stroke();
    ctx.moveTo(x,36-7);
    ctx.lineTo(x,36);
    ctx.lineTo(x+7,36);
    ctx.stroke();
    ctx.moveTo(x+125-bLine/4,7);
    ctx.lineTo(x+125-bLine/4,0);
    ctx.lineTo(x+125-7-bLine/4,0);
    ctx.stroke();
    ctx.moveTo(x+117-bLine/4,36);
    ctx.lineTo(x+125-bLine/4,36);
    ctx.lineTo(x+125-bLine/4,36-7);
    ctx.stroke();
    //下半
    ctx.strokeStyle='#00BDFF'
    ctx.beginPath()
    ctx.moveTo(x,38+3+sLine/2);
    ctx.lineTo(x+4,38+sLine/2);
    ctx.lineTo(x+width*0.25,38+sLine/2);
    ctx.lineTo(x+width-8,38+bLine/2);
    ctx.lineTo(x+width-bLine/2,38+bLine/2+8);
    ctx.lineTo(x+width-bLine/2,height*0.8);
    ctx.lineTo(x+width-sLine/2,height-3);
    ctx.lineTo(x+width-sLine/2-3,height-sLine/2);
    ctx.lineTo(x+8,height-sLine/2);
    ctx.lineTo(x+sLine/2,height-sLine/2-8);
    ctx.lineTo(x+sLine/2,38+3+sLine/2);
    ctx.stroke();
    ctx.fill()
    //粗线
    ctx.beginPath()
    ctx.moveTo(x+width*0.25,38+bLine/3);
    ctx.lineTo(x+width-8,38+bLine/3);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth=bLine;
    ctx.moveTo(x+width-10,38+bLine/2);
    ctx.lineTo(x+width-bLine,38+10);
    ctx.lineTo(x+width-bLine,height*0.8);
    ctx.lineTo(x+width-bLine/3,height*0.8+bLine/1.5);
    ctx.stroke();
    //三角
    ctx.beginPath()
    ctx.lineWidth=sLine;
    ctx.moveTo(x,height-4.5);
    ctx.lineTo(x,height);
    ctx.lineTo(x+4.5,height);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle='#00BDFF';
    ctx.fill()
  }
  var createLine=function(ctx,width){
    
    if(lineInfo.side=='left'){
      var offsetY= lineInfo.offset,
          offsetX= 5;
          ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(offsetX,offsetY,2.5,0,Math.PI*2);
      ctx.fillStyle="#2dc7e2";
      ctx.strokeStyle ="#2dc7e2";
      ctx.fill();
      ctx.stroke()
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.arc(offsetX,offsetY,4.5,0,2*Math.PI);	
      ctx.stroke();
      ctx.beginPath()
      ctx.moveTo(offsetX,offsetY);
      ctx.lineTo(offsetX+15,offsetY+15)
      ctx.lineTo(100,offsetY+15)
      ctx.stroke();
      ctx.fontWeight=900
      ctx.fillText('784米',offsetX+20,offsetY+10)
      ctx.fillText('220公里',offsetX+20,offsetY+28)
    }
    else{
      var offsetY= lineInfo.offset,
          offsetX= width+canvasInfo.startX-15;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(offsetX,offsetY,2.5,0,Math.PI*2);
          ctx.fillStyle="#2dc7e2";
          ctx.strokeStyle ="#2dc7e2";
          ctx.fill();
          ctx.stroke()
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.arc(offsetX,offsetY,4.5,0,2*Math.PI);	
          ctx.stroke();
          ctx.beginPath()
          ctx.moveTo(offsetX,offsetY);
          ctx.lineTo(offsetX-15,offsetY+15)
          ctx.lineTo(256-100,offsetY+15)
          ctx.stroke()
          ctx.fillText('784米',width-100+canvasInfo.startX,offsetY+10)
          ctx.fillText('220公里',width-100+canvasInfo.startX,offsetY+28)
    }
  }
create(json)

createSmall=function(index,node){
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext("2d");
  ctx.font ="16px Arial";
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 2;
  ctx.fillStyle="#050A2A";
  var val='大水池液位：2935'
  var width=128//mono.Utils.nextPowerOfTwo(ctx.measureText(val).width);
  var height=64
  canvas.width=width;
  canvas.height=height
  ctx.fillRect(0,0,128,64);
  if(!index){
    ctx.beginPath();
    ctx.arc(4.5,height-4.5,2.5,0,Math.PI*2);
    ctx.fillStyle="#2dc7e2";
    ctx.strokeStyle ="#2dc7e2";
    ctx.fill();
    ctx.arc(4.5,height-4.5,4.5,0,2*Math.PI);
    ctx.stroke();	
    ctx.beginPath()
    ctx.moveTo(4.5,height-4.5);
    ctx.lineTo(4.5+20,height-4.5-10)
    ctx.lineTo(4.5+120,height-4.5-10)
    ctx.stroke()
    ctx.fillText(val,4.5+20,height-4.5-15)
  }else{
    ctx.beginPath();
    ctx.arc(width-4.5,height-4.5,2.5,0,Math.PI*2);
    ctx.fillStyle="#2dc7e2";
    ctx.strokeStyle ="#2dc7e2";
    ctx.fill();
    ctx.arc(width-4.5,height-4.5,4.5,0,2*Math.PI);	
    ctx.stroke();
    ctx.beginPath()
    ctx.moveTo(width-4.5,height-4.5);
    ctx.lineTo(width-4.5-20,height-4.5-10)
    ctx.lineTo(width-4.5-120,height-4.5-10)
    ctx.stroke()
    ctx.fillText(val,width-4.5-120,height-4.5-15)
  }
}
//createSmall()