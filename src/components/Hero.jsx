import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Percent } from 'lucide-react';

export default function Hero({ onApplyNow }) {
  return (
    <section id="home" className="relative bg-white pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-yellow-50/50 blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-900 font-semibold text-xs sm:text-sm tracking-wide border border-blue-100 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-yellow-500" />
              Trusted Financial Lending Services
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 tracking-tight leading-none mb-6">
              We provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-900 block lg:inline">ALL TYPES OF</span> 
              <span className="relative inline-block ml-0 lg:ml-3 text-yellow-500">
                LOANS
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-yellow-400/30 rounded-full" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-xl mb-8 leading-relaxed">
              We help you today <span className="text-blue-900 font-semibold uppercase">FOR A BETTER TOMORROW</span>. Empowering your goals with secure, tailor-made financing plans.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onApplyNow}
                id="hero-apply-btn"
                className="w-full sm:w-auto bg-blue-950 text-white hover:bg-blue-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-blue-950/20 hover:shadow-blue-950/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none"
              >
                Apply for Loan
                <ArrowUpRight className="w-5 h-5 text-yellow-500" />
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto border-2 border-slate-200 text-slate-700 hover:border-yellow-500 hover:text-blue-950 font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 focus:outline-none"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Badges / Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 flex items-center">
                  8.5%<span className="text-yellow-500 text-lg">+</span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide mt-1">
                  Interest Rates
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-slate-100 px-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 flex items-center">
                  24h<span className="text-yellow-500 text-lg"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide mt-1">
                  Approval Time
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start pl-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 flex items-center">
                  100%<span className="text-yellow-500 text-lg"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide mt-1">
                  Secure Process
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:justify-end animate-fade-in delay-200">
            {/* Glowing Accent Ring */}
            <div className="absolute w-[80%] h-[80%] rounded-full border-4 border-yellow-500/10 -z-10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[95%] h-[95%] rounded-full border border-blue-950/5 -z-10" />

            {/* Image Container with Custom Stylings */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-[2rem] overflow-hidden bg-gradient-to-tr from-yellow-50 to-blue-50/30 p-2 shadow-2xl border border-slate-100">
              <img
                src="/hero_finance_house.png"
                alt="Financing your dream home - MM Enterprises"
                className="w-full h-full object-cover rounded-[1.7rem] hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Overlay Badge 1 */}
              <div className="absolute -left-6 bottom-16 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-[bounce_6s_infinite] max-w-[180px]">
                <div className="p-2.5 rounded-lg bg-yellow-500 text-blue-950">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lowest Rates</span>
                  <span className="text-xs sm:text-sm font-bold text-blue-950">No Hidden Costs</span>
                </div>
              </div>

              {/* Floating Overlay Badge 2 */}
              <div className="absolute -right-4 top-12 bg-blue-950 text-white p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-[bounce_8s_infinite] max-w-[180px]">
                <div className="p-2.5 rounded-lg bg-yellow-500 text-blue-950">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Super Fast</span>
                  <span className="text-xs sm:text-sm font-bold">Quick Approval</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
