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
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </a>
            <div>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Jese Leos</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">
              @jeseleos
            </a>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              flowbite.com
            </a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile1} alt="Profile 1"/>
    </Popover>
    <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </a>
            <div>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Jese Leos</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">
              @jeseleos
            </a>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              flowbite.com
            </a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile2} alt="Profile 1"/>
    </Popover>
    <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </a>
            <div>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Jese Leos</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">
              @jeseleos
            </a>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              flowbite.com
            </a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile3} alt="Profile 1"/>
    </Popover>
    <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </a>
            <div>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Jese Leos</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">
              @jeseleos
            </a>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              flowbite.com
            </a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
      }
    >
          <Image className="w-24 focus:ring-blue-300 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800" src={profile4} alt="Profile 1"/>
    </Popover>
    <Popover
      trigger="hover"
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </a>
            <div>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Jese Leos</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">
              @jeseleos
            </a>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              flowbite.com
            </a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
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
