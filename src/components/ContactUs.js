"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from 'lib/supabaseClient';
import Head from "next/head"; // Import next/head

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

    // Validate the form fields
    if (!formData.email.includes("@") || !formData.name || !formData.message) {
      setError("Please fill out all fields with valid information.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([{ ...formData, submitted_at: new Date() }]);

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
      {/* Use Next.js Head component to add SEO Meta Tags */}
      <Head>
        <meta name="description" content="Get in touch with us for any queries or support. Fill out the contact form to reach our team quickly." />
        <meta name="keywords" content="contact, customer support, get in touch, message us" />
        <meta name="author" content="[Your Company Name]" />
        <title>Contact Us - [Your Company Name]</title>
      </Head>

      {/* Contact Us Section */}
      <section
        className="relative py-16 bg-[#f8f9fc] px-6 sm:px-8 lg:px-16"
        id="contact"
      >
        {/* Floating Blobs for a dynamic background */}
        <motion.div
          initial={{ x: -120, y: -80 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
          className="absolute w-[350px] h-[350px] bg-gradient-to-br from-[#6246ea] to-[#3fc1c9] rounded-full opacity-30 blur-3xl top-[-100px] left-[-120px] z-0"
        />
        <motion.div
          initial={{ x: 80, y: 120 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
          className="absolute w-[250px] h-[250px] bg-gradient-to-tr from-[#e45858] to-[#6246ea] rounded-full opacity-30 blur-3xl bottom-[-100px] right-[-80px] z-0"
        />

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>

          {/* Form Container */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-green-600"
              >
                Thank you for reaching out! We'll get back to you soon.
              </motion.div>
            ) : (
              <>
                {/* Display error message if form validation fails */}
                {error && <div className="text-red-600 mb-4">{error}</div>}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-6 py-3 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-6 py-3 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
                    required
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="px-6 py-3 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[#6246ea] hover:bg-[#4e3ac9] text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md transition"
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
