import * as THREE from "three";
import gsap from "gsap";

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(8, 48, 48);
const material = new THREE.MeshBasicMaterial({
	map: new THREE.TextureLoader().load("./public/ressources/ballTexture.jpg"),
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
	width: 800,
	height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 30;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha : true
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock()

//gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
//gsap.to(mesh.position, {duration: 1, delay: 2, x: -2})

const tick = () => {
	// Update objects

	mesh.rotation.y += 0.01;
	mesh.rotation.z += 0.01;
	mesh.rotation.x += 0.01;

	const elapsedTime = clock.getElapsedTime()

    // Update objects
    mesh.position.x = 5*Math.cos(elapsedTime*2)
    mesh.position.y = 5*Math.sin(elapsedTime*2)
	// Render
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();
