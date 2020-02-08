let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,12);
  button = createButton('click me');
  button.position (windowWidth/2,windowHeight/2);
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
