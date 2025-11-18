uniform float time;
uniform vec2 resolution;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Distortion effect
  float distortion = sin(uv.y * 10.0 + time) * 0.01;
  uv.x += distortion;
  
  vec4 color = texture2D(uTexture, uv);
  
  // Add color shift
  color.rgb += vec3(0.1, 0.2, 0.3) * sin(time * 0.5);
  
  gl_FragColor = color;
}

