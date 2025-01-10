import * as THREE from 'three'

let camera, scene, renderer;
let geometry, material, mesh;

camera = new THREE.PerspectiveCamera (70, windows.innerWidth / windows.innerHeight, 0.1, 10)
camera.position.z = 1
scene = new THREE.Scene()

geometry = new THREE.SphereGeometry( 0.2, 32, 16)
material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(
        'public/ressources/texture_ball.png')
})

mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(windows.innerWidth, windows.innerHeight)
renderer.setAnimationLoop(animation)
document.body.appendChild(renderer.domElement)

function animation( time ) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    renderer.render( scene, camera );
}