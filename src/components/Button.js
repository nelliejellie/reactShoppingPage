import React from 'react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Button = () => {
  const [productCount, setProductCount] = useState(0);
  
  const increaseCount = () =>{
    setProductCount(p => p+1)
  }
  const decreaseCount = () =>{
    setProductCount(product => product = product < 1 ? 0 : product-1)
  }
  return (
    <>
        <section className='flex justify-between sm:flex-col sm:h-24 sm:items-center'>
            <div className='flex bg-slate-200 w-32 items-center justify-around text-lg rounded-md sm:w-72 sm:py-2'>
                <span className='text-orange-600 hover:cursor-pointer' onClick={decreaseCount}>-</span>
                <span>{productCount}</span>
                <span className='text-orange-600 hover:cursor-pointer' onClick={increaseCount}>+</span>
            </div>
            <div className='flex bg-orange-600 items-center justify-center w-3/5 text-white py-2 rounded-md sm:w-72'>
                <span className=''><FaShoppingCart/></span>
                <span className='ml-2'>Add to cart</span>
            </div>
        </section>
    </>
  )
}

export default Button