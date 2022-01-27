var words = ['l', 'i', 's', 'p'];
let wordsContain = [];
var count = 0;
var wordSize = 72;

function setup() {
  createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 8; i ++) {
      wordsContain[i] = (new Texter());
    }
}

function draw() {
  background (200, 160, 125);
    wordsContain[i].counter();
    wordsContain[i].show();
  console.log(count);
}

function mousePressed() {
  setup();
}

class Texter {
  constructor() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
  }

  counter() {
    this.switchInterval = round(random(2,200))
  if (frameCount % this.switchInterval == 0) {
      count = count + 1;
    }
    if (count == words.length){
      count = 0;
    }
  }

  show() {
    textSize(wordSize);
    text(words[count], this.x, this.y);
    fill(255);
  }
}
