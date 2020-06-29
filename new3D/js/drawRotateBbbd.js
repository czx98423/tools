import {
    Animate
} from '../bundle.js'


export default class drawRotateBbd {
    constructor({
        scene,
        width = 64,
        height = 64,
        circleImg,
        bgImg,
        BbdArr
    }) {
        this.scene = scene
        this.canvas = document.createElement('canvas')
        this.circleImg = circleImg;
        this.bgImg = bgImg
        this.bbdArr = new Set(BbdArr)
        this.init(this.canvas, width, height);
    }
    //绘制canvas
    init(canvas, width, height) {
        const context = canvas.getContext('2d'),self = this,
        circleImg=this.circleImg,
        bgImg=this.bgImg;
        canvas.width = width
        canvas.height = height
        context.drawImage(circleImg, 0, 0, width, width)
        context.drawImage(bgImg, 0, 0, width, height)
        this.bbdArr.forEach(bbd => {
            bbd.material = {
                TYPE: 'BILLBOARD',
                transparent: true,
                diffuseImage: canvas,
                depthWrite: false,
                vertical: true,
            };
        });
        this.animate = new Animate({
            from: 0,
            to: 1,
            repeat: Number.POSITIVE_INFINITY,
            reverse: false,
            dur: 1500,
            onUpdate(value) {
              var angle = Math.PI * 2 * value;
              var x = width/2 * Math.cos(angle) - width/2 * Math.sin(angle)
              var y = width/2 * Math.sin(angle) + width/2 * Math.cos(angle)
              context.clearRect(0, 0, width, height)
              context.save()
              context.translate(width/2 - x, width/2 - y)
              context.rotate(angle)
              context.drawImage(circleImg, 0, 0, 64, 64)
              context.restore()
              context.drawImage(bgImg, 0, 0, 64, 256)
              self.bbdArr.forEach(bbd => {
                self.scene.updateTexture(bbd.material.diffuseImage, canvas);
              });      
            },
          })
    }
    //开始动画
    play() {
        this.animate.play()
    }
    //暂停
    stop() {
      this.animate.stop()
    }
    //注册 
    register(bbd) {
      this.bbdArr.add(bbd)
    }
    //注销
    register(bbd) {
      this.bbdArr.delete(bbd)
    }
}