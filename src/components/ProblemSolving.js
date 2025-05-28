'use client';

import React, { useEffect, useState } from 'react';

const features = [
  {
    title: 'Code Understanding',
    description:
      'Interactive logic visualizer, AI-powered code explanation, and auto-generated documentation tailored for developers, PMs, and QA.',
    timeSaved: 'Up to 30% reduction (~12 hours/week) in debugging & onboarding time',
    roiImpact:
      'Faster feature delivery, fewer bugs, and improved team collaboration reduce development costs.',
  },
  {
    title: 'Code Quality & Security',
    description:
      'Static vulnerability scanning, AI fix suggestions, dead code detection, and safe removal to keep your codebase secure and clean.',
    timeSaved: '50% faster vulnerability detection (~6 hours/week) and patching',
    roiImpact:
      'Minimizes security risks and costly breaches, lowers maintenance costs, and improves product reliability.',
  },
  {
    title: 'Testing Support',
    description:
      'End-to-end flow simulation, AI-generated test cases, coverage heatmaps, and flow integrity alerts for robust test management.',
    timeSaved: '40% reduction (~8 hours/week) in manual test creation and debugging',
    roiImpact:
      'Higher test coverage leads to fewer defects and reduced customer support costs.',
  },
  {
    title: 'Dashboard & Monitoring',
    description:
      'Unified dashboard, issue tracker, fix suggestions feed, GitHub sync, and continuous background monitoring of code health and risks.',
    timeSaved: 'Saves ~20 hours/week on manual tracking and issue triage',
    roiImpact:
      'Early detection of issues improves uptime and customer satisfaction.',
  },
  {
    title: 'Export & Integration',
    description:
      'Export docs and flow maps, one-click PR fixes, GitHub/GitLab integration, and optional Jira/issue tracker sync.',
    timeSaved: 'Streamlines workflows, saving ~5 hours/week on documentation and deployment',
    roiImpact:
      'Automated processes reduce delays and improve cross-team coordination.',
  },
];

export default function ProblemSolving() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="problem-solving"
      className="py-20 px-6 bg-gray-50"
      aria-labelledby="problem-solving-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="problem-solving-title"
          className="text-4xl font-extrabold text-gray-900 mb-6 text-center"
        >
          Why Developers Need These AI-Powered Features — And How They Deliver ROI
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Discover how these core features save development time, reduce risks, and boost overall return on investment.
        </p>
        <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto mb-12 italic">
          *Time saved is approximate and based on industry averages for mid-sized dev teams.*
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-left">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-4 font-semibold text-gray-800 border-b border-gray-300">Feature</th>
                <th className="py-3 px-4 font-semibold text-gray-800 border-b border-gray-300">How It Helps Developers</th>
                <th className="py-3 px-4 font-semibold text-gray-800 border-b border-gray-300">Time Saved</th>
                <th className="py-3 px-4 font-semibold text-gray-800 border-b border-gray-300">ROI Impact</th>
              </tr>
            </thead>
            <tbody>
              {features.map(({ title, description, timeSaved, roiImpact }, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="py-4 px-4 font-semibold text-gray-900 align-top w-48">{title}</td>
                  <td className="py-4 px-4 text-gray-700 align-top max-w-xl">{description}</td>
                  <td className="py-4 px-4 text-gray-700 align-top w-48">{timeSaved}</td>
                  <td className="py-4 px-4 text-gray-700 align-top max-w-xl">{roiImpact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
