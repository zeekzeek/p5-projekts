//for today's exercise, generate two different
//bouncing balls
//using arrays
let diameter = [20, 40];
var xspeed = 0;
var yspeed = 0;
var acceleration = 5;
var barometer = 5;
var circle_01 = {
	x: 0,
	y: 0
}
var circle_02 = {
	x: 30,
	y: 30
}

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(0);

	xspeed = xspeed + acceleration;
	yspeed = yspeed + acceleration;

	ellipse(circle_01.x + xspeed,circle_01.y + yspeed,diameter[0], diameter[0]);
	ellipse(circle_02.x + xspeed,circle_02.y + yspeed,diameter[1], diameter[1]);

	if (xspeed > windowWidth || yspeed > windowHeight) {
		acceleration = -barometer;
	}
	if (xspeed < 0 || yspeed < 0) {
		acceleration = +barometer;
	}


	console.log();

}
