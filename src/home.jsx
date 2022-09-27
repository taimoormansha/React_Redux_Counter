import { React } from 'react'
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.countValue.count); //Get State value from Reducer 

  //increase counter
  const increase = () => {
    dispatch({
      type: "increment", //Reducer Function call
      //payload:20, //this parameter never use in Reducer
    });
  };

  //decrease counter
  const decrease = () => {
    dispatch({
      type: "decrement", //Reducer Function call
      //payload:20, //this parameter never use in Reducer
    });
  };

  //reset counter 
  const resetCounter = () => {
    dispatch({
      type: "reset", //Reducer Function call
      //payload:0, //this parameter never use in Reducer
    });
  }

  return (
    <div className="counter">
      <h1>React-Redux Counter</h1>
      <h2>using React-Redux and @reduxjs/toolkit</h2>

      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}