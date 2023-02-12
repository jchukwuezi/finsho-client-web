import React from 'react'
import Navbar from '../Navbar'

const AddProducts = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen bg-finsho-white">
            <h1 className='text-center text-2xl pt-5'> Add Products</h1>
            <div className="flex justify-center mx-auto">
                <div className='p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 items-center'>
                    <div className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5>Add Products Manually</h5>
                        <button className='w-full bg-finsho-purple hover:bg-finsho-purple-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Add Products</button>
                    </div>

                    <div className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                        <h5>Add Products From CSV (Coming Soon)</h5>
                        <button disabled className='w-full bg-finsho-purple-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Add Products</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProducts