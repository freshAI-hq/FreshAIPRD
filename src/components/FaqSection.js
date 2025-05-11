'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the 90-Day Challenge work?',
    answer:
      'The 90-Day Challenge is designed to help you grow your traffic consistently over three phases. In the first 30 days, we focus on setting up your goals, defining your audience, and launching your content. By day 60, we scale your growth and optimize your strategy based on data. By day 90, FreshAI automates your processes, allowing you to convert traffic into real leads and sales.',
  },
  {
    question: 'How was the 90-Day Challenge created?',
    answer:
      'The 90-Day Challenge was developed based on years of digital marketing expertise and data-driven insights. It incorporates proven strategies for building traffic, engaging with your audience, and converting that traffic into business results. The challenge is designed to be easy to follow, while maximizing results through automation and optimization using FreshAI’s technology.',
  },
  {
    question: 'What is FreshAI?',
    answer:
      'FreshAI is an AI-powered platform designed to streamline customer support, automate marketing tasks, and assist with CRM integration. It uses cutting-edge AI to handle social media conversations, automate appointments, and improve lead generation.',
  },
  {
    question: 'How does FreshAI integrate with social media platforms?',
    answer:
      'FreshAI easily integrates with popular social media platforms like Instagram, WhatsApp, LinkedIn, and Facebook. You simply connect your accounts through the dashboard, and the platform will handle customer interactions seamlessly.',
  },
  {
    question: 'Can FreshAI learn from my business content?',
    answer:
      'Yes! FreshAI can be trained using your website, PDFs, and other business materials. It learns your brand’s voice and responds in a way that feels personalized and authentic to your customers.',
  },
  {
    question: 'Do I need technical skills to set up FreshAI?',
    answer:
      'Not at all! FreshAI is built for ease of use, offering a no-code setup. Simply connect your channels, upload content, and you’re ready to start automating your customer support and marketing.',
  },
  {
    question: 'Can FreshAI assist with scheduling appointments?',
    answer:
      'Yes, FreshAI can handle appointment scheduling and even table reservations. It makes booking seamless for your customers, saving time for both sides.',
  },
  {
    question: 'How does FreshAI help with lead generation?',
    answer:
      'FreshAI uses AI-powered outreach methods to find and qualify leads. It scans business directories, social media platforms, and more to create targeted lead lists and send personalized outreach messages.',
  },
  {
    question: 'Which platforms does FreshAI support for marketing automation?',
    answer:
      'FreshAI supports a wide range of platforms for marketing automation, including Facebook, Instagram, LinkedIn, Reddit, Gmail, WhatsApp, and more. It centralizes all of your campaigns into one easy-to-use dashboard.',
  },
  {
    question: 'How does FreshAI optimize my advertising campaigns?',
    answer:
      'FreshAI analyzes the performance of your ads and provides actionable insights for optimization. It offers suggestions for budget allocation, audience targeting, and copy adjustments to help you maximize ROI.',
  },
  {
    question: 'Can FreshAI automate email campaigns?',
    answer:
      'Yes! FreshAI can create and automate email campaigns, from initial outreach to follow-ups. You can set up campaigns based on user behavior, and FreshAI will handle the sending and tracking for you.',
  },
  {
    question: 'What kind of customer support does FreshAI provide?',
    answer:
      'FreshAI provides 24/7 support via AI-powered chatbots that are trained to handle common questions. You can also integrate with live support teams for more complex issues. FreshAI ensures your customers always get the help they need.',
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
          Everything you need to know about FreshAI.
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does the 90-Day Challenge work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The 90-Day Challenge is designed to help you grow your traffic consistently over three phases. In the first 30 days, we focus on setting up your goals, defining your audience, and launching your content. By day 60, we scale your growth and optimize your strategy based on data. By day 90, FreshAI automates your processes, allowing you to convert traffic into real leads and sales."
                }
              },
              {
                "@type": "Question",
                "name": "How was the 90-Day Challenge created?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The 90-Day Challenge was developed based on years of digital marketing expertise and data-driven insights. It incorporates proven strategies for building traffic, engaging with your audience, and converting that traffic into business results. The challenge is designed to be easy to follow, while maximizing results through automation and optimization using FreshAI’s technology."
                }
              },
              // Add the rest of your FAQs here in the same format
            ]
          }
        `}
      </script>
    </section>
  )
}
