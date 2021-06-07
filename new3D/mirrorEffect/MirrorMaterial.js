import {
  DrawMaterial,
  createProgram,
  Framebuffer,
  VertexArray,
  Camera,
  Plane,
  vec3,
  vec4,
  mat4,
  quat,
  defineProperties,
} from './bundle.js';

const MIRROR_VERTEX_SHADER = `
layout(location = 0) in vec3 a_position;

uniform mat4 u_projectViewMatrix;
uniform mat4 u_modelMatrix;
uniform mat4 u_textureMatrix;

out vec4 v_uv;

void main () {
  vec4 position = vec4(a_position, 1.0);
  gl_Position = u_projectViewMatrix * u_modelMatrix * position;
  v_uv = u_textureMatrix * position;
}
`;

const MIRROR_FRAGMENT_SHADER = `
uniform sampler2D u_sampler;
uniform vec3 u_color;

in vec4 v_uv;

out vec4 fragColor;

float blendOverlay(float base, float blend) {
  return base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
  return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
}

void main() {
  vec4 base = textureProj(u_sampler, v_uv);
  // fragColor = vec4(blendOverlay(base.rgb, u_color), 1.0);
  fragColor = base;
}
`;

let inited = false;

function init(proto) {
  if (inited) {
    return;
  }
  inited = true;
  defineProperties(proto, [
    /**
     * 材质颜色
     * @type {vec3}
     * @name MirrorMaterial#color
     * @default vec3.fromValues(1, 1, 1)
     */
    {
      name: 'color',
    },
    /**
     * 裁剪误差
     * @type {Number}
     * @name MirrorMaterial#clipBias
     * @default 0.003
     */
    {
      name: 'clipBias',
    },
    /**
     * 贴图宽度
     * @type {Number}
     * @name MirrorMaterial#textureWidth
     * @default 1024
     */
    {
      name: 'textureWidth',
    },
    /**
     * 贴图高度
     * @type {Number}
     * @name MirrorMaterial#textureHeight
     * @default 1024
     */
    {
      name: 'textureHeight',
    },
  ]);
}

let tempVec = null;

function reflect(out, a, normal) {
  if (!tempVec) {
    tempVec = vec3.create();
  }
  vec3.copy(tempVec, normal);
  vec3.scale(tempVec, tempVec, 2 * vec3.dot(a, normal));
  return vec3.sub(out, a, tempVec);
}

export default class MirrorMaterial extends DrawMaterial {
  constructor(options) {
    init(MirrorMaterial.prototype);
    super(options);
    this._program = createProgram(
      MIRROR_VERTEX_SHADER,
      MIRROR_FRAGMENT_SHADER,
    );
    if (!this._color) {
      this._color = vec3.fromValues(1, 1, 1);
    }
    if (!this._clipBias) {
      this._clipBias = 0.003;
    }
    if (!this._textureWidth) {
      this._textureWidth = 1024;
    }
    if (!this._textureHeight) {
      this._textureHeight = 1024;
    }
    this._framebuffer = new Framebuffer({
      width: this._textureWidth,
      height: this._textureHeight,
      minFilter: 'LINEAR',
      magFilter: 'LINEAR',
      depth: true,
    });
    this._textureMatrix = mat4.create();
    this._uniformValues = {
      u_sampler: 0,
      u_textureMatrix: this._textureMatrix,
    };

    this._reflectorPlane = new Plane();
    this._normal = vec3.create();
    this._reflectorWorldPosition = vec3.create();
    this._cameraWorldPosition = vec3.create();
    this._rotationQuat = quat.create();
    this._lookAtPosition = vec3.fromValues(0, 0, -1);
    this._clipPlane = vec4.create();

    this._view = vec3.create();
    this._target = vec3.create();
    this._q = vec4.create();

    this._virtualCamera = new Camera();
  }

  _init() {
    this._quadVao = new VertexArray({
      buffers: {
        position: new Float32Array([
          1.0, 1.0, 0.0,
          -1.0, 1.0, 0.0,
          -1.0, -1.0, 0.0,
          -1.0, -1.0, 0.0,
          1.0, -1.0, 0.0,
          1.0, 1.0, 0.0,
        ]),
        uv: new Float32Array([
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
        ]),
      },
    });
  }

