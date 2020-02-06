class Elevator {

  constructor(){
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = 100;
  }

  move() {
    this.y = this.y + 2;
  }

  boundary() {
    if (this.y > windowWidth){
      this.y = 0;
    } else if (this.y < 0){
          this.y = windowHeight/2;
        }
  }

  display() {
    rect(this.x,this.y,this.size,this.size);
    fill(255);
  }

}
