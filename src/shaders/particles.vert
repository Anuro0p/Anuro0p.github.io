uniform float uTime;

void main() {
  vec3 pos = position;
  // drifting effect
  pos.x += sin(uTime * 0.3 + pos.y * 2.0) * 0.05;
  pos.y += cos(uTime * 0.25 + pos.x * 1.5) * 0.04;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = 2.5;
}

