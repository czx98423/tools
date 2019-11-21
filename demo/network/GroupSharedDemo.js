SharedNode = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
};
twaver.Util.ext('SharedNode', Object, {
    init: function () {
        var main = document.getElementById('main');
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var centerPane = new BorderPane(this.network, toolbar);
        this.network.setLinkFlowEnabled(true);
        centerPane.setTopHeight(25);
        demo.Util.appendChild(centerPane.getView(), main, 0, 0, 0, 0);

        this.initBox();
        
        window.onresize = function (e) { centerPane.invalidate(); };
    },
    initBox: function () {
        var layer = new twaver.Layer(100);
        this.box.getLayerBox().add(layer);

        var node1 = this.createNode(this.box, { x: 300, y: 150 });
        var node2 = this.createNode(this.box, { x: 300, y: 300 });
        var node3 = this.createNode(this.box, { x: 600, y: 150 });
        node3.setClient('shared', true);
        node3.setLayerId(layer.getId());
        var node4 = this.createNode(this.box, { x: 600, y: 300 });
        node4.setClient('shared', true);
        node4.setLayerId(layer.getId());
        var node5 = this.createNode(this.box, { x: 900, y: 150 });
        var node6 = this.createNode(this.box, { x: 900, y: 300 });

        var group1 = this.createGroup(this.box, "group1");
        group1.addChild(node1);
        group1.addChild(node2);

        var group2 = this.createGroup(this.box, "group2");
        group2.addChild(node5);
        group2.addChild(node6);

        var self = this;
        this.network.getGroupChildrenRects = function(group){
            var list = new twaver.List();
            group.getChildren().forEach(function(child) {
                if ( child instanceof twaver.Node) {
                    var ui = self.network.getElementUI(child);
                    if (ui) {
                        var rect = ui.getZoomViewRect(self);
                        if (rect) {
                            list.add(rect);
                        }
                    }
                }
            }, this);
            self.box.getDatas().forEach(function(data){
                if ( data instanceof twaver.Node && data.getClient('shared')) {
                    var ui = self.network.getElementUI(data);
                    if (ui) {
                        var rect = ui.getZoomViewRect(self);
                        if (rect) {
                            list.add(rect);
                        }
                    }
                }
            }, this);
            return list;
        }
        this.box.addDataPropertyChangeListener(function(e){
            if(e.source.getClient('shared') && e.property == "location"){
                self.network.invalidateElementUIs();
            }
        });
    },
    createGroup: function(box, id){
        var group = new twaver.Group(id);
        group.setExpanded(true);
        group.s('group.shape', 'oval');
        group.s('group.fill.color', 'rgba(100,100,100,0.5)');
        box.add(group);
        return group;
    },
    createNode: function(box, loc){
        var node = new twaver.Node();
        node.setLocation(loc);
        box.add(node);
        return node;
    }
});