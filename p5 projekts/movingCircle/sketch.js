var circle = {
	x : 0;
	y : 100;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	ellipse(circle.x, circle.y, 100, 100);
	fill(180,100,180);
	x = x + 1;
	console.log(x);
	border();
}

function border() {
	if (x > windowWidth) {
		x = 0;
	}
}
