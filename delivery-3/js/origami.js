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


/* ------------- Geometry ---------------- */
var geometryStageBig, geometryStageSmall;

/* ------------- Materials --------------- */
var materialStage;
var materials = [];
var meshes = [];


/* ------------- Mesh -------------------- */
var bigStageMesh, smallStageMesh, firstShapeMesh, firstShapeMesh2;
var secondShapeMesh1, secondShapeMesh2, secondShapeMesh3, secondShapeMesh4, secondShapeMesh5, secondShapeMesh6;
var thirdShapeMesh1, thirdShapeMesh2, thirdShapeMesh3, thirdShapeMesh4, thirdShapeMesh5, thirdShapeMesh6, thirdShapeMesh7, thirdShapeMesh8, thirdShapeMesh9;
var thirdShapeMesh10, thirdShapeMesh11, thirdShapeMesh12, thirdShapeMesh13, thirdShapeMesh14, thirdShapeMesh15, thirdShapeMesh16, thirdShapeMesh17, thirdShapeMesh18;

/* ---------- Scene and cameras ---------- */
var camera, scene, renderer, camera1, camera2, VRCamera, cameraAux;

/* ---------- Boolean variables ---------- */
var oneActive, twoActive, threeActive, fourActive, eActive, xActive, cActive;
var dActive, zActive, qActive, wActive;
var rActive, tActive, yActive, aActive, sActive, spaceActive;
var phong_active = true, gourad_active = false, basic_active = false;

/* ------------- Groups ------------------ */
var stageGroup, spotlightShape1, spotlightShape2, spotlightShape3, firstShapeMesh, secondShapeGroup, thirdShapeGroup, thirdSimetricShapeGroup;

/*---------------Paused Menu --------------*/
var menuMesh, pause = false, pauseMaterial, menu, geometry;

var velocity = 5;
var delta;
var clock = new THREE.Clock();
var translated = false;
var directionalLight, spotlight1, spotlight2, spotlight3;

var texture = new THREE.TextureLoader().load('../images/padrao.png');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(0.05,0.05);



function createStage(x, y, z){
    'use strict';
    //BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
    geometryStageBig = new THREE.BoxGeometry(100, 5, 70, 5, 5, 5);
    geometryStageSmall = new THREE.BoxGeometry(80, 5, 50, 5, 5, 5);
    materialStage = new THREE.MeshPhongMaterial({
        color: 0x49a5d1,
    });
    var materialStage2 = new THREE.MeshPhongMaterial({
        color: 0x49a5d1,
    });
    var basic_material = new THREE.MeshBasicMaterial({ color: 0x49a5d1});
    var lambert_material = new THREE.MeshLambertMaterial({color: 0x49a5d1});

    bigStageMesh = new THREE.Mesh(geometryStageBig, materialStage);
    smallStageMesh = new THREE.Mesh(geometryStageSmall, materialStage2);

    smallStageMesh.receiveShadow = true;

    bigStageMesh.position.set(x,y,z);
    smallStageMesh.position.set(x,y+5,z);

    meshes.push(bigStageMesh);
    meshes.push(smallStageMesh);

    materials.push([basic_material, lambert_material, materialStage]);
    materials.push([basic_material, lambert_material, materialStage2]);
}

function createFirstShape(x,y,z){
    'use strict';
    var firstShapeGeometry = new THREE.BufferGeometry();

    const vertices = new Float32Array([
        0.0, 0.0, 0.0, //0
		-2.0, 2.0, 0.5, //1
	    0.0, 4.0, 0.0, //2
        
        0.0, 0.0, 0.0, //0
		2.0, 2.0, 0.5, //1
		0.0, 4.0, 0.0 //2
    ])
    
    firstShapeGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    firstShapeGeometry.setAttribute('uv', new THREE.BufferAttribute(vertices, 3));
    firstShapeGeometry.computeVertexNormals();

    var basic_material = new THREE.MeshBasicMaterial({ color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var lambert_material = new THREE.MeshLambertMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var phong_material = new THREE.MeshPhongMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});

    firstShapeMesh = new THREE.Mesh(firstShapeGeometry, phong_material);
    
    firstShapeMesh.receiveShadow = true;
    firstShapeMesh.castShadow = true;

    meshes.push(firstShapeMesh);
    materials.push([basic_material, lambert_material, phong_material]);

    firstShapeMesh.position.set(x,y,z);
}

