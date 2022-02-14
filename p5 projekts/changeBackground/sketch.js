let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //initiate background ONCE in setup
  background(255,128,200);
  button = createButton('click me');
  button.position (windowWidth/2,windowHeight/2);
  //changes value to changeBG() when mouse is pressed
  button.mousePressed(changeBG);
}

function draw() {

}

function changeBG() {
  let valR = random(255);
  let valG = random(255);
  let valB = random(255);
  background(valR, valG, valB);
}
