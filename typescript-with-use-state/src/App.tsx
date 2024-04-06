import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // Types
  type CountState = number
  type CountUpdaterFunction = React.Dispatch<React.SetStateAction<CountState>>

  // Function
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // State
  const [count, setCount]: [CountState, CountUpdaterFunction]  = useState(0)

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
