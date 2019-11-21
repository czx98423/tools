(function ($) {
    $.widget('hud.count', {
        options: {          
            start:0,//起始值
            end:0,//更新值
            decimals:2,//保留多少小数
            duration:2,//数值跳动时间
            isPad:false,//是否用0补齐
            maxLength:5,//当ispad=true一起决定 当整数个数不足maxlength，用0在前补齐个数
            options:{},//
            title:undefined,
            demo:''//countup实例
        },
        _create: function () {
            var el = this.element;
            $("<div id='CountUp' style='font-size:42px;display:flex'>").appendTo(el);
            this._appendBlock()   
                  
        },      
        _appendBlock:function(){
            var el = this.element;
            this.demo= new CountUp('CountUp',this.options.start,
                                    this.options.end,this.options.decimals,this.
                                    options.duration,this.options.isPad,this.options.maxLength)     
            if(this.options.title)
            this._appendTitle($(el.children()));                 
            return $(el.children())           
        },
        _appendTitle:function($count){
            $(`<div class="CountUp_title">${this.options.title}<div>`).insertBefore($count);
        },
        start:function () {  
            this.demo.start()
        },
        update:function(){
            this.demo.update(this.options.end)
        },
        destory:function(){
            this.element.remove()
        }   
    });
})(jQuery)