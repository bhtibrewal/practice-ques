import { useState } from "react";
import "./styles.css";

export default function App() {
  // const [output, setOutput] = useState("");
  const printPyramidBig = () => {
    var string = "",
      n = 5;
    for (let i = 0; i <= 2 * n - 1; i++) {
      for (let k = 0; k <= 2 * n - i; k++) {
        string += "  ";
      }
      for (let j = 0; j < 2 * i - 1; j++) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);
  };
  const printPyramid = () => {
    var string = "",
      n = 5;
    for (let i = 0; i <= n; i++) {
      for (let k = 0; k < n - i; k++) {
        string += "  ";
      }
      for (let j = 0; j < 2 * i - 1; j++) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);
  };
  const printDownTriangle = () => {
    var string = "",
      n = 5;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j >= n - i) string += "  ";
        else string += "* ";
      }
      string += "\n";
    }
    console.log(string);
  };
  const printLeftHollowTriangle = () => {
    var string = "",
      n = 5;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j === i || j === 0 || i === n - 1) string += "* ";
        else string += "  ";
      }
      string += "\n";
    }
    console.log(string);
  };
  const printLeftTriangle = () => {
    var string = "",
      n = 5;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j <= i) string += "* ";
        else string += "  ";
      }
      string += "\n";
    }
    console.log(string);
  };

  const printSquare = () => {
    var string = "",
      n = 5;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);
  };
  return (
    <div className="App">
      <p>print Pattern</p>
      <button onClick={printSquare}>print square</button>
      <button onClick={printLeftTriangle}>print left triangle</button>
      <button onClick={printLeftHollowTriangle}>
        print left hollow triangle
      </button>
      <button onClick={printDownTriangle}>print down triangle</button>
      <button onClick={printPyramid}>print pyramid</button>
      <button onClick={printPyramidBig}>print pyramid big</button>
    </div>
  );
}
