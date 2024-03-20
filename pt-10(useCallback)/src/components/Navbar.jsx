import React, { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
        I am  a {adjective} navbar
        <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
