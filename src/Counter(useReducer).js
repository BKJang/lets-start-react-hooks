import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const handleIncrease = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }
  const handleDecrease = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default Counter;