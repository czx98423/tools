/**
 * leftNav 左边导航块
 */
var leftNav=function(){
    //默认样式
    this.name="计划表",
    this.size="20",
    this.color="#29edf1"
    this.select=document.body
}
leftNav.prototype.createNav=function(data){
    /**
     * @param {object} data
     * @param {String} data.name 文字内容
     * @param {Number} data.size 文字大小
     * @param {String} data.color 文字颜色
     * @param {String} data.select 插入节点位置选择器
     */
    var name=data.name||this.name;
    var size=data.size||this.size;
    var color=data.color||this.color;  
    var select=data.select||this.select
    var $leftnav=$(`
    <div class="left-nav"><div>
        <img src="img/left-nav-icon.png" alt="">
        <img src="img/left-nav-icon2.png" alt="">
    </div></div>`) 
    var $data=$(`<div>${name}</div>`)
    $data.appendTo($leftnav)
    $leftnav.appendTo(select)

    $(".left-nav>div:last-child").css("color",`${color}`)  
    $(".left-nav>div:last-child").css("fontSize",`${size}px`)
}

/**
 * bottomNav 底部导航块
 */
var bottomNav=function(){
    //默认样式
    this.name="计划表"
    this.size="20"
    this.color="#29edf1"
    this.iconUrl="img/bottom-nav-safety.png"     
    this.select=document.body
}
bottomNav.prototype.createNav=function(data){
    /**
     * @param {object} data
     * @param {String} data.name 文字内容
     * @param {Number} data.size 文字大小
     * @param {String} data.color 文字颜色
     * @param {String} data.iconUrl 文字路径
     * @param {String} data.select 插入节点位置选择器
     */
    var name=data.name||this.name;
    var size=data.size||this.size;
    var color=data.color||this.color;  
    var iconUrl=data.iconUrl||this.iconUrl;
    var select=data.select||this.select
    $bottomnav=$(`
    <div class="bottom-nav">
    <div><img alt=""></div>
    </div>`) 
    $data=$(`<div>${name}</div>`)
    $data.appendTo($bottomnav)
    $bottomnav.appendTo(select)

    $(".bottom-nav>div:last-child").css("color",`${color}`)  
    $(".bottom-nav>div:last-child").css("fontSize",`${size}px`)
    $(".bottom-nav>div>img").attr("src",iconUrl)
}

