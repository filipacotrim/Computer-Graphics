/*
 *  ---------------------------------------------------------------------------                     
 *                   Computer Graphics - 4th Quarter
 *
 *  Authors:
 *  - Filipa Cotrim, 95572
 *  - João Pereira,  95600
 *  - José Afonso,   95613
 *  
 *  ---------------------------------------------------------------------------
 */

/* ---------- Scene and cameras ---------- */
var camera, scene, renderer, camera1, camera2, camera3;

/* ---------- Geometry ---------- */
var geometryWorld, geometryRocketBody, geometryRocketCapsule, geometryRocketNose, geometryFlame, geometryCuboids;
var geometryStationBody, geometryStationMiddle, geometryStationWings, geometryTrash, geometryCuriosityWheels, geometryCuriosityLegs, geometryCuriosityBody, geometryCuriosityNeck, geometryCuriosityHead;

/* ---------- Material ---------- */
var materialWorld, materialRocketBody, materialRocket, materialFlame, materialFlame1, materialCuboids;
var materialStationBody, materialStationMiddle, materialStationWings, materialStation4, materialStation5, materialStation6;
var materialTrash, materialCuriosityWheels, materialCuriosityWheelsAux, materialCuriosityLegs, materialCuriosityBody, materialCuriosityLegsAux, materialCuriosityNeck, materialCuriosityHead;

/* ---------- Mesh ---------- */
var worldMesh, rocketBodyMesh, rocketCapsuleMesh1, rocketCapsuleMesh2, rocketCapsuleMesh3, rocketCapsuleMesh4, rocketNoseMesh;
var trashMesh, curiosityWheelsMesh1, curiosityWheelsMesh2, curiosityWheelsMesh3, curiosityWheelsMesh4, curiosityMesh5, curiosityMesh6, curiosityMesh7;
var curiosityMesh8, curiosityBodyMesh, curiosityWheelsMesh10, curiosityNeckMesh, curiosityHeadMesh, cuboidsMesh;
var flameMesh1, flameMesh2, flameMesh3, flameMesh4, stationMeshBody, stationMeshMiddle1, stationMeshMiddle2, stationMeshWings4, stationMeshWings1, stationMeshWings2, stationMeshWings3;

/* ---------- Boolean variables ---------- */
var oneActive, twoActive, threeActive, fourActive, eActive;
var rightActive, leftActive, upActive, downActive;

/* ---------- Groups ---------- */
var rocketGroup, stationGroup, curiosityGroup;

/*----------- Collision Spheres -----------*/
var collisionMesh, geometryCollision, materialSphere;
var rocketRadius, stationRadius, trashRadius, cuboidsRadius, curiosityRadius;

var vectorRocket, rocketPositionSpherical, longitude = 0, latitude = 0, randomSpherical;
var axisHelper, materials = [], cuboidsCollision = [], stationCollision = [], curiosityCollision = [];
var clock = new THREE.Clock();
var velocity = 0.5;


