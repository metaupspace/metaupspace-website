'use client'

import React from 'react'
import Projectsmarquee, { useModal } from '../Projectsmarquee'
import Image from 'next/image';
import application1_2 from '../../public/assets/application1.1.png'

function Projecthighlight() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
   
        <div className='bg-[#ffff] w-full flex flex-col justify-center justify-items-center'>
           <div className='w-full flex flex-col'>
            <p className='text-black not-italic text-center font-bold text-3xl'>Project Highlights</p>
            <span className='text-gray-700 text-center font-medium text-l'>Our Curated Baskets make your work easy and affordable, combining top talent and the right.</span>
           </div>
      <div className='w-full'>
        

     <Projectsmarquee/>
     {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto z-50">
    <div className="relative bg-white rounded-lg w-full max-w-4xl border border-red-500">
      <div className=" top-0 left-0 bg-black text-white w-44 px-4 py-2 rounded-br-lg">
        Project under NDA
      </div>
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#4A90E2"/>
            <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h2 className="text-xl font-bold">Pharmansh</h2>
        </div>
        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/2 pr-4">
          <Image src={application1_2} alt="AR Visualization" className="w-full h-auto rounded-lg" />
          <div className="mt-4">
            <p className="font-bold">Category: <span className="font-normal">Pharmaceutical</span></p>
            <p className="font-bold">Website: <a href="https://www.pharmansh.com" className="text-blue-600 hover:underline">www.pharmansh.com</a></p>
            </div>
        </div>
        <div className="md:w-1/2 pl-4 mt-4 md:mt-0">
          <Image src={application1_2} alt="Website Preview" className="w-full h-auto rounded-lg" />
          <div className="mt-4">
            <p className="font-bold mt-2">Total Users: <span className="font-normal text-green-600">100k</span></p>
            <p className="font-bold">Growth Rate: <span className="font-normal text-green-600">+20% from last year</span></p>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="text-sm text-gray-600">
        Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production : Resultsdriven solutions Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production : Resultsdriven solutions Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production : Resultsdriven solutions. Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production : Resultsdriven solutions Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production : Resultsdriven solutions Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production : Resultsdriven solutions. 
        </p>
      </div>
    </div>
  </div>
)}


      </div>
           <div className='flex justify-center justify-items-center py-10'>
            <button className='w-40 h-10 bg-black rounded '>See More</button>
           </div>
        </div>
     

  )
}

export default Projecthighlight