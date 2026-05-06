import React from 'react'
import { useState } from "react";

const Example = () => {
      const [date, setDate] = useState("");
  return (
    <div>
      <h2>Hello</h2>
       <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="border p-2 rounded"
    />
    <h2 className='text-red-400 text-2xl'>{date}</h2>
    </div>
  )
}

export default Example