/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createWorld(x, y, z) {
    'use strict';
    geometryWorld = new THREE.SphereGeometry(76, 50, 30);
    materialWorld = new THREE.MeshPhongMaterial({
        color: 0x49a5d1,
        emissive: new THREE.Color(0x49a5d1),
        wireframe: true
    });
    
    worldMesh = new THREE.Mesh(geometryWorld, materialWorld);
    materials.push(worldMesh);
    worldMesh.position.set(x,y,z);
}

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createRocketNose(x, y, z) {
    'use strict';
    geometryRocketNose = new THREE.CylinderGeometry(0, 1, 1.5, 10, 5);
    materialRocket = new THREE.MeshPhongMaterial({
        color: 0xd61212,
        emissive: new THREE.Color(0xd61212),
        wireframe: true
    });

    rocketNoseMesh = new THREE.Mesh(geometryRocketNose, materialRocket);
    materials.push(rocketNoseMesh);

    rocketNoseMesh.position.set(x, y + 3.25+2, z);
}

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createRocketBody(x, y, z) {
    'use strict'
    geometryRocketBody = new THREE.CylinderGeometry(1, 1, 5, 10, 5);
    materialRocketBody = new THREE.MeshPhongMaterial({
        color: 0x0a25a0,
        emissive: new THREE.Color(0x0a25a0),
        wireframe: true
    });

    rocketBodyMesh = new THREE.Mesh(geometryRocketBody, materialRocketBody);
    materials.push(rocketBodyMesh);

    rocketBodyMesh.position.set(x, y+2, z);
}

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createRocketCapsule(x, y, z) {
    'use strict';
    geometryRocketCapsule = new THREE.CapsuleGeometry(0.5, 1.6, 10, 5);
    materialRocketBody = new THREE.MeshPhongMaterial({
        color: 0x0a25a0,
        emissive: new THREE.Color(0x0a25a0),
        wireframe: true
    });

    rocketCapsuleMesh1 = new THREE.Mesh(geometryRocketCapsule, materialRocket);
    materials.push(rocketCapsuleMesh1);
    rocketCapsuleMesh2 = new THREE.Mesh(geometryRocketCapsule, materialRocket);
    materials.push(rocketCapsuleMesh2);
    rocketCapsuleMesh3 = new THREE.Mesh(geometryRocketCapsule, materialRocket);
    materials.push(rocketCapsuleMesh3);
    rocketCapsuleMesh4 = new THREE.Mesh(geometryRocketCapsule, materialRocket);
    materials.push(rocketCapsuleMesh4);

    rocketCapsuleMesh1.position.set(x - 1.5, y - 1.8 +2.2, z);
    rocketCapsuleMesh2.position.set(x, y - 1.8+2.2, z - 1.5);
    rocketCapsuleMesh3.position.set(x + 1.5, y - 1.8+2.2, z);
    rocketCapsuleMesh4.position.set(x, y - 1.8+2.2, z + 1.5);
}

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createRocketFlames(x, y, z) {
    'use strict';
    geometryFlame = new THREE.CylinderGeometry(0, 0.5, 1.4, 10, 5);
    materialFlame = new THREE.MeshPhongMaterial({
        color: 0xf79a14,
        emissive: new THREE.Color(0xf79a14),
        wireframe: true
    });
    materialFlame1 = new THREE.MeshPhongMaterial({
        color: 0xf79a14,
        emissive: new THREE.Color(0xf79a14),
        wireframe: true
    });

    flameMesh1 = new THREE.Mesh(geometryFlame, materialFlame1);
    materials.push(flameMesh1);
    flameMesh2 = new THREE.Mesh(geometryFlame, materialFlame);
    materials.push(flameMesh2);
    flameMesh3 = new THREE.Mesh(geometryFlame, materialFlame );
    materials.push(flameMesh3);
    flameMesh4 = new THREE.Mesh(geometryFlame, materialFlame);
    materials.push(flameMesh4);

    flameMesh1.position.set(x - 1.5, y - 1.8 +2.1 - 0.8 - 0.7, z);
    flameMesh2.position.set(x, y - 1.8+2 - 0.8 - 0.7, z - 1.5);
    flameMesh3.position.set(x + 1.5, y - 1.8+2 - 0.8 - 0.7, z);
    flameMesh4.position.set(x, y - 1.8+2 - 0.8 - 0.7, z + 1.5);

    flameMesh1.rotation.x = Math.PI;
    flameMesh2.rotation.x = Math.PI;
    flameMesh3.rotation.x = Math.PI;
    flameMesh4.rotation.x = Math.PI;
}


