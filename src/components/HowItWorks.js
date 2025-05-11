'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, PlugZap, BrainCircuit, CalendarCheck } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="how-it-works" className="relative w-full px-6 py-20 overflow-x-hidden snap-y snap-mandatory bg-[#f8f9fc]" aria-labelledby="how-it-works-heading">
      {/* Intro Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Your 90-Day Traffic Growth Plan
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Follow our 90-day roadmap that builds traffic from scratch. FreshAI will automate content, leads, and analytics for you.
        </p>
      </motion.div>

      {/* Scrollable Steps */}
      <div className="max-w-2xl mx-auto relative border-l-2 border-dashed border-gray-300 pl-6 space-y-8 snap-y snap-mandatory">
        {/* Phase 1 */}
        <motion.div
          layout
          className="relative transition-all duration-300 cursor-pointer backdrop-blur-md bg-white/70 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg px-6 py-5 flex items-start gap-4 snap-start"
        >
          <div className="absolute -left-10 top-5 w-8 h-8 rounded-full bg-[#6246ea] text-white font-bold flex items-center justify-center shadow" aria-hidden="true">
            1
          </div>
          <div className="pt-1">
            <Rocket className="text-[#6246ea] w-6 h-6" aria-label="Rocket Icon" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phase 1: Set Your Goal & Audience</h3>
            <p className="text-gray-600">
              Choose what you want to grow—followers, leads, or email list—and define your audience. FreshAI will create your personalized growth plan.
            </p>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-sm text-gray-700 overflow-hidden"
            >
              FreshAI will use this data to optimize your content, making sure you're targeting the right people from day one.
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 2 */}
        <motion.div
          layout
          className="relative transition-all duration-300 cursor-pointer backdrop-blur-md bg-white/70 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg px-6 py-5 flex items-start gap-4 snap-start"
        >
          <div className="absolute -left-10 top-5 w-8 h-8 rounded-full bg-[#6246ea] text-white font-bold flex items-center justify-center shadow" aria-hidden="true">
            2
          </div>
          <div className="pt-1">
            <PlugZap className="text-[#6246ea] w-6 h-6" aria-label="Plug Zap Icon" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phase 2: Launch Your Content & Consistency</h3>
            <p className="text-gray-600">
              FreshAI will schedule daily and weekly posts on Instagram, LinkedIn, and other platforms to build visibility and engagement.
            </p>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-sm text-gray-700 overflow-hidden"
            >
              Watch as your audience grows with regular posts and tailored content, all automated to fit your schedule.
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 3 */}
        <motion.div
          layout
          className="relative transition-all duration-300 cursor-pointer backdrop-blur-md bg-white/70 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg px-6 py-5 flex items-start gap-4 snap-start"
        >
          <div className="absolute -left-10 top-5 w-8 h-8 rounded-full bg-[#6246ea] text-white font-bold flex items-center justify-center shadow" aria-hidden="true">
            3
          </div>
          <div className="pt-1">
            <BrainCircuit className="text-[#6246ea] w-6 h-6" aria-label="Brain Circuit Icon" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phase 3: Optimize for Growth</h3>
            <p className="text-gray-600">
              Leverage performance data and FreshAI’s AI to refine your content and reach even more of the right people with optimized posts.
            </p>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-sm text-gray-700 overflow-hidden"
            >
              Refine your approach with real-time insights that tell you what’s working and how to improve for maximum reach and engagement.
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 4 */}
        <motion.div
          layout
          className="relative transition-all duration-300 cursor-pointer backdrop-blur-md bg-white/70 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg px-6 py-5 flex items-start gap-4 snap-start"
        >
          <div className="absolute -left-10 top-5 w-8 h-8 rounded-full bg-[#6246ea] text-white font-bold flex items-center justify-center shadow" aria-hidden="true">
            4
          </div>
          <div className="pt-1">
            <CalendarCheck className="text-[#6246ea] w-6 h-6" aria-label="Calendar Check Icon" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phase 4: Scale and Convert</h3>
            <p className="text-gray-600">
              FreshAI scales your successful campaigns. From ads to automated engagement, this phase converts traffic into real leads.
            </p>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-sm text-gray-700 overflow-hidden"
            >
              Focus on conversion by automating follow-ups, lead generation, and traffic retargeting. Watch as your efforts pay off with growing sales.
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sprint Section: 30, 60, and 90 Days */}
      <section className="max-w-2xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          90-Day Sprint Plan
        </h2>
        <div className="space-y-12">
          {/* 30 Days */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">30 Days: Build Momentum</h3>
            <p className="text-gray-600">
              During the first 30 days, the focus is on setting up your channels, defining your goals, and launching your content. This phase sets the foundation for everything.
            </p>
          </div>

          {/* 60 Days */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">60 Days: Scale & Engage</h3>
            <p className="text-gray-600">
              At 60 days, you'll begin optimizing your content strategy based on performance. Engage your audience, refine posts, and grow your reach.
            </p>
          </div>

          {/* 90 Days */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">90 Days: Convert & Automate</h3>
            <p className="text-gray-600">
              By 90 days, FreshAI will automate lead generation, messaging, and follow-ups, helping you convert traffic into leads and sales. This phase focuses on scaling and maximizing ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Join Waitlist */}
      <section className="w-full py-12 px-6 bg-gray-50 text-center">
        <p className="text-xl text-gray-800 mb-6">
          Ready to drive consistent traffic and build your business? Start your journey with FreshAI today and transform your growth.
        </p>
        <a href="#waitlist" className="bg-[#6246ea] text-white py-2 px-6 rounded-md text-lg hover:bg-[#4a38c2]">
          Join the Waitlist
        </a>
      </section>
    </section>
  );
}
