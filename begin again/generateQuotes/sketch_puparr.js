var words = ['l','i', 's', 'p'];
var words2 = ['c', 'u', 's', 'p'];
var words3 = ['p', 'u', 'p', 'a'];
var wordsContain = [];
var count = 0;
var count2 = 0;
var count3 = 0;
var wordSize = 72;
var words01;

function preload() {
  //var words01 = loadStrings('words01.txt');
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  for(let i = 0; i < 4; i++) {
    wordsContain.push(new Texter());
  }
}

function draw() {
  background(200, 150, 14);
  for (let i = 0; i < wordsContain.length; i++) {
    wordsContain[i].counter();
    wordsContain[i].show();
  }
  //textTest();
  //refresh();
}


function refresh() {
/*  this.switchInterval = round(random(2,200))
if (frameCount % this.switchInterval == 0) {
  count = count + 1;
}*/
this.switchInterval2 = round(random(2,200))
if (frameCount % this.switchInterval2 == 0) {
count2 = count2 + 1;
}
this.switchInterval3 = round(random(2,200))
if (frameCount % this.switchInterval3 == 0) {
count3 = count3 + 1;
}
  if (count == words.length){
    count = 0;
  }
  if (count2 == words2.length){
    count2 = 0;
  }
  if (count3 == words3.length){
    count3 = 0;
  }
}

class Texter {
  constructor() {
    this.x = 100;
    this.y = windowHeight/3;
  }

  counter() {
    this.switchInterval = round(random(2,200))
  if (frameCount % this.switchInterval == 0) {
      count = count + 1;
    }
  }

  show() {
    textSize(wordSize);
    text(words[count], 100, windowHeight/3);
    fill(255);
  }
}

//add for loop in setup
