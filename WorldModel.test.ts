import { WorldModel } from "./WorldModel";
import { Snake } from "./Snake";
describe("WorldModel", () => {
  let model: WorldModel;
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake();
    model = new WorldModel(snake);
  });

  it("should update the Snake when update() is called", () => {
    const initialPositions = snake.getPositions();
    model.update(2);
    const updatedPositions = snake.getPositions();
    expect(updatedPositions).not.toEqual(initialPositions); // Assert that positions have changed
  });
});