/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createRocket(x,y,z){
    'use strict';
    createRocketBody(x,y,z);
    createRocketNose(x,y,z);
    createRocketCapsule(x,y,z);
    createRocketFlames(x,y,z);

    rocketRadius = 9.2/2;
}

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createStationBody(x,y,z) {
    'use strict';
    geometryStationBody = new THREE.CylinderGeometry(0.1*2, 0.1*2, 0.7, 10, 5);
    materialStationBody = new THREE.MeshPhongMaterial({
        color: 0xe7e7e7,
        emissive: new THREE.Color(0xe7e7e7),
        wireframe: true
    });

    stationMeshBody = new THREE.Mesh(geometryStationBody, materialStationBody);
    materials.push(stationMeshBody);

    stationMeshBody.position.set(x, y, z);

    stationMeshBody.rotation.x = Math.PI/2;
    stationMeshBody.rotation.z = Math.PI/2;
    stationMeshBody.scale.set(1.7,1.7,1.7);
} 

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createStationMiddle(x,y,z) {
    'use strict';
    geometryStationMiddle = new THREE.CylinderGeometry(0.025*2, 0.025*2, 0.25*2, 10, 5);
    materialStationMiddle = new THREE.MeshPhongMaterial({
        color: 0x3b363e,
        emissive: new THREE.Color(0x3b363e),
        wireframe: true
    });

    stationMeshMiddle1 = new THREE.Mesh(geometryStationMiddle, materialStationMiddle);
    stationMeshMiddle2 = new THREE.Mesh(geometryStationMiddle, materialStationMiddle);

    materials.push(stationMeshMiddle1);
    materials.push(stationMeshMiddle2);

    stationMeshMiddle1.position.set(x + 0.25 + 0.7, y, z);
    stationMeshMiddle2.position.set(x - 0.25 - 0.7, y, z);

    stationMeshMiddle1.rotation.x = Math.PI/2;
    stationMeshMiddle1.rotation.z = Math.PI/2;
    stationMeshMiddle1.scale.set(1.7,1.7,1.7);

    stationMeshMiddle2.rotation.x = Math.PI/2;
    stationMeshMiddle2.rotation.z = Math.PI/2;
    stationMeshMiddle2.scale.set(1.7,1.7,1.7);
}

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createStationWings(x, y, z) {
    'use strict';
    geometryStationWings = new THREE.BoxGeometry(0.2*2, 0.025*2, 1*2);

    materialStationWings = new THREE.MeshPhongMaterial({
        color: 0x3b363e,
        emissive: new THREE.Color(0x3b363e),
        wireframe: true
    });

    stationMeshWings1 = new THREE.Mesh(geometryStationWings, materialStationWings);
    stationMeshWings2 = new THREE.Mesh(geometryStationWings, materialStationWings);
    stationMeshWings3 = new THREE.Mesh(geometryStationWings, materialStationWings);
    stationMeshWings4 = new THREE.Mesh(geometryStationWings, materialStationMiddle);
    
    materials.push(stationMeshWings1);
    materials.push(stationMeshWings2);
    materials.push(stationMeshWings3);
    materials.push(stationMeshWings4);

    stationMeshWings1.position.set(x + 0.25 + 0.7 + 0.2, y, z);
    stationMeshWings2.position.set(x - 0.25 - 0.7 - 0.025, y, z);
    stationMeshWings3.position.set(x - 0.25 - 0.7 - 0.2, y, z);
    stationMeshWings4.position.set(x + 0.25 + 0.7 + 0.025, y, z);

    stationMeshWings1.rotation.x = Math.PI/3;
    stationMeshWings1.rotation.z = Math.PI/2;
    stationMeshWings1.scale.set(1.7,1.7,1.7);

    stationMeshWings2.rotation.x = Math.PI/3;
    stationMeshWings2.rotation.z = Math.PI/2;
    stationMeshWings2.scale.set(1.7,1.7,1.7);

    stationMeshWings3.rotation.x = Math.PI/3;
    stationMeshWings3.rotation.z = Math.PI/2;
    stationMeshWings3.scale.set(1.7,1.7,1.7);

    stationMeshWings4.rotation.x = Math.PI/3;
    stationMeshWings4.rotation.z = Math.PI/2;
    stationMeshWings4.scale.set(1.7,1.7,1.7);
}

/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createStation(x,y,z) {
    'use strict';
    createStationBody(x, y, z);
    createStationMiddle(x, y, z);
    createStationWings(x, y, z);

    stationRadius = 4.6/2;
}

