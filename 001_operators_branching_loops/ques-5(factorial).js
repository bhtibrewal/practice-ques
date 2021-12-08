import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  function findFactorial(num) {
    if (num === 1 || num === 0) return 1;
    else return num * findFactorial(num - 1);
  }

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setOutput(findFactorial(input))}>factorial</button>
      <div>{output}</div>
    </div>
  );
}
