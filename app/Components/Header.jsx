'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaCar, FaCarAlt, FaCaretRight, FaHome, FaSearch,FaUser } from "react-icons/fa";

import Image from 'next/image';
import Link from "next/link";
import Sidebar from './MobileView';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed top-0 z-50 w-full md:py-2 py-3">
      {/* Main nav */}
      <div className="flex justify-between items-center px-4 md:px-10 bg-white relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-orange-600 italic">
          {/* <Image width={100} height={100} src="/assets/logo.png" alt="logo" /> */}
          <p className='text-3xl text-lime-600 font-bold flex items-center '><span className='text-slate-600 me-1 text-md'><FaCar/></span>Carwala</p>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-16 text-md">
          <li className="md:hover:border-b-2 md:hover:border-b-lime-600 border-b-2 border-white py-3"><Link className='hover:text-lime-700 font-bold text-slate-700' href="/newcars">NEW CARS</Link></li>
          <li className="md:hover:border-b-2 md:hover:border-b-lime-600 border-b-2 border-white py-3"><Link className='hover:text-lime-700 font-bold text-slate-700' href="/usedcars">USED CARS</Link></li>
          <li className="md:hover:border-b-2 md:hover:border-b-lime-600 border-b-2 border-white py-3"><Link className='hover:text-lime-700 font-bold text-slate-700' href="/reviws&news">REVIEWS & NEWS</Link></li>
        </ul>
        <div className='flex md:text-2xl md:gap-5 gap-6 items-center'>
          <input type="search" className='p-2 md:block hidden  outline-0 border text-sm rounded-md border-lime-600' placeholder='search' />
          <Link className='text-xl text-lime-600 sm:hidden' href="/"><FaUser /></Link>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-lime-600">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed top-0 right-0 h-full w-2/3  bg-gray-800 shadow-md transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Sidebar/>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-40"></div>
      )}
    </header>
  );
};

export default Header;