function createCuriosityWheels(x, y, z) {
    'use strict';
    geometryCuriosityWheels = new THREE.CylinderGeometry(0.2, 0.2, 0.7, 10, 5);

    materialCuriosityWheels = new THREE.MeshPhongMaterial({
        color: 0x00000,
        emissive: new THREE.Color(0x00000),
        wireframe: true
    });
    materialCuriosityWheelsAux = new THREE.MeshPhongMaterial({
        color: 0x00000,
        emissive: new THREE.Color(0x00000),
        wireframe: true
    });

    curiosityWheelsMesh1 = new THREE.Mesh(geometryCuriosityWheels, materialCuriosityWheels);
    curiosityWheelsMesh2 = new THREE.Mesh(geometryCuriosityWheels, materialCuriosityWheelsAux);
    curiosityWheelsMesh3 = new THREE.Mesh(geometryCuriosityWheels, materialCuriosityWheelsAux);
    curiosityWheelsMesh4 = new THREE.Mesh(geometryCuriosityWheels, materialCuriosityWheelsAux);

    materials.push(curiosityWheelsMesh1);
    materials.push(curiosityWheelsMesh2);
    materials.push(curiosityWheelsMesh3);
    materials.push(curiosityWheelsMesh4);

    curiosityWheelsMesh1.position.set(x,y,z);
    curiosityWheelsMesh2.position.set(x-1.7,y,z);
    curiosityWheelsMesh3.position.set(x,y,z+1.7);
    curiosityWheelsMesh4.position.set(x-1.7,y,z+1.7);

    curiosityWheelsMesh1.rotation.x = Math.PI/2;
    curiosityWheelsMesh1.rotation.z = Math.PI/2;
    curiosityWheelsMesh2.rotation.x = Math.PI/2;
    curiosityWheelsMesh2.rotation.z = Math.PI/2;
    curiosityWheelsMesh3.rotation.x = Math.PI/2;
    curiosityWheelsMesh3.rotation.z = Math.PI/2;
    curiosityWheelsMesh4.rotation.x = Math.PI/2;
    curiosityWheelsMesh4.rotation.z = Math.PI/2;
}

function createCuriosityBody(x,y,z) {
    'use strict';
    geometryCuriosityBody = new THREE.BoxGeometry(2, 0.2, 1, 2, 2, 2);
    materialCuriosityBody = new THREE.MeshPhongMaterial({
        color: 0x8a6714 ,
        emissive: new THREE.Color(0x8a6714),
        wireframe: true
    });
    curiosityBodyMesh = new THREE.Mesh(geometryCuriosityBody, materialCuriosityBody);
    materials.push(curiosityBodyMesh);
    curiosityBodyMesh.position.set(x-0.7, y + Math.sin(Math.PI/4)*1.6+0.1, z+1);
    curiosityBodyMesh.rotation.y = Math.PI/2;
}

function createCuriosityLegs(x, y, z) {
    'use strict';
    geometryCuriosityLegs = new THREE.CylinderGeometry(0.05, 0.05, 1.6, 10, 5);

    materialCuriosityLegs = new THREE.MeshPhongMaterial({
        color: 0xa04000 ,
        emissive: new THREE.Color(0x6f5416),
        wireframe: true
    });
    materialCuriosityLegsAux = new THREE.MeshPhongMaterial({
        color: 0xa04000 ,
        emissive: new THREE.Color(0x6f5416),
        wireframe: true
    });

    curiosityMesh5 = new THREE.Mesh(geometryCuriosityLegs, materialCuriosityLegs);
    materials.push(curiosityMesh5);
    curiosityMesh6 = new THREE.Mesh(geometryCuriosityLegs, materialCuriosityLegsAux);
    materials.push(curiosityMesh6);
    curiosityMesh7 = new THREE.Mesh(geometryCuriosityLegs, materialCuriosityLegsAux);
    materials.push(curiosityMesh7);
    curiosityMesh8 = new THREE.Mesh(geometryCuriosityLegs, materialCuriosityLegsAux);
    materials.push(curiosityMesh8);

    curiosityMesh5.position.set(x - 0.4, y + 0.6, z );
    curiosityMesh5.rotation.z = Math.PI/4;
    curiosityMesh6.position.set(x - 1.7 + 0.4, y + 0.6, z);
    curiosityMesh6.rotation.z = -Math.PI/4;
    curiosityMesh7.position.set(x - 0.4, y + 0.6, z + 1.7);
    curiosityMesh7.rotation.z = Math.PI/4;
    curiosityMesh8.position.set(x -1.7 + 0.4, y + 0.6, z + 1.7);
    curiosityMesh8.rotation.z = -Math.PI/4;
}

