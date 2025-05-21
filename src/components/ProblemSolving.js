'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideMessageCircle, LucideBot, LucideCreditCard, LucidePieChart } from "lucide-react";

const weeklyChallenges = [
  {
    icon: <LucideMessageCircle className="text-purple-500 w-8 h-8" />,
    title: "Week 1: Define Goals & Initial Outreach",
    description: "Set your business goals and start automating outreach to engage your ideal customers effectively.",
  },
  {
    icon: <LucideBot className="text-green-500 w-8 h-8" />,
    title: "Week 2: Analyze Feedback & Refine Tactics",
    description: "Review engagement data and feedback. Let your AI coach help adjust your strategies to boost results.",
  },
  {
    icon: <LucideCreditCard className="text-yellow-500 w-8 h-8" />,
    title: "Week 3: Enhance Content & Marketing",
    description: "Optimize your marketing content with AI-powered insights to drive higher engagement and traffic.",
  },
  {
    icon: <LucidePieChart className="text-red-500 w-8 h-8" />,
    title: "Week 4: Track Results & Plan Next Steps",
    description: "Deep dive into conversion analytics, measure progress, and receive a tailored plan for sustained growth.",
  },
];

const ProblemSolving = () => {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedIndex((prevIndex) => (prevIndex + 1) % weeklyChallenges.length);
    }, 4000); // slower interval for better reading

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="weekly-problem-solving"
      className="py-24 relative bg-gradient-to-r from-blue-50 via-white to-blue-100"
      aria-labelledby="weekly-problem-solving-heading"
      role="region"
      aria-label="How AI Coach Solves Weekly Business Challenges"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 px-6">
        <div className="md:w-1/2 text-left flex flex-col justify-center items-start">
          <h2
            id="weekly-problem-solving-heading"
            className="text-4xl font-semibold text-gray-900 mb-4"
            role="heading"
            aria-level="2"
          >
            How Your AI Coach Solves Weekly Business Challenges
          </h2>
          <p className="text-lg text-gray-600">
            Each week, receive tailored solutions and strategies from your AI coach, designed to refine your approach and accelerate growth.
          </p>
        </div>

        <div className="md:w-1/2 relative flex flex-col justify-center items-center space-y-12 h-[600px]">
          {weeklyChallenges.map((challenge, index) => (
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
              aria-hidden={revealedIndex !== index}
            >
              {revealedIndex === index && (
                <motion.div
                  className="relative p-6 bg-white rounded-lg shadow-xl w-56 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)", // blue glowing effect
                  }}
                  aria-labelledby={`challenge-title-${index}`}
                  role="article"
                >
                  <div
                    className="w-8 h-8"
                    aria-hidden="true"
                    title={challenge.title}
                  >
                    {challenge.icon}
                  </div>
                  <h3
                    id={`challenge-title-${index}`}
                    className="text-xl font-semibold text-gray-900 mt-4"
                    role="heading"
                    aria-level="3"
                  >
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">{challenge.description}</p>
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
