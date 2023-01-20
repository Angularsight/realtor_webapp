import React from 'react';
import {FcGoogle} from 'react-icons/fc';

export default function OAuth() {
  return (
    <button className='flex items-center justify-center max-w-md mx-auto my-5 rounded-lg 
    border border-red-500 px-4 py-2 bg-white shadow-lg hover:bg-red-500 hover:text-white'>
      Continue With Google
      <FcGoogle className=' text-xl mx-4 hover:bg-white'/>

    </button>
  )
}
