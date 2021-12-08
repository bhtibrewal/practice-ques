import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [output, setOutput] = useState("");

  const encodeString = () => {
    setOutput(
      input
        .split("")
        .map((e) => {
          let value = e.charCodeAt(0);
          if (value >= 97 && value <= 122) {
            value += Number(count);
            if (value > 122) value -= 26;
          } else if (value >= 65 && value <= 90) {
            value += Number(count);
            if (value > 90) value -= 26;
          }
          return String.fromCharCode(value);
        })
        .join("")
    );
   
  };
  return (
    <div className="App">
      <p>
        Write a function which generates a secret code from a given string, by
        shifting characters of alphabet by N places. Example: Input:
        encodeString("neogcamp", 2) ––> Output: pgqiecor Explanation: 2
        represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so
        on.
      </p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <input type="number" onChange={(e) => setCount(e.target.value)} />
      <button onClick={encodeString}>encode</button>
      <p>{output}</p>
    </div>
  );
}
