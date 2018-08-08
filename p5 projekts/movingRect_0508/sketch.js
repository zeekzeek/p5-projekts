var rectangle = {
	x: 0,
	y: 30,
	size: 50,
}

var speed = 3;
//var should already be hardcoded in global

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	shapeRect();
}

function shapeRect() {
	for (var y = 0; y < windowWidth; y = y + 40) {
		rect(rectangle.x, rectangle.y + y, rectangle.size, rectangle.size);
	}

	if (rectangle.x > windowWidth) {
		speed = - 3;
	} else if (rectangle.x < 0) {
		speed = 3;
	}

	rectangle.x = rectangle.x + speed;

	console.log(rectangle.x, speed);
}
