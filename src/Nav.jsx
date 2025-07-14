import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  px-4 md:px-8 py-4 flex flex-col lg:flex-row items-center lg:justify-between  ">
      
      <div className="w-full lg:w-1/2 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 rounded-md" />

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-white bg-[#011b30] rounded-lg" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Links */}
      <ul
        className={`
          flex flex-col lg:flex-row items-center gap-3 text-black font-medium 
          w-full lg:w-auto transition-all duration-300
          ${isOpen ? 'block' : 'hidden lg:flex'}
        `}
      >
        <li className="hover:underline hover:translate-y-[-5px] transition-all">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="hover:underline hover:translate-y-[-5px] transition-all">
          <Link to="/jobsupport" onClick={() => setIsOpen(false)}>Job Support</Link>
        </li>
        <li className="hover:underline hover:translate-y-[-5px] transition-all">
          <Link to="/" onClick={() => setIsOpen(false)}>Join With Us</Link>
        </li>
        <li className="hover:underline hover:translate-y-[-5px] transition-all">
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </li>
        <li className="hover:underline hover:translate-y-[-5px] transition-all">
          <Link to="/training" onClick={() => setIsOpen(false)}>Training Feedback</Link>
        </li>
        <li>
          <Link to="/bookdemo" onClick={() => setIsOpen(false)}>
            <button className="bg-black text-white border border-black px-4 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              Book A Demo
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
