uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec2 center = mouse;
  
  // Calculate distance from mouse
  float dist = distance(uv, center);
  
  // Ripple effect
  float ripple = sin(dist * 20.0 - time * 5.0) * 0.5 + 0.5;
  ripple *= smoothstep(0.3, 0.0, dist);
  
  // Base color
  vec3 color = vec3(0.0, 0.1, 0.2);
  
  // Add ripple color
  color += vec3(0.2, 0.4, 0.8) * ripple;
  
  gl_FragColor = vec4(color, 1.0);
}

