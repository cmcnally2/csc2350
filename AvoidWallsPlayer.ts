import Snake from "./Snake";
import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";

abstract class Player {
  protected sc: SnakeController;

  constructor(sc: SnakeController) {
    this.sc = sc;
  }

  abstract makeTurn(): void;
}

class AvoidWallsPlayer extends Player {
  makeTurn(): void {
    const snakePosition = this.sc.snakePosition;
    const snakeDirection = this.sc.snakeDirection;
    /*hitting left wall at bottom */
    if (
      snakeDirection === -1 &&
      snakePosition.x === 0 &&
      snakePosition.y >= 0.5 * this.sc.worldHeight
    ) {
      this.sc.turnSnakeRight();
    } else if (
      /*hitting left wall at top */
      snakeDirection === -1 &&
      snakePosition.x === 0 &&
      snakePosition.y < 0.5 * this.sc.worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      /*hitting right wall at bottom */
      snakeDirection === 1 &&
      snakePosition.x === this.sc.worldWidth &&
      snakePosition.y >= 0.5 * this.sc.worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      /*hitting right wall at top */
      snakeDirection === 1 &&
      snakePosition.x === this.sc.worldWidth &&
      snakePosition.y < 0.5 * this.sc.worldHeight
    ) {
      this.sc.turnSnakeRight();
    } else if (
      /*hitting top wall at left */
      snakeDirection === 0 &&
      snakePosition.x < 0.5 * this.sc.worldWidth &&
      snakePosition.y === 0
    ) {
      this.sc.turnSnakeRight();
    } else if (
      /*hitting top wall at right */
      snakeDirection === 0 &&
      snakePosition.x >= 0.5 * this.sc.worldWidth &&
      snakePosition.y === 0
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      /*hitting bottom wall at left */
      snakeDirection === -2 &&
      snakePosition.x < 0.5 * this.sc.worldWidth &&
      snakePosition.y === 0
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      /*hitting bottom wall at right */
      snakeDirection === 0 &&
      snakePosition.x >= 0.5 * this.sc.worldWidth &&
      snakePosition.y === 0
    ) {
      this.sc.turnSnakeRight();
    }
  }
}