function createSecondShape(x, y, z) {
    'use strict';
    var secondShapeGeometry1 = new THREE.BufferGeometry();
    var secondShapeGeometry2 = new THREE.BufferGeometry();

    //texture
    const vertices = new Float32Array([
        0,32**(1/2),0,
        - (0.43*4.26), 4.26*0.906 , 0.5,
        0, 32**(1/2) - 2.3, 0,

        0, 32**(1/2),0,
        0.43*4.26, 4.26*0.906, 0.5,
        0, 32**(1/2) - 2.3, 0,

        0 - (0.43*4.26) + 0.3 , 32**(1/2)-2.6,0.5,
        0, 0 ,0,
        0, 32**(1/2) - 2.3, 0,

        (0.43*4.26) - 0.3 , 32**(1/2)-2.6, 0.5,
        0, 0, 0,
        0, 32**(1/2) - 2.3, 0
    ])

    //no texture
    const vertices2 = new Float32Array([
        0.43*4.26 - 0.3 ,32**(1/2)-2.6, 0.5,
        0.43*4.26, 4.26*0.906, 0.5,
        0, 32**(1/2) - 2.3, 0,

        - (0.43*4.26) + 0.3 ,32**(1/2)-2.6,0.5,
        - (0.43*4.26), 4.26*0.906 , 0.5,
        0, 32**(1/2) - 2.3, 0,
    ])

    secondShapeGeometry1.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    secondShapeGeometry1.setAttribute('uv', new THREE.BufferAttribute(vertices, 3));
    secondShapeGeometry1.computeVertexNormals();

    secondShapeGeometry2.setAttribute('position', new THREE.BufferAttribute(vertices2, 3));
    secondShapeGeometry2.setAttribute('uv', new THREE.BufferAttribute(vertices2, 3));
    secondShapeGeometry2.computeVertexNormals();

    var phong_material = new THREE.MeshPhongMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var phong_material_no_texture = new THREE.MeshPhongMaterial({color: "white", side: THREE.DoubleSide});
    var basic_material = new THREE.MeshBasicMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var basic_material_no_texture = new THREE.MeshBasicMaterial({color: "white", side: THREE.DoubleSide});
    var lambert_material = new THREE.MeshLambertMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var lambert_material_no_texture = new THREE.MeshLambertMaterial({color: "white", side: THREE.DoubleSide});


    secondShapeMesh1 = new THREE.Mesh(secondShapeGeometry1, phong_material);
    secondShapeMesh2 = new THREE.Mesh(secondShapeGeometry2, phong_material_no_texture);
    
    secondShapeMesh1.receiveShadow = true;
    secondShapeMesh1.castShadow = true;

    secondShapeMesh2.receiveShadow = true;
    secondShapeMesh2.castShadow = true;

    secondShapeGroup = new THREE.Group();
    secondShapeGroup.add(secondShapeMesh1);
    secondShapeGroup.add(secondShapeMesh2);

    meshes.push(secondShapeMesh1);
    meshes.push(secondShapeMesh2);
    
    materials.push([basic_material, lambert_material, phong_material]);
    materials.push([basic_material_no_texture, lambert_material_no_texture, phong_material_no_texture]);

    secondShapeGroup.position.set(x,y,z);

}

