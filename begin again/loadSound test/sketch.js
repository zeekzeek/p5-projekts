var songs = ['sadness.ogg', 'springy.wav'];
var currentSong = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound(songs[currentSong], loaded);
}

function draw() {
  background(0);
  song.onended(chgBg);
  console.log(song.onended(chgBg.playing));
}

function loaded() {
  song.play();
}

function chgBg() {
  background(255,0,0);
}

/*
Links Encountered:
https://forum.processing.org/two/discussion/27896/play-mp3s-in-sequence-with-onended
https://www.geeksforgeeks.org/p5-js-onended-function/
https://discourse.processing.org/t/mp3-jukebox-in-background/9843/7
*/
