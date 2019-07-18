import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [input, setInput] = useState({
    userName: '',
    email: '',
  });
  const { userName, email } = input;

  const handleChangeElement = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

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

  const handleCreateElement = () => {
    const user = {
      id: nextId.current,
      userName,
      email,
    }
    setUsers([
      ...users,
      user
    ])
    setInput({
      userName: '',
      email: '',
    })
    nextId.current += 1;
  }

  const handleRemoveElement = (userId) => {
    const newUsers = users.filter(user => {
      return user.id !== userId;
    })

    setUsers(newUsers);
  }

  const handleToggleElement = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        userName={userName}
        email={email}
        handleChangeElement={handleChangeElement}
        handleCreateElement={handleCreateElement}
      />
      <UserList users={users} handleRemoveElement={handleRemoveElement} handleToggleElement={handleToggleElement} />
    </>
  );
}

export default App;
