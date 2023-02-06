import React from 'react'
import { useForm } from 'react-hook-form'

const RegistrationForm = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = () => {

  }

  return (
      <form className='max-w-xl m-auto py-10 mt-10 px-12'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-gray-600 font-medium block mt-4">Shop Name</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="shopName"
          placeholder='Shop Name'
          autoFocus
          {...register('shopName',{
            required: "Please enter a shop name"
          })}
          aria-invalid={errors.shopName ? "true" : "false"}
        />
        {errors.shopName && <p role="alert" className='text-red-400'> {errors.shopName?.message} </p>}
        

        <label className="text-gray-600 font-medium block mt-4">Shop Address</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="shopLocation"
          placeholder='42 O Connell St, Dublin 1, Co.Dublin'
          autoFocus
          {...register('shopLocation', {
            required: true
          })}
          aria-invalid={errors.shopLocation ? "true" : "false"}
        />

        <label className="text-gray-600 font-medium block mt-4">Email Address</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="emailAddress"
          placeholder='johndoe@example.com'
          autoFocus
          {...register('emailAddress', {
            required: true
          })}
          aria-invalid={errors.emailAddress ? "true" : "false"}
        />

        <label className="text-gray-600 font-medium block mt-4">Password</label>
        <input 
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          id="password"
          type="password"
          placeholder='Enter password'
          autoFocus
          {...register('password', {
            required: true
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />

        <button type='submit' className='w-full bg-finsho-purple hover:bg-finsho-purple-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Submit</button>
      </form>
  )
}

export default RegistrationForm