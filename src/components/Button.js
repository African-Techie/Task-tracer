import React from 'react'

function Button ({on_click,color}) {
  return (
    <button style={{backgroundColor:color}} className='btn' onClick={on_click}>Add</button>
  )
}

export default  Button