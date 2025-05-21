'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Bot,
  Users,
  Image,
  Contact,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    icon: <Bot size={22} aria-label="AI Business Coach" />,
    title: 'Your AI Business Coach',
    desc: 'Get smart, personalized advice anytime. Make confident decisions with guidance that acts like a trusted co-founder by your side.',
  },
  {
    icon: <Users size={22} aria-label="Lead Growth Support" />,
    title: 'Lead Growth Support',
    desc: 'Discover new ways to attract customers effortlessly with AI-driven strategies tailored just for your business.',
  },
  {
    icon: <Image size={22} aria-label="Content & Marketing Help" />,
    title: 'Content & Marketing Help',
    desc: 'Create easy, effective marketing posts and content ideas that engage your audience and grow your brand presence.',
  },
  {
    icon: <Contact size={22} aria-label="Track Your Progress" />,
    title: 'Track Your Progress',
    desc: 'Stay on top of your business health with regular report cards highlighting what’s working and what to improve.',
  },
  {
    icon: <BarChart3 size={22} aria-label="Growth Plans & Insights" />,
    title: 'Clear Growth Plans',
    desc: 'Receive simple 30-day action plans designed to help you move your business forward step by step.',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Head>
        <title>AI Business Coach Features - Grow Your Small Business</title>
        <meta
          name="description"
          content="Discover how our AI coach helps small businesses grow with personalized advice, lead support, progress tracking, and clear growth plans."
        />
        <meta
          name="keywords"
          content="AI business coach, small business growth, lead generation, marketing help, progress tracking"
        />
      </Head>

      <section
        id="features"
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        <div className="max-w-screen-xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            The AI Coach That Helps You Grow Your Business
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Get advice, track progress, and grow smarter — all with an AI coach working alongside you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-xl mx-auto">
          {features.map((feature, i) =>
            isMobile ? (
              <article
                key={i}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-xl transition-all"
                aria-label={feature.title}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </article>
            ) : (
              <motion.article
                key={i}
                custom={i}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-xl transition-all"
                aria-label={feature.title}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.article>
            )
          )}
        </div>
      </section>
    </>
  );
}
