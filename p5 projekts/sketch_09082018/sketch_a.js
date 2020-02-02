var counter;
counter = 0;

var circle = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 2; i++) {
		circle[i] = new Circle();
	}
}

function draw() {
	background(100,100,100,2);
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
	if (counter > 100) {
		circle.push(new Circle());
		circle.splice(0,1);
	}
	if (counter > 1000) {
		background(100,100,100,255);
		//stroke(random(0,255),random(0,150),0);
		counter = 0;
	}
}



function Circle() {
	this.x = random (0, windowWidth),
	this.y = 200,
	this.diameter = 100,
	this.border = random(0.5,1);
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
		if (this.x > windowWidth || this.y > 300) {
			this.border = - this.border;
		}
		if (this.x < 0 || this.y < 200) {
			this.border = - this.border;
		}
	}
}
