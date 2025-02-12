import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/assets/logo.png";
import metaupspace from "@/public/assets/METAUPSPACE.png";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <Image 
                  src={logo }
                  alt="Company Logo" 
                  width={120} 
                  height={40} 
                  className="h-5 w-auto"
                />
                <Image 
                  src={metaupspace } 
                  alt="MetaUpSpace Logo" 
                  width={100} 
                  height={32} 
                  className="h-4 w-auto"
                />
              </div>
              <div className="flex space-x-8">
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </div>
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} MetaUpSpace. All rights reserved</p>
            </div>
          </div>
        </footer>
  )
}

export default Footer