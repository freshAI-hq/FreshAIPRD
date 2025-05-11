// src/app/page.js
import React from 'react';
import Hero from '@components/Hero';
import Features from '@components/Features';
import Footer from '@components/Footer';
import HowItWorks from '@components/HowItWorks';
import ProblemSolving from '@components/ProblemSolving'
import LeadMagnet from '@components/LeadMagnet';
import JoinWaitlist from '@components/JoinWaitlist';
import FaqSection from '@components/FaqSection';
import ContactUs  from '@components/ContactUs'
const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <Features />
      <HowItWorks />
      <ProblemSolving />
      <LeadMagnet />
     
      
      <FaqSection />
      <JoinWaitlist />
      <ContactUs />
    </div>
  );
};

export default HomePage;
