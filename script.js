const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(200, 200);
document.getElementById('model-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

function playGame() {
  document.getElementById("project-section").scrollIntoView({ behavior: "smooth" });
}

function subirGame() {
  document.getElementById("arriba-Section").scrollIntoView({ behavior: "smooth" });
}

function viewDescription(id) {
  const desc = document.getElementById(id);
  desc.style.display = desc.style.display === "block" ? "none" : "block";
}
