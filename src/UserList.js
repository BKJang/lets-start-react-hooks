import React from 'react';
import User from './User';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default React.memo(
  UserList, 
  (prevProps, nextProps) => prevProps.users === nextProps.users
);