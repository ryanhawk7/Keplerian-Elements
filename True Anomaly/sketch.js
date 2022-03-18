let earthAngle = 0
let earthTexture
let slider;
let a;
let b;
let ra;
let rp = 300;
var canvas;
var h3;
let trueAnomaly;

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
  camera(0,-200,500,0,0,0,0,1,0); 

  push()
  texture(earthTexture);
  rotateY(earthAngle)
  earthAngle += .2
  sphere(100)
  pop()

 
  defineOrbit();
  drawSC();
  drawOrbit();
  
}

function defineOrbit() {
  trueAnomaly = slider.value();
}


function drawOrbit() {
  rotateX(90)
  fill(33, 196, 158)
  torus(300,3,200,20);
  
}

function drawSC() {
  push();
  fill('white')
  rotateX(90)
  translate(300*sin(trueAnomaly),300*cos(trueAnomaly),1)
  sphere(20)
  pop();
}