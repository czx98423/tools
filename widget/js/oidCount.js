(function ($) {
    $.widget('hud.count', {
        options: {          
            start:0,
            end:0,
            decimals:2,
            duration:2,
            options:{},
            demo:''
        },
        _create: function () {
            var self = this;
            var el = this.element;
            this.demo= new CountUp(el.attr("id"),this.options.start,this.options.end,this.options.decimals,this.options.duration)
            this.demo.start()
        },
        updata:function(){
            console.log(1)
            this.demo.update(this.options.end)
        }   
    });
})(jQuery)