import React, { useState } from 'react';
import {UserAuth} from '../context/AuthContext'
import { storage } from 'firebase'

const Account = () => {
  const { logOut, user } = UserAuth();
  const [fileUpload, setFileUpload] = useState(null)

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='text-center mt-20 text-3xl'>
      <p>Welcome {user?.displayName}</p>
      <input type="file" onChange={(event) => setFileUpload(event.target.files[0])}/>
      <button onClick={handleSignOut} className='text-lg'>Logout</button>
    </div>
  )
}

export default Account
