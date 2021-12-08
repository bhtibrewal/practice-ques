import { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState([]);

  const sortArray = (arr) => {
    setOutput(arr.sort((a, b) => a - b));
  };
  return (
    <div className="App">
      <p>
        Given an array of numbers, your function should return an array in the
        ascending order. Example: Input: sortArray([100,83,32,9,45,61]) ––>
        Output: [9,32,45,61,83,100]
      </p>

      <button onClick={() => sortArray([100, 83, 32, 9, 45, 61])}>
        Sentence Case
      </button>

      <p>
        {output.map((item) => {
          return <>{(item += " ")}</>;
        })}
      </p>
    </div>
  );
}
