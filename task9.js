import * as THREE from "https://esm.sh/three";
import { OrbitControls } from "https://esm.sh/three/examples/jsm/controls/OrbitControls";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const geometrySphere = new THREE.SphereGeometry(1, 1, 1);
const geometryCone = new THREE.ConeGeometry(1, 1, 3);
const geometryTorusKnot = new THREE.TorusKnotGeometry(0.4,0.5   ,2);
const geometryCylinder = new THREE.CylinderGeometry(0.5,0.5,1);

const material = new THREE.MeshBasicMaterial({color: getRandomColor()});

const cube = new THREE.Mesh(geometryCube, material);
const sphere = new THREE.Mesh(geometrySphere, material);
const cone = new THREE.Mesh(geometryCone, material);
const torusKnot = new THREE.Mesh(geometryTorusKnot, material);
const cylinder = new THREE.Mesh(geometryCylinder, material);

cube.position.set(1, 2, 0);
sphere.position.set(-1, -2, 0);
cone.position.set(0, 0, 0);
torusKnot.position.set(0.5, -2, 0);
cylinder.position.set(-1, 2, 0);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(cube);
scene.add(sphere);
scene.add(cone);
scene.add(torusKnot);
scene.add(cylinder);

camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enabled = true;

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

function getRandomColor(){
    var color = '#'
    var letters = '0123456789ABCDEF'
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
getRandomColor();