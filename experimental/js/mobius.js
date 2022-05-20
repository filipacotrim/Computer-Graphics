/*global THREE, requestAnimationFrame, console*/

//const THREE = require("./three");

var camera, scene, renderer, camera1, camera2, camera3;

var geometryCone, geometryCube, geometryTorus, geometryPyramid, geometryCuboid;
var materialCube, materialCone, materialTorus, materialPyramid, materialCuboid;
var sphereMesh, geometrySphere, materialSphere, materialCuboid;
var cubeMesh, sphereGroup, torusMesh, pyramidMesh;
var cuboidMesh, cuboid2Mesh, tubeMesh, boxMesh, weirdMesh, ringMesh, ring2Mesh, sphere2Mesh, sphere3Mesh;

var cone, cube, bigGroup, mediumGroup, sphereGroup, temp = false;

var angle,cuboid, geometry, material;

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

    cubeMesh.rotation.x = Math.PI/4;
}

function createCone(x, y, z){
    'use strict';

    cone = new THREE.Object3D();

    geometryCone = new THREE.ConeGeometry(1.5, 3, 10, 4);
    materialCone = new THREE.MeshBasicMaterial({ color: 0xd5f1eb, wireframe: true});
    sphereGroup = new THREE.Mesh(geometryCone, materialCone);

    sphereGroup.position.x = x;
    sphereGroup.position.y = y;
    sphereGroup.position.z = z;
    

    sphereGroup.rotation.x = Math.PI;
    //sphereGroup.rotation.z = Math.PI/6;

}

function createTorus(x, y, z){
    'use strict';
    geometryTorus = new THREE.TorusGeometry(15, 1, 10, 80);
    materialTorus = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: true});
    torusMesh = new THREE.Mesh(geometryTorus, materialTorus);

    torusMesh.position.x = x;
    torusMesh.position.y = y;
    torusMesh.position.z = z;

    //torusMesh.rotation.x = Math.PI/2;

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

function createSphere2(x, y, z){
    'use strict';
    //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    geometrySphere = new THREE.SphereGeometry(4, 32, 16);
    materialSphere = new THREE.MeshBasicMaterial({ color: 0x40ffb1, wireframe: true});
    sphere2Mesh = new THREE.Mesh(geometrySphere, materialSphere);

    sphere2Mesh.position.x = x;
    sphere2Mesh.position.y = y;
    sphere2Mesh.position.z = z;

}

function createSphere3(x, y, z){
    'use strict';
    //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    geometrySphere = new THREE.SphereGeometry(2.5, 32, 16);
    materialSphere = new THREE.MeshBasicMaterial({ color: 0xfc7227, wireframe: true});
    sphere3Mesh = new THREE.Mesh(geometrySphere, materialSphere);

    sphere3Mesh.position.x = x;
    sphere3Mesh.position.y = y;
    sphere3Mesh.position.z = z;

}



function createCuboid1(x, y, z){
    'use strict';
    //BoxGeometry(width : Float, height : Float, depth : Float, 
    //widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
    geometryCuboid = new THREE.BoxGeometry(1, 20, 1, 2, 2, 2);

    materialCuboid = new THREE.MeshBasicMaterial({ color: 0xe1ff4d, wireframe: true});

    cuboidMesh = new THREE.Mesh(geometryCuboid, materialCuboid);

    cuboidMesh.position.x = x;
    cuboidMesh.position.y = y;
    cuboidMesh.position.z = z; 

    cuboidMesh.rotation.x = Math.PI/7;
    
}

function createCuboid2(x, y, z){
    'use strict';
    //BoxGeometry(width : Float, height : Float, depth : Float, 
    //widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
    geometryCuboid = new THREE.BoxGeometry(1, 20, 1, 2, 2, 2);

    materialCuboid = new THREE.MeshBasicMaterial({ color: 0x8ed4ff, wireframe: true});

    cuboid2Mesh = new THREE.Mesh(geometryCuboid, materialCuboid);

    cuboid2Mesh.position.x = x;
    cuboid2Mesh.position.y = y;
    cuboid2Mesh.position.z = z;

    cuboid2Mesh.rotation.x = -Math.PI/7;
}

function setupCuboids() {
    let geometry = new THREE.BoxGeometry(3, 1, 0.35);
    cuboids = [];
    addCuboidRing(5, geometry);
}

function addCuboidRing(radius, geometry) {
    for(let i = 1; i <= 10; i++) {
      let angle = i / 10 * Math.PI * 2;
      material = new THREE.MeshBasicMaterial({ color: 0x49ff3d*i, wireframe: true});
      let cuboid = new THREE.Mesh(geometry, material);
      cuboid.position.x = Math.cos(angle) * radius +35;
      cuboid.position.y = Math.sin(angle) * radius+ 10;
      cuboid.position.z = 10;
      cuboid.rotateY(i / 10 * Math.PI);
      cuboid.rotation.x = Math.PI / 2;
      scene.add(cuboid);
      cuboids.push(cuboid);
    }
}
  
function createTube(x, y, z){
    'use strict';
    geometry = new THREE.TorusKnotGeometry( 10, 1.485, 100, 16, 2, 1 );
    material = new THREE.MeshBasicMaterial( { color: 0xcda052, wireframe: true } );
    tubeMesh = new THREE.Mesh( geometry, material );

    tubeMesh.position.set(x, y, z);
}

