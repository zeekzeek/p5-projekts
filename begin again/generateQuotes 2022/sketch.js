let words01;
let count = 0;
let wordSize = 40;
let textTotal = []; //create array

function preload() {
  words01 = loadStrings('words01.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textTotal[0] = {
    x: 100,
    y: windowHeight/3,
    display: function() {
      textSize(wordSize);
      text(words01[count], this.x, this.y);
      fill(255);
    },
    refresh: function() {
      this.switchInterval = round(random(2, 200));
      if (frameCount % this.switchInterval == 0) {
        count = count + 1;
      }
      if (count == words01.length) {
        count = 0;
      }
    }
  }
}

function draw() {
  background(200, 150, 14);
  texts.display();
  texts.refresh();
}

//making an object
