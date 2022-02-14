//songPlay is used as an array to load songs, using for loop refer to line 35
let songPlay = [];
let cols;
let rows;
let hr;
let mn;
let sc;
let textPosX = 50;
let textPosY = 150;
let button;
//

var songs = ['01_klined.ogg',
  '02_andys.ogg',
  '03_ghost.ogg',
  '04_flicker.ogg',
  '05_rest.ogg',
  '06_killer.ogg',
  '07_shaffoal.ogg',
  '08_press.ogg',
  '09_she.ogg'
];

var songCount = songs.length; // number of songs in the music dir
var currentSong; // current song number
var songTitle = -1;

function preload() {
  imgOpen = loadImage('vertigolgotha.jpg');
  imgClosed = loadImage('cityclosed.jpg')
  //initiated now in preload (previously from setup, to ensure all tracks are uploaded now), all songs loaded from vertogg/ folder
  for (let i = 0; i < songCount; i++) {
    songPlay[i] = loadSound('vertogg/' + songs[i], loaded);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentSong = 0;
  playButton = createButton('Play');
  playButton.mousePressed(playSongOnLoad);
  playButton.style('color', '#000000');
  playButton.style('font-size', '10px');
  playButton.size(100, 25);

  nextButton = createButton('Next');
  nextButton.mousePressed(toggleNext);
  nextButton.style('color', '#000000');
  nextButton.style('font-size', '10px');
  nextButton.size(100, 25);

  stopButton = createButton('Stop');
  stopButton.mousePressed(stopSong);
  stopButton.style('color', '#000000');
  stopButton.style('font-size', '10px');
  stopButton.size(100, 25);

  previousButton = createButton('Previous');
  previousButton.mousePressed(togglePrevious);
  previousButton.style('color', '#000000');
  previousButton.style('font-size', '10px');
  previousButton.size(100, 25);
}

function loaded() {

}

function mousePressed() {
  getAudioContext().resume();
}

function draw() {
  if (hr >= 8 && hr <= 24) {
    vertActive();
  } else {
    vertClosed();
  }
  vertClock();

  //managed to disable the previous button. by putting in attribute disabled syntax. i still need to add removeAttribute in the enabled condition.
  if (currentSong >= 1) {
    firstSong();
    previousButton.removeAttribute('disabled')
  } else {
    previousButton.attribute('disabled', '');
  }

  //lastSong limit here
  nextButton.position(textPosX + 100, textPosY + 35);
  if (currentSong < 8) {
    lastSong();
    nextButton.removeAttribute('disabled')
  } else {
    nextButton.attribute('disabled', '');
  }
  //console.log(currentSong);
}

function vertActive() {
  cols = width / imgOpen.width;
  rows = height / imgOpen.height;
  if (imgOpen.width % width > 0) {
    cols++;
  }
  if (imgOpen.height % height > 0) {
    rows++;
  }
  background('#2a2c34');
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      image(imgOpen, x * imgOpen.width, y * imgOpen.height);
    }
  }
  //i had to declare this because it was playing the next song by default. why?
  songTitle = currentSong - 1;
  push();
  textSize(20);
  textFont('Helvetica');
  noStroke();
  text(songs[currentSong], textPosX, textPosY + 25);
  stroke(255);
  pop();
  playButton.position(textPosX, textPosY + 35);
  stopButton.position(textPosX, textPosY + 60);
}

function vertClosed() {
  background(200, 125, 12);
  fill(255);
  push();
  textSize(20);
  textFont('Helvetica');
  noStroke();
  text("nothing can be found here.", textPosX, textPosY + 25);
  stroke(255);
  pop();
  //image(imgClosed, width/2, height/3);
}

//this is where I begin to limit the functionality of the previous and next buttons

function firstSong() {
    previousButton.position(textPosX + 100, textPosY + 60);
}

function lastSong() {
  nextButton.position(textPosX + 100, textPosY + 35);
}

// putting in the clock stuff here
function vertClock() {
  hr = hour();
  mn = minute();
  sc = second();
  push();
  textSize(20);
  fill(255);
  noStroke();
  text('current time:' + ' ' + nf(hr, 2) + ':' + nf(mn, 2) + ':' + nf(sc, 2), textPosX, textPosY);
  pop();
  if (hr >= 0 && hr < 12) {
    push();
    noStroke();
    textSize(20);
    fill(255);
    text('a.m.', textPosX + 197, textPosY - 1)
    pop();
  } else {
    push();
    noStroke();
    textSize(20);
    fill(255);
    text('p.m.', textPosX + 197, textPosY - 1)
    pop();
  }
}

function toggleNext() {
  if (currentSong < songCount) {
    currentSong = currentSong + 1;
    songPlay[currentSong - 1].stop();
    songPlay[currentSong].play();
    playButton.html("Pause");
  }
  if (currentSong > songCount) {

  }
}

function togglePrevious() {
  if (currentSong < songCount) {
    currentSong = currentSong - 1;
    songPlay[currentSong + 1].stop();
    songPlay[currentSong].play();
    playButton.html("Pause");
  }
}


function playSongOnLoad() {
  if (!songPlay[currentSong].isPlaying()) {
    playButton.html("Pause");
    songPlay[currentSong].play();
  } else if (songPlay[currentSong].isPlaying()) {
    songPlay[currentSong].pause();
    playButton.html("Play");
  }
  // if (songPlay[currentSong].onended(endedSong) || currentSong < songs.length) {
  //   toggleNext();
  // }
}

// function endedSong() {
//   if (currentSong < songs.length) {
//     playSongOnLoad();
//   }
// }

function stopSong() {
  songPlay[currentSong].stop();
  playButton.html("Play");
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
