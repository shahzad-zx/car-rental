import React from 'react'
import { UserContext } from './UseContext'

const Mainn = () => {
  return (
    <div>
      <UserContext.provider value={{user: "SS"}}>
        {/* <App/> */}

      </UserContext.provider>
    </div>
  )
}

export default Mainn
