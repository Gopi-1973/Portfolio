import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdList } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full  bg-blue-200 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-gray-500">My Portfolio</h1>
        <div className="hidden md:flex gap-14 ">
          <a href="#Home" className="text-xl text-gray-700 hover:text-gray-400 hover:underline">
            Home
          </a>
          <a href="#About" className=" text-xl text-gray-600  hover:text-blue-600 hover:underline">
            About
          </a>
          <a href="#Projects" className="text-xl text-gray-600  hover:text-blue-700 hover:underline">
            Projects
          </a>
          <a href="#Contact" className="text-xl text-gray-600  hover:text-blue-700 hover:underline">
            Contact
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <IoMdClose size={40}/> : <IoMdList size={40}/>}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col text-xl bg-white px-18  gap-3">
              <a href="#home" className="py-2">
                Home
              </a>
        
              <a href="#about" className="py-2">
                About
              </a>
            
              <a href="#projects" className="py-2">
                Projects
              </a>
            
              <a href="#contact" className="py-2">
                Contaact
              </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
