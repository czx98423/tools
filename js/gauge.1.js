(function ($) {  
    $.widget("hud.gauge",{
        options:{
            scale:1, //大小0-1缩小 >1放大
            mychart:'',
            unit:'M', //单位
            cunit:"液位",
            max:25, //最大值
            splitBlock:5,//分割多少块
            splitNumber:5, //每块多少刻度
            saftcolor:'67,182,81',//安全色
            normalcolor:'255,232,0',//正常色
            dangercolor:'232,36,46',//危险色
            red:[],
            green:[],
            yellow:[],           
            data:[{//表名称=>数值
                "T101":0,
                "T102":0,
                "T103":0,
                "T104":0,
                "T105":0,
                "T106":0,
                "T107":0,
                "T108":0,
                },
                {
                "T201":0,
                "T202":0,
                "T203":0,
                "T204":0,
                "T205":0,
                "T206":0,
                }
            ],
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
                        radius:"88%",
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
            
        },
        _create:function () {     
            for(var i=0;i<=100;i++){
                this.options.red[i]=[i*0.01,`rgba(${this.options.dangercolor},${i*0.01})`]
                this.options.yellow[i]=[i*0.01,`rgba(${this.options.normalcolor},${i*0.01})`]
                this.options.green[i]=[i*0.01,`rgba(${this.options.saftcolor},${i*0.01})`]
            } 
            this.createrow()          
         },
         createrow:function () {
            var el=this.element; 
            el.css({
                'transform': 'scale('+this.options.scale*0.4+')',
                'transform-origin': '0 0'
            })
            for(var row of this.options.data){
                var div=$("<div>")
                div.appendTo(el)   
                for(var index in row){    
                    var box=$("<div class="+index+" style='position:relative;width:500px;height:500px;'>");  
                    var el=this.element;
                    var gauge=$("<div class='a1' style='width:500px;height:500px;background-color: black;'>")
                    gauge.appendTo(box);
                    $("<div class='b1'><div>"+row[index]+"<span>"+this.options.unit+"</span></div><div>"+this.options.cunit+"</div></div>").appendTo(box)
                    $("<div class='b2'></div>").appendTo(box)
                    $("<div class='d3'>"+index+"</div>").appendTo(box)    
                    box.appendTo(div);     
                this.creategauge(index,row[index])                       
                }            
            }  
          },
         creategauge:function (a,b) {                              
             mychart=echarts.init($(`.${a}>.a1`)[0]);
             $(`.${a}>.b1>div:first-child`).html(b+"<span>"+this.options.unit+"</span>")
             option=this.options.option;
             option.series[0].data=[b]
             var endAngle=(225-(b/this.options.max)*270)
             option.series[1].endAngle=endAngle
             option.series[2].endAngle=endAngle
             if(endAngle<=9){
                option.series[1].axisLine.lineStyle.color=this.options.red; 
                option.series[2].axisLine.lineStyle.color=this.options.red; 
            }
            else if(endAngle<=117){
                option.series[1].axisLine.lineStyle.color=this.options.yellow;
                option.series[2].axisLine.lineStyle.color=this.options.yellow;
            }
            else {
                option.series[1].axisLine.lineStyle.color=this.options.green;
                option.series[2].axisLine.lineStyle.color=this.options.green;
            }        
            mychart.setOption(option);  
         },
         update:function(){
            for(var row of this.options.data){
                for(var index in row){ 
                    this.creategauge(index,row[index])
                }
            }
         },
         destory:function(){
            this.element.remove()
        }  

    })
})(jQuery)