import React from 'react'
import application1_1 from '../../public/assets/application1.1.png'
import application1_2 from '../../public/assets/application1.1.png'

import Image from 'next/image'

function Casestudies() {
  return (
<div className='w-full flex justify-center items-center bg-[#ffff] py-10'>
  <div className="w-full max-w-7xl px-4">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {/* Header Section */}
      <div className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
  <p className='text-black not-italic text-start font-bold text-3xl'>
    Case Studies
  </p>
  <span className='text-gray-700 text-lg not-italic font-medium'>
    Our Curated Baskets make your work easy and affordable, combining top talent and the right.
  </span>
</div>
      
      {/* Application 01 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">APPLICATION 01</h5>
  <p className="text-sm text-gray-700 mb-4">Our Curated Baskets make your work easy and affordable, combining top talent and the right.</p>
  <p className="text-sm text-gray-700 mb-4">Our Curated Baskets make your work easy and affordable, combining top talent and the right.</p>
  <button className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-3xl text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
    View
  </button>
</div>

{/* Image Grid for Application 01 */}
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center h-full'>
    <Image src={application1_1} className='object-cover h-full w-full' />
  </div>
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center h-full'>
    <Image src={application1_2} className='object-cover h-full w-full' />
  </div>
</div>

      {/* Application 02 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">APPLICATION 02</h5>
        <p className="text-sm text-gray-700 mb-4">Our Curated Baskets make your work easy and affordable, combining top talent and the right.</p>
        <p className="text-sm text-gray-700 mb-4">Our Curated Baskets make your work easy and affordable, combining top talent and the right.</p>
        <button className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-3xl text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          View
        </button>
      </div>
      
      {/* Image Grid for Application 02 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center h-full'>
    <Image src={application1_1} className='object-cover h-full w-full' />
  </div>
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center h-full'>
    <Image src={application1_2} className='object-cover h-full w-full' />
  </div>
</div>
      
      {/* Application 03 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">APPLICATION 03</h5>
        <p className="text-sm text-gray-700 mb-4">Our Curated Baskets make your work easy and affordable, combining top talent and the right.</p>
        <p className="text-sm text-gray-700 mb-4">Our Curated Baskets make your work easy and affordable, combining top talent and the right.</p>
        <button className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-3xl text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          View
        </button>
      </div>
      
      {/* Image Grid for Application 03 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center h-full'>
    <Image src={application1_1} className='object-cover h-full w-full' />
  </div>
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center h-full'>
    <Image src={application1_2} className='object-cover h-full w-full' />
  </div>
</div>
    </div>
  </div>
</div>




    
  

  )
}

export default Casestudies