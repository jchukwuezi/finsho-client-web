import React from 'react'
import logo from '../assets/finsho-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const accountLoggedIn = `Tom's Grocery`  
  return (
    <nav className="bg-finsho-purple">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <div>
                        <div className='flex items-center py-5 px-2 text-finsho-white'>
                            <span className='font-bold'>Finsho</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <span className='py-5 px-3 text-finsho-white'>Logged in As {accountLoggedIn} </span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to={"/dashboard"} className='py-5 px-3 text-finsho-white hover:underline'> Dashboard </Link>
                        <Link to={"/upload"} className='py-2 px-3 bg-finsho-white text-finsho-purple rounded transition duration 300'> Add Products </Link>
                    </div>

                </div>
            </div>
        
        </div>
    </nav>
  )
}

export default Navbar