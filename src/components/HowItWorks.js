'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Activity, Zap, AlertTriangle } from 'lucide-react';

const testingSteps = [
  {
    icon: <CheckSquare size={32} className="text-indigo-600" />,
    title: 'Auto-Generated Test Cases',
    desc: [
      'Generate unit, integration, and end-to-end tests automatically based on your code.',
      'Save time and ensure comprehensive coverage without manual effort.',
    ],
  },
  {
    icon: <Activity size={32} className="text-indigo-600" />,
    title: 'Flow Simulation & Validation',
    desc: [
      'Simulate user flows with visual feedback for every step.',
      'Catch flow breaks, inconsistent states, and edge cases before deployment.',
    ],
  },
  {
    icon: <Zap size={32} className="text-indigo-600" />,
    title: 'Test Coverage Heatmaps',
    desc: [
      'Visualize tested vs untested code regions clearly.',
      'Drill down to individual functions or lines to identify gaps.',
    ],
  },
  {
    icon: <AlertTriangle size={32} className="text-indigo-600" />,
    title: 'Performance & Integrity Alerts',
    desc: [
      'Receive real-time alerts on broken flows and performance regressions.',
      'Track response times, throughput, and resource usage to keep your app healthy.',
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function HowItWorksTesting() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-24 px-6 sm:px-12 lg:px-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2
          id="how-it-works-heading"
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          How Testing Works in Your Workspace
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Streamline your entire testing lifecycle with AI-powered automation, deep insights, and visual tools — all in one developer-friendly workspace.
        </p>
      </div>

      <motion.div
        className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {testingSteps.map(({ icon, title, desc }, index) => (
          <motion.article
            key={index}
            variants={card}
            className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow cursor-default flex flex-col items-start"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {desc.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>

      <p className="mt-20 max-w-3xl mx-auto text-center text-gray-700 text-base leading-relaxed">
        Manage, analyze, and optimize your tests effortlessly in one unified platform. Deliver quality software faster by catching bugs and performance issues early.
      </p>
    </section>
  );
}
