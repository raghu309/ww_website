import React from 'react';
import { User, Briefcase, Home, FileText } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function ServicesGrid({ onApply }) {
  const loanServices = [
    {
      title: 'Personal Loan',
      description: 'For all your immediate personal needs—medical expenses, travel, weddings, or quick cash requirements.',
      icon: User,
    },
    {
      title: 'Business Loans',
      description: 'Grow your enterprise and scale operations with convenient and hassle-free commercial finance options.',
      icon: Briefcase,
    },
    {
      title: 'Home Loans',
      description: 'Make your dream home a reality with structured, high-value, and flexible residential property financing.',
      icon: Home,
    },
    {
      title: 'Mortgage Loans',
      description: 'Leverage the value of your commercial or residential property to secure substantial working capital.',
      icon: FileText,
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-20 md:py-28 relative">
      {/* Visual background details */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-slate-100/50 hidden md:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-slate-100/50 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
            Our Financial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight mt-4 mb-5">
            Flexible Financing For Every Need
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We provide a diverse portfolio of credit options curated to align perfectly with your financial journey and long-term milestones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onApply={onApply}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
