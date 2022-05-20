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
var geometryCone, geometryCube, geometryTorus, geometryPyramid, geometryCuboid, geometrySphere, geometry;

/* ---------- Material ---------- */
var materialCube, materialCone, materialTorus, materialPyramid, materialCuboid, materialSphere, material;

/* ---------- Mesh ---------- */
var cubeMesh, torusMesh, pyramidMesh, sphereMesh;
var cuboidMesh, cuboid2Mesh, tubeMesh, boxMesh, weirdMesh, ringMesh, ring2Mesh, sphere2Mesh, sphere3Mesh;

/* ---------- Boolean variables ---------- */
var qActive, wActive, aActive, sActive, zActive;
var xActive, oneActive, twoActive, threeActive, fourActive, eActive;
var rightActive, leftActive, upActive, downActive, dActive, cActive;

/* ---------- Groups ---------- */
var cube, bigGroup, mediumGroup;

/* ---------- Rotations ---------- */
var angle, t = 1.72;


/**
 * Create a cube and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createCube(x, y, z){
    'use strict';
    cube = new THREE.Object3D();
    
    geometryCube = new THREE.BoxGeometry(10, 10, 10, 5, 5, 5);

    materialCube = new THREE.MeshPhongMaterial({
        color: 0xcb2f1f,
        emissive: new THREE.Color(0xd12626),
        wireframe: true
      });

    cubeMesh = new THREE.Mesh(geometryCube, materialCube);

    cubeMesh.position.x = x;
    cubeMesh.position.y = y;
    cubeMesh.position.z = z;  

    cubeMesh.rotation.x = Math.PI/4;
}

/**
 * Create a torus and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createTorus(x, y, z){
    'use strict';

    geometryTorus = new THREE.TorusGeometry(15, 1, 10, 80);
    
    materialTorus = new THREE.MeshPhongMaterial({ 
        color: 0x3fcee9,
        emissive: new THREE.Color(0x308b9c),
        emissiveIntensity: 0.4,
        wireframe: true
    });
    torusMesh = new THREE.Mesh(geometryTorus, materialTorus);

    torusMesh.position.x = x;
    torusMesh.position.y = y;
    torusMesh.position.z = z;
    
}

/**
 * Create a pyramid and set its position to (x, y, z)
 * 
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createPyramid(x, y, z){
    'use strict';
    geometryPyramid = new THREE.ConeGeometry(15,20,10,50);

    materialPyramid = new THREE.MeshPhongMaterial({ color: 0xd51deb, wireframe: true});
    pyramidMesh = new THREE.Mesh(geometryPyramid, materialPyramid);

    pyramidMesh.position.x = x;
    pyramidMesh.position.y = y;
    pyramidMesh.position.z = z;

    pyramidMesh.rotation.z = -Math.PI/6;
}


/**
 * Create a sphere and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createSphere(x, y, z){
    'use strict';
    geometrySphere = new THREE.SphereGeometry(6, 32, 16);
    materialSphere = new THREE.MeshPhongMaterial({ 
        color: 0x58eb1d,
        emissive: new THREE.Color(0x58eb1d),
        emissiveIntensity: 0.2,
        wireframe: true
    });
    sphereMesh = new THREE.Mesh(geometrySphere, materialSphere);

    sphereMesh.position.x = x;
    sphereMesh.position.y = y;
    sphereMesh.position.z = z;

}

/**
 * Create a sphere and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createSphere2(x, y, z){
    'use strict';
    //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    geometrySphere = new THREE.SphereGeometry(4, 32, 16);
    materialSphere = new THREE.MeshPhongMaterial({ 
        color: 0x40ffb1,
        emissive: new THREE.Color(0x367c5f),
        emissiveIntensity: 0.25,
        wireframe: true
    });
    sphere2Mesh = new THREE.Mesh(geometrySphere, materialSphere);

    sphere2Mesh.position.x = x;
    sphere2Mesh.position.y = y;
    sphere2Mesh.position.z = z;

}

/**
 * Create a sphere and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createSphere3(x, y, z){
    'use strict';
    //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    geometrySphere = new THREE.SphereGeometry(2.5, 32, 16);
    materialSphere = new THREE.MeshPhongMaterial({ 
        color: 0xfc7227,
        emissive: new THREE.Color(0xfc7227),
        emissiveIntensity: 0.5,
        wireframe: true
    });
    sphere3Mesh = new THREE.Mesh(geometrySphere, materialSphere);

    sphere3Mesh.position.x = x;
    sphere3Mesh.position.y = y;
    sphere3Mesh.position.z = z;

}


/**
 * Create a cuboid and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createCuboid1(x, y, z){
    'use strict';
    //BoxGeometry(width : Float, height : Float, depth : Float, 
    //widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
    geometryCuboid = new THREE.BoxGeometry(1, 20, 1, 2, 2, 2);

    materialCuboid = new THREE.MeshPhongMaterial({ color: 0xe1ff4d, wireframe: true});

    cuboidMesh = new THREE.Mesh(geometryCuboid, materialCuboid);

    cuboidMesh.position.x = x;
    cuboidMesh.position.y = y;
    cuboidMesh.position.z = z; 

    cuboidMesh.rotation.x = Math.PI/7;
    
}

/**
 * Create a cuboid and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createCuboid2(x, y, z){
    'use strict';
    //BoxGeometry(width : Float, height : Float, depth : Float, 
    //widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
    geometryCuboid = new THREE.BoxGeometry(1, 20, 1, 2, 2, 2);

    materialCuboid = new THREE.MeshPhongMaterial({ color: 0x8ed4ff, wireframe: true});

    cuboid2Mesh = new THREE.Mesh(geometryCuboid, materialCuboid);

    cuboid2Mesh.position.x = x;
    cuboid2Mesh.position.y = y;
    cuboid2Mesh.position.z = z;

    cuboid2Mesh.rotation.x = -Math.PI/7;
}

/**
 * Setup cuboids positions
 */
