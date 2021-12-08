import "./styles.css";

export default function App() {
  const array = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ];
  const transpose = () => {
    return array[0].map((_, colIndex) => array.map((row) => row[colIndex]));
  };
  return (
    <div className="App">
      <button onClick={transpose}>transpose</button>
    </div>
  );
}