function createBox(x, y, z){
    'use strict';

    geometry = new THREE.BoxGeometry(2, 3, 40, 3, 3, 3);
    material = new THREE.MeshBasicMaterial( { color: 0xffc2c2 , wireframe: true } );
    boxMesh = new THREE.Mesh( geometry, material );

    boxMesh.position.set(x, y, z);
    boxMesh.rotation.x = Math.PI/8;
}

function createWeird(x, y, z){
    'use strict';

    //TorusKnotGeometry(radius : Float, tube : Float, tubularSegments : Integer, radialSegments : Integer, p : Integer, q : Integer)

    geometry = new THREE.TorusKnotGeometry( 7,1,100,16);
    material = new THREE.MeshBasicMaterial( { color: 0xfd46a7, wireframe: true } );
    weirdMesh = new THREE.Mesh( geometry, material );


    weirdMesh.position.set(x, y, z);
    weirdMesh.rotation.x = Math.PI/4;
}

function createRing(x, y, z){
    'use strict';

    //RingGeometry(innerRadius : Float, outerRadius : Float, thetaSegments : Integer, phiSegments : Integer, thetaStart : Float, thetaLength : Float)
    geometry = new THREE.RingGeometry(5,8, 12,6);
    material = new THREE.MeshBasicMaterial( { color: 0xf73131, side: THREE.DoubleSide, wireframe: true } );
    ringMesh = new THREE.Mesh( geometry, material );
    
    ringMesh.position.x = x;
    ringMesh.position.y = y;
    ringMesh.position.z = z;

    ringMesh.rotation.x = -Math.PI/2;
    ringMesh.rotation.y = Math.PI/6;
}

function createRing2(x, y, z){
    'use strict';

    //RingGeometry(innerRadius : Float, outerRadius : Float, thetaSegments : Integer, phiSegments : Integer, thetaStart : Float, thetaLength : Float)
    geometry = new THREE.RingGeometry(5,8, 12,6);
    material = new THREE.MeshBasicMaterial( { color: 0x7c63f8, side: THREE.DoubleSide, wireframe: true } );
    ring2Mesh = new THREE.Mesh( geometry, material );
    
    ring2Mesh.position.x = x;
    ring2Mesh.position.y = y;
    ring2Mesh.position.z = z;

    ring2Mesh.rotation.x = -Math.PI;
    ring2Mesh.rotation.y = Math.PI/3;
}


function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07023c);
    scene.add(new THREE.AxisHelper(10));
    createCube(0, 0, 0);
    //createCone(0, 16.5, 0);
    createTorus(0, 0, 0);
    createSphere3(0,18.5,0);
    

    mediumGroup = new THREE.Group();
    sphereGroup = new THREE.Group();
    sphereGroup.add(sphere3Mesh);
    mediumGroup.add(sphere3Mesh);
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
    createCuboid1(-8,8,28);
    scene.add(cuboidMesh);
    createCuboid2(-4,8,28);
    scene.add(cuboid2Mesh);
    setupCuboids();

    createBox(10, 3, -40);
    createTube(0, 0, -40);
    scene.add(boxMesh);
    scene.add(tubeMesh);
    createWeird(-12,3,45);
    scene.add(weirdMesh);
    createRing(-52,7,20);
    scene.add(ringMesh);
    createRing2(-48,7,25);
    scene.add(ring2Mesh);
    createSphere2(-55,13,-10);
    scene.add(sphere2Mesh);
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
    camera2.position.y = 70;
    camera2.position.z = 0;
    camera2.lookAt(scene.position);

    camera3 = new THREE.PerspectiveCamera(70,
                                          window.innerWidth / window.innerHeight,
                                          1,
                                          1000);

    camera3.position.x = 0;
    camera3.position.y = 0;
    camera3.position.z = 70;
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
        //var point = new THREE.Vector3(0,100,0);
        //sphere3Mesh.lookAt(point);
        sphere3Mesh.rotation.x -= 0.1;
        sphere3Mesh.position.z = 3.7*Math.cos(t);
        sphere3Mesh.position.y = 3.7*Math.sin(t) + 15;
        t += 0.1;
        break;
    
    case 87: //w
        //if(temp == false){
        //    sphereGroup.position.set(0, -3, 0);
        //    sphereGroup.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( 0, 3, 0 ));
        //    temp = true;
        //}
        //
        //sphereGroup.rotation.x -= 0.1;
        //sphereGroup.position.z = 4*Math.cos(t) + 0;
        //sphereGroup.position.y = 4*Math.sin(t) + 15;
        //t += 0.1;
        sphereGroup.rotateY(-0.1);

        break;
    
    case 65: //a
        
        bigGroup.rotateY(-0.1);
        break;
    
    case 83: //s
        bigGroup.rotateY(0.1);
        break;
    
    case 90: //z
        mediumGroup.rotateY(0.05);
        mediumGroup.rotateZ(0.05);
        break;
    
    case 88: //x
        mediumGroup.rotateY(-0.05);
        mediumGroup.rotateZ(-0.05);
        //rotateMediumGroupRight(-0.02);
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
