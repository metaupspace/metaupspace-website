import React from 'react'
import nda from '../../public/assets/NDA.png'
import Image from 'next/image'
function Nda() {
  return (
   
    <div className='bg-white w-full flex flex-col md:flex-row justify-around items-center py-10'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center px-4'>
        <p className='text-black not-italic text-center font-bold text-2xl md:text-3xl mb-4'>
          Projects Under NDA
        </p>
        <span className='text-gray-700 text-center text-sm md:text-base not-italic font-medium'>
          Our Curated Baskets make your work easy and affordable, combining top talent and the right resources. Our Curated Baskets make your work easy and affordable.
        </span>
      </div>
      <div className='w-full md:w-1/2 flex justify-center mt-4 md:mt-0'>
        <Image src={nda} className='w-full h-auto max-w-xs md:max-w-lg' alt="NDA Projects"/>
      </div>
    </div>

  )
}

export default Nda