  _preDraw(data, scene) {
    const gl = scene._renderer._gl;
    if (!this._gl) {
      this._gl = gl;
      this._init();
    }
    const reflectorPlane = this._reflectorPlane;
    const normal = this._normal;
    const reflectorWorldPosition = this._reflectorWorldPosition;
    const cameraWorldPosition = this._cameraWorldPosition;
    const rotationQuat = this._rotationQuat;
    const lookAtPosition = this._lookAtPosition;
    const clipPlane = this._clipPlane;
    const view = this._view;
    const target = this._target;
    const q = this._q;
    const virtualCamera = this._virtualCamera;
    const camera = scene._camera;
    const textureMatrix = this._textureMatrix;

    mat4.getTranslation(reflectorWorldPosition, data.worldMatrix);
    mat4.getTranslation(cameraWorldPosition, camera.worldMatrix);
    mat4.getRotation(rotationQuat, data.worldMatrix);

    vec3.set(normal, 0, 0, 1);
    vec3.transformQuat(normal, normal, rotationQuat);

    vec3.sub(view, reflectorWorldPosition, cameraWorldPosition);

    // Avoid rendering when reflector is facing away
    if (vec3.dot(view, normal) > 0) {
      return;
    }

    reflect(view, view, normal);
    vec3.negate(view, view);
    vec3.add(view, view, reflectorWorldPosition);

    mat4.getRotation(rotationQuat, camera.worldMatrix);

    vec3.set(lookAtPosition, 0, 0, -1);
    vec3.transformQuat(lookAtPosition, lookAtPosition, rotationQuat);
    vec3.add(lookAtPosition, lookAtPosition, cameraWorldPosition);

    vec3.sub(target, reflectorWorldPosition, lookAtPosition);
    reflect(target, target, normal);
    vec3.negate(target, target);
    vec3.add(target, target, reflectorWorldPosition);

    virtualCamera.position = view;
    vec3.set(virtualCamera.up, 0, 1, 0);
    vec3.transformQuat(virtualCamera.up, virtualCamera.up, rotationQuat);
    reflect(virtualCamera.up, virtualCamera.up, normal);
    virtualCamera._target = target;

    virtualCamera.far = camera.far;

    mat4.copy(virtualCamera.projectMatrix, camera.projectMatrix);

    // Update the texture matrix
    mat4.set(
      textureMatrix,
      0.5, 0.0, 0.0, 0.0,
      0.0, 0.5, 0.0, 0.0,
      0.0, 0.0, 0.5, 0.0,
      0.5, 0.5, 0.5, 1.0,
    );
    mat4.multiply(textureMatrix, textureMatrix, virtualCamera.projectMatrix);
    mat4.multiply(textureMatrix, textureMatrix, virtualCamera.viewMatrix);
    mat4.multiply(textureMatrix, textureMatrix, data.worldMatrix);

    // Now update projection matrix with new clip plane,
    // implementing code from: http://www.terathon.com/code/oblique.html
    // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
    reflectorPlane.setFromNormalAndCoplanarPoint(normal, reflectorWorldPosition);
    reflectorPlane.applyMatrix4(virtualCamera.viewMatrix);

    vec4.set(
      clipPlane,
      reflectorPlane.normal[0],
      reflectorPlane.normal[1],
      reflectorPlane.normal[2],
      reflectorPlane.constant,
    );

    const { projectMatrix } = virtualCamera;

    q[0] = (Math.sign(clipPlane[0]) + projectMatrix[8]) / projectMatrix[0];
    q[1] = (Math.sign(clipPlane[1]) + projectMatrix[9]) / projectMatrix[5];
    q[2] = -1.0;
    q[3] = (1.0 + projectMatrix[10]) / projectMatrix[14];

    // Calculate the scaled plane vector
    vec4.scale(clipPlane, clipPlane, 2.0 / vec4.dot(clipPlane, q));

    // Replacing the third row of the projection matrix
    /* eslint-disable prefer-destructuring */
    projectMatrix[2] = clipPlane[0];
    projectMatrix[6] = clipPlane[1];
    projectMatrix[10] = clipPlane[2] + 1.0 - this._clipBias;
    projectMatrix[14] = clipPlane[3];
    /* eslint-enable */

    mat4.mul(
      virtualCamera.projectViewMatrix,
      virtualCamera.projectMatrix,
      virtualCamera.viewMatrix,
    );

    data._visible = false;
    scene._renderer._camera = virtualCamera;
    this._framebuffer.bind(gl);
    scene._renderer.draw();

    this._framebuffer.unbind();
    scene._renderer._camera = camera;
    data._visible = true;
  }

  draw(data, scene, vao) {
    const gl = scene._renderer._gl;
    if (!data._visible) {
      return;
    }
    this._preDraw(data, scene);
    const program = this._program;
    const uniformValues = this._uniformValues;

    program.use(gl);
    uniformValues.u_projectViewMatrix = scene._camera.projectViewMatrix;
    uniformValues.u_modelMatrix = data.worldMatrix;
    uniformValues.u_color = this._color;
    program.bindUniforms(uniformValues);
    this._framebuffer.bindTexture(0);
    vao.draw(gl);
  }
}
