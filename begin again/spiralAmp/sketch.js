var song;
var button;
var amp;

function setup() {
  createCanvas(100, 100);
  background(0);
  song = loadSound('01_klined.ogg', loaded);
  amp = new p5.Amplitude;
}

function draw() {

}

function loaded() {
  button = createButton ('play');
  button.mousePressed(togglePlaying);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.1);
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}

/*
had to refer to button, toggleplaying and isplaying

isPlaying(): https://www.youtube.com/watch?v=YcezEwOXun4
forgot volume
added mousePressed
song wasnt playing, felt crushed
found out it was stupid syntax mistake
play -> play()

what new Amplitude? sigh bjj now
*/