function createCuriosityNeck(x, y, z) {
    'use strict';
    geometryCuriosityNeck = new THREE.BoxGeometry(0.1, 1, 0.1, 2, 2, 2);
    materialCuriosityNeck = new THREE.MeshPhongMaterial({
        color: 0x8a6714 ,
        emissive: new THREE.Color(0x8a6714),
        wireframe: true
    });
    curiosityNeckMesh = new THREE.Mesh(geometryCuriosityNeck, materialCuriosityNeck);
    materials.push(curiosityNeckMesh);
    curiosityNeckMesh.position.set(x-0.7, y + Math.sin(Math.PI/4)*1.6+0.1 + 0.5, z+1);
}

function createCuriosityHead(x, y, z) {
    'use strict';
    geometryCuriosityHead = new THREE.BoxGeometry(1, 0.3, 0.5, 2, 2, 2);
    materialCuriosityHead = new THREE.MeshPhongMaterial({
        color: 0x61480e,
        emissive: new THREE.Color(0x61480e),
        wireframe: true
    });
    curiosityHeadMesh = new THREE.Mesh(geometryCuriosityHead, materialCuriosityHead);
    materials.push(curiosityHeadMesh);
    curiosityHeadMesh.position.set(x-0.7, y + Math.sin(Math.PI/4)*1.6+0.1 + 0.5 + 0.5, z+1);
    curiosityHeadMesh.rotation.y = Math.PI/2;
}

function createCuriosity(x, y, z) {
    'use strict';
    createCuriosityBody(x,y,z);
    createCuriosityLegs(x,y,z);
    createCuriosityWheels(x,y,z);
    createCuriosityNeck(x,y,z);
    createCuriosityHead(x,y,z);

    curiosityRadius = 5.6/2;
}

function createTrash(x, y, z) {
    'use strict';
    geometryTrash = new THREE.SphereGeometry(1.25, 10, 5);
    materialTrash = new THREE.MeshPhongMaterial({
        color: 0x98290e,
        emissive: new THREE.Color(0x98290e),
        wireframe: true
    });
    trashMesh = new THREE.Mesh(geometryTrash, materialTrash);
    materials.push(trashMesh);

    trashMesh.position.set(x,y,z);

    trashRadius = 1.25;
}

function createCuboids(x, y, z) {
    'use strict';
    geometryCuboids = new THREE.BoxGeometry(3.4, 3.4, 3.4, 10, 5);
    materialCuboids = new THREE.MeshPhongMaterial({
        color: 0x1114b9,
        emissive: new THREE.Color(0x1114b9),
        wireframe: true
    });
    cuboidsMesh = new THREE.Mesh(geometryCuboids, materialCuboids);
    materials.push(cuboidsMesh);

    cuboidsMesh.position.set(x,y,z);

    cuboidsRadius = 3.4;
}



function randomBool(x) {
    'use strict';

    //for x >= 0.5 we assume random number is negative
    if (x >= 0.5) {
        return true;
    }
    return false;
}