function createThirdShape(x,y,z) {
    'use strict';
    var thirdShapeGeometry1 = new THREE.BufferGeometry();
    var thirdShapeGeometry2 = new THREE.BufferGeometry();


    const vertices = new Float32Array([
        0, 0, 0.65,
        2.0, 0, 0.5,
        -0.7, 1.5, 0.0,

        -3.2, 1.9, 0,
        -1.5, 0, 0.65,
        -0.7, 1.5, 0,

        2.5, 1, 0,
        2.0, 0, 0.5,
        -0.7, 1.5, 0,

        2, 0, 0.5,
        1.3, 4.2, 0,
        2.5, 1, 0,

        2, 0, 0.5,
        1.3, 4.2, 0,
        0.6, 4.3, 0.4,

        1, 4.8, 0,
        2.4, 3.7, 0,
        0.6, 4.3, 0.4
    ])

    const vertices2 = new  Float32Array([
        0, 0, 0.65,
        -1.5, 0, 0.65,
        -0.7, 1.5, 0
    ])

    thirdShapeGeometry1.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    thirdShapeGeometry1.setAttribute('uv', new THREE.BufferAttribute(vertices, 3));
    thirdShapeGeometry1.computeVertexNormals();

    thirdShapeGeometry2.setAttribute('position', new THREE.BufferAttribute(vertices2, 3));
    thirdShapeGeometry2.setAttribute('uv', new THREE.BufferAttribute(vertices2, 3));
    thirdShapeGeometry2.computeVertexNormals();

    var phong_material = new THREE.MeshPhongMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var phong_material_no_texture = new THREE.MeshPhongMaterial({color: "white", side: THREE.DoubleSide});
    var basic_material = new THREE.MeshBasicMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var basic_material_no_texture = new THREE.MeshBasicMaterial({color: "white", side: THREE.DoubleSide});
    var lambert_material = new THREE.MeshLambertMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var lambert_material_no_texture = new THREE.MeshLambertMaterial({color: "white", side: THREE.DoubleSide});

    
    thirdShapeMesh1 = new THREE.Mesh(thirdShapeGeometry1, phong_material);
    thirdShapeMesh2 = new THREE.Mesh(thirdShapeGeometry2, phong_material_no_texture);

    thirdShapeMesh1.receiveShadow = true;
    thirdShapeMesh1.castShadow = true;

    thirdShapeMesh2.receiveShadow = true;
    thirdShapeMesh2.castShadow = true;

    thirdShapeGroup = new THREE.Group();
    thirdShapeGroup.add(thirdShapeMesh1);
    thirdShapeGroup.add(thirdShapeMesh2);

    meshes.push(thirdShapeMesh1);
    meshes.push(thirdShapeMesh2);
    
    materials.push([basic_material, lambert_material, phong_material]);
    materials.push([basic_material_no_texture, lambert_material_no_texture, phong_material_no_texture]);

    thirdShapeGroup.position.set(x, y, z);
}

function createSimetricThirdShape(x,y,z) {
    'use strict';
    var thirdShapeGeometry10 = new THREE.BufferGeometry();
    var thirdShapeGeometry11 = new THREE.BufferGeometry();

    const vertices = new Float32Array([
        0, 0, -0.65,
        2.0, 0, -0.5,
        -0.7, 1.5, 0.0,

        -3.2, 1.9, 0,
        -1.5, 0, -0.65,
        -0.7, 1.5, 0,

        2.5, 1, 0,
        2.0, 0, -0.5,
        -0.7, 1.5, 0,

        2, 0, -0.5,
        1.3, 4.2, 0,
        2.5, 1, 0,

        2, 0, -0.5,
        1.3, 4.2, 0,
        0.6, 4.3, -0.4,

        1, 4.8, 0,
        2.4, 3.7, 0,
        0.6, 4.3, -0.4
    ])

    const vertices2 = new Float32Array([
        0, 0,- 0.65,
        -1.5, 0, -0.65,
        -0.7, 1.5, 0
    ])

    thirdShapeGeometry10.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    thirdShapeGeometry10.setAttribute('uv', new THREE.BufferAttribute(vertices, 3));
    thirdShapeGeometry10.computeVertexNormals();

    thirdShapeGeometry11.setAttribute('position', new THREE.BufferAttribute(vertices2, 3));
    thirdShapeGeometry11.setAttribute('uv', new THREE.BufferAttribute(vertices2, 3));
    thirdShapeGeometry11.computeVertexNormals();


    var phong_material = new THREE.MeshPhongMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var phong_material_no_texture = new THREE.MeshPhongMaterial({color: "white", side: THREE.DoubleSide});
    var basic_material = new THREE.MeshBasicMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var basic_material_no_texture = new THREE.MeshBasicMaterial({color: "white", side: THREE.DoubleSide});
    var lambert_material = new THREE.MeshLambertMaterial({color: 0xff331b, map: texture, side: THREE.DoubleSide});
    var lambert_material_no_texture = new THREE.MeshLambertMaterial({color: "white", side: THREE.DoubleSide});
    
    thirdShapeMesh10 = new THREE.Mesh(thirdShapeGeometry10, phong_material);
    thirdShapeMesh11 = new THREE.Mesh(thirdShapeGeometry11, phong_material_no_texture);

    thirdShapeMesh10.receiveShadow = true;
    thirdShapeMesh10.castShadow = true;

    thirdShapeMesh11.receiveShadow = true;
    thirdShapeMesh11.castShadow = true;

    thirdShapeGroup.add(thirdShapeMesh10);
    thirdShapeGroup.add(thirdShapeMesh11);

    meshes.push(thirdShapeMesh10);
    meshes.push(thirdShapeMesh11);

    
    materials.push([basic_material, lambert_material, phong_material]);
    materials.push([basic_material_no_texture, lambert_material_no_texture, phong_material_no_texture]);

    thirdShapeGroup.position.set(x, y, z);
}


