import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const toSentenceCase = () => {
    if (input === "") alert();
    else {
      setOutput(
        input
          .split(" ")
          .map((word, i) => {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })
          .join(" ")
      );
    }
  };
  const tocamelCase = () => {
    if (input === "") alert();
    else {
      setOutput(
        input
          .split(" ")
          .map((word, i) => {
            if (i === 0) return word.toLowerCase();
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })
          .join(" ")
      );
    }
  };
  return (
    <div className="App">
      <p>
        Given a sentence, return a sentence with first letter of all words as
        capital. Example: Input: toSentenceCase('we are neoGrammers') ––>
        Output: We Are NeoGrammers
      </p>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={toSentenceCase}>Sentence Case</button>
      <button onClick={tocamelCase}>camel Case</button>
      <p>{output}</p>
    </div>
  );
}
