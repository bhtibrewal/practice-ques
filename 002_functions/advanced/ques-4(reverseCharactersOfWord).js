import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const reverseCharactersOfWord = () => {
    setOutput(
      input
        .split(" ")
        .map((word) => {
          return word.split("").reverse().join("");
        })
        .join(" ")
    );
  };
  return (
    <div className="App">
      <p>
        Given a sentence, your function should reverse the order of characters
        in each word, keeping same sequence of words. Example: Input:
        reverseCharactersOfWord('we are neoGrammers') ––– Output: ew era
        sremmarGoen
      </p>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={reverseCharactersOfWord}>reverse</button>
      <p>{output}</p>
    </div>
  );
}