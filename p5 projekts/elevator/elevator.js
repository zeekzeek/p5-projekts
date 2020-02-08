class Elevator {

  constructor(){
    this.x = windowWidth/2;
    this.y = firstFloorLvl;
    this.size = 100;
  }

  moveUp(){
    this.y = this.y + 2;
  }

  moveDown(){
    this.y = this.y - 2;
  }

  boundary() {
    if (this.y > 500){
      this.y = firstFloorLvl;
      isMoving = !isMoving;
    } else if (this.y < 0){
      this.y = 0;
      isMovingB = !isMovingB;
    }
  }

  display() {
      rect(this.x,this.y,this.size,this.size);
      fill(255,125,60);
  }
}
