var words = ['l','i', 's', 'p', 'u', 'p', 'a', 'c', 'u', 's', 'p'];
var wordsContain = [];
var count = 0;
var wordSize = 72;
var words01;

function preload() {
  //var words01 = loadStrings('words01.txt');
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 4; i++) {
    let x = 50 * i;
    let y = 100 * i;
    wordsContain[i] = new Texter(x, 100);
  }
}

function draw() {
  background(200, 150, 14);
  for (let i = 0; i < wordsContain.length; i++) {
    wordsContain[i].counter();
    wordsContain[i].show();
  }
  console.log(wordsContain.length);
  //textTest();
  //refresh();
}

class Texter {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  counter() {
    this.switchInterval = round(random(2,500))
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

//add for loop in setup
