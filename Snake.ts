import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  constructor(newSnake: string) {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
  move(squares: number) {
    if ((this.currentDirection = 1)) {
      this.currentPosition = this.currentPosition + squares;
    } else {
      this.currentPosition = this.currentPosition - squares;
    }
  }
  turn() {
    if ((this.currentDirection = 1)) {
      this.currentDirection = this.currentDirection - 2;
    } else {
      this.currentDirection = this.currentDirection + 2;
    }
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
