import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import WorldModel from "./WorldModel";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const worldModel = new WorldModel(yellowsnake);
    const redSnake = new Snake("red", (2, 3));
    const blueSnake = new Snake("blue", (0, 4));
    
    redSnake.move(10);
    redSnake.turnLeft();
    blueSnake.turnRight();
    redSnake.move(2);
    blueSnake.move(3);
    blueSnake.turnLeft();
    blueSnake.move(15);
    blueSnake.move(2);
    redSnake.turnLeft();
    redSnake.move(3);
    display("the red snake is at position", redSnake.position);
    display("the blue snake is at position", blueSnake.position);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
