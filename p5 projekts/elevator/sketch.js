let e;
let button;

function draw() {
  background(0);
  e.display();
  e.boundary();
  button.mousePressed(moveLift);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  e = new Elevator();
  button = createButton('first floor');
  button.position (100, 100);
}

function moveLift() {
  e.move();
}
