'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: 'features' },
    { name: 'How It Works', href: 'how-it-works' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between overflow-hidden min-w-0">
        {/* Logo */}
        <Link href="/" passHref>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl font-bold text-[#6246ea] whitespace-nowrap cursor-pointer"
          >
            FreshAI
          </motion.h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center gap-4 text-gray-700 font-medium">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-[#6246ea] transition-colors duration-200 text-xs sm:text-sm"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-2 items-center">
          <ScrollLink
            to="leadmagnet"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer px-3 py-2 sm:px-4 sm:py-2.5 bg-[#6246ea] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#4e3ac9] transition"
          >
            Take the Survey
          </ScrollLink>
          <a
            href="#waitlist"
            className="px-3 py-2 sm:px-4 sm:py-2.5 border border-[#6246ea] text-[#6246ea] rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#f3f0ff] transition"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200 px-4 sm:px-6 py-3 w-full overflow-x-hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-gray-700 font-medium hover:text-[#6246ea] transition text-xs sm:text-sm max-w-full text-center"
                >
                  {item.name}
                </ScrollLink>
              ))}

              <ScrollLink
                to="leadmagnet"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 bg-[#6246ea] text-white rounded-xl text-xs sm:text-sm font-semibold text-center"
              >
                Take the Survey
              </ScrollLink>
              <a
                href="#waitlist"
                className="px-3 py-2 border border-[#6246ea] text-[#6246ea] rounded-xl text-xs sm:text-sm font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
