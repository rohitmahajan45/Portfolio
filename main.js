(function(){
  const canvas = document.getElementById('bg');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  camera.position.z = 6;

  // Create a shiny torus knot
  const geometry = new THREE.TorusKnotGeometry(1.4, 0.4, 160, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0x7dd3fc,
    emissive: 0x072bd6,
    roughness: 0.35,
    metalness: 0.7,
    envMapIntensity: 1
  });
  const knot = new THREE.Mesh(geometry, material);
  scene.add(knot);

  // Add soft lights
  const dir = new THREE.DirectionalLight(0xffffff, 1.0);
  dir.position.set(5, 5, 5);
  scene.add(dir);
  const amb = new THREE.AmbientLight(0xffffff, 0.25);
  scene.add(amb);

  // Subtle particle field
  const particles = new THREE.BufferGeometry();
  const count = 600;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({ color: 0xcde8ff, size: 0.04, opacity: 0.9, transparent: true });
  const points = new THREE.Points(particles, pMat);
  scene.add(points);

  // Resize handling
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);

  // Mouse parallax
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    knot.rotation.x += 0.006 + mouseY * 0.02;
    knot.rotation.y += 0.01 + mouseX * 0.04;
    knot.rotation.z += 0.004;

    points.rotation.y += 0.0008;

    renderer.render(scene, camera);
  }
  animate();
})();
