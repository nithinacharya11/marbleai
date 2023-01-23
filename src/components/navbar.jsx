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
    <div className='text-2xl flex justify-between align-center p-10 bg-[#FF6263] font-bold text-white h-36'>
      <header>
        <h1 className='text-4xl'>Marble AI</h1>
      </header>
      { user?.displayName ? (
        <button onClick={handleSignOut} className='border-2 h-fit px-4 py-2 rounded-lg text-[#000300] bg-[#ffffff] hover:text-3xl hover:px-5 hover:py-3 ease-in-out duration-300'>Logout</button>
      ) : (
        <Link to='/signin' className='border-2 h-fit px-4 py-2 rounded-lg text-[#000300] bg-[#ffffff] hover:text-3xl hover:px-5 hover:py-3 ease-in-out duration-300'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar
