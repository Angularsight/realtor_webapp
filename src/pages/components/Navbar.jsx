import React from 'react';
import { useLocation,useNavigate } from 'react-router';
// Use locatin is used to get the path name
// Use Navigate is used to go to different paths unpon a button click

export default function Navbar() {

  // This is used to get the name of the path 
  const location = useLocation();

  // This is used to navigate between different paths
  const navigate = useNavigate();

  function pathRoute(route){
    if(route===location.pathname){
      return true;
    }
  }

  return (
    <div className=' sticky top-0 z-50 w-screen h-[60px] px-5 bg-white shadow-md py-3'>
      
      <header className='flex items-center justify-between max-w-6xl mx-auto'>
        <div className='flex items-center space-x-2'>
          
          <img className=' cursor-pointer h-8 w-8 md:h-10 md:w-10 rounded-full'
            src="https://thumbs.dreamstime.com/b/red-house-icon-3d-28503207.jpg" 
            alt="" 
            onClick={()=> navigate('/')}
            />

            <h1 className=' text-xl text-red-600 font-semibold '>realtor<span className=' text-black font-normal'>.com</span></h1>
        </div>

        <div>
          <ul className='flex space-x-5 font-normal'>
            <li onClick={()=> navigate('/')} className={pathRoute("/")===true? 'text-black font-medium border-b-2 border-red-500 cursor-pointer' 
              : 'text-gray-400 font-medium cursor-pointer'}>Home</li>
            <li onClick={()=> navigate('/offers')} className={pathRoute("/offers")===true? 'text-black font-medium border-b-2 border-red-500 cursor-pointer' 
              : 'text-gray-400 font-medium cursor-pointer'}>Offers</li>
            <li onClick={()=> navigate('sign-in')} className={pathRoute("/sign-in")===true? 'text-black font-medium border-b-2 border-red-500 cursor-pointer' 
              : 'text-gray-400 font-medium cursor-pointer' }>Sign In</li>
          </ul>
        </div>

      </header>
    </div>
  )
}
