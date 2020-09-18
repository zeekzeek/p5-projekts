var song;
let cols;
let rows;
let hr;
let mn;
let sc;
let textPosX = 50;
let textPosY = 150;
let button;
let playSwitch = false;

var songs = ['01_klined.ogg',
            '02_andys.ogg',
            '03_ghost.ogg',
            '04_flicker.ogg',
            '05_rest.ogg',
            '06_killer.ogg',
            '07_shaffoal.ogg',
            '08_press.ogg',
            '09_she.ogg'];

var songCount = songs.length; // number of songs in the music dir
var currentSong = 0;          // current song number

function preload() {
  imgOpen = loadImage('vertigolgotha.jpg');
  imgClosed = loadImage('cityclosed.jpg')
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  song = loadSound('vertogg/' + songs[currentSong], loaded);
  song.setVolume(0.1); //VOLUME!
}

function loaded() {
  song.play();
}

function mousePressed() {
  getAudioContext().resume();
}

function draw() {
  if(hr >= 3 && hr <= 8) {
  vertActive();
} else {
  vertClosed();
}
vertClock();
}

function vertActive() {
  cols = width/imgOpen.width;
  rows = height/imgOpen.height;
  if(imgOpen.width % width > 0){
    cols++;
  }
  if(imgOpen.height % height > 0){
    rows++;
  }
  background('#2a2c34');
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      image(imgOpen, x * imgOpen.width, y * imgOpen.height);
    }
  }
  text(songs[currentSong], textPosX, textPosY+25)
  playNext();
  if (playSwitch) {
    currentSong = currentSong + 1;
  }
  console.log(songs[currentSong], song.currentTime(), currentSong, playSwitch);
}

function mousePressed() {

}

function mouseReleased() {

}

function vertClosed() {
  background(200,125,12);
  fill(255);
  textSize(20);
  textFont('Helvetica');
  text("sorry, we're closed", textPosX, textPosY + 20);
  stroke(255);
  //image(imgClosed, width/2, height/3);
}

function vertClock() {
  hr = hour();
  mn = minute();
  sc = second();
  push();
  textSize(20);
  fill(255);
  noStroke();
  text ('current time:' + ' ' + nf(hr,2) + ':' + nf(mn,2) + ':' + nf(sc,2), textPosX, textPosY);
  pop();
  if (hr >= 0 && hr < 12) {
    text ('a.m.', textPosX + 197, textPosY-1)
  } else {
    text ('p.m.', textPosX + 197, textPosY-1)
  }
}

function playNext() {
  if (song.currentTime() === song.duration()) {
    togglePlaySwitch();
  }
  if (currentSong > 8) {
    currentSong = 0;
  }
}

function togglePlaySwitch() {
  playSwitch = !playSwitch;
}

/*
resources:
background tile resource: https://forum.processing.org/two/discussion/22996/repeat-an-image-as-a-background

things to check out:
check this link for music player:
https://gist.github.com/JamRud/60c4da7b011644c4469ec8db4ac99770

** workspace
    elements to consider:
      buttons //
        - play
        - stop
        - reverse
        - slow speed

        // push();
        // textSize(14);
        // textAlign(LEFT);
        // text("Staggering along;\nWe were cast out\nOnto this road by\nThe hand of our actions.\nNever will we come this\nWay again.\nNever will we hold the\nTime of our lives in\nOur eyes.\nBaptised into pain,\nBaptised into our worlds\nOf pain, sorrow and Regret.\nOur wings were stripped\nAnd our haloes melted\nDown.\nWe can't fill ourselves\nWith pitchers so holy\nThey burn us.\nWe don't deserve to live,\nBut neither have we \nEarnt Death.\nWe are vertigo;\nUnreal and losing all our senses.\n--Lion.of.Revelation", textPosX + 300, textPosY + 25);
        // pop();
*/
