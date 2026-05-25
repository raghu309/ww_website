import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onApplyNow }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-blue-950/95 backdrop-blur-md border-b border-blue-900/50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <a href="#home" className="flex flex-col items-start select-none group focus:outline-none">
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-black text-3xl tracking-tighter text-yellow-500 group-hover:text-yellow-400 transition-colors">
                MM
              </span>
              <span className="font-sans font-bold text-sm tracking-widest text-slate-100 uppercase">
                Enterprises
              </span>
            </div>
            {/* Stars Row */}
            <div className="flex gap-1 justify-start pl-1 mt-0.5 w-full">
              <span className="text-[10px] text-yellow-500 animate-pulse">★</span>
              <span className="text-[10px] text-yellow-500 animate-pulse delay-75">★</span>
              <span className="text-[10px] text-yellow-500 animate-pulse delay-150">★</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-yellow-500 text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onApplyNow}
              id="nav-apply-btn"
              className="bg-yellow-500 text-blue-950 hover:bg-yellow-400 font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-blue-950/98 border-b border-blue-900/80 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-yellow-500 hover:bg-blue-900/30 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-blue-900/50">
            <button
              onClick={() => {
                setIsOpen(false);
                onApplyNow();
              }}
              id="mobile-nav-apply-btn"
              className="w-full text-center bg-yellow-500 text-blue-950 font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-md shadow-yellow-500/10 flex items-center justify-center gap-1.5 focus:outline-none"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
