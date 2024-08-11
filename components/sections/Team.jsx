import React from "react";
import profile1 from "../../public/assets/Ellipse 6.png";
import profile2 from "../../public/assets/Ellipse 7.png";
import profile3 from "../../public/assets/Ellipse 8.png";
import profile4 from "../../public/assets/Ellipse 9.png";
import profile5 from "../../public/assets/Ellipse 10.png";

import Image from 'next/image'
import { Popover } from 'flowbite-react'



function Team() {
  return (
 
    <div  className='bg-white flex flex-col md:flex-row justify-around items-center p-4'>
      <div className="flex -space-x-2 rtl:space-x-reverse overflow-x-auto md:w-2/3">
      <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-36 text-center p-3">
          <p id="profile-popover" className="text-center font-semibold leading-none text-gray-900 dark:text-white">
            <a>Simran Makhija </a>
          </p>
          <p className="mb-4 text-center text-sm">
          CMO
          </p>
        </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile1} alt="Profile 1"/>
    </Popover>
    <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-36 p-3">
          <p id="profile-popover" className="text-center font-semibold leading-none text-gray-900 dark:text-white">
            <a>Sahil Jaiswal  </a>
          </p>
          <p className="mb-4 text-center text-sm">
          Founder & CEO
          </p>
        </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile2} alt="Profile 1"/>
    </Popover>
    <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-36 p-3">
        <p id="profile-popover" className="text-center font-semibold leading-none text-gray-900 dark:text-white">
          <a>Mayur Hiwale </a>
        </p>
        <p className="mb-4 text-center text-sm">
        Senior Developer 
        </p>
      </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile3} alt="Profile 1"/>
    </Popover>
    <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-36 p-3">
          <p id="profile-popover" className="text-center font-semibold leading-none text-gray-900 dark:text-white">
            <a>Nitesh Vishwakarma </a>
          </p>
          <p className="mb-4  text-center text-sm">
          Developer 
          </p>
        </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile5} alt="Profile 1"/>
    </Popover>
 
    
    
      </div>
      <div className="w-full md:w-1/3 flex py-4 flex-col justify-center items-center text-center">
        <p className="text-black not-italic font-bold text-2xl md:text-3xl">
          Meet The Team
        </p>
        <span className="text-gray-700 not-italic font-medium text-base md:text-l">
          Baskets make your work easy and affordable, combining top talent and
          the right.
        </span>
      </div>


  </div>

    
    
     


 

  )
}

export default Team;
