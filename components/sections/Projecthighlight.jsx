'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import application1_2 from '../../public/assets/application1.1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import project1 from '../../public/assets/project1.jpg'
import project2 from '../../public/assets/picture2.png'
import project3 from '../../public/assets/picture3.png'
import project4 from '../../public/assets/project4.png'
import project5 from '../../public/assets/picture5.png'
// Import Swiper styles
import 'swiper/css';


const projects = [
  {
    name: "On-Demand Taxi and Chauffeur Booking App",
    category: "Transportation",
    description: "Developed the city's first on-demand taxi and chauffeur booking app, featuring an intuitive interface, real-time GPS tracking, and secure payment options. The project also included a robust driver management system and in-app customer support for a seamless user experience. This initiative revolutionized the local travel niche.",
    highlights: [
      { text: "Scalable", color: 'orange' },
      { text: "Compliance", color: "purple" },
      { text: "Real-time Tracking", color: "green" },
      { text: "Payment Security", color: "cyan" }
    ],
    growth: ["Customer Support", "User Engagement"],
    image: project1
  },
  {
    name: "Happy Hour Finder App",
    category: "Lifestyle",
    description: "We developed a 'Happy Hour Finder' app that categorizes nearby locations based on user preferences, such as drink specials, live entertainment, and outdoor activities. The app features a user-friendly interface, personalized search through a tagging system, and a reservation option for convenience.",
    highlights: [
      { text: "Categorized Search", color: "purple" },
      { text: "Accurate Recommendation", color: "yellow" },
      { text: "Tagging System", color: "green" }
    ],
    growth: ["Trusted Customers", "Popularity of Platform", "Daily Life Usage Increased"],
    image: project2
  },
  {
    name: "Health and Fitness Meditation App",
    category: "Health & Fitness",
    description: "We developed a health and fitness app focused on meditation, offering guided sessions, practice tools, and personalized recommendations. The app has attracted over 10,000 users, with an intuitive interface designed to enhance the meditation experience.",
    highlights: [
      { text: "Friendly UI", color: "yellow" },
      { text: "Guidance", color: "cyan" },
      { text: "Practice Tools", color: "purple" }
    ],
    growth: ["Over 10k User Engagement and Retention"],
    image: project3
  },
  {
    name: "Salon and Spa Appointment Booking SaaS",
    category: "SaaS",
    description: "We developed a SaaS solution to streamline appointment booking for salons and spas, incorporating exclusive discounts, memberships, and a user-centric interface. This platform enhances customer convenience by minimizing wait times while enabling businesses to manage appointments and client flow more efficiently.",
    highlights: [
      { text: "Exclusive Discounts", color: "green" },
      { text: "Appointment Booking", color: "cyan" },
      { text: "Membership System", color: "purple" }
    ],
    growth: ["Preferred by Users"],
    image: project4
  },
  {
    name: "Educational Tutor Booking App",
    category: "Education",
    description: "We developed a comprehensive educational app designed to support students throughout the school year, offering instant tutor bookings, subject-specific tutoring, and access to past exam papers. The app enhances student preparedness with scheduling tools and provides immediate academic support during critical times.",
    highlights: [
      { text: "Fast Tutor Booking", color: "green" },
      { text: "PYQ", color: "yellow" },
      { text: "Session Tracking", color: "purple" }
    ],
    growth: ["60k+ Downloads and Daily Adaptation"],
    image: project5
  }
];







function Projecthighlight() {
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
   
        <div className='bg-[#ffff] w-full flex flex-col  gap-10 justify-center justify-items-center'>
           <div className='w-full flex flex-col'>
            <p className='text-black not-italic text-center font-bold text-3xl'>Project Highlights</p>
            <span className='text-gray-700 text-center font-medium text-l'>Our Curated Baskets make your work easy and affordable, combining top talent and the right.</span>
           </div>
      <div className='relative w-full'>
   
      <Swiper
      spaceBetween={10}
    
      loop={true}
      speed={5000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     
     
      modules={[Autoplay]}
      className="mySwiper"
      autoHeight={true}
      slidesPerView={'auto'} // Automatically adjust number of slides per view
      breakpoints={{
        640: { slidesPerView: 1 }, // 1 slide for small screens
        768: { slidesPerView: 2 }, // 2 slides for medium screens
        1024: { slidesPerView: 3 }, // 3 slides for large screens
      }}
    >
{projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image className="rounded-t-lg w-full h-48 object-cover" src={project.image} alt={project.name} width={500} height={300} />
            </a>
            <div className="p-4 sm:p-5">
              <a href="#">
                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16 overflow-hidden">
                  {project.name}
                </h5>
              </a>
              <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400 h-28 overflow-hidden">
                {project.description}
              </p>
              <a 
                onClick={()=>openModal(project)} 
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   
     
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background z-50 "></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background z-50 "></div>
      </div>

           {isModalOpen &&selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <div className='flex justify-between'>
        <div className="relative top-0 left-0 bg-black text-white w-44 px-4 py-2 rounded-br-lg rounded-tl-lg">
        Project under NDA
      </div>
      <div className=" relative top-0 right-0">
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 m-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        </div>
        </div>
        

        <div className="flex  md:flex-col mt-6 mb-6">
          {/* Image and tags section */}
          <div className="w-full flex flex-col md:flex-row md:justify-evenly">
  <div className="md:w-2/3 bg-gray-100 h-48 w-full overflow-hidden flex items-center justify-center text-4xl font-bold mb-4 md:mb-0">
    <Image src={selectedProject.image} alt={selectedProject.name}/>
  </div>
  {/* Colored tags */}
  <div className="flex flex-col items-center gap-3 p-2">
  {selectedProject.highlights.map((tag, index) => (
  <span
    key={index}
    className={`bg-${tag.color}-200 text-${tag.color}-800 px-1 py-1 rounded text-sm`}
  >
    {tag.text}
  </span>
))}
  </div>
</div>

          {/* Description section */}

        </div>
        <div className="md:w-full mt-4 pt-4 md:mt-0">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm text-gray-600">
             {selectedProject.description}
            </p>
          </div>

        {/* Growth points section */}
        <div className="mt-6">
          <div className="flex items-center mb-2">
            {/* Custom Green Growth Logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
              <circle cx="12" cy="12" r="11" fill="#4CAF50" />
              <path d="M7 13L10 16L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 7V17M7 12L17 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-semibold">Growth </span>
          </div>
          <ul className="list-disc pl-8 text-sm">
          {selectedProject.growth.map((point, index) => (
               <li key={index}>{point}</li>
             ))}
             
          </ul>
        </div>
      </div>
    </div>
)}
        </div>
     

  )
}

export default Projecthighlight