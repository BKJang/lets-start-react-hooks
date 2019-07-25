import React, { useContext, useCallback, useRef } from 'react';
import useInputs from './useInputs';
import { UserDispatch } from './App';

const CreateUser = () => {
  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const [form, handleChangeElement, reset] = useInputs({
    userName: '',
    email: '',
  });
  const { userName, email } = form;

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
    reset();
  }, [userName, email, dispatch, reset])

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

export default React.memo(CreateUser);