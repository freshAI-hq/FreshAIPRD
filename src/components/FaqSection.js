'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do these AI-powered features help developers?',
    answer:
      'They simplify complex code analysis, automate documentation, detect vulnerabilities early, and generate test cases, allowing developers to focus on building features instead of tedious tasks.',
  },
  {
    question: 'How much time can I save using these features?',
    answer:
      'Developers can save up to 30% of their time by automating code reviews, testing, and documentation, accelerating project delivery and reducing bugs.',
  },
  {
    question: 'Will this tool improve code quality and security?',
    answer:
      'Yes! With static vulnerability scanning and AI-driven fix suggestions, your codebase becomes safer and more maintainable, reducing costly post-release issues.',
  },
  {
    question: 'Can I integrate this platform with my existing workflow?',
    answer:
      'Absolutely. The platform supports integrations with GitHub, GitLab, Jira, and popular documentation tools to fit seamlessly into your development pipeline.',
  },
  {
    question: 'Is it suitable for teams as well as individual developers?',
    answer:
      'Yes, it offers dashboards and monitoring for both individuals and teams, helping track progress, issues, and collaboration efficiently.',
  },
  {
    question: 'Do I need advanced technical skills to use it?',
    answer:
      'No, the platform is designed with an intuitive interface and clear reports, making it accessible for all developers regardless of experience level.',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 px-6 bg-white">
      <motion.div
        className="max-w-screen-xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Everything you need to know about how our AI-powered features transform your development workflow.
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {faqs.map((faq, index) => (
          <motion.article
            key={index}
            onClick={() => toggleIndex(index)}
            className={`cursor-pointer bg-gray-50 p-6 rounded-3xl shadow hover:shadow-lg transition-shadow flex flex-col`}
            variants={itemVariants}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
              <ChevronDown
                className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.p
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