function randomPositions() {
    'use strict';
    var x = Math.random()*76;
    var z = Math.random()*76;
    var theta, phi;
    var signal_x = Math.random();
    var signal_z = Math.random();
    while (x == 0 || z == 0) {
        x = Math.random()*76;
        z = Math.random()*76;
    }
    if (randomBool(signal_x) == true) {
        x = -x;
    }
    if (randomBool(signal_z) == true) {
        z = -z;
    }

    var position = (x**2+z**2)**(1/2);
    var y =  (91.2**2-position**2)**(1/2);

    theta = Math.atan2( x, z );
    phi = Math.acos( Math.max( y / 91.2, Math.min( - 1, 1 )));

    return new THREE.Vector3(91.2, phi, theta);
}

function getPhi(y) {
    'use strict';
    var phi = Math.acos( Math.max( y / 91.2, Math.min( - 1, 1 )));

    return phi
}

function createCollisionSphere(r,x,y,z) {
    'use strict';
    geometryCollision= new THREE.SphereGeometry(r,10,5);
    materialSphere = new THREE.MeshPhongMaterial({
        color: 0xe3ff33,
        emissive: new THREE.Color(0xe3ff33),
        wireframe: true,
        visible: false
    });
    var collisionMesh = new THREE.Mesh(geometryCollision, materialSphere);
    materials.push(collisionMesh);

    collisionMesh.position.set(x,y,z);
    return collisionMesh;
}

/**
 * 
 * Create scene and add all elements to it
 * 
 */
function createScene() {
    'use strict';
    //create scene and change background color
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xc5eac7);
    axisHelper = new THREE.AxesHelper(10);
    scene.add(axisHelper);
    
    //add directional light
    var light = new THREE.DirectionalLight();
    light.castShadow = true;
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 100;
    light.position.set(1,0.5,0);
    scene.add(light);

    createWorld(0,0,0);
    scene.add(worldMesh);
    
    randomSpherical = randomPositions();
    vectorRocket = convertToCartesian(randomSpherical.y, randomSpherical.z);
    rocketPositionSpherical = new THREE.Vector3(91.2, randomSpherical.y, randomSpherical.z);

    createRocket(0, 0, 0);

    rocketGroup = new THREE.Group();
    rocketGroup.add(rocketBodyMesh);
    rocketGroup.add(rocketNoseMesh);
    rocketGroup.add(rocketCapsuleMesh1);
    rocketGroup.add(rocketCapsuleMesh2);
    rocketGroup.add(rocketCapsuleMesh3);
    rocketGroup.add(rocketCapsuleMesh4);
    rocketGroup.add(flameMesh1);
    rocketGroup.add(flameMesh2);
    rocketGroup.add(flameMesh3);
    rocketGroup.add(flameMesh4);
    var rocketMesh = createCollisionSphere(rocketRadius, 0, 2.4 ,0);
    rocketGroup.add(rocketMesh);
    scene.add(rocketGroup);


    for (let i = 0; i < 8; i++) {
        randomSpherical = randomPositions();
        var vectorStation = convertToCartesian(randomSpherical.y, randomSpherical.z);
        createStation(0,0,0);
        stationGroup = new THREE.Group();
        stationGroup.add(stationMeshBody);
        stationGroup.add(stationMeshMiddle1);
        stationGroup.add(stationMeshMiddle2);
        stationGroup.add(stationMeshWings4);
        stationGroup.add(stationMeshWings1);
        stationGroup.add(stationMeshWings2);
        stationGroup.add(stationMeshWings3);
        var meshStation = createCollisionSphere(stationRadius,0,0,0);
        stationCollision.push(stationGroup);
        stationGroup.position.set(vectorStation.getComponent(0), vectorStation.getComponent(1), vectorStation.getComponent(2));
        stationGroup.add(meshStation);
        scene.add(stationGroup);
    }



    for (let i = 0; i < 8; i++) {
        randomSpherical = randomPositions();
        var vectorCuboids = convertToCartesian(randomSpherical.y, randomSpherical.z);
        var cuboidsGroup = new THREE.Group();
        createCuboids(0,0,0);
        cuboidsGroup.add(cuboidsMesh);
        var mesh = createCollisionSphere(cuboidsRadius, 0,0,0);
        cuboidsGroup.add(mesh);
        cuboidsCollision.push(cuboidsGroup);
        cuboidsGroup.position.set(vectorCuboids.getComponent(0), vectorCuboids.getComponent(1), vectorCuboids.getComponent(2));
        scene.add(cuboidsGroup)
    }

    for (let i = 0; i < 8; i++) { 
        randomSpherical = randomPositions();
        var vectorCuriosity = convertToCartesian(randomSpherical.y, randomSpherical.z);
        createCuriosity(0,-1,-1);
        curiosityGroup = new THREE.Group()
        curiosityGroup.add(curiosityWheelsMesh1);
        curiosityGroup.add(curiosityWheelsMesh2);
        curiosityGroup.add(curiosityWheelsMesh3);
        curiosityGroup.add(curiosityWheelsMesh4);
        curiosityGroup.add(curiosityMesh5);
        curiosityGroup.add(curiosityMesh6);
        curiosityGroup.add(curiosityMesh7);
        curiosityGroup.add(curiosityMesh8);
        curiosityGroup.add(curiosityBodyMesh);
        curiosityGroup.add(curiosityNeckMesh);
        curiosityGroup.add(curiosityHeadMesh);
    
        var mesh = createCollisionSphere(curiosityRadius, 0,0,0);
        curiosityGroup.add(mesh);
        curiosityCollision.push(curiosityGroup);
        curiosityGroup.position.set(vectorCuriosity.getComponent(0), vectorCuriosity.getComponent(1), vectorCuriosity.getComponent(2));
        scene.add(curiosityGroup);

    }
}