function setupCuboids() {
    let geometry = new THREE.BoxGeometry(3, 10, 0.35);
    cuboids = [];
    addCuboidRing(10, geometry);
}

/**
 * Display cuboids in a ring shape
 * 
 * @param  radius 
 * @param  geometry 
 */
function addCuboidRing(radius, geometry) {
    for(let i = 1; i <= 10; i++) {
      let angle = i / 10 * Math.PI * 2;
      material = new THREE.MeshPhongMaterial({ color: 0x49ff3d*i, wireframe: true});
      let cuboid = new THREE.Mesh(geometry, material);
      cuboid.position.x = Math.cos(angle) * radius +65;
      cuboid.position.y = Math.sin(angle) * radius+ 20;
      cuboid.position.z = 10;
      cuboid.rotateY(i / 10 * Math.PI);
      cuboid.rotation.x = Math.PI / 2;
      scene.add(cuboid);
      cuboids.push(cuboid);
    }
}

/**
 * Create a torus knot and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createTube(x, y, z){
    'use strict';
    geometry = new THREE.TorusKnotGeometry( 10, 1.485, 100, 16, 2, 1 );
    material = new THREE.MeshPhongMaterial( { 
        color: 0xcda052,
        emissive: new THREE.Color(0x4b4434),
        wireframe: true 
    } );
    tubeMesh = new THREE.Mesh( geometry, material );
    tubeMesh.position.set(x, y, z);
}

/**
 * Create a box and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createBox(x, y, z){
    'use strict';

    geometry = new THREE.BoxGeometry(2, 3, 40, 3, 3, 3);
    material = new THREE.MeshPhongMaterial( { 
        color: 0xffc2c2,
        emissive: new THREE.Color(0x5d3030),
        emissiveIntensity: 0.2,
        wireframe: true 
    } );
    boxMesh = new THREE.Mesh( geometry, material );

    boxMesh.position.set(x, y, z);
    boxMesh.rotation.x = Math.PI/8;
}

/**
 * Create a torus knot and set its position to (x, y, z)
 * @param  x 
 * @param  y 
 * @param  z 
 */
