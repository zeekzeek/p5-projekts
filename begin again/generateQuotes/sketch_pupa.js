var words = ['s'];
var words2 = ['c'];
var words3 = ['p']
var count = 0;
var count2 = 0;
var count3 = 0;
var wordSize = 72;
var words01;

function preload() {
  var words01 = loadStrings('words01.txt');
}

function setup(){
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(200, 150, 14);
  textTest();
  refresh();
}


function textTest() {
  textSize(wordSize);
  text(words[count], 100, windowHeight/3);
  text(words2[count2], 100, windowHeight/3 + wordSize);
  text(words3[count3], 100, windowHeight/3 + wordSize + wordSize);
  fill(255);
}

function refresh() {
  this.switchInterval = round(random(2,200))
if (frameCount % this.switchInterval == 0) {
  count = count + 1;
}
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
