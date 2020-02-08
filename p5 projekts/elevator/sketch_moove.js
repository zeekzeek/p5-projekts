let e;
let button;
let isMoving = false;
let firstFloorLvl = 500;
let buttonB;

function draw() {
  background(0);
  e.display();
  e.boundary();
  button.mouseClicked(toggleIsMoving);

  if (isMoving) {
    e.move()
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  e = new Elevator();
  button = createButton('first floor');
  button.position (100, firstFloorLvl);
  buttonB = createButton('second floor')
  buttonB.position (100, 300);
}

function toggleIsMoving() {
  isMoving = !isMoving;
}
