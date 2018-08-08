var circle = {
	x: 50,
	y: 50,
	diameter: 100
};

var col;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	col = map(mouseX, 0, windowWidth, 0, 255);
	for (var x = 0; x < windowWidth; x = x + 80) {
		for (var y = 0; y < windowHeight; y = y + 80){
			push();
			fill(col, 0, random(255));
			ellipse(circle.x + x, circle.y + y, circle.diameter, circle.diameter);
			pop();
		}
	}
}
