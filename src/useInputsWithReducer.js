import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT': {
      return {
        ...state,
        [action.name]: action.value
      };
    }
    case 'RESET': {
      return {
        ...action.initialForm
      }
    }
    default: {
      return state
    }
  }
}

const useInputs = (initialForm) => {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const handleChangeElement = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    })
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: 'RESET',
      initialForm
    })
  }, [initialForm]);

  return [form, handleChangeElement, reset];
}

export default useInputs;