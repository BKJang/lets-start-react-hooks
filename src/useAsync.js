import { useReducer, useEffect, useCallback } from 'react';

// LOADING, SUCCESS, ERROR
function reducer(state, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        loading: true,
        error: null,
        data: null,
      }
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      }
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
}

const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  })

  const fetchData = useCallback(async() => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data: data });
    } catch(error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line
  }, deps)

  return [state, fetchData];
}

export default useAsync;