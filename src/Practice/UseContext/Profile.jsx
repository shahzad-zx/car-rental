import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const Profile = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
      <h1>hello {user}</h1>
    </div>
  )
}

export default Profile
