let earthAngle = 0
let earthTexture
let slider;
let inclination;

function preload() {
  earthTexture = loadImage("../Photos/earth-texture.jpg")
  // Texture from http://planetpixelemporium.com/
}

function setup() {
  let canvas = createCanvas(1000, 500, WEBGL)
  canvas.parent("sketchHolder");
  noStroke()
  angleMode(DEGREES)
  slider = createSlider(90, 270, 180, 0);
  slider.parent("sliderPos")
  slider.style('width', '120px');
  slider.style('height', '12px');
}

function draw() {

  background(16, 18, 17);
  clear();
  camera(0,-200,500,0,0,0,0,1,0); 

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
  inclination = slider.value();
}


function drawOrbit() {
  rotateX(90)
  rotateY(inclination)
  fill(33, 196, 158)
  torus(300,3,200,20);
  
}
