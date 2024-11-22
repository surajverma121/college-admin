import React from "react";

const Navbar = () => {
  return (
  <div className="t">
      <nav className="bg-gray-800  fixed left-0 right-0 top-0  text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold cursor-pointer ">My Website</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:bg-gray-500 rounded-lg p-1 ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:bg-gray-500   rounded-lg p-1 ">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:bg-gray-500 rounded-lg p-1">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:bg-gray-500 p-1  rounded-lg ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
