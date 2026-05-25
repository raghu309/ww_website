import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Mail, Phone, User, Landmark, IndianRupee } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, selectedLoanType }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: '',
    amount: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Sync selected loan type from prop when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        loanType: selectedLoanType || 'Personal Loan',
        amount: '500000',
        notes: '',
      });
      setIsSubmitted(false);
      setError('');
    }
  }, [isOpen, selectedLoanType]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Quick validation
    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Client-side simulate submission success
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-[fadeIn_0.3s_ease-out] z-10">
        
        {/* Modal Header */}
        <div className="bg-blue-950 px-6 py-6 text-white flex justify-between items-center relative">
          <div>
            <h3 className="text-xl font-bold">Apply Online Now</h3>
            <p className="text-slate-300 text-xs mt-1">Get your premium quote in less than 12 hours</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-blue-900/40 text-slate-300 hover:text-white hover:bg-blue-900/80 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <div className="px-6 py-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Banner */}
              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-100">
                  {error}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Full Name <span className="text-yellow-600">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950 text-sm placeholder-slate-400 bg-slate-50/50 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              {/* Mobile and Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Field */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Mobile Number <span className="text-yellow-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950 text-sm placeholder-slate-400 bg-slate-50/50 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Email Address <span className="text-yellow-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950 text-sm placeholder-slate-400 bg-slate-50/50 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Loan Type and Amount Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Loan Type */}
                <div>
                  <label htmlFor="modal-loantype" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Loan Type
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                      <Landmark className="w-4 h-4" />
                    </span>
                    <select
                      id="modal-loantype"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950 text-sm text-slate-700 bg-slate-50/50 focus:bg-white outline-none transition-all appearance-none"
                    >
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loans">Business Loans</option>
                      <option value="Home Loans">Home Loans</option>
                      <option value="Mortgage Loans">Mortgage Loans</option>
                    </select>
                  </div>
                </div>

                {/* Loan Amount */}
                <div>
                  <label htmlFor="modal-amount" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Desired Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                      <span className="text-sm font-semibold">₹</span>
                    </span>
                    <select
                      id="modal-amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950 text-sm text-slate-700 bg-slate-50/50 focus:bg-white outline-none transition-all appearance-none"
                    >
                      <option value="100000">Up to ₹1,00,000</option>
                      <option value="500000">₹1,00,000 - ₹5,00,000</option>
                      <option value="1000000">₹5,00,000 - ₹10,00,000</option>
                      <option value="2500000">₹10,00,000 - ₹25,00,000</option>
                      <option value="5000000">₹25,00,000 - ₹50,00,000</option>
                      <option value="10000000">₹50,00,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message/Remarks Field */}
              <div>
                <label htmlFor="modal-notes" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950 text-sm placeholder-slate-400 bg-slate-50/50 focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              {/* Security Shield Banner */}
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-semibold px-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your personal information is encrypted and 100% secure.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-loan-app"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-black py-4 rounded-xl shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/35 transition-all duration-300 flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 mt-2"
              >
                Submit Application
              </button>
            </form>
          ) : (
            /* Success View */
            <div className="text-center py-6 px-4 flex flex-col items-center animate-[fadeIn_0.4s_ease-out]">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full mb-6">
                <CheckCircle className="w-16 h-16" />
              </div>
              
              <h4 className="text-2xl font-black text-blue-950 mb-2">Application Received!</h4>
              <p className="text-sm font-medium text-slate-500 max-w-sm mb-6 leading-relaxed">
                Thank you, <strong className="text-blue-950">{formData.name}</strong>. Your preliminary details for a{' '}
                <strong className="text-blue-950">{formData.loanType}</strong> have been logged successfully.
              </p>

              {/* Success Info block */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-left w-full space-y-3 mb-8">
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-2">
                  Representative Assigned
                </h5>
                <div className="flex flex-col gap-1.5 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Contact Person:</span>
                    <span className="font-bold text-blue-950">HARSHA B S</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Email:</span>
                    <a href="mailto:harsharock473@gmail.com" className="font-semibold text-yellow-600 hover:underline">
                      harsharock473@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Phone:</span>
                    <a href="tel:+919353826992" className="font-semibold text-blue-950 hover:underline">
                      +91 93538 26992
                    </a>
                  </div>
                </div>
              </div>

              {/* Success Close Button */}
              <button
                onClick={onClose}
                className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl transition-all duration-200 outline-none focus:outline-none"
              >
                Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
