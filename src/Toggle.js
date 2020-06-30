import React, { useState, } from "react";


const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  return ( 
    <div>
      <button onClick={() => {setToggle(!isToggled)}}>Toggle</button>
      {isToggled && <h2>hello</h2>}
    </div>
  )
}

export default Toggle
