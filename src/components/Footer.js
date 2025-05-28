"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-indigo-500 mb-5 cursor-default">FreshAI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered testing workspace for developers — simplify code quality checks, automate tests, and gain real-time insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#how-it-works" className="hover:text-indigo-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#join-waitlist" className="hover:text-indigo-400 transition">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-indigo-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <p className="text-sm mb-3">Have questions? Reach out to our support team.</p>
            <a
              href="mailto:support@freshai.io"
              className="text-indigo-400 hover:text-indigo-600 transition text-sm font-medium"
            >
              support@freshai.io
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm select-none">
          &copy; {new Date().getFullYear()} FreshAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
