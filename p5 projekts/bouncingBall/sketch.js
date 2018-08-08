var ball = {
	x: 50,
	y: 100,
	diameter: 10
};

var speed = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

	if (ball.x > windowWidth) {
		speed = - 5;
	} else if (ball.x < 0){
		speed = + 5;
	}

	ball.x = ball.x + speed;

	console.log(ball.x);
}
