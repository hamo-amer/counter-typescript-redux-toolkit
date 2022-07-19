import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { decrement, increment } from "./features/counterSlice";
import Todos from "./Todos";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Redux Toolkit</h1>
      <div className='counter'>
        <button className='btn-plus' onClick={() => dispatch(increment(5))}>
          +
        </button>
        <p>{count}</p>
        <button className='btn-minus' onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <br />
      <br />
      <br />
      <Todos />
    </div>
  );
}

export default App;
