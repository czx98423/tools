(function ($) {  
    $.widget("hud.gauge",{
        options:{
            scale:1, //大小0-1缩小 >1放大
            mychart:'',
            unit:'M', //单位
            max:25, //最大值
            splitBlock:5,//分割多少块
            splitNumber:5, //每块多少刻度
            red:[],
            green:[],
            yellow:[],           
            data:{
                "罐号":"T101",
                "液位":0
            },
            option:{
                title:{
                    x: 'center',
                    y: '80%',
                    bottom: 100,
                },
                series: [{
                    name: '主表',
                    type: 'gauge',
                    data: [0],
                    min:0,
                    max:25,
                    radius: '80%',
                    splitNumber:5,
                    axisLine: {            // 坐标轴线
                        show:false,    
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[1, '#00bcd4']],
                            width: 2,
                            //shadowColor : '#00bcd4', //默认透明
                            shadowBlur: 20
                        }        
                    },
                    splitLine: {           // 分隔线
                        length :20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:1,
                            color: 'white',
                            shadowColor : '#00bcd4', //默认透明
                            shadowBlur: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :15,        // 属性length控制线长
                        splitNumber:10,
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'white',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontSize:24,
                            fontWeight: 'bolder',
                            color: 'WHITE',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    itemStyle:{
                        color:"white",
                        },
                        detail:{
                            show:false
                        },      
                    },
                    {
                        name: '线型表',
                        type: 'gauge',  
                        radius:"79.5%",
                        data: [0],
                        min:0,
                        max:25,
                        endAngle:225,
                        axisLine: {            // 坐标轴线
                        show:false,    
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[1,`rgba(26,232,77,0.6)`]],
                            width: 60,
                            
                        }        
                        },
                        detail:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            show:false
                        },
                        pointer:{
                            show:false
                        }  
                    },
                    {
                        name: '扇形表',
                        type: 'gauge',  
                        radius:"85%",
                        data: [0],
                        endAngle:225,
                        min:0,
                        max:25,
                        axisLine: {            // 坐标轴线
                            show:false,    
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[1, '#40AE4B']],
                                width: 4,                           
                            }        
                        },
                        detail:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            show:false
                        },
                        pointer:{
                            show:false
                        }  
                    }
                ]
            }
        },
        _init:function(){
            //修改默认样式
            this.options.option.series[0].max=this.options.max
            this.options.option.series[1].max=this.options.max
            this.options.option.series[2].max=this.options.max
            this.options.option.series[0].splitNumber=this.options.splitBlock
            this.options.option.series[0].axisTick.splitNumber=this.options.splitNumber
            this.options.option.series[0].data[0]=this.options.data['液位'];
            for(var i=0;i<=100;i++){
                this.options.red[i]=[i*0.01,`rgba(255,0,26,${i*0.01})`]
                this.options.yellow[i]=[i*0.01,`rgba(255,232,0,${i*0.01})`]
                this.options.green[i]=[i*0.01,`rgba(26,232,77,${i*0.01})`]
            }
        },
        _create:function () {      
            var box=$("<div class='gauge' style='position:relative;width:500px;height:500px;transform: scale("+this.options.scale+");transform-origin: 0 0;'>");          
            this.creatgauge(box)
         },
         creatgauge:function (box) {  
             var el=this.element;
             var gauge=$("<div class='a1' style='width:500px;height:500px;background-color: black;'>")
             gauge.appendTo(box);
             $("<div class='b1'><div>"+this.options.data['液位']+this.options.unit+"</div><div>液位</div></div>").appendTo(box)
             $("<div class='b2'></div>").appendTo(box)
             $("<div class='d3'>"+this.options.data['罐号']+"</div>").appendTo(box)
             box.appendTo(el)                     
             this.options.mychart=echarts.init(el.children().children()[0])
             if(this.options.data['液位']==0)
             this.options.mychart.setOption(this.options.option);
             else
                this.update()
             console.log(1)
         },
         update:function(x){
            var red=this.options.red,
            green=this.options.green,
            yellow=this.options.yellow, 
            option=this.options.option,
            data=x,
            mychart=this.options.mychart;
            option.series[0].data[0]=x;
            console.log(this.options,x)
            //最终角度         
            var endAngle=(225-(data/this.options.max)*270)
            //旋转过程20帧/每帧旋转iangel
            var iAngel=(endAngle-option.series[2].endAngle)/20
            //console.log(iAngel)
            var t=setInterval(function () { 
            if(option.series[1].endAngle<=9){
                option.series[1].axisLine.lineStyle.color=red; 

                option.series[2].axisLine.lineStyle.color=red; 
            }
            else if(option.series[1].endAngle<=117){
                option.series[1].axisLine.lineStyle.color=yellow;
                option.series[2].axisLine.lineStyle.color=yellow;
            }
            else {
                option.series[1].axisLine.lineStyle.color=green;
                option.series[2].axisLine.lineStyle.color=green;
            }              
            option.series[1].endAngle=option.series[1].endAngle+iAngel
            option.series[2].endAngle=option.series[2].endAngle+iAngel
            if((option.series[1].endAngle).toFixed(2)==endAngle.toFixed(2)){
                clearInterval(t)
            }
            mychart.setOption(option);
            }
            ,30)       
         }

    })
})(jQuery)