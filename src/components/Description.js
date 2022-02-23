import React from 'react'
import "../styles/description.css"
import Button from './Button'

const Description = () => {
  return (
    <div className='description '>
        <h1 className='text-orange-600 font-bold tracking-normal uppercase'>sneaker company</h1>
        <p className='capitalize text-4xl sm:text-3xl tracking-wide font-bold'>fall limited edition <br /> <span className='capitalize text-4xl sm:text-3xl relative bottom-4'>sneakers</span> </p>

        <article className='text-stone-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Minus voluptate officiis impedit eaquedistinctio corporis
            <br />  quod perspiciatis ipsa quas laudantium.
        </article>
        <div className='flex w-32 justify-between mt-8'>
            <p className='font-bold text-2xl'>&#36;125.00</p>
            <p className='text-orange-600 mt-2 text-sm'>50%</p>
        </div>
        <strike className='mt-2 text-stone-300 sm:relative sm:bottom-6 sm:left-52'>&#36; 250.00</strike>
        <Button/>
    </div>
  )
}

export default Description;