function createSpotlight(spotlight,x,y,z){
    //ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
    var geomCone = new THREE.ConeGeometry(2, 5, 20);
    //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    var geomSphere = new THREE.SphereGeometry(1.5, 10, 10);
    var materialCone = new THREE.MeshPhongMaterial({
        color: 0xff331b,
        emissive: new THREE.Color(0xff331b),
        emissiveIntensity: 0.1
    })
    var materialSphere = new THREE.MeshPhongMaterial({
        color: "white",
        emissive: new THREE.Color(0xffffff)
    })
    var basic_material_no_texture_sphere = new THREE.MeshBasicMaterial({color: "white", side: THREE.DoubleSide});
    var lambert_material_no_texture_sphere = new THREE.MeshLambertMaterial({color: "white", side: THREE.DoubleSide});


    var basic_material_no_texture_cone = new THREE.MeshBasicMaterial({color: 0xff331b, side: THREE.DoubleSide});
    var lambert_material_no_texture_cone = new THREE.MeshLambertMaterial({color: 0xff331b, side: THREE.DoubleSide});

    var coneMesh = new THREE.Mesh(geomCone, materialCone);
    var sphereMesh = new THREE.Mesh(geomSphere, materialSphere);

    coneMesh.position.set(0,0,0);
    sphereMesh.position.set(0,-2,0);
    spotlight.add(coneMesh);
    spotlight.add(sphereMesh);

    meshes.push(coneMesh);
    meshes.push(sphereMesh);
    materials.push([basic_material_no_texture_cone, lambert_material_no_texture_cone, materialCone]);
    materials.push([basic_material_no_texture_sphere, lambert_material_no_texture_sphere, materialSphere]);

    //spotlight.visible = false;
    spotlight.rotation.x = Math.PI/6;
    spotlight.position.set(x,y,z);
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
    scene.background = new THREE.Color(0x11576d);

    menu = new THREE.Object3D();


    //add directional directionalLight
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 512;
    directionalLight.shadow.mapSize.height = 512;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.position.set(0.5,0.5,1);
    scene.add(directionalLight);

    geometry = new THREE.PlaneGeometry( 200/6,  130/8);

    var pauseTexture = new THREE.TextureLoader().load("../images/index.jpg");
    pauseTexture.wrapS = THREE.RepeatWrapping;
    pauseTexture.wrapT = THREE.RepeatWrapping;
    pauseTexture.repeat.set(1,1);

    var basic_material = new THREE.MeshBasicMaterial({map: pauseTexture, side: THREE.DoubleSide});

    menuMesh = new THREE.Mesh(geometry, basic_material);
    menuMesh.visible = false;

    menu.add(menuMesh);

    createStage(0,0,0);
    stageGroup = new THREE.Group();
    stageGroup.add(bigStageMesh);
    stageGroup.add(smallStageMesh);
    stageGroup.position.set(0,0,0);
    scene.add(stageGroup);

    createFirstShape(-80/3,16,0);
    firstShapeMesh.scale.set(2.5,2.5,2.5);
    scene.add(firstShapeMesh);

    createSecondShape(0,15,0);
    secondShapeGroup.scale.set(2.2,2.2,2.2);
    scene.add(secondShapeGroup);

    createThirdShape(80/3,15,0);
    createSimetricThirdShape(80/3,15,0);
    thirdShapeGroup.scale.set(2.1,2.1,2.1);
    scene.add(thirdShapeGroup);

    //SpotLight( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float )
    spotlight1 = new THREE.SpotLight(0xffffff, 3.5, 50, Math.PI/7, 0.2, 1.2);
    spotlight1.position.set(-80/3, 40, 7);
    spotlight1.castShadow = true;
    spotlight1.target.position.set(-80/3, 20, 0);
    scene.add(spotlight1);
    scene.add(spotlight1.target);
    spotlightShape1 = new THREE.Group();
    createSpotlight(spotlightShape1, -80/3, 40, 7);
    scene.add(spotlightShape1);


    spotlight2 = new THREE.SpotLight(0xffffff, 3.5, 50, Math.PI/7, 0.2, 1.2);
    spotlight2.position.set(0, 40, 7);
    spotlight2.target.position.set(0, 20, 0);
    spotlight2.castShadow = true;
    scene.add(spotlight2);
    scene.add(spotlight2.target);
    spotlightShape2 = new THREE.Group();
    createSpotlight(spotlightShape2, 0, 40, 7);
    scene.add(spotlightShape2);

    spotlight3 = new THREE.SpotLight(0xffffff, 3.5, 50, Math.PI/7, 0.2, 1.2);
    spotlight3.position.set(80/3, 40, 7);
    spotlight3.target.position.set(80/3, 20, 0);
    spotlight3.castShadow = true;
    scene.add(spotlight3);
    scene.add(spotlight3.target);
    spotlightShape3 = new THREE.Group();
    createSpotlight(spotlightShape3, 80/3-4, 40, 7);
    scene.add(spotlightShape3);

    scene.add(menu);

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
    var randCamera = new THREE.OrthographicCamera(window.innerWidth / (- 2*10),
                                            window.innerWidth / (2*10),
                                            window.innerHeight / (2*10),
                                            window.innerHeight / (- 2*10),
                                            1,
                                            1000
                                            );

    randCamera.position.x = x;
    randCamera.position.y = y;
    randCamera.position.z = z;
    randCamera.lookAt(scene.position);

    return randCamera;
}

