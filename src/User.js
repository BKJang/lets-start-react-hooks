import React from 'react';

function User({ user, handleRemoveElement, handleToggleElement }) {
  const { id, userName, email, active } = user;
  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={() => handleToggleElement(id)}>
        {userName}
      </b>
      <span>({email})</span>
      <button onClick={() => handleRemoveElement(id)}>삭제</button>
    </div>
  );
}

export default User;