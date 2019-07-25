import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
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
    case 'CREATE_USER': {
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   inputs: initialState.inputs,
      //   users: [...state.users, action.user]
      // }
    }
    case 'TOGGLE_USER': {
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
      // return {
      //   ...state,
      //   users: state.users.map(user => {
      //     return user.id === action.id
      //       ? { ...user, active: !user.active }
      //       : user
      //   })
      // }
    }
    case 'REMOVE_USER': {
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
      // return {
      //   ...state,
      //   users: state.users.filter(user => {
      //     return user.id !== action.id;
      //   })
      // }
    }
    default: {
      return state;
    }
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => {
    return countActiveUsers(users);
  }, [users])

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
