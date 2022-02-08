let x = 200;
let pg;

function setup() {
  // put setup code here
  createCanvas(400, 500);
  pg = createGraphics(100,100);
  pg.background(10,100,100);
}

function mousePressed() {
  x = random(50, (width - 50));
}

function draw() {
  background(0);
  //mapping color for both mice to width and height
  let m = map(mouseX, 0, 400, 0, 255);
  let y = map(mouseY, 0, 500, 0, 255);
  noStroke();
  fill(m, y, 20);
  ellipse(x, 500 / 2, 100, 100);
  //just found out that 100 is 2 radii

//defining the pg graphics
  pg.fill(255);
  pg.rect(random(0,50),50,24,24);
  image(pg, 50,50)
  //requires image to see for createGraphics
}
/*
//making sure that the circle remains full and not cutoff by boundary. im taking the width - radius of the circle.
  if (x > width - 100) {
    x = 200;
    //discovered a jitter effect as if witnessing the condition taking place as a cop bonking with the baton.
  }
}
i think its easier if i set the condition in the mousePressed random range
*/
