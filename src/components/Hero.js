"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const imgRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseMove(e) {
    if (isMobile) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * -5;
    controls.start({
      rotateX,
      rotateY,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    });
  }

  function handleMouseLeave() {
    controls.start({ rotateX: 0, rotateY: 0, transition: { duration: 0.5 } });
  }

  return (
    <main className="bg-white min-h-screen flex items-center justify-center px-6 md:px-10">
      <section className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between py-20">
        {/* TEXT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight"
          >
            Secure, Test, and Ship Code Smarter <br />
            with <span className="text-[#6366f1]">AI Automation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            From code understanding and security to testing and monitoring —
            everything your team needs in one intelligent platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#waitlist"
              className="inline-block bg-[#6366f1] text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-indigo-700 transition"
            >
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="inline-block text-gray-700 px-6 py-3 rounded-xl text-base font-medium hover:underline"
            >
              See Features →
            </a>
          </motion.div>
        </div>

        {/* IMAGE SECTION */}
        <motion.div
          ref={imgRef}
          animate={controls}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center cursor-pointer rounded-xl shadow-xl border border-gray-100"
          style={{ perspective: 1000 }}
        >
          <Image
            src="/images/img1.png"
            alt="AI Platform Dashboard Preview"
            width={600}
            height={400}
            priority
            className="rounded-xl"
            draggable={false}
          />
        </motion.div>
      </section>
    </main>
  );
}