function createVRCamera(x, y, z){
    cameraAux = new THREE.PerspectiveCamera(70,
                                    window.innerWidth / window.innerHeight,
                                    1,
                                    1000);
    
    cameraAux.position.set(x,y,z);
    cameraAux.lookAt(scene.position);
    VRCamera = new THREE.StereoCamera();
    return VRCamera
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
    camera1.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera2.aspect = window.innerWidth / window.innerHeight;
        camera2.updateProjectionMatrix();
    }

}

/**
 * Render function
 */
function render() {
    'use strict';
    if(renderer.xr.isPresenting){
        if(!translated){
            scene.translateZ(-20);
            scene.translateY(-20);
            translated = true;
        }
        VRCamera.update(cameraAux);
        renderer.render(scene,VRCamera.cameraL);
        renderer.render(scene, VRCamera.cameraR);
        return;
    }
    else{
        renderer.render(scene, camera);        
    }
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

    case 68: // d
        dActive = true;
        break;
    
    case 90: // z
        zActive = true;
        break;
    
    case 88: // x
        xActive = true;
        break;
    
    case 67: // c
        cActive = true;
        break;
    
    case 81: // q
        qActive = true;
        break;
    
    case 87: // w
        wActive = true;
        break;
    
    case 82: // r
        rActive = true;
        break;
    
    case 84: // t
        tActive = true;
        break;
    
    case 89: // y
        yActive = true;
        break;
    case 83: // s
        sActive = true;
        break;
    case 65: // a
        aActive = true;
        break;
    case 32: //S
        spaceActive = true;  
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
    case 69:  //E
    case 101: //e
        eActive = false;
        break;
    
    case 81: // q
        qActive = false;
        break;
    
    case 87: // w
        wActive = false;
        break;
    
    case 82: // r
        rActive = false;
        break;
    
    case 84: // t
        tActive = false;
        break;
    
    case 89: // y
        yActive = false;
        break;
    case 32: //s
        spaceActive = false;
        break;
    case 83: // s
        sActive = false;
        break;
    case 65: // a
        aActive = false;
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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    document.body.appendChild( VRButton.createButton( renderer ) );

    renderer.xr.enabled = true;

    createScene();
    camera1 =  createPerspectiveCamera(30, 40, 40);
    camera2 = createOrthographicCamera(0, 10, 100);
    VRCamera = createVRCamera(0, 15, 15);
    camera = camera1;

    //add event listeners for keys and resizing
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    window.addEventListener("keyup",onKeyUp);
}



