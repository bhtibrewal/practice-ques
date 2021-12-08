import "./styles.css";

export default function App() {
  let i = 0;
  return (
    <div className="App">
      <p>
        Fizzbuzz - Write a program to return an array from 1 to 100. But for
        every multiple of 3, replace the number with "Fizz", for every multiple
        of 5, replace the number with "Buzz" and for every multiples of 3 & 5,
        replace with "FizzBuzz".
      </p>
      <button>print</button>
      <div>
        {Array(100)
          .fill()
          .map(() => {
            return (
              <span>
                {" "}
                {++i % 5 === 0 && i % 3 === 0
                  ? "fizzbuzz"
                  : i % 3 === 0
                  ? "fizz"
                  : i % 5 === 0
                  ? "buzz"
                  : i}{" "}
              </span>
            );
          })}
      </div>
    </div>
  );
}
