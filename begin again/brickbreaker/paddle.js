function Paddle() {
  this.w = 160;
  this.h = 20;
  //height and width

  this.isMovingLeft = false;
  this.isMovingRight = false;
  //create direction as properties

  this.pos = createVector(width/2, height - 40);
    //creates vector
    //width and height of canvas

    this.display = function() {
      rect(this.pos.x, this.pos.y, this.w, this.h);
      //pass xy pos of paddle
    }

    this.move = function(step){
      this.pos.x += step;
    }

    this.update = function(){
      if (this.isMovingRight){
        this.move(20);
    } else if (this.isMovingLeft) {
      this.move(-20);
    }
    //update x.pos
}

    this.checkEdges = function() {
      if (this.pos.x < 0) {
        this.pos.x = 0;
      } else if (this.pos.x > width - this.w) {
        this.pos.x = width - this.w;
      }
    }
}
