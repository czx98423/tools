# precision highp float;
代码起始 用以设置精度 mediump 
# VERTEX_SHADER 
顶点着色器
a_uv 
a_position
# FRAGMENT_SHADER
片元着色器 main 函数 返回每个像素的颜色
  in vec2 v_uv; 接受位置
  out vec4 fragColor; 输出颜色
# Step 和 Smoothstep 函数
step() 插值函数需要输入两个参数。第一个是极限或阈值，第二个是我们想要检测或通过的值。对任何小于阈值的值，返回 0.0，大于阈值，则返回 1.0。
smoothstep()。当给定一个范围的上下限和一个数值，这个函数会在已有的范围内给出插值。前两个参数规定转换的开始和结束点，第三个是给出一个值用来插值。
clamp()