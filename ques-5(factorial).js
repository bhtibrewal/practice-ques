import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  let n1 = 0,
    n2 = 1,
    n3 = 0;

  function findSeries(num, arr) {
    if (num === 1) arr[0] = 0;
    if (num === 2) {
      arr[0] = 0;
      arr[1] = 1;
    }
    if (num - 2 > 0) {
      arr[0] = 0;
      arr[1] = 1;
      n3 = n1 + n2;
      n1 = n2;
      n2 = n3;
      arr[input - num + 2] = n3;
      findSeries(num - 1, arr);
    }
    return arr;
  }

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setOutput(findSeries(Number(input), Array(input)));
        }}
      >
        fibonacci
      </button>
      <div>
        {output.map((num) => {
          return <span> {num} </span>;
        })}
      </div>
    </div>
  );
}
