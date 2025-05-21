'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Users,
  Contact,
  BarChart3,
} from 'lucide-react';

const weeks = [
  {
    icon: <Bot size={22} aria-label="Week 1: Initial Setup & Strategy" />,
    title: 'Week 1: Initial Setup & Strategy',
    desc: `Meet your AI Business Coach and set initial goals. Begin with a personalized strategy to kickstart growth.`,
  },
  {
    icon: <Contact size={22} aria-label="Week 2: Review & Refine" />,
    title: 'Week 2: Review & Refine',
    desc: `Evaluate last week’s progress using AI-generated insights. Adjust strategy based on feedback to improve lead growth.`,
  },
  {
    icon: <Users size={22} aria-label="Week 3: Optimize Marketing" />,
    title: 'Week 3: Optimize Marketing',
    desc: `Analyze content and marketing results. Your AI coach helps craft optimized campaigns to boost engagement.`,
  },
  {
    icon: <BarChart3 size={22} aria-label="Week 4: Track & Plan Ahead" />,
    title: 'Week 4: Track & Plan Ahead',
    desc: `Review overall progress with detailed reports. Receive an actionable plan for continuous growth beyond 30 days.`,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 100 },
  }),
};

export default function ThirtyDayIterativePlanWithButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToPlan = () => {
    const element = document.getElementById('30-day-iterative-plan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="text-center py-10 bg-gray-50">
        <button
          onClick={scrollToPlan}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          See the 30-Day AI Coach Plan
        </button>
      </div>

      <section
        id="how-it-works"
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-screen-xl mx-auto text-center mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-snug"
          >
            30-Day Iterative Growth Plan with Your AI Coach
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Each week, review progress, get feedback, and receive a fresh, tailored strategy for continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-screen-xl mx-auto">
          {weeks.map((week, i) =>
            isMobile ? (
              <article
                key={i}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                aria-label={week.title}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                  {week.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{week.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{week.desc}</p>
                </div>
              </article>
            ) : (
              <motion.article
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                aria-label={week.title}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                  {week.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{week.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{week.desc}</p>
                </div>
              </motion.article>
            )
          )}
        </div>
      </section>
    </>
  );
}
