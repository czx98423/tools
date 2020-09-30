import { ShaderMaterial, vec2, vec3 } from '../bundle.js';

const VERTEX_SHADER_SOURCE = `#version 300 es
precision highp float;
layout(std140, column_major) uniform;

layout(location = 0) in vec3 a_position;
layout(location = 2) in vec2 a_uv;

uniform mat4 u_modelMatrix;
uniform mat4 u_projectViewMatrix;

out vec2 v_uv;
out vec3 v_position;

void main(void) {
  vec4 worldPosition = u_modelMatrix * vec4(a_position, 1.0);
  gl_Position = u_projectViewMatrix * worldPosition;
  v_position = a_position;
}
`;

const FRAGMENT_SHADER_SOURCE = `#version 300 es
precision highp float;
layout(std140, column_major) uniform;

in vec3 v_position;

const float PI = 3.1415926;

out vec4 fragColor;
uniform float u_time;
uniform float u_lineHightlightRadius;
uniform vec2 u_center;
uniform vec3 u_hightlightColor;

void main() {
  float distance = length(v_position.xy - u_center);
  float time = u_time;
  float diff = abs(distance - time);
  float weight = 0.0;
  if (diff < u_lineHightlightRadius) {
    weight = sin(diff / u_lineHightlightRadius * PI / 2.0);
  } else {
    weight = 1.0;
  }
  fragColor += mix(vec4(u_hightlightColor, 1.), vec4(0.), weight);
  fragColor.a *= pow(1. - time * 2., .5);
}
`;


export default class FlowLightingMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertex: VERTEX_SHADER_SOURCE,
      fragment: FRAGMENT_SHADER_SOURCE,
      uniforms: {
        center: vec2.fromValues(0, 0),
        lineHightlightRadius: 0.6,
        time: 0,
        hightlightColor: vec3.fromValues(0, 84 / 255, 255 / 255),
      },
      transparent: true,
      depthWrite: false,
      doubleSided: true,
    });
  }
}
