'use client'

import React from 'react'
import Projectsmarquee from '../Projectsmarquee'
function Projecthighlight() {
  return (
   
        <div className='bg-[#ffff] w-11/12 flex flex-col justify-center justify-items-center'>
           <div className='w-full flex flex-col'>
            <p className='text-black not-italic text-center font-bold text-3xl'>Project Highlights</p>
            <span className='text-gray-700 text-center font-medium text-l'>Our Curated Baskets make your work easy and affordable, combining top talent and the right.</span>
           </div>
      <div className='w-full'>
        

     <Projectsmarquee/>


      </div>
           <div className='flex justify-center justify-items-center py-10'>
            <button className='w-40 h-10 bg-black rounded '>See More</button>
           </div>
        </div>
     

  )
}

export default Projecthighlight