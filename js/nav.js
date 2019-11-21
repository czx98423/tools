
(function ($) {
    $.widget('hud.nav', {
        options: {
            width: '141px',
            color: '#29edf1',
            fontSize: '20px',
            items: [
                {
                    id: 'test',//名称，唯一编号
                    name: '安全生产',//name 提示信息
                    class: 'icon-all',//样式
                },
            ],
        },

        _create: function () {
            var self = this;
            var el = this.element;
            el.addClass("nav");
            this._createBar();
        },

        _createBar: function () {
            var self = this;
            var el = this.element;
            var $bar = this.$bar = $('<div class="nav-bar"></div>').appendTo(el);
            $bar.css({
                'width': this.options.width,
                'color': this.options.color,
                'font-size': this.options.fontSize
            });
            this.createNavs($bar);
        },

        createNavs: function($ele){
            if(!this.options.items.length) return;
            var self = this;
            this.options.items.forEach(function(item){
                var $nav = self.createNav(item).appendTo($ele);
            });
        },

        createNav: function(item){
            var $nav = $('<div data-id ="'+item.id+'"></div>'),
                $icon = $('<div class="icon iconfont"></div>').appendTo($nav),
                $text = $('<div>'+item.name+'</div>').appendTo($nav);
            $nav.css({
                'background-image': "url('./img/bottom-nav-border.png')",
                'background-repeat': 'no-repeat',
                'background-size': '100% 100%',
                '-moz-background-size': '100% 100%', 
                'padding': '10px'
            });
            $icon.addClass(item.class);
            return $nav;
        },

        destory: function(){
            this.element.remove();
        }
    
    });


})(jQuery)