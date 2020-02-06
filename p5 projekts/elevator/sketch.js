let e;
let button;

function draw() {
  background(0);
  e.display();
  e.boundary();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  e = new Elevator();
  //print();
  button = createButton('first floor');
  button.position (100, 100);
  //button.mousePressed(e.move())
}

function mousePressed(){
  e.move()
  background(varR, varG, varB);
  console.log(e.move())
}
