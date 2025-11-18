uniform vec3 uColor;
uniform float uTime;

void main() {
  float dist = length(gl_PointCoord - 0.5);
  float alpha = smoothstep(0.5, 0.0, dist);
  
  gl_FragColor = vec4(uColor, alpha * 0.8);
}

