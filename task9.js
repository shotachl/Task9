import * as THREE from "https://esm.sh/three";
import { OrbitControls } from "https://esm.sh/three/examples/jsm/controls/OrbitControls";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const geometrySphere = new THREE.SphereGeometry(1, 1, 1);
const geometryCone = new THREE.ConeGeometry(1, 1, 3);
const geometryTorusKnot = new THREE.TorusKnotGeometry(0.4, 0.4, 3, 3);
const geometryCylinder = new THREE.CylinderGeometry(1, 1, 1);

const materialCube = new THREE.MeshBasicMaterial({color: getRandomColor()});
const materialSphere = new THREE.MeshBasicMaterial({color: getRandomColor()});
const materialCone = new THREE.MeshBasicMaterial({color: getRandomColor()});
const materialTorusKnot = new THREE.MeshBasicMaterial({color: getRandomColor()});
const materialCylinder = new THREE.MeshBasicMaterial({color: getRandomColor()});

const cube = new THREE.Mesh(geometryCube, materialCube);
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
const cone = new THREE.Mesh(geometryCone, materialCone);
const torusKnot = new THREE.Mesh(geometryTorusKnot, materialTorusKnot);
const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);

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