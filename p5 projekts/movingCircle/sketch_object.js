var circle = {
	x : 0,
	y : 10,
	diameter : 30
};

var circle_b = {
	x : 0,
	y : 20,
	diameter : 30
}

var col_01 = {
	r : 180,
	g : 100,
	b : 180
}

var col_02 = {
	r : 180,
	g : 100,
	b : 180
}

var speed = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	smooth(255);
	background(0);
	console.log(circle.x);
}

function draw() {
	//change random properties here
	circle.x = random (0, windowWidth);
	circle.y = random (0, windowHeight);
	circle_b.x = circle_b.x + speed;
	circle.x = circle.x + speed;
	circle_b.y = random (0, windowHeight);
	col_01.r = random (0,100);
	col_02.b = random (0,180);

	for (var x = 0; x < windowWidth; x = x + 400) {
		for (var y = 0; y < windowHeight; y = y + 200) {
		border();
		border_b();

		push();
		fill(col_01.r, col_01.g, col_01.b);
		ellipse(circle.x+x, circle.y+y, circle.diameter, circle.diameter);
		pop();

		push();
		fill (col_02.r,col_02.g,col_02.b);
		ellipse(circle_b.x+x, circle_b.y+y, circle_b.diameter, circle_b.diameter);
		pop();
		}
		ellipseMode(CENTER);
	}
}

function border() {
	if (circle.x > windowWidth) {
		circle.x = circle.x - (windowWidth);
	} else if (circle.x < 0){
		circle.x = circle.x + speed
	}
}

function border_b() {
	if (circle_b.x > windowWidth) {
		circle_b.x = circle_b.x - (windowWidth);
	} else if (circle_b.x < 0){
		circle_b.x = circle_b.x + speed
	}
}

/*function circle_01() {
	push();
	fill(col_01.r, col_01.g, col_01.b);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
	pop();
}

function circle_02() {
	push();
	fill (col_02.r,col_02.g,col_02.b);
	ellipse(circle_b.x, circle_b.y, circle_b.diameter, circle_b.diameter);
	pop();
}*/
