var ball = {
	x: 50,
	y: 100,
	diameter: 10
};
var spd = 10
var xspeed = spd;
var yspeed = spd;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

	if (ball.x > windowWidth) {
		xspeed = -spd;
	} else if (ball.x < 0){
		xspeed = +spd;
	}

	if (ball.y > windowHeight) {
		yspeed = -spd;
	} else if (ball.y < 0){
		yspeed = +spd;
	}

	ball.x = ball.x + xspeed;
	ball.y = ball.y + yspeed;


	console.log(ball.y);
}
