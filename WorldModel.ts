import Snake from ./Snake;

class worldModel {
    private snake: Snake;
  
    constructor(snake: Snake) {
      this.snake = snake;
    }
  
    update(steps: number): void {
      this.snake.move(steps);
    }
  
    getSnake(): Snake {
      return this.snake;
    }
  }