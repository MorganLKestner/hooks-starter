import React, { useState, useContext } from "react";
import {UserContext} from './App'

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext)
  console.log(userInfo)
  if(!userInfo) return null;
  return ( 
    <div>
      <button onClick={() => {setToggle(!isToggled)}}>Toggle</button>
      {isToggled && <h2>hello</h2>}
    </div>
  )
}

export default Toggle
