"use client";
import { useState } from 'react';
import { supabase } from 'lib/supabaseClient';
//import { supabase } from '@/lib/supabaseClient'; // Use your existing initialization

export default function JoinWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('start');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const { data: existingUser, error: queryError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .maybeSingle();

      if (queryError) throw queryError;

      if (existingUser) {
        setStatus('already-joined');
        return;
      }

      setStatus('questions');
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionsSubmit = async (e) => {
    e.preventDefault();
    if (!question1 || !question2 || !question3) {
      setErrorMessage('Please answer all questions');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{
          email,
          question1,
          question2,
          question3,
          joined_at: new Date().toISOString()
        }]);

      if (supabaseError) throw supabaseError;

      // Trigger email
      const emailResponse = await fetch('/api/joinwaitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.warn('Email failed:', errorData);
      }

      setStatus('submitted');
    } catch (err) {
      console.error("Error:", err);
      setErrorMessage(err.message || 'Submission failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative w-full py-16 px-6 bg-[#f8f9fc]">
      <div className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.04) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.04) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.04) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.04) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 leading-tight">
          Ready to 10x Your Traffic? 🚀
          <br /> 
          Join the Waitlist Now and Unlock Exclusive Early Access to Game-Changing Tools!
        </h2>

        {status === 'start' && (
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-8 max-w-xl mx-auto">
            <form onSubmit={handleEmailSubmit}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Get First Access to Tools That Will Skyrocket Your Growth!
              </h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="px-6 py-3 rounded-xl w-full mb-4 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
                required
              />
              {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#6246ea] hover:bg-[#4e3ac9] w-full text-white px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Processing...' : 'Join the Waitlist Now'}
              </button>
            </form>
          </div>
        )}

        {status === 'questions' && (
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              We'd Love to Know More About You!
            </h3>
            <form onSubmit={handleQuestionsSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  What problem are you hoping to solve with our tools?
                </label>
                <textarea
                  value={question1}
                  onChange={(e) => setQuestion1(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  What specific feature excites you most?
                </label>
                <textarea
                  value={question2}
                  onChange={(e) => setQuestion2(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  How will this help your business?
                </label>
                <textarea
                  value={question3}
                  onChange={(e) => setQuestion3(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6246ea]"
                  required
                />
              </div>
              {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#6246ea] hover:bg-[#4e3ac9] w-full text-white px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Processing...' : 'Submit Your Answers'}
              </button>
            </form>
          </div>
        )}

        {status === 'submitted' && (
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">🎉 Thank You for Joining!</h3>
            <p className="text-gray-700 mb-4">
              You're officially on the waitlist! We've sent a confirmation to <strong>{email}</strong>. 
              We'll notify you when we launch.
            </p>
          </div>
        )}

        {status === 'already-joined' && (
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">You're Already Registered!</h3>
            <p className="text-gray-700 mb-4">
              The email <strong>{email}</strong> is already on our waitlist. We'll notify you when we launch.
            </p>
            <button
              onClick={() => setStatus('start')}
              className="mt-4 bg-[#6246ea] hover:bg-[#4e3ac9] text-white px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300"
            >
              Back to Form
            </button>
          </div>
        )}
      </div>
    </section>
  );
}