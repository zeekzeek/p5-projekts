function Brick(){
  this.r = random(20, 80);
  this.pos = createVector(random(100, width - 100), random(100, height - 400));
  this.total = 6;

  this.display = function() {
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    for(var i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      var x = this.r * cos(angle);
      var y = this.r * sin(angle);
      vertex(x, y);
      //for loop generates 6 vertices
    }
    endShape(CLOSE);
    //polygon will close on itself
    pop();
  }
}
