"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Head from "next/head";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const blob1X = useTransform(mouseX, [0, windowWidth], [-20, 20]);
  const blob1Y = useTransform(mouseY, [0, windowHeight], [-20, 20]);
  const blob2X = useTransform(mouseX, [0, windowWidth], [20, -20]);
  const blob2Y = useTransform(mouseY, [0, windowHeight], [20, -20]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <>
      <Head>
        <title>AI Growth Engine - Your Smart Business Partner</title>
        <meta
          name="description"
          content="Your AI Co-Founder helps you make smart decisions, giving weekly report cards and a clear 30-day plan to grow your business."
        />
        <meta
          name="keywords"
          content="AI co-founder, business coach, smart decisions, weekly report card, 30-day plan"
        />
        <meta name="author" content="Your Company" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-x-hidden">
        <section
          onMouseMove={!isMobile ? handleMouseMove : undefined}
          className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-6 overflow-hidden pt-[72px] md:pt-0"
          style={{
            backgroundColor: "#f8f9fc",
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent)",
            backgroundSize: "40px 40px",
          }}
        >
          {!isMobile && (
            <>
              <motion.div
                style={{ x: blob1X, y: blob1Y }}
                className="absolute max-w-full w-[400px] h-[400px] bg-gradient-to-br from-[#6246ea] to-[#e45858] rounded-full opacity-30 blur-3xl top-[-150px] left-[-150px] z-0"
              />
              <motion.div
                style={{ x: blob2X, y: blob2Y }}
                className="absolute max-w-full w-[300px] h-[300px] bg-gradient-to-tr from-[#3fc1c9] to-[#e45858] rounded-full opacity-30 blur-3xl bottom-[-150px] right-[-100px] z-0"
              />
            </>
          )}

          <div className="relative z-10 flex w-full max-w-6xl mx-auto flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              {isMobile ? (
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-[#6246ea] to-[#e45858] text-transparent bg-clip-text">
                    AI Growth Engine
                  </span>
                </h1>
              ) : (
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                >
                  <span className="bg-gradient-to-r from-[#6246ea] to-[#e45858] text-transparent bg-clip-text">
                    AI Growth Engine
                  </span>
                </motion.h1>
              )}
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-8 flex flex-col items-start">
              {isMobile ? (
                <>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    Helping You Make Smart Business Decisions and Grow Faster
                  </h2>
                  <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-900 max-w-3xl">
                    Get weekly report cards, personalized advice, and a clear 30-day plan — just like having a trusted co-founder by your side.
                  </p>
                  <a
                    href="#waitlist"
                    className="inline-block mt-6 sm:mt-8 bg-[#6246ea] hover:bg-[#4e3ac9] text-white px-6 py-3 rounded-xl text-base sm:text-lg font-medium shadow-md"
                  >
                    Get Started
                  </a>
                </>
              ) : (
                <>
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"
                  >
                    Helping You Make Smart Business Decisions and Grow Faster
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-900 max-w-3xl"
                  >
                    Get weekly report cards, personalized advice, and a clear 30-day plan — just like having a trusted co-founder by your side.
                  </motion.p>
                  <motion.a
                    href="#waitlist"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-6 sm:mt-8 bg-[#6246ea] hover:bg-[#4e3ac9] text-white px-6 py-3 rounded-xl text-base sm:text-lg font-medium shadow-md"
                  >
                    Get Started
                  </motion.a>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
