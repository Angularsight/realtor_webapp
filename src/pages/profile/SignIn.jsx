import React from 'react'
import { useState } from 'react';
import OAuth from '../components/OAuth';
import { useNavigate } from 'react-router';


export default function SignIn() {

  const navigate = useNavigate();
  const [formData,setFromData] = useState({
    email: "",
    password: ""
  })

  const {email,password} = formData;

  /// The below function updates the form each time a change is made in either email or password fields
  function onChange(e){
    setFromData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section className=' w-screen h-screen flex flex-col lg:flex-row justify-center sm:items-center lg:justify-around'>
      <img className= ' sm:mt-20 md:h-screen/4 md:w-screen/4 lg:mb-[100px]'
        src="https://media.istockphoto.com/id/1263319152/vector/woman-holding-keys-from-house-for-sale-and-smiling.jpg?s=612x612&w=0&k=20&c=P3HPAsY-YxeqRLfLzX0l1cnqGZYtuISgfCmbG1NRfNg=" alt="" />

      <div className='flex flex-col ml-4 my-4 space-y-5 sm:items-center'>
        <h1 className=' text-lg font-semibold text-left '>Sign In</h1>
        
        <div>
          <h1 className='relative text-gray-500 font-medium'>Email Address</h1>
          <form >
            <input 
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Enter Email Address' 
              type="email" 
              
              className=' bg-gray-100 border border-gray-500 rounded-md sm:w-[400px] w-[300px] p-2'/>
          </form>
        </div>
        
        <div>
          <h1 className=' text-gray-500 font-medium'>Password</h1>
        
        <form>
        <input 
          id='password'
          value={password}
          onChange = {onChange}
          placeholder='Enter Password' 
          type="password"
          className=' bg-gray-100 border border-gray-500 rounded-md w-[300px] sm:w-[400px] p-2'/>
        </form>
        </div>

        <div className='flex sm:space-x-20 justify-between mb-5'>
          
          <h2 className=' text-sm text-black/50'>Don't have an account? 
          <span 
            onClick={()=> navigate('/sign-up')} 
            className=' text-red-500 font-medium cursor-pointer'> Register</span>
          </h2>
          
          
          <h2 
            onClick={()=>navigate('/forgot-password')} 
            className=' text-sm text-blue-500/75 mr-5 cursor-pointer'>Forgot Password?</h2>
          
        </div>

        <button type='submit' className='md:max-w-md mx-auto my-5  border border-red-500 px-6 py-2 rounded-lg uppercase font-semibold hover:bg-red-400 hover:text-white'>
          Sign In
        </button>

        <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:flex-1 after:border-t after:border-gray-300'>
          <p className='text-center text-gray-700 font-medium mx-4'>OR</p>
        </div>
        
        <OAuth />

      </div>




    
    </section>
  )
}
