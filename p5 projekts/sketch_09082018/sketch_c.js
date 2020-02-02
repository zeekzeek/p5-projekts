var counter;
counter = 0;

var circle = [];


function draw() {
	for (var i = 0; i < circle.length; i++) {
		circle[i].display();
		circle[i].move();
		circle[i].rebound();
	}
	refr();
	console.log(counter);
}

function refr() {
	counter = counter + 1;
	if (counter > 500) {
		background(0);
		counter = 0;
		setup();
		//circle.splice(0,1);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150,150,200);
	for (var i = 0; i < random(20, 50); i++) {
		circle[i] = new Circle();
	}
}

function Circle() {
	this.x = random (200, 400),
	this.y = (sin(-300,300))*random(200, 400);
	this.diameter = random(0,10),
	this.border = random(0.5,10);
	this.display = function() {
		noFill();
		strokeWeight(1);
		rectMode(CENTER);
		rect(this.x, this.y, this.diameter, 10);
		//ellipse(10, 10, 10 * 2);
		stroke(random(200,255),random(200,255),random(225,255));
	},
	this.move = function() {
		//this.x = this.x + sin(counter)*150;
		this.y = this.y + this.border;
	},
	this.rebound = function() {
		if (this.x > windowWidth || this.y > random(windowHeight/1.2)) {
			this.border = - this.border;
		}
		if (this.x < 0 || this.y < random(windowHeight/1.8)) {
			this.border = - this.border;
		}
	}
}