/**
 * Update rotations and translations
 */
 function animationAux(speed){
    'use strict';
    if(oneActive){
        //change to camera 1
        camera = camera1;
        if(pause){
            menuMesh.scale.set(1,1,1);
            menuMesh.position.set(30/1.5,40/1.5,40/1.5);
            menuMesh.lookAt(new THREE.Vector3(30,40,40));
        }
        oneActive = false;
    }

    if(twoActive){
        //change to camera 2
        camera = camera2;
        if(pause){
            menuMesh.scale.set(3,3,3);
            menuMesh.position.set(0,0,95);
            menuMesh.lookAt(new THREE.Vector3(0,0,100));
        }
        twoActive = false;
    }

    if(threeActive){
        //change to camera 3
        if(pause == true){
            reset();
        }
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

    if(dActive){
        directionalLight.visible = !directionalLight.visible;
        dActive = false;
    }

    if(zActive){
        spotlight1.visible = !spotlight1.visible;
        zActive = false;
    }

    if(xActive){
        spotlight2.visible = !spotlight2.visible;
        xActive = false;
    }

    if(cActive){
        spotlight3.visible = !spotlight3.visible;
        cActive = false;
    }

    if(qActive){
        console.log(speed)
        firstShapeMesh.rotation.y += speed;
    }

    if(wActive){
        firstShapeMesh.rotation.y -= speed;
    }

    if(eActive){
        secondShapeGroup.rotation.y += speed;
    }

    if(rActive){
        secondShapeGroup.rotation.y -= speed;
    }
    if(tActive){
        thirdShapeGroup.rotation.y += speed;
    }

    if(yActive){
        thirdShapeGroup.rotation.y -= speed;
    }

    if(aActive){
        for (var i = 0; i < meshes.length; i++) {
            if(phong_active){
                meshes[i].material = materials[i][2];		//Switch to Phong
            }
            
            else if(gourad_active){
                meshes[i].material = materials[i][1];		//Switch to Lambert

            }
        }
        if (phong_active) {
            gourad_active = true;
            phong_active = false;
        }
        else if (gourad_active) {
            gourad_active = false;
            phong_active = true;
        }
        aActive = false;
    }
    if(sActive){
        if (!basic_active) {
            for (var i = 0; i < meshes.length; i++) {
                meshes[i].material = materials[i][0];
            }
            basic_active = true;
        }
        else {
            if (phong_active) {
                for (var i = 0; i < meshes.length; i++) {
                    meshes[i].material = materials[i][2];  //Switch to Phong
                }
            }
            if (gourad_active) {
                for (var i = 0; i < meshes.length; i++) {
                    meshes[i].material = materials[i][1];  //Switch to Lambert
                }
            }
            basic_active = false;
        }
        sActive = false;
    }
    if(spaceActive){
        if(pause == false){
            pause = true;
            menuMesh.visible = true;
        }
        else{
            pause = false;
            menuMesh.visible = false;
        }
        spaceActive = false;
    }


}

function reset(){
    firstShapeMesh.rotation.set(0,0,0);
    secondShapeGroup.rotation.set(0,0,0);
    thirdShapeGroup.rotation.set(0,0,0);
    spotlight1.visible = true;
    spotlight2.visible = true;
    spotlight3.visible = true;
    directionalLight = true;
    menuMesh.visible = false;
    pause = false;
    //switch all to phong
    if (!basic_active) {
        for (var i = 0; i < meshes.length; i++) {
            meshes[i].material = materials[i][2];
        }
        phong_active = true;
    }
    camera = camera1
}

function update(){

    if(pause == true){
        return;
    }
    if(camera == camera1){
        menuMesh.scale.set(1,1,1);
        menuMesh.position.set(30/1.5,40/1.5,40/1.5);
        menuMesh.lookAt(new THREE.Vector3(30,40,40));
        
    }
    if(camera == camera2){
        menuMesh.scale.set(3,3,3);
        menuMesh.position.set(0,0,95);
        menuMesh.lookAt(new THREE.Vector3(0,0,100));
    }

}

function animate() {
    'use strict';
    

    renderer.setAnimationLoop( function(){
        if(pause)
            delta = 0
        else
            delta = velocity*clock.getDelta();
        render();
        animationAux(delta);
        //render and request animation
        update();
    })    
}

