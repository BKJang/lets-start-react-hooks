import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { loading, data: user, error } = state.user;

  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러가 발생했습니다.</div>
  if (!user) return <div>데이터가 없습니다.</div>

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: {user.email}</b>
      </p>
    </div>
  );
}

export default User;