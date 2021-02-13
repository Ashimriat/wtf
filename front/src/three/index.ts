import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';


document.body.style.padding = '0';
document.body.style.margin = '0';
const { innerWidth: width, innerHeight: height } = window;
const canvas = document.getElementById('map');
canvas.setAttribute('width', String(width));
canvas.setAttribute('height', String(height));

const RENDERER = new THREE.WebGLRenderer({ canvas: canvas as HTMLCanvasElement });
RENDERER.setClearColor(0x000000);
const SCENE = new THREE.Scene();
const CAMERA = new THREE.PerspectiveCamera(
  45, // угол обзора
  width / height, // пропорция отображения камеры
  0.1, // видно вещи на расстоянии не ближе чем
  5000 // видно вещи на расстоянии не дальше чем (горизонт)
);
CAMERA.position.set(0, 0, 1000); // координаты
// нет освещения
const LIGHT = new THREE.AmbientLight(0xffffff);
SCENE.add(LIGHT);
const TB_CONTROLS = new TrackballControls(CAMERA, canvas);
// отображать в данный момент нечего
const GEOMETRY = new THREE.SphereGeometry(200, 12, 12);

for (let i = 0; i < GEOMETRY.faces.length; i++) {
  GEOMETRY.faces[i].color.setRGB(Math.random(), Math.random(), Math.random())
}

const MATERIAL = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  vertexColors: THREE.FaceColors as null as boolean,
  wireframe: true // непустотелость объекта
});
const MESH = new THREE.Mesh(GEOMETRY, MATERIAL);
SCENE.add(MESH);

const TEXTURE_LOADER = new THREE.TextureLoader();

const temp = false;
if (temp) {
  // грузим текстуру
  TEXTURE_LOADER.load('pipka.jpg', TEXTURE => {
    const OBJ_LOADER = new OBJLoader();
    // грузим модель
    OBJ_LOADER.load('elem.obj', OBJECT => {
      OBJECT.traverse(child => {
        if (child instanceof THREE.Mesh) {
          // пишем материалу загруженную текстуру
          child.material.map = TEXTURE;
        }
      });
      SCENE.add(OBJECT);
    });
  })
}

const animate = () => {
  requestAnimationFrame(animate);
  TB_CONTROLS.update();
  RENDERER.render(SCENE, CAMERA);
};

animate();
