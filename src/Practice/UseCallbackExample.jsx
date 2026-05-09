import React, { useState } from 'react'
import UseCallbackChild from './UseCallbackChild'

const UseCallbackExample = () => {
    const [name, setName] = useState('');

    const handleChild = (fname) => {
        setName(fname)
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <h1>{name}</h1>
      <UseCallbackChild  example={handleChild}/>
    </div>
  )
}

export default UseCallbackExample
