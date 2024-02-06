import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const num = 1;
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  // function Counter(){
  //   return
  // }
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="box">
      <div className="one">
        <button onClick={() => setStep(step - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div className="two">
        <button onClick={() => setCount(count - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <h3>
        {count}{" "}
        {count === 0
          ? "Today is"
          : count > 0
          ? "days from to todya is"
          : "day ago was"}{" "}
        {date.toDateString()}
      </h3>
    </div>
  );
}