function createWeird(x, y, z){
    'use strict';
    //TorusKnotGeometry(radius : Float, tube : Float, tubularSegments : Integer, radialSegments : Integer, p : Integer, q : Integer)
    geometry = new THREE.TorusKnotGeometry( 13,1,100,16);
    material = new THREE.MeshNormalMaterial( { wireframe: true } );
    weirdMesh = new THREE.Mesh( geometry, material );

    weirdMesh.position.set(x, y, z);
    weirdMesh.rotation.x = Math.PI/4;
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
    scene.background = new THREE.Color(0x9bc0d0);
    scene.add(new THREE.AxisHelper(10));
    
    //create main object
    createCube(0, 0, 0);
    createTorus(0, 0, 0);
    createSphere3(0,18.5,0);
    
    //add directional light
    var light = new THREE.DirectionalLight()
    light.castShadow = true
    light.shadow.mapSize.width = 512
    light.shadow.mapSize.height = 512
    light.shadow.camera.near = 0.5
    light.shadow.camera.far = 100
    scene.add(light)

    //create group with torus and sphere
    mediumGroup = new THREE.Group();
    mediumGroup.add(sphere3Mesh);
    mediumGroup.add(torusMesh);

    //create main group with all articulated object's in it
    bigGroup = new THREE.Group();
    bigGroup.add(cubeMesh);
    bigGroup.add(mediumGroup);
    scene.add(bigGroup);

    //create secondary object's and add them to the scene
    createPyramid(-60,3,-3.5);
    scene.add(pyramidMesh);
    createSphere(-60, 3, 20);
    scene.add(sphereMesh);
    createCuboid1(18,13,48);
    scene.add(cuboidMesh);
    createCuboid2(20,13,48);
    scene.add(cuboid2Mesh);
    setupCuboids();
    createBox(10, 10, -40);
    createTube(0, 13, -40);
    scene.add(boxMesh);
    scene.add(tubeMesh);
    createWeird(-20,-3,50);
    scene.add(weirdMesh);
    createSphere2(-47,3,14);
    scene.add(sphere2Mesh);
}

/**
 * Create all cameras
 *  Camera 1 -> orthographic that show all the scene (main)
 *  Camera 2 -> orthographic with a view from above the scene
 *  Camera 3 -> orthographic with a side view of the scene
 */ 
function createCamera() {
    'use strict';

    camera1 = new THREE.OrthographicCamera(window.innerWidth / (- 2*12),
                                           window.innerWidth / (2*12),
                                           window.innerHeight / (2*12),
                                           window.innerHeight / (- 2*12),
                                           1,
                                           1000
                                           );

    camera1.position.x = 50;
    camera1.position.y = 50;
    camera1.position.z = 50;
    camera1.lookAt(scene.position);
    
    camera2 = new THREE.OrthographicCamera(window.innerWidth / (- 2*12),
                                            window.innerWidth / (2*12),
                                            window.innerHeight / (2*12),
                                            window.innerHeight / (- 2*12),
                                            1,
                                            1000
                                            );
    
    camera2.position.x = 0;
    camera2.position.y = 70;
    camera2.position.z = 0;
    camera2.lookAt(scene.position);

    camera3 = new THREE.OrthographicCamera(window.innerWidth / (- 2*12),
                                            window.innerWidth / (2*12),
                                            window.innerHeight / (2*12),
                                            window.innerHeight / (- 2*12),
                                            1,
                                            1000
                                            );

    camera3.position.x = 0;
    camera3.position.y = 0;
    camera3.position.z = 70;
    camera3.lookAt(scene.position);

    //set main camera as camera 1
    camera = camera1;
}

