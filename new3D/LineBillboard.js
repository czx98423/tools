import {
  Data, Cube, mat4,vec2, vec3,polylineToShape,
} from './bundle.js';

export default class LineBillboard {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.options = options;
    this.div = document.createElement('div');
    this.div.style['-moz-user-select'] = 'none';
    this.div.style['-khtml-user-select'] = 'none';
    this.div.style['user-select'] = 'none';
    this.width = 200;
    this.height = 150;
    this.lineColor = vec3.fromValues(11 / 255, 187 / 255, 210 / 255);
    this.shadowColor = 'rgba(11, 187, 210, .4)';
    this.cornerColor = 'rgb(11, 187, 210)';
    this.backgroundColor = 'rgba(0, 0, 0, .2)';
    this.containerPadding = [10, 10, 10, 10];
    document.body.appendChild(this.div);
  }

  show() {
    const { options } = this;
    this.createDiv();
    this.addLine();
    this.setDivPosition();
    options.refreshList.push({
      divBillboard: this,
      position: options.fromPosition,
    });
  }

  clear() {
    document.body.removeChild(this.div);
    this.scene.remove(this.line);
  }

  createDiv() {
    const container = this.div;
    if (container) {
      container.innerHTML = `<div class='pop-content' style='position: relative;height: 100%;padding: ${this.containerPadding.join(
        'px ',
      )}px;box-sizing: border-box;'></div>`;
      this.initFrame(container);
    }
  }

  initFrame(container) {
    const {
      shadowColor, cornerColor, width, height, backgroundColor,
    } = this;
    container.style.background = backgroundColor;
    container.style.boxShadow = `0 0 8px ${shadowColor} inset`;
    container.style.position = 'absolute';
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
    container.innerHTML
      += `${
        "'<div><div style='width: 6px;height: 6px;border-left: 2px solid "
      }${cornerColor};border-top: 2px solid ${cornerColor};position: absolute;left: -1px;top: -1px;'></div>`
      + `<div style='width: 6px;height: 6px;position: absolute;right: -1px;top: -1px;border-right: 2px solid ${cornerColor};border-top: 2px solid ${cornerColor};'></div>`
      + `<div style='width: 6px;height: 6px;position: absolute;left: -1px;bottom: -1px;border-left: 2px solid ${cornerColor};border-bottom: 2px solid ${cornerColor};'></div>`
      + `<div style='width: 6px;height: 6px;position: absolute; right: -1px;bottom: -1px;border-right: 2px solid ${cornerColor};border-bottom: 2px solid ${cornerColor};'></div>`
      + '</div>';
    const content = container.getElementsByClassName('pop-content')[0];
    this.initContent(content);
  }

  initContent(container) {
    const { content } = this.options;
    if (content) {
      let html = '';
      for (let i = 0; i < content.length; i++) {
        const item = content[i];
        html += "<div style='height: 20px;'>";
        for (let j = 0; j < item.length; j++) {
          html += `<div style='display: inline-block;color:rgb(5, 238, 241);font: 14px 微软雅黑'>${item[j]}</div>`;
        }
        html += '</div>';
      }
      container.innerHTML += html;
    }
  }

  addLine() {
    const { options } = this;
    const line = this.scene.add({
      scale:vec3.fromValues(2,2,2),
      vao: {
        buffers: {
          position: new Float32Array([
            options.fromPosition[0],
            options.fromPosition[1],
            options.fromPosition[2],
            options.toPosition[0],
            options.toPosition[1],
            options.toPosition[2],
          ])
        },
        mode: 'LINES',
      },
      material: {
        doubleSided: true,
        // castShadow: false,
        // receiveShadow: false,
         diffuseColor: this.lineColor,
      },
    });
    this.line = line;
    window.line = line
    this.toCube = new Cube();
    this.toCube.setPosition(
      options.toPosition[0],
      options.toPosition[1],
      options.toPosition[2],
    );

    this.fromCube = new Cube();
    this.fromCube.setPosition(
      options.fromPosition[0],
      options.fromPosition[1],
      options.fromPosition[2],
    );
  }

  setDivPosition() {
    const { scene, div } = this;
    const fromCubemvpMatrix = mat4.create();
    const toCubemvpMatrix = mat4.create();
    const pvMatrix = scene.camera.projectViewMatrix;
    const fromCubeWorldMatrix = [...this.fromCube.worldMatrix];
    const toCubeWorldMatrix = [...this.toCube.worldMatrix];
    mat4.mul(fromCubemvpMatrix, pvMatrix, fromCubeWorldMatrix);
    mat4.mul(toCubemvpMatrix, pvMatrix, toCubeWorldMatrix);
    const fromSceenPosition = vec3.create();
    const toSceenPosition = vec3.create();
    vec3.transformMat4(fromSceenPosition, fromSceenPosition, fromCubemvpMatrix);
    vec3.transformMat4(toSceenPosition, toSceenPosition, toCubemvpMatrix);
    if (
      toSceenPosition[0] <= 1
      && toSceenPosition[0] >= -1
      && toSceenPosition[1] <= 1
      && toSceenPosition[1] >= -1
      && toSceenPosition[2] <= 1
      && toSceenPosition[2] >= -1
    ) {
      const halfW = scene._canvas.width / window.devicePixelRatio / 2;
      const halfH = scene._canvas.height / window.devicePixelRatio / 2;
      const fromSceenX = Math.floor((fromSceenPosition[0] + 1) * halfW);
      const fromSceenY = Math.floor((1 - fromSceenPosition[1]) * halfH);
      const toSceenX = Math.floor((toSceenPosition[0] + 1) * halfW);
      const toSceenY = Math.floor((1 - toSceenPosition[1]) * halfH);

      if (fromSceenX < toSceenX) {
        div.style.left = `${toSceenX}px`;
      } else {
        div.style.left = `${toSceenX - div.clientWidth}px`;
      }

      if (fromSceenY < toSceenY) {
        div.style.top = `${toSceenY}px`;
      } else {
        div.style.top = `${toSceenY - div.clientHeight}px`;
      }

      // // 左上
      // div.style.left = `${sceenX}px`;
      // div.style.top = `${sceenY}px`;

      // 左下
      // div.style.left = `${sceenX}px`;
      // div.style.top = `${sceenY - div.clientHeight}px`;

      // 右上
      // div.style.left = `${sceenX - div.clientWidth}px`;
      // div.style.top = `${sceenY}px`;

      // 右下
      // div.style.left = `${toSceenX - div.clientWidth}px`;
      // div.style.top = `${toSceenY - div.clientHeight}px`;
    }
  }
}
