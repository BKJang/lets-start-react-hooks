import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [input, setInput] = useState({
    userName: '',
    email: '',
  });
  const { userName, email } = input;

  const handleChangeElement = useCallback(e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }, [input]);

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const handleCreateElement = useCallback(() => {
    const user = {
      id: nextId.current,
      userName,
      email,
    }
    setUsers(users => [
      ...users,
      user
    ])
    setInput({
      userName: '',
      email: '',
    })
    nextId.current += 1;
  }, [userName, email])

  const handleRemoveElement = useCallback(userId => {
    setUsers(users => users.filter(user => {
      return user.id !== userId;
    }))
  }, []);

  const handleToggleElement = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        userName={userName}
        email={email}
        handleChangeElement={handleChangeElement}
        handleCreateElement={handleCreateElement}
      />
      <UserList users={users} handleRemoveElement={handleRemoveElement} handleToggleElement={handleToggleElement} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
