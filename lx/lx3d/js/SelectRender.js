it.SelectRender = function (sceneManager) {
    this.sceneManager = sceneManager;
    this.network3d = sceneManager.network3d;
    this.dataBox = sceneManager.network3d.dataBox;
    this.selectionModel = sceneManager.network3d.dataBox.getSelectionModel();
    this.map = {};
    this.map2 = {};
    this.map3 = {};
    this.map4 = {};
    this.init();
};

mono.extend(it.SelectRender, Object, {

    init: function () {
        var self = this;

        this.baseCube2 = new mono.Cube();
        var texture = this.createCanvas3();
        this.baseCube2.s({
            'front.m.texture.image': "./images/guang.png",
            'back.m.texture.image': "./images/guang.png",
            'left.m.texture.image': "./images/guang.png",
            'right.m.texture.image': "./images/guang.png",
            'top.m.texture.image': texture,
            'bottom.m.texture.image': texture,
            'm.transparent': true,
            'm.texture.offset': new mono.Vec2(0, 1),
            'm.texture.wrapS': mono.RepeatWrapping,
            'm.texture.wrapT': mono.ClampToEdgeWrapping,
        });

        this.network3d.__st = null;
        this.network3d.sortNodesFunc = function (glNodeList) {
            if (this.sortNodes && (this.paintSortFunction !== null || this.sortOpaqueOrderByMaterial)) {
                var scope = this;
                if (this.__st == null) {
                    this.__st = function (a, b) {
                        var nodeA = a.node || a;
                        var nodeB = b.node || b;
                        if (nodeA.getClient('lastDraw')) {
                            return -1;
                        }
                        if (nodeB.getClient('lastDraw')) {
                            return 1;
                        }

                        scope.wrapBillboardMaterial(a);
                        scope.wrapBillboardMaterial(a);
                        var opaque = "opaque";
                        if (a[opaque] && b[opaque]) {
                            return a[opaque].id - b[opaque].id;
                        } else if (!a[opaque] && b[opaque]) {
                            return -1;
                        } else if (a[opaque] && !b[opaque]) {
                            return 1;
                        } else {
                            if (a.transparent && b.transparent) {
                                if (nodeA._level && nodeB._level) {
                                    if (nodeB._level - nodeA._level > 0) {
                                        return 1;
                                    } else if (nodeB._level - nodeA._level < 0) {
                                        return -1;
                                    }
                                    return 0;
                                } else if (nodeA._level) {
                                    return 1;
                                } else if (nodeB._level) {
                                    return -1;
                                }
                                return a.transparent.id - b.transparent.id;
                            } else {
                                var aNode = a.node ? a.node : a;
                                var bNode = b.node ? b.node : b;
                                aNode.z = a.z, bNode.z = b.z;
                                if (scope.paintSortFunction) {
                                    return scope.paintSortFunction(aNode, bNode);
                                }
                            }
                        }
                    };
                }
                glNodeList.sort(this.__st);
            }
            return glNodeList;
        };

        this.network3d.renderSelectFunction = function () {
            return false;
        }

        this.sceneManager.viewManager3d.addPropertyChangeListener(function (event) {
            if (event && event.property == "focusNode") {
                var node = event.newValue;
                var data = self.sceneManager.getNodeData(node);
                var category = self.sceneManager.dataManager.getCategoryForData(data);
                var categoryId = category && category.getId();
                var array = ['floor', 'room', 'channel'];
                if (!array.includes(categoryId)) {
                    self.selectionModel.clearSelection();
                }
            }
        }, this);


        this.addListener();

        var previousTime = performance.now();

        var step = function () {
            var currentTime = performance.now();
            var time = currentTime - previousTime;
            previousTime = currentTime;

            var keys = Object.keys(self.map2);
            if (keys.length > 0) {
                keys.forEach(function (key) {
                    var node = self.map2[key];
                    var offsetY = node.getClient('offsetY');
                    var repeatY = node.getClient('repeatY');

                    offsetY -= time * 0.005;
                    if (offsetY <= -repeatY) {
                        offsetY = offsetY + repeatY + 1;
                    }
                    node.setStyle('m.texture.offset', new mono.Vec2(0, offsetY));
                    node.setClient('offsetY', offsetY);
                })
            }
            requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    },

    addListener: function () {
        this.selectionModel.addSelectionChangeListener(this.selectChangeHandler, this);
    },

    removeListener: function () {
        this.selectionModel.removeSelectionChangeListener(this.selectChangeHandler, this);
    },

    selectChangeHandler: function (e) {
        var self = this;
        var nodes = e.datas.toArray();
        var kind = e.kind;
        if (kind === 'append') {
            var node = this.sceneManager.viewManager3d.getFocusNode();
            var data = this.sceneManager.getNodeData(node);
            var category = this.sceneManager.dataManager.getCategoryForData(data);
            var categoryId = category && category.getId();

            var array = ['floor', 'room', 'channel'];
            if (!main.editorManager || !main.editorManager.floorSceneEditorManager || !main.editorManager.floorSceneEditorManager.isGoEditor) {
                if (!array.includes(categoryId)) {
                    return;
                }
            }
            // var rootNode = this.sceneManager._currentRootNode;
            // if (node != rootNode) return;

            nodes.forEach(function (node) {
                self.selectRender(node);
            })
        } else if (kind === 'clear') {
            nodes.forEach(function (node) {
                self.clearSelectRender(node);
            })
        } else if (kind === 'remove') {
            nodes.forEach(function (node) {
                self.clearSelectRender(node);
            })
        }
    },

    selectRender: function (node) {
        // var id = node.getId();
        var data = this.sceneManager.getNodeData(node);
        if (!data) return;
        var id = data.getId();
        if (!main.editorManager || !main.editorManager.floorSceneEditorManager || !main.editorManager.floorSceneEditorManager.isGoEditor) {
            node = this.sceneManager.getNodeByDataOrId(id);
        }

        if (this.map[id]) return;
        var bb = node.getBoundingBoxWithChildren(),
            bbz = bb.size();
        var width = bbz.x + 0.2, height = bbz.y + 0.2, depth = bbz.z + 0.2;

        // var cube = new mono.Cube(width, height, depth);
        // cube._level = 1;
        // var cube_texture_1 = this.createCanvas3(width, depth),
        //     cube_texture_2 = this.createCanvas1(width, height),
        //     cube_texture_3 = this.createCanvas1(depth, height);
        // cube.s({
        //     'front.m.texture.image': cube_texture_2,
        //     'back.m.texture.image': cube_texture_2,
        //     'left.m.texture.image': cube_texture_3,
        //     'right.m.texture.image': cube_texture_3,
        //     'top.m.texture.image': cube_texture_1,
        //     'bottom.m.texture.image': cube_texture_1,
        //     'm.transparent': true,
        // });
        // cube.setClient('unDoubleClick', true);
        // cube.setSelectable(false);
        // cube.setParent(node);
        // cube.setPosition(bb.center());
        // this.dataBox.add(cube);
        // this.map[id] = cube;


        // var cube2 = new mono.Cube(width, height, depth);
        // cube2._level = 2;
        // var cube2_texture_1 = this.createCanvas2(width, height),
        //     cube2_texture_2 = this.createCanvas2(depth, height),
        //     cube2_texture_3 = this.createCanvas3(width, depth);
        // cube2.s({
        //     'front.m.texture.image': cube2_texture_1,
        //     'back.m.texture.image': cube2_texture_1,
        //     'left.m.texture.image': cube2_texture_2,
        //     'right.m.texture.image': cube2_texture_2,
        //     'top.m.texture.image': cube2_texture_3,
        //     'bottom.m.texture.image': cube2_texture_3,
        //     'm.transparent': true,
        //     'm.texture.repeat': new mono.Vec2(1, 0.5),
        //     'm.texture.offset': new mono.Vec2(0, 0.5),
        // });
        // cube2.setClient('offsetY', 0.5);
        // cube2.setClient('unDoubleClick', true);
        // cube2.setParent(node);
        // cube2.setPosition(bb.center());
        // cube2.setSelectable(false);
        // this.dataBox.add(cube2);
        // this.map2[id] = cube2;

        var cube2 = this.baseCube2.clone();
        cube2.setWidth(width);
        cube2.setHeight(height);
        cube2.setDepth(depth);
        // var cube2 = new mono.Cube(width, height, depth);
        cube2._level = 3;
        var repeat = height / 26;
        cube2.setStyle('m.texture.repeat', new mono.Vec2(1, repeat));
        cube2.setClient('offsetY', 1);
        cube2.setClient('repeatY', repeat);
        cube2.setClient('unDoubleClick', true);
        cube2.setClient('selectCube',true);
        cube2.setParent(node);
        cube2.setPosition(bb.center());
        cube2.setSelectable(false);
        this.dataBox.add(cube2);
        this.map2[id] = cube2;

        // var cube3 = new mono.Cube(width, height, depth);
        if (!main.editorManager || !main.editorManager.floorSceneEditorManager || !main.editorManager.floorSceneEditorManager.isGoEditor) {
            var cube3 = new mono.Plane(width, depth);
            cube3.setRotationX(-Math.PI / 2);
            cube3.setClient('unDoubleClick', true);
            cube3.setSelectable(false);
            cube3.setParent(node);
            cube3.setPositionY(bb.max.y + 0.1);
            cube3._level = 1;
            cube3.s({
                'm.wireframe': true,
                'm.wireframeLinecolor': "#00fcff",
            })
            cube3.setClient('unDoubleClick', true);
            cube3.setClient('selectCube',true);
            cube3.setSelectable(false);
            cube3.setParent(node);
            this.dataBox.add(cube3);
            this.map3[id] = cube3;
        }
        var cube4 = new mono.Cube(width, height, depth);
        cube4._level = 2;
        var cube4_texture_1 = this.createCanvas4(width, depth, 'top'),
            cube4_texture_2 = this.createCanvas4(width, depth, 'bottom'),
            cube4_texture_3 = this.createCanvas4(width, height),
            cube4_texture_4 = this.createCanvas4(depth, height);
        cube4.s({
            'front.m.texture.image': cube4_texture_3,
            'back.m.texture.image': cube4_texture_3,
            'left.m.texture.image': cube4_texture_4,
            'right.m.texture.image': cube4_texture_4,
            'top.m.texture.image': cube4_texture_1,
            'bottom.m.texture.image': cube4_texture_2,
            'm.transparent': true,
            'top.m.opacity': 0.5,
        })
        cube4.setClient('unDoubleClick', true);
        cube4.setClient('selectCube',true);
        cube4.setSelectable(false);
        cube4.setParent(node);
        cube4.setPosition(bb.center());
        this.dataBox.add(cube4);
        this.map4[id] = cube4;
    },

    clearSelectRender: function (node) {
        // var id = node.getId();
        var data = this.sceneManager.getNodeData(node);
        if (!data) return;
        var id = data.getId();

        var cube = this.map[id];
        if (cube) {
            cube.setParent(null);
            this.dataBox.remove(cube);
            delete this.map[id];
        }

        var cube2 = this.map2[id];
        if (cube2) {
            cube2.setParent(null);
            this.dataBox.remove(cube2);
            delete this.map2[id];
        }

        var cube3 = this.map3[id];
        if (cube3) {
            cube3.setParent(null);
            this.dataBox.remove(cube3);
            delete this.map3[id];
        }

        var cube4 = this.map4[id];
        if (cube4) {
            cube4.setParent(null);
            this.dataBox.remove(cube4);
            delete this.map4[id];
        }
    },

    createCanvas1: function (width, height) {
        var width = mono.Utils.nextPowerOfTwo(width) * 4;
        var height = mono.Utils.nextPowerOfTwo(height) * 4;
        var canvas = document.createElement('canvas');
        canvas.height = height;
        canvas.width = width;
        var ctx = canvas.getContext('2d');

        var gap = 50;

        var numberW = Math.floor(width / gap);
        var gapW = Math.floor(width / numberW);
        var numberH = Math.floor(height / gap);
        var gapH = Math.floor(height / numberH);

        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.fillRect(6, 6, width - 6 * 2, height - 6 * 2);

        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgba(0,252,255,0.8)";
        for (var i = 1; i < numberW; i++) {
            ctx.beginPath();
            ctx.moveTo(gapW * i, 0);
            ctx.lineTo(gapW * i, height);
            ctx.closePath();
            ctx.stroke();
        }
        for (var i = 0; i < numberH + 1; i++) {
            ctx.beginPath();
            ctx.moveTo(3, gapH * i);
            ctx.lineTo(width - 3, gapH * i);
            ctx.closePath();
            ctx.stroke();
        }
        return canvas;
    },

    createCanvas2: function (width, height) {
        var width = mono.Utils.nextPowerOfTwo(width) * 4;
        var height = mono.Utils.nextPowerOfTwo(height) * 4;
        var canvas = document.createElement('canvas');
        canvas.height = height;
        canvas.width = width;
        var ctx = canvas.getContext('2d');
        var color = ctx.createLinearGradient(0, 0, 0, height);
        color.addColorStop(0, 'rgba(0,0,0,0.8)');
        color.addColorStop(0.5, 'rgba(0,0,0,0.1)')
        color.addColorStop(1, 'rgba(0,0,0,0.8)');
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        return canvas;
    },

    createCanvas3: function (width, height) {
        if (!width) width = 128;
        if (!height) height = 128;
        var width = mono.Utils.nextPowerOfTwo(width) * 4;
        var height = mono.Utils.nextPowerOfTwo(height) * 4;
        var canvas = document.createElement('canvas');
        canvas.height = height;
        canvas.width = width;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(255,255,255,0)';
        ctx.fillRect(0, 0, width, height);
        return canvas;
    },

    createCanvas4: function (width, height, type) {
        var width = mono.Utils.nextPowerOfTwo(width) * 4;
        var height = mono.Utils.nextPowerOfTwo(height) * 4;
        var canvas = document.createElement('canvas');
        canvas.height = height;
        canvas.width = width;
        var ctx = canvas.getContext('2d');
        var borderColor1, borderColor2, borderColor3, flag = true;
        if (type == 'top') {
            borderColor1 = "rgba(0,252,255,0.9)";
            borderColor2 = "rgba(0,252,255,0.9)";
            borderColor3 = "rgba(0,252,255,0.9)";
            flag = false;
        } else if (type == 'bottom') {
            borderColor1 = "rgba(0,252,255,0.1)";
            borderColor2 = "rgba(0,252,255,0.1)";
            borderColor3 = "rgba(0,252,255,0.1)";
            flag = false;
        } else {
            borderColor1 = "rgba(0,252,255,0.9)";
            borderColor2 = "rgba(0,252,255,0.1)";
            borderColor3 = ctx.createLinearGradient(0, 0, 0, height);
            borderColor3.addColorStop(0, borderColor1);
            borderColor3.addColorStop(1, borderColor2);
        }
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.fillRect(6, 6, width - 6 * 2, height - 6 * 2);
        ctx.fillStyle = borderColor1;
        ctx.fillRect(0, 0, width, 6);
        ctx.fillStyle = borderColor3;
        ctx.fillRect(0, 0, 6, height);
        ctx.fillRect(width - 6, 0, 6, height);
        ctx.fillStyle = borderColor2;
        ctx.fillRect(0, height - 6, width, 6);
        return canvas;
    },

    createCanvas5: function () {

    },


});