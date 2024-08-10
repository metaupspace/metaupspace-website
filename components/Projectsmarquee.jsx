import React, { useEffect, useState } from 'react'
import { cn } from "../lib/utils";
import Marquee from "./magicui/Marquee";
import application1_2 from '../public/assets/application1.1.png'
import Image from 'next/image';

function Projectsmarquee() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className='w-full'>
      <MarqueeDemo />

    </div>
  );
}

export default Projectsmarquee;



export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log('Modal state changed:', isModalOpen);
  }, [isModalOpen]);

  return { isModalOpen, openModal, closeModal };
};

const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    }
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  
  const ReviewCard = ({ img, name, username, body }) => {
  
    const { isModalOpen, openModal, closeModal } = useModal();
  
    // useEffect(() => {
    //   if (isModalOpen) {
    //     document.body.style.overflow = 'hidden';
    //   } else {
    //     document.body.style.overflow = 'unset';
    //   }
  
    //   return () => {
    //     document.body.style.overflow = 'unset';
    //   };
    // }, [isModalOpen]);
  
    return (
      <figure className={cn(
        "relative  overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}>
        <div    className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              UI/UX Review Check
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main nightlife in Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0 z">
            <button
            
              className="align-middle -50 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              onClick={openModal}
            >
              Read More
            </button>
           
          </div>
        </div>
      </figure>
    );
  };
  
  export function MarqueeDemo() {

    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    );
  }