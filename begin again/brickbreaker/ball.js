function Ball() {
  this.pos = createVector(width/2, height/2);
  this.r = 30;
  this.direction = createVector(1, 1);
  this.vel = createVector(1, 1).mult(4);
  //multiply by 8

  this.display = function() {
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);

  }

  this.update = function() {
    this.pos.x += this.vel.x * this.direction.x;
    this.pos.y += this.vel.y * this.direction.y;
  }
    //update pos based on previous pos

  this.checkEdges = function() {
    if (this.pos.y < this.r && this.direction.y < 0) {
      this.direction.y *= -1;
    }
    if (this.pos.x < this.r && this.direction.x < 0) {
      this.direction.x *= -1;
    }
    if (this.pos.x > width - this.r && this.direction.x > 0) {
      this.direction.x *= -1;
    }
  }

  this.meets = function(paddle) {
    if (this.pos.y < paddle.pos.y &&
        this.pos.y > paddle.pos.y - this.r &&
        this.pos.x > paddle.pos.x - this.r &&
        this.pos.x < paddle.pos.x + paddle.w + this.r){
          return true;
        } else {
          return false;
        }
  }

  this.hits = function(brick) {
    //dist = calculate distance between two points
    var distance = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y);
    if (distance < this.r + brick.r) {
      return true;
    } else {
      return false;
    }
  }
}
