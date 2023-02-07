import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = (data) => {

  }

  return (
    <form
    className='max-w-xl m-auto py-10 mt-10 px-12'
    onSubmit={handleSubmit(onSubmit)}
    >
        <label className="text-gray-600 font-medium block mt-4">Email Address</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="emailAddress"
        placeholder='johndoe@example.com'
        autoFocus
        {...register('emailAddress', {
            required: "Please enter an email",
            pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
            },
        })}
        aria-invalid={errors.emailAddress ? "true" : "false"}
        />
        {errors.emailAddress && <p role="alert" className='text-red-400'> {errors.emailAddress?.message} </p>}

        <label className="text-gray-600 font-medium block mt-4">Password</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="password"
        type="password"
        placeholder='Enter password'
        autoFocus
        {...register('password', {
            required: "Please enter a password"
        })}
        aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && <p role="alert" className='text-red-400'> {errors.password?.message} </p>}

        <button type='submit' className='w-full bg-finsho-purple hover:bg-finsho-purple-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Login</button>
    </form>
  )
}

export default LoginForm