import React, { useState, useEffect, useRef } from 'react';
import useAbortableFetech  from 'use-abortable-fetch';
import  Toggle from './Toggle';
import  { useTitleInput } from './hooks/useTitleInput';

const App = () => {

  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const {data, loading } = useAbortableFetech('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
  
  if (!data) return null;

  return (
    <div className="main-wrapper" ref= {ref}>
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
      {data.map(dish => (
        <article  className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className='ingredients'>
            {dish.ingredients.map(ingredient => (
              <span>
                {ingredient}
              </span>
            ))}
          </div>
        </article> 
      ))}
    </div>
  );
};

export default App;


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
