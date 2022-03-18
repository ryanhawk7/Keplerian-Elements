let earthAngle = 0
let earthTexture
let slider;
let argumentOfPerigee;

function preload() {
  earthTexture = loadImage("../Photos/earth-texture.jpg")
  // Texture from http://planetpixelemporium.com/
}

function setup() {
  let canvas = createCanvas(1000, 500, WEBGL)
  canvas.parent("sketchHolder");
  noStroke()
  angleMode(DEGREES)
  slider = createSlider(0, 360, 0, 0);
  slider.parent("sliderPos")
  slider.style('width', '120px');
  slider.style('height', '12px');
}


function draw() {

  background(16, 18, 17);
  clear();
  camera(0,-1000,1000,0,0,0,0,1,0); 

  push()
  texture(earthTexture);
  rotateY(earthAngle)
  earthAngle += .2
  sphere(100)
  pop()

 
  defineOrbit();
  drawOrbit();
  
}

function defineOrbit() {
 argumentOfPerigee = slider.value();
}


function drawOrbit() {
  rotateX(90)
  rotateY(-30)
  rotateZ(-argumentOfPerigee+90)
  translate(-500,0,0)
  scale(800/300,692.82/300,1)
  fill(33, 196, 158)
  torus(300,2,200,20);
  
}
