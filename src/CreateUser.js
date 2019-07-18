import React from 'react';

const CreateUser = ({ userName, email, handleChangeElement, handleCreateElement }) => {
  return (
    <div>
      <input
        name='userName'
        placeholder='사용자명'
        onChange={handleChangeElement}
        value={userName}
      />
      <input
        name='email'
        placeholder='이메일'
        onChange={handleChangeElement}
        value={email}
      />
      <button onClick={handleCreateElement}>등록</button>
    </div>
  )
}

export default CreateUser;