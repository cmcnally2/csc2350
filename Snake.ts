import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below

class Snake {
  public currentPosition: Point;
  public currentDirection: number;
  constructor(newSnake: string, newPosition: Point) {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
  }
  move(squares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(this.currentPosition.x + squares, this.currentPosition.y);
    } else if (this.currentDirection === 0) {
      this.currentPosition = new Point(this.currentPosition.x, this.currentPosition.y + squares);
    }
    else if (this.currentDirection === -1) {
      this.currentPosition = new Point(this.currentPosition.x - squares, this.currentPosition.y);    
    }
    else if (this.currentDirection === -2) {
      this.currentPosition = new Point(this.currentPosition.x, this.currentPosition.y - squares);    
    }
  }
  /**
   * @deprecated use turnLeft and turnRight instead
   
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = this.currentDirection - 2;
    } else {
      this.currentDirection = this.currentDirection + 2;
    }
    */
  }
  // right = 1, up = 0, left = -1, down = -2
  turnLeft() {
    if (this.currentDirrection === 1) {
      this.currentDirection = 0; // assign to 0 if the current direction is 1
    }
    else if (this.currentDirrection === 0) {
      this.currentDirection = -1; // assign to -1 if the current direction is 0
    }
    else if (this.currentDirrection === -1) {
      this.currentDirection = -2; // assign to -2 if the current direction is -1  
    }
    else {this.currentDirection = 1;}
  }
    

  turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection === -2;
    }
    else if (this.currentDirection === -2) {
      this.currentDirection === -1;
    }
    else if (this.currentDirection === -1) {
      this.currentDirection === 0;      
    }
    else {this.currentDirection === 1;}
}
  public get position() {
    return this.currentPosition;
  }

export default Snake;
