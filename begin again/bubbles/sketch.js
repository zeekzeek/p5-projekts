var bubbles = [];
var x = 100;
var y = 200;
//fucking lost, thought i understood arrays

function setup() {
  createCanvas(windowWidth, windowHeight);
}
//for loop is easy to understand but writing it is a pain
//var bubble was written first, and also objects are NOT functions
    bubbles[0] = {
      x: 100,
      y: 200,
      display: function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 100, 100);
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }

function draw() {
  background(0);
  bubbles[0].display;
  bubbles[0].move;
  console.log(bubbles);
}
