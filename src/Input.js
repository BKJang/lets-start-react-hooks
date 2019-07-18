import React, { useState, useRef } from 'react';

function InputSample() {
  const [input, setInput] = useState({
    name: '',
    nickName: '',
  });

  const nameInput = useRef();
  const { name, nickName } = input;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value
    })
  }

  const handleClear = () => {
    setInput({
      name: '',
      nickName: ''
    })
    nameInput.current.focus();
  }

  return (
    <div>
      <input name='name' placeholder='이름' onChange={handleInput} value={name} ref={nameInput}/>
      <input name='nickName' placeholder='닉네임' onChange={handleInput} value={nickName}/>
      <button onClick={handleClear}>초기화</button>
      <div>
        <b>값: </b>
        {name} / {nickName}
      </div>
    </div>
  );
}

export default InputSample;