var songs = ['sadness.ogg', 'springy.wav'];
var currentSong = 0;
var songList = [song1, song2, song3];
var songCount;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < songList.length; i++) {
    songList[i] = loadSound(songs[currentSong], loaded);
  }
}

function draw() {
  console.log(songList[i]);
  background(0);
}

function loaded() {
  song1.play();
}


/*
Links Encountered:
https://forum.processing.org/two/discussion/27896/play-mp3s-in-sequence-with-onended


*/
