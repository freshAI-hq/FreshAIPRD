'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy explains how FreshAI ("we", "us", or "our") collects, uses, discloses, and protects your information when you use our website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Personal Information:</strong> Name, email, contact details, payment information.</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent, click activity, and analytics.</li>
        <li><strong>Device Info:</strong> Browser type, IP address, operating system, and cookies.</li>
        <li><strong>AI Interaction Data:</strong> Inputs, prompts, and generated responses from FreshAI tools.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain the FreshAI platform.</li>
        <li>To personalize your experience and content.</li>
        <li>To communicate with you, including marketing and updates (you can opt out).</li>
        <li>To improve our service and develop new features.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Cookies and Tracking</h2>
      <p className="mb-4">
        We use cookies and similar technologies to analyze traffic, personalize content, and remember user preferences. You can control cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell your personal data. We may share it with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Service providers who assist with hosting, analytics, email, and payments.</li>
        <li>Legal authorities when required by law.</li>
        <li>Third parties with your consent or to enforce our Terms.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Data Retention</h2>
      <p className="mb-4">
        We retain your data only as long as necessary to fulfill the purposes described in this policy or as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard measures to secure your data, including encryption, access controls, and secure servers. However, no system is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Your Rights</h2>
      <p className="mb-4">
        Depending on your location (e.g., under GDPR or CCPA), you may have rights to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Access or export your personal data.</li>
        <li>Correct or delete your data.</li>
        <li>Object to or restrict certain processing.</li>
        <li>Withdraw consent at any time.</li>
      </ul>
      <p className="mb-4">
        Contact us at <a href="mailto:support@freshai.io" className="text-[#6246ea] underline">privacy@freshai.co</a> to exercise these rights.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Children’s Privacy</h2>
      <p className="mb-4">
        FreshAI is not intended for use by children under 13 (or under 16 in the EU). We do not knowingly collect data from minors.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. If significant changes are made, we’ll notify you via email or through the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns about this policy, contact us at <a href="mailto:support@freshai.io" className="text-[#6246ea] underline">support@freshai.co</a>.
      </p>

      <p className="mt-10 text-sm text-gray-500">Last updated: May 8, 2025</p>
    </section>
  );
}
