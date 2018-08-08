var song;
var slider;
var sliderRate;
var sliderVolume;
var button;

function setup() {
	createCanvas(400,400);
	song = loadSound("abang.mp3");
	button = createButton("play");
	button.mousePressed(togglePlaying);
	sliderVolume = createSlider(0, 0.75, 0.75, 0.01);
	sliderRate = createSlider(-1, 1, 0.75, 0.01);
}

function togglePlaying() {
	if (!song.isPlaying()) {
		song.loop();
		button.html("stop");
	} else {
		song.stop();
		button.html("play");
	}
}

function draw() {
	background(200);
	song.rate(sliderRate.value());
	song.setVolume(sliderVolume.value());
}
