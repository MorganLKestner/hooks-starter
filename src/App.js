import React, { useState, useEffect } from 'react';
import  Toggle from './Toggle';
import  { useTitleInput } from './hooks/useTitleInput';

// Notes:
/*
useEffect a fucntion runs after every completed render
function based components can use hooks
class components are different 
*/

const App = () => {

  const [name, setName] = useTitleInput ('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit  = {(e) => {
        e.preventDefault();    
      }}
      > 
        <input
          type="text"
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
