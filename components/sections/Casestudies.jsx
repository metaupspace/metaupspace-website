'use client'

import React, { useEffect, useState } from 'react'
import application1_1 from '../../public/assets/application1.1.png'
import application1_2 from '../../public/assets/application1.1.png'
import case1_1 from '../../public/assets/case1.png'
import case1_2 from '../../public/assets/case1.1.png'
import case2_1 from '../../public/assets/case2.1.png'
import case2_2 from '../../public/assets/case2.2.png'

import Image from 'next/image'

const projects = [
  {
    name: "Technical Sapien's Chatbot Solution",
    category: "Community Engagement & Support",
    description: "Technical Sapien sought a chatbot solution to enhance community engagement and streamline access to resources. MetaUpSpace developed an AI-powered chatbot, integrated into Technical Sapien's platform, aimed at providing personalized assistance and improving user interaction.",
    features: "AI Integration, Instant Access",
    growth: "125k+" ,
    user: '85k+ user  Engagement',

    images: [case1_1, case1_2] // Update with actual image paths
  },
  {
    name: "BlockType's Web3 Learning Platform",
    category: "Education & Web3 Technology",
    description: "BlockType aimed to create a learning platform focused on web3 technology, empowering individuals to gain the necessary skills for the decentralized web. MetaUpSpace helped design and launch this platform, featuring diverse courses and an interactive learning environment.",
    features: "Comprehensive Course Catalog, Interactive Learning",
    growth:  "TBD" ,
    user: 'userEnrollment: TBA', // Replace 'TBA' with actual data if available
    images: [case2_1, case2_2] // Update with actual image paths
  }
];



function Casestudies() {



  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };


  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);
   



  return (
<div className='w-full flex justify-center items-center bg-[#ffff] py-10'>
  <div className="w-full max-w-7xl px-4">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {/* Header Section */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between items-start">
    <p className='text-black not-italic text-start font-bold text-3xl'>
      Case Studies
    </p>
  </div>
  <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <span className='text-gray-700 text-lg not-italic font-medium'>
      Our Curated Baskets make your work easy and affordable, combining top talent and the right.
    </span>
  </div>

      
      {/* Application 01 */}
      <div className="bg-white  ">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Technical Sapien&apos;s Chatbot Solution</h5>
  <p className="text-sm text-gray-700 mb-4">Technical Sapien sought a chatbot solution to enhance community engagement and streamline access to resources. MetaUpSpace developed an AIpowered chatbot, integrated into Technical Sapien&apos;s platform, aimed at providing personalized assistance and improving user interaction.
  </p>
  <button onClick={()=>openModal(projects[0])} className="inline-flex w-28  items-center justify-center px-3 py-2 text-sm font-medium rounded-3xl text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
    View
  </button>
</div>

{/* Image Grid for Application 01 */}
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center '>
    <Image src={case1_1} className='object-cover h-full w-full' />
  </div>
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center '>
    <Image src={case1_2} className='object-cover h-full w-full' />
  </div>
</div>
      
      {/* Application 03 */}
      <div className="bg-white">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">BlockType&apos;s Web3 Learning Platform</h5>
        <p className="text-sm text-gray-700 mb-4">BlockType aimed to create a learning platform focused on web3 technology, empowering individuals to gain the necessary skills for the decentralized web. MetaUpSpace helped design and launch this platform, featuring diverse courses and an interactive learning environment.
        </p>
        <button 
          onClick={()=>openModal(projects[1])}
          className="inline-flex w-28 items-center justify-center px-3 py-2 text-sm font-medium rounded-3xl text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View
        </button>
      </div>

      {/* Image Grid for Application 03 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center '>
    <Image src={case2_1} className='object-fit ' />
  </div>
  <div className='bg-[#f3f3f3] h-56 rounded-lg overflow-hidden flex items-center justify-center '>
    <Image src={case2_2} className='object-fit ' />
  </div>
</div>
    </div>
  </div>
  {isModalOpen && selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto">
    <div className="relative bg-white rounded-lg w-full max-w-4xl">

      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#4A90E2"/>
            <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h2 className="text-xl font-bold">{selectedProject.name}</h2>
        </div>
        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/2 pr-4">
          <Image src={selectedProject.images[0]} alt="AR Visualization" className="object-cover w-full h-56  rounded-lg" />
          <div className="mt-4">
            <p className="font-bold">Category: <span className="font-normal ">{selectedProject.category}</span></p>
            <p className="font-bold flex ">Features: <span className="font-normal ">{selectedProject.features}</span></p>
            </div>
        </div>
        <div className="md:w-1/2 pl-4 mt-4 md:mt-0">
          <Image src={selectedProject.images[1]} alt="Website Preview" className="object-cover w-full h-56 rounded-lg" />
          <div className="mt-4">
            <p className="font-bold mt-2">Total Users: <span className="font-normal text-green-600">{selectedProject.user}</span></p>
            <p className="font-bold">Growth Rate: <span className="font-normal text-green-600">{selectedProject.growth}</span></p>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="text-sm text-gray-600">
        {selectedProject.description} 
        </p>
      </div>
    </div>
  </div>
)}
</div>




    
  

  )
}

export default Casestudies