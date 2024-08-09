"use client"; // Add this line at the top

import { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-5 flex justify-between items-center">
      <div className="logo flex items-center space-x-2">
        <img
          src="../assets/logo.png"
          width={40}
          height={40}
          alt="MetaUpSpace Logo"
        />
        <h1 className="text-lg font-semibold">MetaUpSpace</h1>
      </div>
      <nav className={`md:flex ${menuOpen ? "block" : "hidden"} space-x-4`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <Link href="#main-section">Home</Link>
          </li>
          <li className="text-gray-600">
            <Link href="#it-staffing">IT Staffing</Link>
          </li>
          <li className="text-gray-600">
            <Link href="#types-staffing">Development</Link>
          </li>
          <li className="text-gray-600">
            <Link href="#process">Team</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex p-2 border space-x-3 items-center rounded-xl border-gray-500">
        <p className="px-4 text-sm border-r">Contact Us</p>
        <a href="">
          <FaPhoneAlt color="#454343" />
        </a>
        <a href="https://www.linkedin.com/company/metaupspace/">
          <FaLinkedin color="#454343" />
        </a>
        <a href="https://instagram.com/metaupspace?igshid=MjljNjAzYmU=">
          <FaInstagramSquare color="#454343" />
        </a>
        <a href="https://twitter.com/metaupspace">
          <FaTwitterSquare color="#454343" />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
