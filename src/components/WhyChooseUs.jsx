import React from 'react';
import { Percent, Zap, FileText, ShieldCheck, Star } from 'lucide-react';

export default function WhyChooseUs({ onApplyNow }) {
  const reasons = [
    {
      title: 'Low Interest Rates',
      description: 'Get the most competitive lending rates in the industry, keeping your repayments affordable and clear.',
      icon: Percent,
    },
    {
      title: 'Quick Approval',
      description: 'Our digital verification ecosystem processes and sanctions loans in hours rather than weeks.',
      icon: Zap,
    },
    {
      title: 'Minimum Documents',
      description: 'Avoid endless paperwork. Submit basic documents online securely to kickstart your application.',
      icon: FileText,
    },
    {
      title: 'Trusted Service',
      description: 'Dedicated financial advisory and highly transparent terms trusted by thousands of clients.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="bg-blue-950 text-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Gradient Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-yellow-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          
          {/* Prominent Badge Element */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500/10 text-yellow-500 font-extrabold text-xs sm:text-sm tracking-widest border border-yellow-500/30 uppercase shadow-lg shadow-yellow-500/5 mb-6 hover:scale-105 hover:bg-yellow-500/20 transition-all duration-300 select-none">
            <span className="flex items-center gap-0.5 text-xs text-yellow-400">
              <Star className="w-3.5 h-3.5 fill-yellow-500" />
              <Star className="w-3.5 h-3.5 fill-yellow-500" />
              <Star className="w-3.5 h-3.5 fill-yellow-500" />
            </span>
            <span className="font-sans font-black tracking-widest">YOUR TRUST OUR COMMITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none mb-5">
            Why Partner With Us?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We simplify borrow operations, offering professional support and customized features that allow you to plan your future confidently.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div 
                key={reason.title} 
                className="bg-blue-900/20 border border-blue-900/60 p-8 rounded-2xl hover:bg-blue-900/40 hover:border-yellow-500/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-yellow-500/10 text-yellow-500 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner at the bottom */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-blue-900/40 to-yellow-500/10 border border-blue-900/80 p-8 md:p-12 rounded-3xl text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-5xl mx-auto shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to experience modern borrowing?
            </h3>
            <p className="text-slate-300 text-sm md:text-base">
              Submit your preliminary information within 2 minutes. Our agent will call you shortly.
            </p>
          </div>
          <button
            onClick={onApplyNow}
            id="why-us-apply-btn"
            className="whitespace-nowrap bg-yellow-500 text-blue-950 font-bold hover:bg-yellow-400 px-8 py-4 rounded-full transition-all duration-300 shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/30 hover:-translate-y-0.5 focus:outline-none flex items-center justify-center gap-1.5"
          >
            Get Started Now
          </button>
        </div>

      </div>
    </section>
  );
}
