import React from 'react'
import { useForm } from 'react-hook-form'

const RegistrationForm = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = () => {

  }

  return (
      <form className='max-w-xl m-auto py-10 mt-10 px-12 border'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-gray-600 font-medium">Shop Name</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="shopName"
          placeholder='Shop Name'
          autoFocus
          /*
          {...register('',{

          })}
          */
        />

        <label className="text-gray-600 font-medium">Shop Address</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="shopLocation"
          placeholder='42 O Connell St, Dublin 1, Co.Dublin'
          autoFocus
          /*
          {...register('', {

          })}
          */
        />

        <label className="text-gray-600 font-medium">Email Address</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="emailAddress"
          placeholder='johndoe@example.com'
          autoFocus
          /*
          {...register('', {

          })}
          */
        />

        <label className="text-gray-600 font-medium">Password</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="password"
          type="password"
          placeholder='Enter password'
          autoFocus
          /*
          {...register('', {

          })}
          */
        />

        <button type='submit' className='w-full bg-finsho-purple hover:bg-finsho-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3'>Submit</button>
      </form>
  )
}

export default RegistrationForm