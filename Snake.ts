import display from "./display";

// place your code on line 5 above the export statement below

class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public get x() {
    return this.xcoord;
  }
  public get y() {
    return this.ycoord;
  }
}
class Snake {
  private currentPosition: new Point();
  private currentDirection: number;
  constructor(newSnake: string) {
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
    if (this.currentDirection === 1) {
      this.currentDirection === 0;
    } else if {
      (this.currentDirection === 0) {
        this.currentDirection === -1;
      }
    }
      else if {
        (this.currentDirection === -1) {
          this.currentDirection === -2;
    }
  }
   else if {
     (this.currentDirection === -2) {
       this.currentDirection === 1;
   }   
    }
  }

  turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection === -2;
    } else if {
      (this.currentDirection === -2) {
        this.currentDirection === -1;
      }
    }
      else if {
        (this.currentDirection === -1) {
          this.currentDirection === 0;
    }  
  }
  else if {
    (this.currentDirection === 0) {
      this.currentDirection === 1;
  }
}
  public get position() {
    return this.currentPosition;
  }

export default Snake;
