import React from 'react';
import { useReducer } from 'react';

// useReducer is good for complex updated state
// defines local state for individual componements
// can have additional properties 
// 
const initialState = {count: 0};

function reducer(state, action) {
  switch(action.type) {
    case 'add': 
    return {
      count: state.count + 1 
    };
    case 'minus': 
    return {
      count: state.count - 1
    };
    case 'reset': 
    return {
      count: initialState.count
    };
    default: 
    throw new Error();
  }
}


const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
    <button onClick={() => dispatch( {type: 'add'} )}>+</button>
    <button onClick={() => dispatch( {type: 'minus'} )}>-</button>
    <button onClick={() => dispatch( {type: 'reset'} )}>reset</button>
  </div>
  );

}

export default Counter