import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import avatar from "../images/image-avatar.png"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <>
        <nav className='flex md:invisible sm:invisible lg:visible p-8'>
            <h1 className='text-3xl font-bold'>sneakers</h1>
            <ul className='flex justify-around ul mt-2'>
                <li>collections</li>
                <li>men</li>
                <li>women</li>
                <li>about</li>
                <li>contact</li>    
            </ul>
            <div className='flex cart grow justify-end pt-2'>
                <FaShoppingCart className="mr-8 mt-2"/>
                <img src={avatar} alt="" className="h-8" />
            </div>
        </nav>
        <nav className='flex md:invisible sm:visible lg:invisible 3xl:invisible absolute top-2'>
            <BiMenu className="mr-2 mt-2 text-3xl font-bold"/>
            <h1 className='text-3xl font-bold mr-8'>sneakers</h1>
            <div className='flex cart grow justify-end pt-2'>
                <FaShoppingCart className="mr-4 mt-2"/>
                <img src={avatar} alt="" className="h-8" />
            </div>
        </nav>
    </>
  )
}

export default Navbar