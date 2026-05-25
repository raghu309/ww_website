import React from 'react';
import { Phone, Mail, User, Star, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-blue-950 text-slate-300 pt-16 pb-8 border-t border-blue-900/60 relative">
      
      {/* Scroll to Top Trigger */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handleScrollToTop}
          id="scroll-to-top"
          className="p-3.5 rounded-full bg-yellow-500 text-blue-950 hover:bg-yellow-400 hover:-translate-y-0.5 transition-all shadow-lg shadow-yellow-500/20 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 font-black" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex flex-col items-center md:items-start select-none group focus:outline-none mb-5">
              <div className="flex items-baseline gap-1">
                <span className="font-serif font-black text-2xl tracking-tighter text-yellow-500 group-hover:text-yellow-400 transition-colors">
                  MM
                </span>
                <span className="font-sans font-bold text-xs tracking-widest text-slate-100 uppercase">
                  Enterprises
                </span>
              </div>
              <div className="flex gap-1 justify-start pl-1 mt-0.5 w-full">
                <span className="text-[9px] text-yellow-500">★</span>
                <span className="text-[9px] text-yellow-500">★</span>
                <span className="text-[9px] text-yellow-500">★</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Your reliable financial consulting partner, dedicated to providing flexible loan solutions that transform your aspirations into achievements.
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest border-b border-blue-900/80 pb-2 mb-4 w-1/2 md:w-auto">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-yellow-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-yellow-500 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact Information</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support Info (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest border-b border-blue-900/80 pb-2 mb-4 w-1/2 md:w-auto">
              Contact & Support
            </h4>
            <div className="space-y-4 text-sm w-full">
              {/* Representative Name */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="p-2 rounded-lg bg-blue-900/40 text-yellow-500 border border-blue-900/30">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Financial Adviser</span>
                  <span className="text-slate-100 font-bold text-base">HARSHA B S</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="p-2 rounded-lg bg-blue-900/40 text-yellow-500 border border-blue-900/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Phone / Mobile</span>
                  <a href="tel:+919353826992" className="text-slate-200 font-semibold hover:text-yellow-500 hover:underline">
                    93538 26992
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="p-2 rounded-lg bg-blue-900/40 text-yellow-500 border border-blue-900/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Direct Email</span>
                  <a href="mailto:harsharock473@gmail.com" className="text-slate-200 font-semibold hover:text-yellow-500 hover:underline break-all">
                    harsharock473@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 text-center sm:text-left">
          
          {/* Centered Trademark Title */}
          <div className="flex items-center gap-1.5 text-yellow-500/80 font-black tracking-widest uppercase py-1">
            <span>MM ENTERPRISES</span>
            <span className="text-[8px] text-yellow-500 animate-pulse">•</span>
            <span>FINANCING YOUR DREAMS</span>
          </div>

          <div>
            © {new Date().getFullYear()} MM Enterprises. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
