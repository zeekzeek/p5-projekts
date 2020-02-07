let e;
let button;
let isMoving = false;
let isMovingB = false;
let firstFloorLvl = 500;
let secondFloorLvl = 100;
let buttonB;

function draw() {
  background(0);
  e.display();
  e.boundary();
  button.mouseClicked(toggleIsMoving);
  buttonB.mouseClicked(toggleIsMovingB);

  if (isMoving) {
    e.moveDown();
  }
  if (isMovingB){
    e.moveUp();
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  e = new Elevator();
  button = createButton('first floor');
  button.position (100, firstFloorLvl);
  buttonB = createButton('second floor')
  buttonB.position (100, secondFloorLvl);
}

function toggleIsMoving() {
  isMoving = !isMoving;
}

function toggleIsMovingB() {
  isMovingB = !isMovingB;
}
