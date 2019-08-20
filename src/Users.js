import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

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

const Users = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING'});
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }

  useEffect(() => {
    fetchUsers();

  }, []);

  const { loading, data: users, error } = state;
  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다.</div>
  if (!users) return <div>데이터가 없습니다.</div>

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;