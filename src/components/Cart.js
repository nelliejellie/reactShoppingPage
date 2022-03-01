import React from 'react'
import "../styles/cart.css"
import { DataContext } from '../context/DataContext'
import { useState, useContext } from 'react';
import {MdDelete} from "react-icons/md"
import imageone from '../images/image1thumbnail.jpg'


const Cart = () => {
  const {data, setData} = useContext(DataContext);
  return (
    <div className='cart absolute z-10 bg-white top-28 w-64 shadow-2xl rounded-md sm:w-4/5 md:h-48 sm:left-8 sm:top-16'>
        <p className='sm:border-b-2 sm:p-4'><span className='ml-4'>Cart</span></p>
        <div className='flex justify-center mt-8'>
            {
            data == 0 ?
             <p>Your cart is empty</p> 
             :
             <div>
              <div className='flex justify-around'>
                <img src={imageone} alt="" className='w-1/6 rounded-md'/>
                <small>fall limited edition sneakers <br /> <span>data</span></small>
                <MdDelete className='mt-4'/>
              </div>
              <div className='flex mb-4 ml-6 mt-4 bg-orange-600 items-center justify-center w-4/5 text-white py-2 rounded-md sm:w-4/5 sm:ml-6 sm:mt-4'>
                  <span className='ml-2'>Checkout</span>
              </div>
             </div>
            }
        </div>
    </div>
  )
}

export default Cart