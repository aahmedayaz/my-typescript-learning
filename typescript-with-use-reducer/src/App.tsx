import React, { useReducer } from 'react';
import './App.css';
import CounterReducer from './reducers/counterReducer';
import { CounterStateType, CounterActionType, ACTION } from './reducers/counterReducer';

function App() {

  // InitialState
  const InitialState = {
    count: 0
  }

  // State
  const [count, dispatch]: [CounterStateType, React.Dispatch<CounterActionType>] = useReducer(CounterReducer, InitialState)

  return (
    <div className="App">
      <span>{count.count}</span>
      <button onClick={() => dispatch({type: ACTION.increment})}>Increment</button>
      <button onClick={() => dispatch({type: ACTION.decrement})}>Decrement</button>
    </div>
  );
}

export default App;
