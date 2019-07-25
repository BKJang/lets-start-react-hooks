import React, { useContext } from 'react';
import { UserDispatch } from './App';

function User({ user }) {
  const { id, userName, email, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={() => {
          dispatch({
            type: 'TOGGLE_USER',
            id
          });
        }}>
        {userName}
      </b>
      <span>({email})</span>
      <button onClick={() => {
        dispatch({
          type: 'REMOVE_USER',
          id
        });
      }}>삭제</button>
    </div>
  );
}

export default React.memo(User);