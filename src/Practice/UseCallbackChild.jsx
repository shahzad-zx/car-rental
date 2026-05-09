import React from 'react'

const UseCallbackChild = ({example}) => {
  return (
    <div>
      <h1>Child Rendering</h1>
      <button onClick={() => example("Shahzad")}>Send Name</button> 
    </div>
  )
}

export default UseCallbackChild
