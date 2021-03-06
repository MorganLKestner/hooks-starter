import React, { useRef } from 'react';
import {useBodyScrollLock } from './hooks/BodyScrollLock';
import { useOnClickOutside } from './hooks/useOnClickOutside';

const DishFrom = ( {setToggle }) => {
  const ref = useRef();
  
  useBodyScrollLock();
  useOnClickOutside(ref, () => setToggle(false) )
  return (
    <div className='dish-card' ref={ref}>
      <form>
        <div className="form-row">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name"/>
        </div>
      </form>
    </div>
  )
}

export default DishFrom