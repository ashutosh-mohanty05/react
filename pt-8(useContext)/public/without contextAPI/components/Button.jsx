import React from 'react'
import Components1 from './Components1'
const Button = ({count}) => {
  return (
    <div>
        <button><span><Components1 count={count}/></span>I am a button</button>
    </div>
  )
}

export default Button