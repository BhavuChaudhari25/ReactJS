import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <h2 className='text-xl font-bold'>Bhavesh</h2>
        <div className='flex gap-10'>
            <a href='/' className='hover:text-gray-300'>Home</a>
            <a href='/about' className='hover:text-gray-300'>About</a>
            <a href='/contact' className='hover:text-gray-300'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar
