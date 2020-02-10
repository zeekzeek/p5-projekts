let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200,125,211);
  button = createButton('click me');
  button.position (windowWidth/2,windowHeight/2);
  button.mousePressed(changeBG);
}

function draw() {
  textSize(32);
  text('hex color:', windowWidth/2, windowHeight/2 - 100);
}

function hexConvert() {
  
}

function changeBG() {
  let valR = random(255);
  let valG = random(255);
  let valB = random(255);
  background(valR, valG, valB);
}
