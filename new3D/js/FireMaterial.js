import {
  ShaderMaterial,
} from '../bundle.js';

// http://clockworkchilli.com/blog/8_a_fire_shader_in_glsl_for_your_webgl_games

const FIRE_VERTEX_SHADER = `#version 300 es
#define SHADER_NAME SIMPLE_VERTEX
precision highp float;

layout(location = 0) in vec3 a_position;
layout(location = 2) in vec2 a_uv;

uniform mat4 u_projectViewMatrix;
uniform mat4 u_modelMatrix;
uniform mat3 u_normalMatrix;

out vec2 v_uv;

void main () {
  gl_Position = u_projectViewMatrix * u_modelMatrix * vec4(a_position, 1.0);
  v_uv = vec2(a_uv.x, 1.0 - a_uv.y);
}
`;

const FIRE_FRAGMENT_SHADER = `#version 300 es
#define SHADER_NAME SIMPLE_FRAGMENT
precision highp float;

uniform sampler2D u_noiseSampler;
uniform sampler2D u_maskSampler;
uniform float u_time;
in vec2 v_uv;
out vec4 fragColor;

void main () {
  vec2 uv = v_uv;
  float time = u_time;

  // Generate noisy x value
  vec2 n0Uv = vec2(uv.x*1.4 + 0.01, uv.y + time*0.69);
  vec2 n1Uv = vec2(uv.x*0.5 - 0.033, uv.y*2.0 + time*0.12);
  vec2 n2Uv = vec2(uv.x*0.94 + 0.02, uv.y*3.0 + time*0.61);
  float n0 = (texture(u_noiseSampler, n0Uv).w-0.5)*2.0;
  float n1 = (texture(u_noiseSampler, n1Uv).w-0.5)*2.0;
  float n2 = (texture(u_noiseSampler, n2Uv).w-0.5)*2.0;
  float noiseA = clamp(n0 + n1 + n2, -1.0, 1.0);

  // Generate noisy y value
  vec2 n0UvB = vec2(uv.x*0.7 - 0.01, uv.y + time*0.27);
  vec2 n1UvB = vec2(uv.x*0.45 + 0.033, uv.y*1.9 + time*0.61);
  vec2 n2UvB = vec2(uv.x*0.8 - 0.02, uv.y*2.5 + time*0.51);
  float n0B = (texture(u_noiseSampler, n0UvB).w-0.5)*2.0;
  float n1B = (texture(u_noiseSampler, n1UvB).w-0.5)*2.0;
  float n2B = (texture(u_noiseSampler, n2UvB).w-0.5)*2.0;
  float noiseB = clamp(n0B + n1B + n2B, -1.0, 1.0);

  vec2 finalNoise = vec2(noiseA, noiseB);
  float perturb = (1.0 - uv.y) * 0.35 + 0.02;
  finalNoise = (finalNoise * perturb) + uv - 0.02;
  vec4 color = texture(u_noiseSampler, finalNoise);
  color = vec4(color.x*2.0, color.y*0.9, (color.y/color.x)*0.2, 1.0);
  finalNoise = clamp(finalNoise, 0.05, 1.0);
  color.w = texture(u_maskSampler, finalNoise).z*2.0;
  color.w = color.w*texture(u_maskSampler, uv).z;
  fragColor = color;
}
`;

export default class FireMaterial extends ShaderMaterial {
  constructor(options) {
    const newOptions = {
      vertex: FIRE_VERTEX_SHADER,
      fragment: FIRE_FRAGMENT_SHADER,
      transparent: true,
      doubleSided: true,
      depthWrite: false,
      textures: {
        noiseSampler: options.noiseImage,
        maskSampler: options.maskImage,
      },
    };
    super(newOptions);
  }
}
