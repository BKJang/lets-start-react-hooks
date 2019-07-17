import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handleClear = () => {
    setText('');
  }

  return (
    <div>
      <input onChange={handleInput} value={text}/>
      <button onClick={handleClear}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;