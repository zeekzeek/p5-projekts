let soo = ['apple', 'orange', 'pear'];
var num = 0;
var x;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  x++;
  console.log(soo[num], x);
  if (x = 10) {
    num + 1;
  }
}
