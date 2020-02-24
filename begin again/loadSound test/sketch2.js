var songs = ['sadness.ogg', 'springy.wav'];
var currentSong = 0;
let isDone = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound(songs[currentSong], loaded, '', loading);
}

function draw() {
  console.log(song.currentTime(), song.duration());
  if (song.currentTime() === song.duration()) {
    toggleDone();
  } else {
    isDone = false;
  }
  if (isDone) {
    playNext();
  }
}

function loaded() {
  song.play();
}

function loaded2() {
  song2.play();
}

function loading() {
  text('hello from the other side');
}

function playNext() {
  song2 = loadSound('springy.wav', loaded2);
}

function toggleDone() {
  isDone = !isDone;
}

/*
Links Encountered:
https://forum.processing.org/two/discussion/27896/play-mp3s-in-sequence-with-onended


*/
