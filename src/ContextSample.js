import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

const Child = () => {
	const text = useContext(MyContext);
	return <div>{text}</div>
}

const Parent = ({ text }) => {
	return <Child text={text}/>
}

const GrandParent = ({ text }) => {
	return <Parent text={text} />
}

const ContextSample = () => {
	const [value, setValue] = useState(true);
	return (
		<MyContext.Provider value={value ? 'Hello Context!' : 'Bye Context!'}>
			<GrandParent />
			<button onClick={() => setValue(!value)}>Change Text</button>
		</MyContext.Provider>
	);
}

export default ContextSample;