var nums = [100, 25, 46, 72, 56, 34];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	noFill();
	stroke(255);
		for (var x = 0; x < nums.length; x = x + 1) {
			/*expression more than x = x + 1, will result in shapes being spread
			beyond the canvas*/

			ellipse(x*100+100,100,nums[x],nums[x]);
			console.log(x);
	}
}
