import React, { useState } from 'react';
import  Toggle from './Toggle'
// function based components can use hooks
// class components are different
const App = () => {

  // value, setval is a function
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  );
};

export default App;
