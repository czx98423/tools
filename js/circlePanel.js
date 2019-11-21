(function ($) {  
    $.widget("hud.circle",{
        options:{
            data:{
                "罐号":"T101",
                "液位":0
            }
        },
        _create:function () { 
            //生成不变样式刻度表，底部油罐名
            //动态数据根据液位显示在中心，液位/容量*270° 偏移量改变指针，指针路径，路线 
         },

    })
})(jQuery)