function createPerspectiveCamera(x, y, z){
    var randCamera = new THREE.PerspectiveCamera(90,
                                          window.innerWidth / window.innerHeight,
                                          1,
                                          1000);
    randCamera.position.x = x;
    randCamera.position.y = y;
    randCamera.position.z = z;
    randCamera.lookAt(scene.position);

    return randCamera;
}

function createOrthographicCamera(x, y, z){
    var randCamera = new THREE.OrthographicCamera(window.innerWidth / (- 2*5),
                                            window.innerWidth / (2*5),
                                            window.innerHeight / (2*5),
                                            window.innerHeight / (- 2*5),
                                            1,
                                            1000
                                            );

    randCamera.position.x = x;
    randCamera.position.y = y;
    randCamera.position.z = z;
    randCamera.lookAt(scene.position);

    return randCamera;
}

/**
 * Allow window resizing
 */
function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);

    camera1.left = -window.innerWidth / 7;
    camera1.right = window.innerWidth / 7;
    camera1.top = window.innerHeight / 7;
    camera1.bottom = -window.innerHeight / 7;
    camera1.updateProjectionMatrix();

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera2.aspect = window.innerWidth / window.innerHeight;
        camera2.updateProjectionMatrix();
        camera3.aspect = window.innerWidth / window.innerHeight;
        camera3.updateProjectionMatrix();
    }

}

/**
 * Render function
 */
function render() {
    'use strict';
    renderer.render(scene, camera);
}

/**
 * Set boolean flags acording to what keys are pressed
 * 
 * @param  e 
 */
function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 69:  //E
    case 101: //e
        eActive = true;
        break;
    case 49: // 1
        oneActive = true;
        break;
    
    case 50: // 2
        twoActive = true;
        break;

    case 51: // 3
        threeActive = true;
        break;
    
    case 52: // 4
        fourActive = true;
        break;
    
    case 37: //left arrow
        leftActive = true;
        longitude = 1;
        break;
    
    case 38: //up arrow
        upActive = true;
        latitude = -1;
        break;
    
    case 39: //right arrow
        rightActive = true;
        longitude = -1;
        break;
    
    case 40: //down arrow
        downActive = true;
        latitude = 1;
        break;
    }
}

/**
 * Set boolean flags acording to what keys are pressed
 * 
 * @param  e 
 */
