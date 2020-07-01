import React, { useState, useEffect, useRef, } from 'react';
import  Toggle from './Toggle';
import  { useTitleInput } from './hooks/useTitleInput';


// Notes:
/*
useEffect a fucntion runs after every completed render
function based components can use hooks
class components are different

useState
useEffect

useRef
- reference a dom node itself 
ref={ref}
- can use thise with onclicks, and add a class 
- using a ref gives you full access of that dom element
I.e: 
- useOnScreen
- useOnClickOutside
- useOnScroll
*/


const App = () => {

  const [name, setName] = useTitleInput ('');
  const ref = useRef();

  const reverseWord = word => {
    console.log ('called')
    return word
    .split("")
    .reverse()
    .join("");
  }

  const TitleReversed = reverseWord('Level Up Dishes')

  return (
    <div className="main-wrapper" ref= {ref}>
      <h1>{TitleReversed}</h1>
      {/* <h1>Level Up Dishes</h1> */}
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