/**
 * Allow window resizing
 */
function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
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
    
    case 81: //q
        qActive = true;
        break;
    
    case 87: //w
        wActive = true;
        break;
    
    case 65: //a
        aActive = true;
        break;
    
    case 83: //s
        sActive = true;
        break;
    
    case 90: //z
        zActive = true;
        break;
    
    case 88: //x
        xActive = true;        
        break;
    
    case 37: //left arrow
        leftActive = true;
        break;
    
    case 38: //up arrow
        upActive = true;
        break;
    
    case 39: //right arrow
        rightActive = true;
        break;
    
    case 40: //down arrow
        downActive = true;
        break;
    
    case 68: //d
        dActive = true;
        break;
    
    case 67: //c
        cActive = true;
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
    case 81: //q
        qActive = false;
        break;
    
    case 87: //w
        wActive = false;
        break;
    
    case 65: //a
        aActive = false;
        break;
    
    case 83: //s
        sActive = false;
        break;
    
    case 90: //z
        zActive = false;
        break;
    
    case 88: //x
        xActive = false;        
        break;
    
    case 37: //left arrow
        leftActive = false;
        break;
    
    case 38: //up arrow
        upActive = false;
        break;
    
    case 39: //right arrow
        rightActive = false;
        break;
    
    case 40: //down arrow
        downActive = false;
        break;
    
    case 68: //d
        dActive = false;
        break;
    
    case 67: //c
        cActive = false;
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
    createCamera();

    //add event listeners for keys and resizing
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    window.addEventListener("keyup",onKeyUp);
}

/**
 * Update rotations and translations
 */
function animationAux(){
    'use strict';
    if(qActive){
        sphere3Mesh.rotation.x += 0.1;
        sphere3Mesh.position.z = 3.65*Math.cos(t);
        sphere3Mesh.position.y = 3.65*Math.sin(t) + 15;
        t += 0.1;
        console.log(t);
    }

    if(wActive){
        sphere3Mesh.rotation.x -= 0.1;
        sphere3Mesh.position.z = 3.65*Math.cos(t);
        sphere3Mesh.position.y = 3.65*Math.sin(t) + 15;
        t -= 0.1;
    }

    if(aActive){
        bigGroup.rotateY(-0.3);
    }

    if(sActive){
        bigGroup.rotateY(0.3);
    }

    if(zActive){
        mediumGroup.rotateY(0.2);
        mediumGroup.rotateZ(0.2);
    }

    if(xActive){
        mediumGroup.rotateY(-0.2);
        mediumGroup.rotateZ(-0.2);
    }

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
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        }); 
        fourActive = false;
    }

    if(eActive){
        // toggle axis helper
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper){
                node.visible = !node.visible;
            }
        });
    }
    
    
    //register articulated object's translation
    if(rightActive || leftActive || downActive || upActive || dActive || cActive){
        var a = new THREE.Vector3( 0, 0, 0);
        if(rightActive){
            a.add(new THREE.Vector3(0,0,-10));
        }
    
        if(leftActive){
            a.add(new THREE.Vector3(0,0,10));
        }
    
        if(downActive){
            a.add(new THREE.Vector3(0,-10,0));
        }
    
        if(upActive){
            a.add(new THREE.Vector3(0,10,0));
        }
    
        if(cActive){
            a.add(new THREE.Vector3(10,0,0));
        }
    
        if(dActive){
            a.add(new THREE.Vector3(-10,0,0));
        }
        a.normalize();
        //perform translation
        bigGroup.translateX(a.getComponent(0));
        bigGroup.translateY(a.getComponent(1));
        bigGroup.translateZ(a.getComponent(2));
    }
}


/**
 * Animate function
 */
function animate() {
    'use strict';
    //update rotations and translations
    animationAux();
    //render and request animation
    render();
    requestAnimationFrame(animate);
}
