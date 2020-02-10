let button;
var hx;

function draw() {
  //background(0);
  let button = createButton('click me');
  button.position(windowWidth/2, windowHeight/2)
  button.mousePressed(changeBG);
  fontCol();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function changeBG(){
  let colR = random(255);
  let colG = random(255);
  let colB = random(255);
  background(colR, colG, colB);
  var hx = "#" + hex(colR,2) + hex(colG,2) + hex(colB,2);
  text('Hex Colour:' + ' ' + nf(hx), windowWidth/2 - 110, windowHeight/2 - 25)
  console.log(hx);
}

function fontCol(){
  let fontR = random(255);
  let fontB = random(255);
  let fontG = random(255);

  textSize(32);
  fill(fontR, fontG, fontB);
}
