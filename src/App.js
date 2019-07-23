import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    userName: '',
    email: '',
  },
  users: [
    {
      id: 1,
      userName: 'BKJang',
      email: 'abc@example.com',
      active: true,
    },
    {
      id: 2,
      userName: 'SHJo',
      email: 'bcd@example.com',
      active: false,
    },
    {
      id: 3,
      userName: 'JHKim',
      email: 'cdf@example.com',
      active: false,
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT': {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: [action.value]
        }
      }
    }
    case 'CREATE_USER': {
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user]
      }
    }
    case 'TOGGLE_USER': {
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.id
            ? { ...user, active: !user.active }
            : user
        })
      }
    }
    case 'REMOVE_USER': {
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.id;
        })
      }
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nextId = useRef(4);
  const { users } = state;
  const { userName, email } = state.inputs;

  const handleChangeElement = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, []);

  const handleCreateElement = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        userName,
        email,
      }
    })

    nextId.current += 1;
  }, [userName, email])

  const handleToggleElement = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);


  const handleRemoveElement = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => {
    return countActiveUsers(users);
  }, [users])

  return (
    <>
      <CreateUser 
        userName={userName} 
        email={email} 
        handleChangeElement={handleChangeElement}
        handleCreateElement={handleCreateElement}
      />
      <UserList users={users} handleToggleElement={handleToggleElement} handleRemoveElement={handleRemoveElement}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
