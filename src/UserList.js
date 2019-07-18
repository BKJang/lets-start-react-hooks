import React from 'react';
import User from './User';

function UserList({ users, handleRemoveElement, handleToggleElement }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          handleRemoveElement={handleRemoveElement}
          handleToggleElement={handleToggleElement}
        />
      ))}
    </div>
  );
}

export default React.memo(
  UserList, 
  (prevProps, nextProps) => prevProps.users === nextProps.users
);