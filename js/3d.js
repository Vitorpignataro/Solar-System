import * as THREE from '../node_modules/three/build/three.module.js'
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'


const earth = document.querySelector('.earth')
let scene;
let camera;
let renderer;

scene = new THREE.Scene();

const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.3;
const far = 900;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 4;
scene.add(camera);

renderer = new THREE.WebGLRenderer({
    canvas: earth,
    antialias: true
})

renderer.setSize(900, 375);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.1)


const controls = new OrbitControls(camera, renderer.domElement);



const SphereGeometry = new THREE.SphereGeometry(1.8, 32, 32);

const SphereMaterial = new THREE.MeshPhongMaterial({
    metalness: 0,
    roughness: 1,
    bumpMap: THREE.ImageUtils.loadTexture('../texture/earthTexture.jpg'),
    map: THREE.ImageUtils.loadTexture('../texture/earth.jpg'),
    bumpScale: 0.2
});

const earthMesh = new THREE.Mesh(SphereGeometry, SphereMaterial)
scene.add(earthMesh);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

const animate = () =>{
    requestAnimationFrame(animate);
    earthMesh.rotation.y -= 0.0015;
    controls.update();
    render();
}

const render = () =>{
    renderer.render(scene, camera);
}


animate();



