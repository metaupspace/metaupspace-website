import React from 'react'
import Logomarquee from '../Logomarquee'

function Techstack() {
  return (
    <div className='bg-white w-full flex flex-col lg:flex-row justify-center items-center py-10 px-4'>
    <div className='w-full lg:w-4/6 flex flex-col justify-start items-start mb-8 lg:mb-0'>
      <p className='text-black font-bold text-2xl md:text-3xl lg:text-4xl'>
        Design, Develop, Maintain, Scale?<br/> Your Full-Stack Development Partner
      </p>
      <span className='text-gray-700 font-medium text-sm md:text-base lg:text-lg'>
        Our Curated Baskets make your work easy and affordable, combining top talent and the right tools to speed up your projects.
      </span>
    </div>
    <div className='w-full lg:w-2/6 flex justify-center overflow-hidden'>
  <Logomarquee />
</div>
  </div>
  )
}

export default Techstack