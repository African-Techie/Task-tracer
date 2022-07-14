import React from 'react'

function Button ({on_click,color,text}) {
  return (
    <button style={{backgroundColor:color}} className='btn' onClick={on_click}>{text}</button>
  )
}

export default  Button