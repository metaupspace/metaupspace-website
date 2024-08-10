import React from "react";
import profile1 from "../../public/assets/Ellipse 6.png";
import profile2 from "../../public/assets/Ellipse 7.png";
import profile3 from "../../public/assets/Ellipse 8.png";
import profile4 from "../../public/assets/Ellipse 9.png";
import profile5 from "../../public/assets/Ellipse 10.png";

import Image from "next/image";

function Team() {
  return (
    <div
      id="team"
      className="bg-white flex flex-col md:flex-row justify-around items-center p-4"
    >
      <div className="flex -space-x-2 rtl:space-x-reverse overflow-x-auto md:w-2/3">
        <Image
          className="w-24 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800"
          src={profile1}
          alt="Profile 1"
        />
        <Image
          className="w-24 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800"
          src={profile2}
          alt="Profile 2"
        />
        <Image
          className="w-24 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800"
          src={profile3}
          alt="Profile 3"
        />
        <Image
          className="w-24 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800"
          src={profile4}
          alt="Profile 4"
        />
        <Image
          className="w-24 h-24 md:w-28 md:h-28 border-white rounded-full dark:border-gray-800"
          src={profile5}
          alt="Profile 5"
        />
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
  );
}

export default Team;
