import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon, onApply }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-blue-950/5 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between items-start">
      <div className="w-full">
        {/* Icon container */}
        <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-blue-50 text-blue-950 group-hover:bg-yellow-500 group-hover:text-blue-950 transition-colors duration-300 mb-6">
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Button / Trigger */}
      <button
        onClick={() => onApply(title)}
        className="inline-flex items-center gap-2 text-sm font-bold text-blue-950 hover:text-yellow-600 focus:outline-none transition-colors"
      >
        <span>Apply for this</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
      </button>
    </div>
  );
}
