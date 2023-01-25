import React from 'react';
import {Link} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='text-lg flex justify-between align-center p-10 bg-[#000300] font-semibold text-[#00df9a] h-36'>
      <header>
        <h1 className='text-4xl'>Marble AI</h1>
      </header>
      { user?.displayName ? (
        <button onClick={handleSignOut} className='border-2 h-fit px-4 py-2 rounded-lg text-[#000300] bg-[#ffffff] hover:font-bold'>Logout</button>
      ) : (
        <Link to='/signin' className='border-2 h-fit px-4 py-2 rounded-lg text-[#000300] bg-[#ffffff] hover:font-bold'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar
