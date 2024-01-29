import Snake from "./Snake";
import WorldModel from "./WorldModel";

class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(snakeWorld: WorldModel, slitherer: Snake) {
    this.snakeWorld = snakeWorld;
    this.slitherer = slitherer;
  }

  turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }

  turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  get snakePosition(): number[] {
    return this.slitherer.getPositions(); // Assuming getPositions() returns the Snake's positions
  }

  get snakeDirection(): string {
    return this.slitherer.direction;
  }

  get worldWidth(): number {
    return this.snakeWorld.width;
  }

  get worldHeight(): number {
    return this.snakeWorld.height;
  }
}
