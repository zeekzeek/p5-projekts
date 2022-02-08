function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  //head
  noStroke();
  fill(255, 255, 0);
  ellipse(200, 200, 400, 400);
  //left eye
  fill(255);
  stroke(0); //stroke for everthing else
  ellipse(100, 100, 50, 50);
  //right eye
  ellipse(300, 100, 50, 50);
  //mouth
  arc(200, 200, 200, 200, 0, PI, CHORD);
  //**just to note about arc documentation on the argument order**
}
