var song;
var slider;
var sliderRate;
var sliderVolume;
var button;

function setup() {
	createCanvas(400,400);
	song = loadSound("abang.mp3");
	button = createButton("Play");
	button.mousePressed(togglePlaying);
	sliderVolume = createSlider(0, 0.75, 0.75, 0.01);
	//sliderRate = createSlider(-1, 1, 0.75, 0.01);
}

function togglePlaying() {
	song.play();
	//song.rate(sliderRate.value());
	song.volume(sliderVolume.value());
}

function draw() {
	background(random(200));
}
