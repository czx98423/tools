(function ($) {
    $.widget('hud.tongji', {
        options: {          
            title:"年度",
            text1:"",
            text2:"",
            text3:"",
            input:111,
            output:111,
            saillings:111,
        },
        _create: function () {
            this._appendTitle()
            this._appendBigPanel();
            this._appendSmallPanel()        
        },      
        _appendBigPanel:function(){
            var el=this.element;
            html='<div class="statistics-box"><div>'+this.options.text1+'：</div><div>';
            html+='<div class="bg-num"><img src="./'+Math.round(this.options.output).toString()[0]+'.png" alt=""></div>';
            html+='<div class="bg-num"><img src="./'+Math.round(this.options.output).toString()[1]+'.png" alt=""></div>';
            html+='<div class="bg-num"><img src="./'+Math.round(this.options.output).toString()[2]+'.png" alt=""></div>';
            html+='</div><div>万吨</div></div>';
            $(html).appendTo(el)          
            var html='<div class="statistics-box"><div>'+this.options.text2+'：</div><div>';
            html+='<div class="bg-num"><img src="./'+Math.round(this.options.input).toString()[0]+'.png" alt=""></div>';
            html+='<div class="bg-num"><img src="./'+Math.round(this.options.input).toString()[1]+'.png" alt=""></div>';
            html+='<div class="bg-num"><img src="./'+Math.round(this.options.input).toString()[2]+'.png" alt=""></div>';
            html+='</div><div>万吨</div></div>';
            console.log(this.options)
            $(html).appendTo(el) 
        },
        _appendSmallPanel:function(){
            var el=this.element;
            var html='<div class="statistics-box" style="background:url(\'./small-panel.png\') no-repeat"><div>'+this.options.text3+'：</div><div style="left:107px">';
            html+='<div class="bg-num"><img src="./'+this.options.saillings.toString()[0]+'.png" alt=""></div>';
            html+='<div class="bg-num"><img src="./'+this.options.saillings.toString()[1]+'.png" alt=""></div>';
            html+='<div class="bg-num"><img src="./'+this.options.saillings.toString()[2]+'.png" alt=""></div>';
            html+='</div><div style="left:185px">次</div></div>';
           $(html).appendTo(el)
        },
        _appendTitle:function($count){
            var el=this.element;
           $('<div class="statistics-title"><div class="boat"><img src="./boat.png" alt=""><img src="./wave.png" alt=""></div><div>'+this.options.title+'</div></div>').appendTo(el)
        },  
        destory:function(){
            this.element.remove()
        }       
    });
})(jQuery)