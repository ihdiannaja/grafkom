//Initial Map Matriks
//0: Finish; 1: block1; 2:block2; 3: block3
var map = [[1,1,1,1,1,1,1,1],
           [1,2,1,1,2,1,1,4],
           [4,1,4,1,1,1,1,1],
           [1,4,1,0,2,1,1,1],
           [1,1,1,3,2,1,4,1],
           [4,1,3,1,1,4,1,4],
           [1,3,1,2,1,1,2,1],
           [3,1,1,1,1,1,1,1]];

// var portal = [[2,0],[1,1],[4,2],[0,3],[3,4],[5,4],[6,4],[3,5],[2,6]];

// console.log(map[3][3]);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor ( 0xefefef );


// container = document.getElementById('world');
// container.appendChild(renderer.domElement);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x976542 } );
var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

camera.position.z = 50;

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enableZoom = true;
controls.target.set(10, 0, 10);

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 100, 100);
 
var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);
 
var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();
 
scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mapobj = new THREE.Object3D();//create an empty container
var bpos = 4.1;
var tpos = 3.8;
// var cpos = 5;

var t;
for(let i = 0; i<8; i++){
    for(let j = 0;j<8;j++){
        if(map[j][i]==1){ // blok biasa
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setTexturePath('assets/');
            mtlLoader.setPath('assets/');
            mtlLoader.load('block3.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('assets/');
                objLoader.load('block3.obj', function (object) {
                    if(i>=3 && i<=4 && j>=3 && j<=4) t=3;
                    else if(i>=2 && i<=5 && j>=2 && j<=5) t=2;
                    else if(i>=1 && i<=6 && j>=1 && j<=6) t=1;
                    else t = 0;
                    object.position.set(i*bpos, t*tpos, j*bpos);
                    mapobj.add(object);    
                });
            });
        }
        else if(map[j][i]==2){//blok portal
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setTexturePath('assets/');
            mtlLoader.setPath('assets/');
            mtlLoader.load('block2.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('assets/');
                objLoader.load('block2.obj', function (object) {
                    if(i>=3 && i<=4 && j>=3 && j<=4) t=3;
                    else if(i>=2 && i<=5 && j>=2 && j<=5) t=2;
                    else if(i>=1 && i<=6 && j>=1 && j<=6) t=1;
                    else t = 0;
                    object.position.set(i*bpos, t*tpos, j*bpos);
                    
                    if(j>=1 && j<=3) object.rotation.y = Math.PI; //hadap atas

                    mapobj.add(object);    
                });
            });
        }
        else if(map[j][i]==3){//blok miring
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setTexturePath('assets/');
            mtlLoader.setPath('assets/');
            mtlLoader.load('block4.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('assets/');
                objLoader.load('block4.obj', function (object) {
                    if(i>=3 && i<=4 && j>=3 && j<=4) t=3;
                    else if(i>=2 && i<=5 && j>=2 && j<=5) t=2;
                    else if(i>=1 && i<=6 && j>=1 && j<=6) t=1;
                    else t = 0;
                    object.position.set(i*bpos, t*tpos, j*bpos);
                    mapobj.add(object);    
                });
            });
        }
        else if(map[j][i]==4){ //blok peti
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setTexturePath('assets/');
            mtlLoader.setPath('assets/');
            mtlLoader.load('block5.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('assets/');
                objLoader.load('block5.obj', function (object) {
                    if(i>=3 && i<=4 && j>=3 && j<=4) t=3;
                    else if(i>=2 && i<=5 && j>=2 && j<=5) t=2;
                    else if(i>=1 && i<=6 && j>=1 && j<=6) t=1;
                    else t = 0;
                    object.position.set(i*bpos, t*tpos, j*bpos);
                    if(i<=3) object.rotation.y = Math.PI/2; //hadap atas
                    if(i>=4) object.rotation.y = 3*Math.PI/2; //hadap atas
                    mapobj.add(object);    
                });
            });
        }
        else if(map[j][i]==0){//blok finish
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setTexturePath('assets/');
            mtlLoader.setPath('assets/');
            mtlLoader.load('block6.mtl', function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('assets/');
                objLoader.load('block6.obj', function (object) {
                    if(i>=3 && i<=4 && j>=3 && j<=4) t=3;
                    else if(i>=2 && i<=5 && j>=2 && j<=5) t=2;
                    else if(i>=1 && i<=6 && j>=1 && j<=6) t=1;
                    else t = 0;
                    object.position.set(i*bpos, t*tpos, j*bpos);
                    mapobj.add(object);    
                });
            });
        }
    }
}

scene.add(mapobj);

var pion=[];
var activePlayer = 0;
var step;

function addPion(){
    //objek pion
    var char = new THREE.Object3D();//create an empty container
    // var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath('assets/');
    mtlLoader.setPath('assets/');
    mtlLoader.load('pion.mtl', function (materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('assets/');
        objLoader.load('pion.obj', function (object) {
            object.position.set(0*bpos, 1.08*tpos, 7 * bpos);
            char.add(object); 
        });
    });
    char.arahX=1;
    char.arahZ=0;
    char.row = 7;
    char.col = -1;
    char.lvl = 1;
    pion.push(char);
    scene.add(char);
}

function play(){
    var row, col;
    p = pion[activePlayer];
    
    while(step>0){
        row = p.row;
        col = p.col;
        if(p.arahX==1){
            if(p.col <= 7-p.lvl){
                col += step;
                if(col <= 7-p.lvl){
                    p.col = col;
                    step = 0;
                }
                else{
                    step -= 8 - p.lvl - p.col;
                    p.col = 8-p.lvl;
                    p.arahX = 0;
                    p.arahZ = -1;
                }
            }
            console.log('kanan', step, p.row, p.col, p.lvl);

        }
        else if(p.arahZ==-1){
            if(p.row >= p.lvl){
                row -= step;
                if(row >= p.lvl){
                    step = 0;
                    p.row = row;
                }
                else{
                    step -= p.row - p.lvl + 1;
                    p.row = p.lvl - 1;
                    p.arahX = -1;
                    p.arahZ = 0;
                }
            }
            console.log('atas', step, p.row, p.col, p.lvl);
        }
        else if(p.arahX==-1){
            if(p.col >= p.lvl){
                col -= step;
                if(col >= p.lvl){
                    step = 0;
                    p.col = col;
                }
                else{
                    step -= p.col - p.lvl + 1;
                    p.col = p.lvl - 1;
                    p.arahX = 0;
                    p.arahZ = 1;
                }
            }
            console.log('kiri', step, p.row, p.col, p.lvl);
        }
        else if(p.arahZ==1){
            if(p.row < 7-p.lvl){
                row += step;
                if(row < 7-p.lvl){
                    step = 0;
                    p.row = row;
                }
                else{
                    step -= 7 - p.lvl - p.row;
                    p.row = 7-p.lvl;
                    p.lvl += 1;
                    p.arahX = 1;
                    p.arahZ = 0;
                }
            }
            console.log('bawah', step, p.row, p.col, p.lvl);
        }
    }
    p.position.z = -(7-p.row) * bpos;
    p.position.x = (p.col) * bpos;
    p.position.y = (p.lvl-1 + .08) * tpos;
    activePlayer+=1;
    if(activePlayer==pion.length){
        activePlayer = 0;
    }
}

var animate = function (){
	controls.update();
	requestAnimationFrame( animate );

	renderer.render(scene, camera);
};

animate();

document.getElementById('add').onclick = function() {
    addPion();
  }

document.getElementById('play').onclick = function() {
    step = Math.random() * 6;
    step = 1 + Math.floor(step);
    console.log(step);
    play();
}
