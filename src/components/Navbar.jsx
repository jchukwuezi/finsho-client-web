import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-finsho-purple px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className='justify-self-start'>
                <a href="" className="flex items-center">
                    Finsho for Retailers
                </a>

                <span>
                    Logged in as (Test)
                </span>
            </div>
            <div className="justify-self-end hidden w-full md:block md:w-auto">
                <ul>
                    <li> <a href=""> Add Product </a></li>
                    <li> <a href=""> Dashboard </a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar