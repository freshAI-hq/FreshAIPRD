'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the AI Coach?',
    answer:
      'The AI Coach is an intelligent virtual assistant designed to help you improve productivity, enhance learning, and provide personalized guidance in real-time. It uses advanced AI algorithms to understand your goals and deliver tailored advice and support.',
  },
  {
    question: 'How does the AI Coach work?',
    answer:
      'The AI Coach interacts with you through conversational AI to analyze your progress, identify challenges, and recommend actionable strategies. It learns from your inputs and adapts its guidance to fit your unique style and needs.',
  },
  {
    question: 'Can the AI Coach integrate with my existing tools?',
    answer:
      'Yes! The AI Coach seamlessly integrates with popular productivity, communication, and learning platforms like Google Calendar, Slack, Microsoft Teams, and Notion to provide contextual assistance where you work.',
  },
  {
    question: 'Do I need any technical skills to use the AI Coach?',
    answer:
      'Not at all. The AI Coach is designed to be user-friendly with a no-code interface. You just connect your accounts and start interacting with the coach through chat or voice commands.',
  },
  {
    question: 'How does the AI Coach personalize its recommendations?',
    answer:
      'The AI Coach leverages machine learning to understand your habits, preferences, and progress. It continuously refines its advice based on your feedback and performance metrics to offer highly personalized coaching.',
  },
  {
    question: 'Can the AI Coach help with goal setting and tracking?',
    answer:
      'Absolutely! The AI Coach helps you set SMART goals, breaks them into manageable tasks, and tracks your progress with reminders and motivational insights to keep you on track.',
  },
  {
    question: 'Is my data secure with the AI Coach?',
    answer:
      'Yes, your privacy and data security are top priorities. The AI Coach uses industry-standard encryption and complies with data protection regulations to ensure your information is safe.',
  },
  {
    question: 'Can the AI Coach assist teams or just individuals?',
    answer:
      'The AI Coach is built for both individuals and teams. It can facilitate team collaboration, monitor collective goals, and provide insights to boost overall team productivity.',
  },
  {
    question: 'Does the AI Coach support multiple languages?',
    answer:
      'Currently, the AI Coach supports English and is expanding to include several other major languages to serve a global audience.',
  },
  {
    question: 'How do I get started with the AI Coach?',
    answer:
      'Getting started is easy! Sign up on our platform, connect your preferred tools, and begin chatting with your AI Coach. Personalized onboarding will guide you through the setup process.',
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="w-full py-20 px-6"
      style={{
        backgroundColor: '#f8f9fc',
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Everything you need to know about the AI Coach.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4 sm:px-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            onClick={() => toggleIndex(index)}
            className={`cursor-pointer backdrop-blur-md bg-white/70 border rounded-2xl shadow-sm hover:shadow-lg transition-all px-6 py-5 ${
              activeIndex === index
                ? 'border-[#6246ea] ring-2 ring-[#6246ea]'
                : 'border-gray-200'
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-gray-600 text-sm overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ${JSON.stringify(
              faqs.map(({ question, answer }) => ({
                '@type': 'Question',
                name: question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: answer,
                },
              }))
            )}
          }
        `}
      </script>
    </section>
  )
}
