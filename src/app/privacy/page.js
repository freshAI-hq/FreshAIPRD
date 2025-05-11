'use client';
import React from 'react';
import PrivacyPolicy from '@components/privacy';
//import PrivacyPolicy from '../../components/PrivacyPolicy';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <PrivacyPolicy />
    </main>
  );
}
