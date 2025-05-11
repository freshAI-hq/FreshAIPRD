'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from 'lib/supabaseClient';

export default function Survey() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('start');
  const [surveyAnswers, setSurveyAnswers] = useState(Array(8).fill(null));
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate email format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      // Check for existing email in Supabase
      const { data, error: fetchError } = await supabase
        .from('survey_responses')
        .select('email')
        .eq('email', email)
        .maybeSingle();

      if (fetchError) throw fetchError;
      if (data) throw new Error('This email has already completed the survey.');

      setStep('survey');
    } catch (err) {
      setError(err.message);
      console.error('Email check error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSurveyAnswer = (index, value) => {
    const newAnswers = [...surveyAnswers];
    newAnswers[index] = value;
    setSurveyAnswers(newAnswers);
  };

  const handleSubmitSurvey = async () => {
    setError('');
    setIsLoading(true);

    try {
      // Validate all questions answered
      if (surveyAnswers.includes(null)) {
        throw new Error('Please answer all questions');
      }

      // Submit to Supabase
      const { error: insertError } = await supabase
        .from('survey_responses')
        .insert([{
          email,
          responses: surveyAnswers
        }]);

      if (insertError) throw insertError;
      
      setStep('submitted');
    } catch (err) {
      setError(err.message);
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="leadmagnet" className="relative w-full py-16 px-6 bg-[#f8f9fc]">
      {/* Background Grid (Exact Match to Old Survey) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 leading-tight">
        Are you ready to start your business, launch a product, or SaaS? 
        Take the Survey and Get Recommendations on How to Drive Traffic
        </h2>

        {/* Start Step */}
        {step === 'start' && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setStep('email')}
            className="bg-[#6246ea] hover:bg-[#4e3ac9] text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg transition duration-300"
          >
            Start Survey
          </motion.button>
        )}

        {/* Email Step */}
        {step === 'email' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-8 max-w-xl mx-auto"
          >
            <form onSubmit={handleSubmitEmail}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Enter your email</h3>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
              />
              {error && (
                <div className="text-red-500 text-sm mt-2 mb-4">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`mt-4 bg-[#6246ea] hover:bg-[#4e3ac9] text-white px-6 py-3 rounded-xl text-lg font-medium w-full transition ${isLoading ? 'opacity-50' : ''}`}
              >
                {isLoading ? 'Checking...' : 'Continue'}
              </button>
            </form>
          </motion.div>
        )}

        {/* Survey Step */}
        {step === 'survey' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Please answer all questions:</h3>
            <div className="space-y-4">
              {[
                "Have you validated your product idea with your target audience?",
                "Is your product ready for public launch?",
                "Do you have clear success metrics?",
                "Do you have a customer acquisition strategy?",
                "Have you built a customer support system?",
                "Are you seeking investors or funding?",
                "Have you conducted user testing?",
                "Do you have a scaling plan?"
              ].map((question, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex justify-between items-center">
                  <p className="text-gray-900 font-medium">{question}</p>
                  <div className="flex items-center space-x-4 ml-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`q-${index}`}
                        checked={surveyAnswers[index] === true}
                        onChange={() => handleSurveyAnswer(index, true)}
                        className="h-4 w-4 text-[#6246ea] focus:ring-[#6246ea]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`q-${index}`}
                        checked={surveyAnswers[index] === false}
                        onChange={() => handleSurveyAnswer(index, false)}
                        className="h-4 w-4 text-[#6246ea] focus:ring-[#6246ea]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {error && (
              <div className="text-red-500 text-sm mt-4">
                {error}
              </div>
            )}
            <button
              onClick={handleSubmitSurvey}
              disabled={isLoading || surveyAnswers.some(a => a === null)}
              className={`mt-8 bg-[#6246ea] hover:bg-[#4e3ac9] text-white px-6 py-3 rounded-xl text-lg font-medium w-full transition ${isLoading ? 'opacity-50' : ''}`}
            >
              {isLoading ? 'Submitting...' : 'Submit Survey'}
            </button>
          </motion.div>
        )}

        {/* Submitted Step */}
        {step === 'submitted' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-8 max-w-xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Thank You!</h3>
            <p className="text-gray-700">
              Your responses have been recorded. We'll email your results to <span className="font-semibold text-[#6246ea]">{email}</span>.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}