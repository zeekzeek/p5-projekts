let result;

function preload() {
  result = loadStrings ('textfile.txt');
}

function setup() {
  background(200);
  text(random(result), 10, 10);
}
