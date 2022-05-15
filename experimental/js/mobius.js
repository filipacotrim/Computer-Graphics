/*global THREE, requestAnimationFrame, console*/

//const THREE = require("./three");

var camera, scene, renderer, camera1, camera2, camera3;

var geometryCone, geometryCube, materialCube, materialCone, cubeMesh, coneMesh;

var cone, cube, group;

var position;


function createCube(x, y, z){
    'use strict';
    cube = new THREE.Object3D();
    
    geometryCube = new THREE.BoxGeometry(10, 10, 10, 5, 5, 5);

    materialCube = new THREE.MeshBasicMaterial({ color: 0x4192b8, wireframe: true});

    cubeMesh = new THREE.Mesh(geometryCube, materialCube);

    cubeMesh.position.x = x;
    cubeMesh.position.y = y;
    cubeMesh.position.z = z;

    //não sei se é necessário
    //cube.position.x = x;
    //cube.position.y = y;
    //cube.position.z = z;

    //cubeMesh.rotation.x = Math.PI/5;
    //cubeMesh.rotation.z= Math.PI/3;    
}

function createCone(x, y, z){
    'use strict';
    renderer.clearDepth();                // clear depth buffer

    cone = new THREE.Object3D();

    geometryCone = new THREE.ConeGeometry(4, 10, 10);
    materialCone = new THREE.MeshBasicMaterial({ color: 0xbc803d, wireframe: true});
    coneMesh = new THREE.Mesh(geometryCone, materialCone);

    coneMesh.position.x = x;
    coneMesh.position.y = y;
    coneMesh.position.z = z;

    //nao sei se é necessário
    //cone.position.x = x;
    //cone.position.y = y;
    //cone.position.z = z;

    coneMesh.rotation.x = Math.PI;
    coneMesh.rotation.z = Math.PI/6;

}


function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));
    createCube(0, 0, 0);

    createCone(0, 10, 0);
    
    group = new THREE.Group();
    group.add(cubeMesh);
    group.add(coneMesh);
    scene.add(group);
}

function createCamera() {
    'use strict';
    camera1 = new THREE.PerspectiveCamera(50,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera1.position.x = 50;
    camera1.position.y = 50;
    camera1.position.z = 50;
    camera1.lookAt(scene.position);

    camera2 = new THREE.PerspectiveCamera(70,
                                          window.innerWidth / window.innerHeight,
                                          1,
                                          1000);
    
    camera2.position.x = 0;
    camera2.position.y = 50;
    camera2.position.z = 0;
    camera2.lookAt(scene.position);

    camera3 = new THREE.PerspectiveCamera(70,
                                          window.innerWidth / window.innerHeight,
                                          1,
                                          1000);

    camera3.position.x = 0;
    camera3.position.y = 0;
    camera3.position.z = 50;
    camera3.lookAt(scene.position);
    
    camera = camera1;
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                console.log("case");
                node.visible = !node.visible;
            }
        });
        break;
    case 49: // 1
        console.log("change camera to camera1");
        camera = camera1;
        break;
    
    case 50: // 2
        console.log("change camera to camera2");
        camera = camera2;
        break;

    case 51: // 3
        console.log("change camera to camera3");
        camera = camera3;
        break;
    
    case 52: // 4
        console.log("toggle wireframe");
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    
    case 81: //q
        //coneMesh.rotateY(-0.2);
        coneMesh.rotation.y -= 0.2;
        break;
    
    case 87: //w
        //coneMesh.rotateY(0.2);
        coneMesh.rotation.y += 0.2;
        break;
    
    case 65: //a
        //cubeMesh.rotateY(-0.1);
        ////cubeMesh.rotateX(-0.05);
        //coneMesh.rotateY(-0.1);
        //coneMesh.rotateX(-0.05);
        group.rotateY(-0.1);
        break;
    
    case 83: //s
        //cubeMesh.rotateY(0.1);
        //coneMesh.rotateY(0.1);
        group.rotateY(0.1);
        break;
        
    }
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();


    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';
    render();

    requestAnimationFrame(animate);
}
