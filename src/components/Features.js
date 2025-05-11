'use client';

import React from 'react';
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
    icon: <Bot size={22} aria-label="AI Social Media Assistant" />,
    title: 'AI Social Media Assistant',
    desc: 'Automate your social media posts and engagement. Respond to messages and comments, and schedule content to stay active online without lifting a finger.',
  },
  {
    icon: <Users size={22} aria-label="Automated Lead Generation" />,
    title: 'Automated Lead Generation',
    desc: 'Find and engage with the right leads. Automatically reach out to potential customers on platforms like LinkedIn, Gmail, and WhatsApp with personalized messages and follow-ups.',
  },
  {
    icon: <Image size={22} aria-label="Content Creation Tools" />,
    title: 'Content Creation Tools',
    desc: 'Create high-quality, engaging content in minutes. Generate posts and visuals that resonate with your audience, ensuring your social media presence stands out.',
  },
  {
    icon: <Contact size={22} aria-label="CRM and Lead Tracking" />,
    title: 'Lightweight CRM & Lead Tracking',
    desc: 'Keep track of your leads and interactions in one place. Automatically follow up and organize leads to convert them into customers.',
  },
  {
    icon: <BarChart3 size={22} aria-label="Analytics and Insights" />,
    title: 'Simple Analytics & Insights',
    desc: 'Track your growth with ease. View key performance metrics and get AI-powered recommendations to optimize your strategies for better results.',
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
  return (
    <>
      <Head>
        <title>AI-Powered Features for Business Growth - FreshAI</title>
        <meta
          name="description"
          content="Discover FreshAI's suite of AI features: lead generation, content automation, analytics, and CRM tools to scale your startup faster."
        />
        <meta
          name="keywords"
          content="AI marketing tools, AI social assistant, lead gen automation, CRM, content automation"
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
          backgroundSize: "40px 40px",
        }}
      >
        <div className="max-w-screen-xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Everything You Need to Grow with AI
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Simplify your business growth with our tools—automate outreach, create content, and track performance effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-xl mx-auto">
          {features.map((feature, i) => (
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
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm"
                role="img"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
