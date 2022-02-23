import React from 'react'
import { useState } from 'react'
import "../styles/cart.css"

const Cart = () => {
  return (
    <div className='cart absolute z-10 bg-white top-28 w-64 shadow-2xl rounded-md sm:w-4/5 md:h-48 sm:left-8 sm:top-16'>
        <p className='sm:border-b-2 sm:p-4'><span className='ml-4'>Cart</span></p>
        <div className='flex justify-center mt-8'>
            <p>Your cart is empty</p>
        </div>
    </div>
  )
}

export default Cart