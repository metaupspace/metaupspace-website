import React from 'react'
import Logomarquee from '../Logomarquee'
import fullstack from '@/public/assets/fullstack.png'
import web from '@/public/assets/web.jpg'
import cloud from '@/public/assets/cloud.png'
import frontend from '@/public/assets/frontend.png'
import mobilelogo from '@/public/assets/mobilelogo.png'
import shopify from '@/public/assets/shopify.png'
import reactjs from '@/public/assets/reactjs.png'
import wordpress from '@/public/assets/wordpress.png'
import backend from '@/public/assets/backend.png'
import bi from '@/public/assets/bi.png'
import java from '@/public/assets/java.png'
import python from '@/public/assets/python.png'
import net from '@/public/assets/net.png'
import aiml from '@/public/assets/aiml.png'
import blockchain from '@/public/assets/blockchain.png'
import aws from '@/public/assets/aws.png'
import php from '@/public/assets/php.png'
import uiux from '@/public/assets/uiux.webp'
import openai from '@/public/assets/openai.png'
import flutter from '@/public/assets/flutter.png'
import Image from 'next/image'



function Techstack() {
  return (
    <div className='bg-white w-full flex flex-col gap-5  justify-center items-center py-10 px-4'>
    <div className='w-full lg:w-4/6 flex flex-col justify-start gap-2  mb-8 lg:mb-0'>
      <p className='text-black text-center font-bold text-2xl md:text-3xl lg:text-4xl'>
        Design, Develop, Maintain, Scale?<br/> Your Full-Stack Development Partner
      </p>
      <span className='text-gray-700 font-medium text-center text-sm md:text-base lg:text-lg'>
        Our Curated Baskets make your work easy and affordable, combining top talent and the right tools to speed up your projects.
      </span>
    </div>
    <div className='w-full lg:w-4/6 flex justify-center overflow-hidden'>
  {/* <Logomarquee /> */}

         
<div className="w-full grid grid-cols-6 grid-rows-4 gap-y-5">
    <div className='col-start-1 col-span-5 flex gap-3'>  <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2 bg-blue-400 rounded"><Image src={fullstack}/></div>
    Full-stack
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={web}/></div>
    Web
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={cloud}/></div>
    Cloud
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={frontend}/></div>
    Frontend
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2 rounded-full"><Image src={mobilelogo} className='h-full w-auto' /></div>
    Mobile
  </button>
  </div>
    <div className="col-start-2 col-span-5 flex gap-3 row-start-2"><button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={shopify}/></div>
    Shopify
  </button>
      <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
      <div className="w-6 h-6 mr-2  rounded-full"><Image src={reactjs}/></div>
    ReactJS
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={wordpress}/></div>
    WordPress
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={backend}/></div>
    Backend
  </button>
      <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
      <div className="w-6 h-6 mr-2  rounded-full"><Image src={bi}/></div>
    BI
  </button></div>
    <div className="col-start-1 row-start-3 col-span-5 flex gap-3">  <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={java}/></div>
    Java
  </button>
     <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
     <div className="w-6 h-6 mr-2  rounded-full"><Image src={net}/></div>
    .NET
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={python}/></div>
    Python
  </button>
    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={uiux}/></div>
    UI/UX
  </button>
     <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
     <div className="w-6 h-6 mr-2  rounded-full"><Image src={aiml}/></div>
    AI/ML
  </button>
  </div>
    <div className="col-start-2 row-start-4 col-span-5 flex gap-3">  <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
    <div className="w-6 h-6 mr-2  rounded-full"><Image src={openai}/></div>
    Open AI
  </button>
     <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
     <div className="w-6 h-6 mr-2  rounded-full"><Image src={flutter}/></div>
    Flutter
  </button>
      <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
      <div className="w-6 h-6 mr-2  rounded-full"><Image src={aws}/></div>
    AWS
  </button>
  <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
  <div className="w-6 h-6 mr-2  rounded-full"><Image src={php}/></div>
    PHP
  </button>
  <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
  <div className="w-6 h-6 mr-2  rounded-full"><Image src={blockchain}/></div>
    Blockchain
  </button></div>
</div>
    


</div>
  </div>

  )
}

export default Techstack