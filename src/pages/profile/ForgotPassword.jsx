import React from 'react'
import { useState } from 'react';

export default function ForgotPassword() {
  const [formData,setFromData] = useState({
    email: "",
  })

  const {email} = formData;

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
        <h1 className=' text-lg font-semibold text-left '>Forgot Password</h1>
        
        <div>
          <h1 className='relative text-gray-500 font-medium'>Email Address</h1>
          <form >
            <input 
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Enter Email Address' 
              type="email" 
              
              className=' bg-gray-100 border border-gray-500 rounded-md sm:w-[400px] w-[350px] p-2'/>
          </form>
        </div>
        


        <button type='submit' className='md:max-w-md mx-auto my-5  border border-red-500 px-6 py-2 rounded-lg uppercase font-semibold hover:bg-red-400 hover:text-white'>
          Send Reset Email
        </button>


      </div>

    </section>
  )
}
