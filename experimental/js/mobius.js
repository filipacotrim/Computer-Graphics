/*global THREE, requestAnimationFrame, console*/

//const THREE = require("./three");

var camera, scene, renderer, camera1, camera2, camera3;

var geometryCone, geometryCube, geometryTorus, geometryPyramid;
var materialCube, materialCone, materialTorus, materialPyramid;
var sphereMesh, geometrySphere, materialSphere;
var cubeMesh, coneMesh, torusMesh, pyramidMesh;

var cone, cube, bigGroup, mediumGroup, temp = false;

var position, t=0;


function createCube(x, y, z){
    'use strict';
    cube = new THREE.Object3D();
    
    geometryCube = new THREE.BoxGeometry(10, 10, 10, 5, 5, 5);

    materialCube = new THREE.MeshBasicMaterial({ color: 0xcb2f1f, wireframe: true});

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

    cone = new THREE.Object3D();

    geometryCone = new THREE.ConeGeometry(1.5, 3, 10, 4);
    materialCone = new THREE.MeshBasicMaterial({ color: 0xd5f1eb, wireframe: true});
    coneMesh = new THREE.Mesh(geometryCone, materialCone);

    coneMesh.position.x = x;
    coneMesh.position.y = y;
    coneMesh.position.z = z;

    //nao sei se é necessário
    //cone.position.x = x;
    //cone.position.y = y;
    //cone.position.z = z;

    coneMesh.rotation.x = Math.PI;
    //coneMesh.rotation.z = Math.PI/6;

}

function createTorus(x, y, z){
    'use strict';
    geometryTorus = new THREE.TorusGeometry(4, 1, 10, 80);
    materialTorus = new THREE.MeshBasicMaterial({ color: 0xcb921f, wireframe: true});
    torusMesh = new THREE.Mesh(geometryTorus, materialTorus);

    torusMesh.position.x = x;
    torusMesh.position.y = y;
    torusMesh.position.z = z;

}

function createPyramid(x, y, z){
    'use strict';
    geometryPyramid = new THREE.ConeGeometry(15,20,4,50);

    materialPyramid = new THREE.MeshBasicMaterial({ color: 0xd51deb, wireframe: true});
    pyramidMesh = new THREE.Mesh(geometryPyramid, materialPyramid);

    pyramidMesh.position.x = x;
    pyramidMesh.position.y = y;
    pyramidMesh.position.z = z;

    pyramidMesh.rotation.z = -Math.PI/6;

}

function createSphere(x, y, z){
    'use strict';
    geometrySphere = new THREE.SphereGeometry(6, 32, 16);
    materialSphere = new THREE.MeshBasicMaterial({ color: 0x58eb1d, wireframe: true});
    sphereMesh = new THREE.Mesh(geometrySphere, materialSphere);

    sphereMesh.position.x = x;
    sphereMesh.position.y = y;
    sphereMesh.position.z = z;

}


function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x4d1d13);
    scene.add(new THREE.AxisHelper(10));
    createCube(0, 0, 0);
    createCone(0, 16.5, 0);
    createTorus(0, 10, 0);
    
    

    mediumGroup = new THREE.Group();
    mediumGroup.add(coneMesh);
    mediumGroup.add(torusMesh);
    //scene.add(mediumGroup);

    bigGroup = new THREE.Group();
    bigGroup.add(cubeMesh);
    bigGroup.add(mediumGroup);
    scene.add(bigGroup);

    createPyramid(-55,15,-20);
    scene.add(pyramidMesh);
    createSphere(-40, 13, -20);
    scene.add(sphereMesh);
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


function rotateMediumGroupLeft(amount){
    if(mediumGroup.rotation.z < 0.299){
        mediumGroup.rotateZ(amount);
    }
}


function rotateMediumGroupRight(amount){
    if(mediumGroup.rotation.z > -0.299){
        mediumGroup.rotateZ(amount);
    }
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
        //if(temp == false){
        //    coneMesh.position.set(0, -3, 0);
        //    coneMesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( 0, 3, 0 ));
        //    temp = true;
        //}
        //
        //coneMesh.rotation.x += 0.1;
        //coneMesh.position.z = 4*Math.sin(t) + 0;
        //coneMesh.position.y = 4*Math.cos(t) + 15;
        //t += 0.1;
        coneMesh.rotateY(0.1);
        break;
    
    case 87: //w
        //if(temp == false){
        //    coneMesh.position.set(0, -3, 0);
        //    coneMesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( 0, 3, 0 ));
        //    temp = true;
        //}
        //
        //coneMesh.rotation.x -= 0.1;
        //coneMesh.position.z = 4*Math.cos(t) + 0;
        //coneMesh.position.y = 4*Math.sin(t) + 15;
        //t += 0.1;
        coneMesh.rotateY(-0.1);

        break;
    
    case 65: //a
        bigGroup.rotateY(-0.1);
        break;
    
    case 83: //s
        bigGroup.rotateY(0.1);
        break;
    
    case 90: //z
        //mediumGroup.rotateZ(0.1);
        rotateMediumGroupLeft(0.02);
        break;
    
    case 88: //x
        //mediumGroup.rotateZ(-0.1);
        rotateMediumGroupRight(-0.02);
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
