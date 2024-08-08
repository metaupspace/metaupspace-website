import Link from "next/link";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white p-5 px-10 flex justify-evenly items-center">
      <div className="logo flex">
        <img src="../assets/logo.png" width={40} height={40} />
        <h1>MetaUpSpace</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-600">
            <Link href="/about">IT Staffing</Link>
          </li>
          <li className="text-gray-600">
            <Link href="/services">Development</Link>
          </li>
          <li className="text-gray-600">
            <Link href="/contact">Team</Link>
          </li>
        </ul>
      </nav>
      <div className="p-2 border flex justify-center space-x-3 items-center rounded-xl border-gray-500">
        <p className="px-4 text-sm border-r">Contact Us</p>
        <FaPhoneAlt color="#454343" />
        <FaLinkedin color="#454343" />
        <FaInstagramSquare color="#454343" />
        <FaTwitterSquare color="#454343" />
      </div>
    </header>
  );
};

export default Header;
