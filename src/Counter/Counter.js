import React, { useReducer } from "react";

import countReducer, { initialState } from "./counterReducer";
import { ADD, SUBSTRACT } from "./actions";
import Increase from "./Increase";
import Decrease from "./Decrease";
import CounterContext from "./CounterContext";

const Counter = () => {
  const [counterState, dispatch] = useReducer(countReducer, initialState);

  const increase = () => dispatch({ type: ADD });
  const decrease = () => dispatch({ type: SUBSTRACT });

  return (
    <div>
      <p>Count: {counterState.count}</p>
      <CounterContext.Provider value={{ dispatch, increase, decrease }}>
        <Increase />
        <Decrease />
      </CounterContext.Provider>
    </div>
  );
};

export default Counter;
