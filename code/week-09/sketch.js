let particleSystem;
let myImage;

function preload() {
  myImage = loadImage("./Chuck.png");
}

function setup() {
  pixelDensity(1);
  createCanvas(500, 500);
  noStroke();
  myImage.loadPixels();
  
  particleSystem = new ParticleSystem(myImage);
}

function draw() {
  background(0);
  particleSystem.update();

  if (mouseIsPressed) {
    let mousePos = createVector(mouseX, mouseY);
    particleSystem.addParticles(mousePos, 4);
  }
}
