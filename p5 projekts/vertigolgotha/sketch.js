let cols;
let rows;
// var song;
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
  img = loadImage('vertigolgotha.jpg');
  song = loadSound('vertogg/' + songs[2]);
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  song.setVolume(1);
  song.play();
  slider = createSlider(0, 255, 100);
  slider.position(width/3, height/2);
  slider.style('width', '160px');
}

function draw() {
  background('#2a2c34');
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      image(img, x * img.width, y * img.height);
    }
  }
  bgRep();
}

function bgRep() {
  cols = width/img.width;
  rows = height/img.height;
  if(img.width % width > 0){
    cols++;
  }
  if(img.height % height > 0){
    rows++;
  }
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

*/
