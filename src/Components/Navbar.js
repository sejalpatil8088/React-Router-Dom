import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='nav-items bg-[#EEEEEE]'>
            <ul 
            className='flex h-16 justify-around items-center shadow-lg'>
                <Link to="/Home">
                    <li 
                    className='btn glass hover:bg-[gray] bg-[black]'
                    >Home</li>
                </Link>
                <Link to="/AboutUs">
                    <li 
                    className='btn glass hover:bg-[gray] bg-[black]'
                    >About Us</li>
                </Link>
                <Link to="/ContactUs">
                    <li 
                    className='btn glass hover:bg-[gray] bg-[black]'
                    >Contact Us</li>
                </Link>
            </ul>
        </div>
    </>
)}

export default Navbar