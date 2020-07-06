import React, { useState, } from "react";
import DishForm from './dishForm'

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  return ( 
    <div>
      <button onClick={() => {setToggle(!isToggled)}}>Toggle</button>
      {isToggled && <DishForm />}
    </div>
  )
}

export default Toggle
