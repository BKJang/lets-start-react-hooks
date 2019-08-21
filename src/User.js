import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

async function getUser({ id }) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  return response.data;
}

const User = ({ id }) => {
  const { 
    data: user, 
    error, 
    isLoading 
  } = useAsync({ promiseFn: getUser, id, watch: id });

  if (isLoading) return <div>로딩중...</div>
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