import React, { useEffect } from 'react';

function User({ user, handleRemoveElement, handleToggleElement }) {
  const { id, userName, email, active } = user;
  useEffect(() => {
    console.log('컴포넌트 마운트 : 값이 바뀌거나 초기 값 설정시 동작');
    console.log(user);
    // props => state 세팅
    // REST API
    // 외부 라이브러리(D3, Video)
    // setInterval, setTimeout
    return () => {
      // clearInterval, clearTimeout
      // 라이브러리 인스턴스 제거
      console.log('컴포넌트 언마운트 : 값이 바뀌기 직전');
      console.log(user);
    }
  }, [user]);
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

export default React.memo(User);