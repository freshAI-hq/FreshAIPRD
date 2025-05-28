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
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" passHref>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold text-gray-900 cursor-pointer select-none"
          >
            FreshAI
          </motion.h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-10 text-gray-700 font-medium">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-gray-900 transition-colors duration-200 text-sm select-none"
              activeClass="text-gray-900 border-b-2 border-gray-900 pb-1"
              spy={true}
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Join Waitlist Button (Apple-style minimal) */}
        <div className="hidden md:flex">
          <a
            href="#waitlist"
            className="text-sm font-medium text-gray-900 border border-gray-900 rounded-md px-4 py-2 hover:bg-gray-900 hover:text-white transition select-none"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden text-gray-900 focus:outline-none"
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
            className="md:hidden bg-white border-t border-gray-200 px-6 py-4 w-full"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-gray-900 font-medium hover:text-gray-700 transition text-base text-center select-none"
                  activeClass="font-semibold"
                  spy={true}
                >
                  {item.name}
                </ScrollLink>
              ))}

              <a
                href="#waitlist"
                className="text-gray-900 border border-gray-900 rounded-md px-6 py-2 text-center font-medium hover:bg-gray-900 hover:text-white transition select-none"
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
