'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideMessageCircle, LucideBot, LucideCreditCard, LucidePieChart } from "lucide-react";

const problems = [
  {
    icon: <LucideMessageCircle className="text-purple-500 w-8 h-8" />,
    title: "Difficulty Reaching the Right Audience",
    description: "FreshAI helps you automate outreach and engage with your ideal customers across multiple channels, ensuring you reach the right audience at the right time."
  },
  {
    icon: <LucideBot className="text-green-500 w-8 h-8" />,
    title: "Low Engagement and Traffic on Social Media",
    description: "With FreshAI, your social media is automatically managed with AI-powered content and engagement strategies, driving more traffic to your business."
  },
  {
    icon: <LucideCreditCard className="text-yellow-500 w-8 h-8" />,
    title: "Manual Outreach is Time-Consuming",
    description: "Automate your outreach efforts with FreshAI, reducing the time spent on manual lead generation and increasing the number of prospects you can engage."
  },
  {
    icon: <LucidePieChart className="text-red-500 w-8 h-8" />,
    title: "No Conversion Tracking",
    description: "FreshAI provides detailed analytics on your lead generation campaigns, helping you track conversions and optimize for better results."
  },
];

const ProblemSolving = () => {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();  // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedIndex((prevIndex) => (prevIndex + 1) % problems.length); // Loop through the problems array
    }, 3000); // Change this interval to control the speed of reveal

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section
      id="problem-solving"
      className="py-24 relative bg-gradient-to-r from-blue-50 via-white to-blue-100"
      aria-labelledby="problem-solving-heading"
      role="region"
      aria-label="How FreshAI Solves Lead Generation Problems"
    >
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 px-6">
        <div className="md:w-1/2 text-left flex flex-col justify-center items-start">
          <h2
            id="problem-solving-heading"
            className="text-4xl font-semibold text-gray-900 mb-4"
            role="heading"
            aria-level="2"
          >
            How FreshAI Solves Your Lead Generation Challenges
          </h2>
          <p className="text-lg text-gray-600">
            FreshAI helps businesses tackle their toughest lead generation problems and boost conversion rates. Here’s how we can help you.
          </p>
        </div>

        <div className="md:w-1/2 relative flex flex-col justify-center items-center space-y-12 h-[600px]">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: revealedIndex === index ? 1 : 0, y: revealedIndex === index ? 0 : 50 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              style={{
                left: index % 2 === 0 ? "10%" : "auto",
                right: index % 2 !== 0 ? "10%" : "auto",
                top: index < 2 ? "20%" : "50%",
              }}
            >
              {revealedIndex === index && (
                <motion.div
                  className="relative p-6 bg-white rounded-lg shadow-xl w-56 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255, 99, 132, 0.7)", // Glowing effect
                  }}
                  aria-labelledby={`problem-title-${index}`}
                  role="article"
                >
                  {/* Add alt text for accessibility */}
                  <div
                    className="text-purple-500 w-8 h-8"
                    aria-hidden="true"
                    title={problem.title}
                  >
                    {problem.icon}
                  </div>
                  <h3
                    id={`problem-title-${index}`}
                    className="text-xl font-semibold text-gray-900 mt-4"
                    role="heading"
                    aria-level="3"
                  >
                    {problem.title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">{problem.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