function onKeyUp(e) {
    'use strict';
    switch (e.keyCode) {

    case 37: //left arrow
        leftActive = false;
        longitude = 0;
        break;
    
    case 38: //up arrow
        upActive = false;
        latitude = 0;
        break;
    
    case 39: //right arrow
        rightActive = false;
        longitude = 0;
        break;
    
    case 40: //down arrow
        downActive = false;
        latitude = 0;
        break;
    }
}

/**
 * Init function
 */
function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    camera1 = createOrthographicCamera(100, 100, 100);
    camera2 = createPerspectiveCamera(0, 150, 0);
    camera3 = createPerspectiveCamera(0, -10, -3);
    camera = camera1;

    rocketGroup.add(camera3);

    rocketGroup.position.set(vectorRocket.getComponent(0), vectorRocket.getComponent(1), vectorRocket.getComponent(2));
    var phi = getPhi( vectorRocket.getComponent(1));
    rocketGroup.rotation.x = Math.PI/2 + phi;
    rocketGroup.rotation.z = Math.PI/2 + phi;

    const loader = new THREE.TextureLoader();
    scene.background = loader.load( 'https://images.unsplash.com/photo-1592035659284-3b39971c1107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1463&q=80' );

    //add event listeners for keys and resizing
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    window.addEventListener("keyup",onKeyUp);
}

function convertToCartesian(longitude, latitude) {
    const height = 91.2;
    var x, y, z;

    if (latitude == 0){
        x = height * Math.cos(latitude) * Math.cos(longitude);
        z = height * Math.cos(latitude) * Math.sin(longitude);
        y = height * Math.sin(latitude);
    }
    else {
        x = height * Math.sin(latitude) * Math.cos(longitude);
        z = height * Math.sin(latitude) * Math.sin(longitude);
        y = height * Math.cos(latitude);
    }
    return new THREE.Vector3(x, y, z);
}

function hasCollision(rocket_pos) {
    cuboidsCollision.forEach(function (trash) {
        if (trash instanceof THREE.Group) {
            var distance = rocket_pos.distanceToSquared(trash.position);

            if (distance <= (rocketRadius + cuboidsRadius)) {
                scene.remove(trash);
            }
        }
    });
    stationCollision.forEach(function (trash) {
        if (trash instanceof THREE.Group) {
            var distance = rocket_pos.distanceToSquared(trash.position);

            if (distance <= (rocketRadius + stationRadius)) {
                scene.remove(trash);
            }
        }
    });
    curiosityCollision.forEach(function (trash) {
        if (trash instanceof THREE.Group) {
            var distance = rocket_pos.distanceToSquared(trash.position);
            if (distance <= (rocketRadius + curiosityRadius)) {
                scene.remove(trash);
            }
        }
    });
}


/**
 * Update rotations and translations
 */
 function animationAux(speed){
    'use strict';
    if(oneActive){
        //change to camera 1
        camera = camera1;
        oneActive = false;
    }

    if(twoActive){
        //change to camera 2
        camera = camera2;
        twoActive = false;
    }

    if(threeActive){
        //change to camera 3
        camera = camera3;
        threeActive = false;
    }

    if(fourActive){
        // toggle wireframe
        materials.forEach(function (material) {
            if (material instanceof THREE.Mesh) {
                material.material.wireframe = !material.material.wireframe;
            }
        });
        fourActive = false;
    }

    if(eActive){
        axisHelper.visible = !axisHelper.visible;
        eActive = false;
    }

    if(upActive || downActive || leftActive || rightActive){
        
        rocketPositionSpherical.y += speed * longitude;
        rocketPositionSpherical.z += speed * latitude;
        
        var rocket_pos = convertToCartesian(rocketPositionSpherical.y, rocketPositionSpherical.z);
        rocketGroup.position.set(rocket_pos.x, rocket_pos.y, rocket_pos.z);
        hasCollision(rocket_pos);
        rocketGroup.lookAt(scene.position);
    }
}


/**
 * Animate function
 */
function animate() {
    'use strict';
    //update rotations and translations
    animationAux(velocity*clock.getDelta());
    //render and request animation
    render();
    requestAnimationFrame(animate);
}
