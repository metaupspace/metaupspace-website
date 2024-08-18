'use client'

import React from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';



const testimonials = [
  {
    "name": "Ashutosh Pratap Singh",
    "designation": "Founder, Technical Sapien (800K+ Followers)",
    "description": "I am deeply grateful for MetaUpSpace's exceptional service for AI development & community management services. Your team not only expertly handles our vast 500,000+ member community (India's biggest!), but also impresses with your dedication and commitment. Your innovative solutions have been invaluable. I highly recommend MetaUpSpace for anyone seeking to build a product."
  },
  {
    "name": "Samarth Mahabia",
    "designation": "Youtuber, Barefox (150k+ Subscribers)",
    "description": "Finding MetaUpSpace was a game-changer! Their editing services and content strategy have propelled my channel to new heights. Their professionalism, knowledge, and willingness to go the extra mile are outstanding. If you're looking for a trustworthy partner in your content creation journey, MetaUpSpace is the answer. Thanks for being the best!"
  },
  {
    "name": "Harsh Kothari",
    "designation": "Product Designer, Unacademy",
    "description": "MetaUpSpace stands out for its dedication to cutting-edge Web 3 technology. Witnessing their passion for innovation has been awe-inspiring. Their top-notch web development, smart contract development, and AI chatbot solutions make them a reliable tech partner. I have no doubt that MetaUpSpace will continue to deliver exceptional results."
  },
  {
    "name": "Shivay Lamba",
    "designation": "Founder, Darkhorse",
    "description": "I have had the pleasure of working with the team at MetaUpSpace for our company Darkhorse. They have provided us with excellent support for the development of our web application. They have been a valuable member of our team and I would highly recommend their technical expertise to anyone looking for reliable and high-quality integration support."
  }
]




function Testimonials() {





  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-black mb-4">
        What Our Customer Say About Us?
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Our Curated Baskets make your work easy and affordable, combining top
        talent and the right.
      </p>
      <div className="relative w-full">
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
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-slide bg-[#f3f3f3] border border-gray-200 rounded-3xl shadow p-6 w-full md:w-1/3 mx-auto h-auto">
        <h4 className="text-lg font-bold text-black mb-2">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          {testimonial.designation}
        </p>
        <p className="text-gray-700 text-sm">
          {testimonial.description}
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
<div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background z-50 "></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background z-50 "></div>
      </div>
    </div>
  );
}

export default Testimonials;
