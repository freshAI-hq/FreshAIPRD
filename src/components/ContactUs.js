"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "lib/supabaseClient";
import Head from "next/head";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.email.includes("@") || !formData.name || !formData.message) {
      setError("Please fill out all fields with valid information.");
      return;
    }

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([{ ...formData, submitted_at: new Date().toISOString() }]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get in touch with us for any queries or support. Fill out the contact form to reach our team quickly."
        />
        <meta name="keywords" content="contact, customer support, get in touch, message us" />
        <meta name="author" content="[Your Company Name]" />
        <title>Contact Us - [Your Company Name]</title>
      </Head>

      <section
        id="contact"
        className="relative w-full py-16 px-6 sm:px-8 lg:px-12 bg-white"
        aria-label="Contact Us Section"
      >
        <div className="relative max-w-3xl mx-auto text-center z-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow hover:shadow-lg transition-shadow duration-300 max-w-xl mx-auto text-left">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-green-600 text-xl font-semibold"
                role="alert"
              >
                🎉 Thank you for reaching out! We'll get back to you soon.
              </motion.div>
            ) : (
              <>
                {error && (
                  <p
                    className="text-red-500 mb-6 font-medium"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-6 py-3 rounded-3xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                    required
                    aria-label="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-6 py-3 rounded-3xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                    required
                    aria-label="Your email"
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="px-6 py-3 rounded-3xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                    required
                    aria-label="Your message"
                  />
                  <button
                    type="submit"
                    className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-3xl text-lg font-semibold transition-shadow duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={submitted}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
