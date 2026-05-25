import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import ContactFooter from './components/ContactFooter';

function App() {
  const handleApplyNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar onApplyNow={handleApplyNow} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onApplyNow={handleApplyNow} />

        {/* Services Grid Section */}
        <ServicesGrid onApply={handleApplyNow} />

        {/* Why Choose Us Section */}
        <WhyChooseUs onApplyNow={handleApplyNow} />
      </main>

      {/* Contact & Footer Section */}
      <ContactFooter />
    </div>
  );
}

export default App;
