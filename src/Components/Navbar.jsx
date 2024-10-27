import React from "react";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  return (
    <div className="bg-yellow-200 shadow-lg w-full h-auto p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Peace Space</h1>
      <ul className="flex justify-between mr-10 w-1/4">
        <li className="text-black transition-all cursor-pointer duration-300 ease hover:text-green-400 hover:underline-offset-4 hover:underline">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Home
          </ScrollLink>
        </li>
        <li className="text-black transition-all cursor-pointer duration-300 ease hover:text-green-400 hover:underline-offset-4 hover:underline">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </li>
        <li className="text-black transition-all cursor-pointer duration-300 ease hover:text-green-400 hover:underline-offset-4 hover:underline">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
