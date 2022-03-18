let earthAngle = 0
let earthTexture
let slider;
let a;
let b;
let ra;
let rp = 300;


function preload() {
  earthTexture = loadImage("../Photos/earth-texture.jpg")
  // Texture from http://planetpixelemporium.com/
}

function setup() {
  let canvas = createCanvas(1000, 500, WEBGL)
  canvas.parent("sketchHolder");
  noStroke()
  angleMode(DEGREES)
  slider = createSlider(300, 1200, 0, 0);
  slider.parent("sliderPos")
  slider.style('width', '120px');
  slider.style('height', '12px');
}


function draw() {

  background(16, 18, 17);
  clear();
  camera(0,-200,500,0,0,0,0,1,0);  

  push()
  scale(1/(a/300))
  texture(earthTexture);
  rotateY(earthAngle)
  earthAngle += .2
  sphere(100)
  pop()

 
  defineOrbit();
  scale(1/(a/300))
  drawOrbit();
  
}

function defineOrbit() {
  a = slider.value();
}


function drawOrbit() {
  rotateX(90)
  scale(a/300)
  fill(33, 196, 158)
  torus(300,3/(a/300),200,20);
  
}

function display() {
 
}