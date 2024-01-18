import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const redSnake = new Snake("red");
    redSnake.move(10);
    redSnake.turn();
    redSnake.move(2);
    display("the red snake is at position", redSnake.position);
  }, []);
  <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <pre id="output">
      OUTPUT: <br />
    </pre>
  </div>;
}
