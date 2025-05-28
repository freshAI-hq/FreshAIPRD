'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Cpu,
  ShieldCheck,
  Beaker,
  Activity,
  UploadCloud,
} from 'lucide-react';

const features = [
  {
    icon: <Cpu size={22} aria-label="Code Understanding" />,
    title: 'Code Understanding',
    desc: 'Interactive logic visualizer, AI-powered code explanation, and auto-generated documentation tailored for developers, PMs, and QA.',
  },
  {
    icon: <ShieldCheck size={22} aria-label="Code Quality & Security" />,
    title: 'Code Quality & Security',
    desc: 'Static vulnerability scanning, AI fix suggestions, dead code detection, and safe removal to keep your codebase secure and clean.',
  },
  {
    icon: <Beaker size={22} aria-label="Testing Support" />,
    title: 'Testing Support',
    desc: 'End-to-end flow simulation, AI-generated test cases, coverage heatmaps, and flow integrity alerts for robust test management.',
  },
  {
    icon: <Activity size={22} aria-label="Dashboard & Monitoring" />,
    title: 'Dashboard & Monitoring',
    desc: 'Unified dashboard, issue tracker, fix suggestions feed, GitHub sync, and continuous background monitoring of code health and risks.',
  },
  {
    icon: <UploadCloud size={22} aria-label="Export & Integration" />,
    title: 'Export & Integration',
    desc: 'Export docs and flow maps, one-click PR fixes, GitHub/GitLab integration, and optional Jira/issue tracker sync.',
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
        <title>AI Code Platform Features — Empower Your Dev Workflow</title>
        <meta
          name="description"
          content="Explore the AI-powered features that elevate your development workflow from code understanding to monitoring and integrations."
        />
      </Head>

      <section
        id="features"
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-screen-xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            AI-Powered Features to Transform Your Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From deep code insights and security to seamless testing and integrations — all in one intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {features.map((feature, i) =>
            isMobile ? (
              <article
                key={i}
                className="flex flex-col sm:flex-row items-start gap-5 bg-gray-50 p-6 rounded-3xl shadow hover:shadow-lg transition-shadow"
                aria-label={feature.title}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6366f1]/10 text-[#6366f1] flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{feature.desc}</p>
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
                className="flex flex-col sm:flex-row items-start gap-5 bg-gray-50 p-6 rounded-3xl shadow hover:shadow-lg transition-shadow"
                aria-label={feature.title}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6366f1]/10 text-[#6366f1] flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.article>
            )
          )}
        </div>
      </section>
    </>
  );
}
