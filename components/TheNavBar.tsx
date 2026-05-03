'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TheNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 font-black text-white text-2xl tracking-tighter no-underline">
          <i className="fa-solid fa-shield-halved text-blue-500"></i> XAUTH
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
          <Link href="/" className={`no-underline transition ${pathname === '/' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Overview
          </Link>
          <Link href="/wiki" className={`no-underline transition ${pathname.startsWith('/wiki') ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Wiki
          </Link>
          <Link href="/download" className={`no-underline transition ${pathname === '/download' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Downloads
          </Link>
          <Link href="/support" className={`no-underline transition ${pathname === '/support' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Support
          </Link>
          <a href="https://github.com/xauth-ecosystem" className="text-slate-500 hover:text-white transition no-underline">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#020617] border-t border-slate-800 px-6 py-4">
          <Link href="/" className={`block py-3 font-bold uppercase tracking-widest no-underline ${pathname === '/' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Overview
          </Link>
          <Link href="/wiki" className={`block py-3 font-bold uppercase tracking-widest no-underline ${pathname.startsWith('/wiki') ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Wiki
          </Link>
          <Link href="/download" className={`block py-3 font-bold uppercase tracking-widest no-underline ${pathname === '/download' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Downloads
          </Link>
          <Link href="/support" className={`block py-3 font-bold uppercase tracking-widest no-underline ${pathname === '/support' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>
            Support
          </Link>
        </div>
      )}
    </nav>
  );
}