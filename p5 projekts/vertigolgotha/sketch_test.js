let song = [];
let currentSong = 0;
let songs = ['01_klined.ogg',
            '02_andys.ogg',
            '03_ghost.ogg',
            '04_flicker.ogg',
            '05_rest.ogg',
            '06_killer.ogg',
            '07_shaffoal.ogg',
            '08_press.ogg',
            '09_she.ogg'];
let songCount = songs.length;

function loadSongs() {
  for (let i = 0; i < songs.length; i++) {
    song[i] = loadSound('vertogg/' + songs[i], loaded);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  loadSongs();
}

function loaded() {
  console.log("Loaded");
}
