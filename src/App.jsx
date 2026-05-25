import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import ContactFooter from './components/ContactFooter';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState('Personal Loan');

  const handleApplyNow = (loanType = 'Personal Loan') => {
    setSelectedLoan(typeof loanType === 'string' ? loanType : 'Personal Loan');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar onApplyNow={() => handleApplyNow('Personal Loan')} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onApplyNow={() => handleApplyNow('Personal Loan')} />

        {/* Services Grid Section */}
        <ServicesGrid onApply={handleApplyNow} />

        {/* Why Choose Us Section */}
        <WhyChooseUs onApplyNow={() => handleApplyNow('Personal Loan')} />
      </main>

      {/* Contact & Footer Section */}
      <ContactFooter />

      {/* Interactive Application Modal Popup */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedLoanType={selectedLoan}
      />
    </div>
  );
}

export default App;
