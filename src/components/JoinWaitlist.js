"use client";
import { useState } from "react";
import { supabase } from "lib/supabaseClient";

export default function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("start");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage("Please enter your email");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const { data: existingUser, error: queryError } = await supabase
        .from("waitlist")
        .select("email")
        .eq("email", email)
        .maybeSingle();

      if (queryError) throw queryError;

      if (existingUser) {
        setStatus("already-joined");
        return;
      }

      setStatus("questions");
    } catch (err) {
      setErrorMessage(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionsSubmit = async (e) => {
    e.preventDefault();
    if (!question1 || !question2 || !question3) {
      setErrorMessage("Please answer all questions");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const { error: supabaseError } = await supabase.from("waitlist").insert([
        {
          email,
          question1,
          question2,
          question3,
          joined_at: new Date().toISOString(),
        },
      ]);

      if (supabaseError) throw supabaseError;

      const emailResponse = await fetch("/api/joinwaitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.warn("Email failed:", errorData);
      }

      setStatus("submitted");
    } catch (err) {
      console.error("Error:", err);
      setErrorMessage(err.message || "Submission failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative w-full py-16 px-6 bg-white"
      aria-label="Join Waitlist Section"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 leading-tight">
          Building Smarter, Safer Code Starts Here. ⚙️
          <br />
          Join the Waitlist for Early Access to Our AI-Driven Dev Platform.
        </h2>

        {status === "start" && (
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow hover:shadow-lg mt-8 max-w-xl mx-auto">
            <form onSubmit={handleEmailSubmit}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Be First to Try the Dev Tool That Combines Code Understanding,
                Testing, and Security — All Powered by AI.
              </h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="px-6 py-3 rounded-3xl w-full mb-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                required
                aria-label="Email address"
              />
              {errorMessage && (
                <p className="text-red-500 mb-4" role="alert">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#6366f1] hover:bg-[#4f46e5] w-full text-white px-6 py-3 rounded-3xl text-lg font-semibold transition-shadow duration-300 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Processing..." : "Join the Waitlist"}
              </button>
            </form>
          </div>
        )}

        {status === "questions" && (
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow hover:shadow-lg mt-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Help Us Tailor the Experience for You
            </h3>
            <form onSubmit={handleQuestionsSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  What part of your dev workflow feels most painful right now?
                </label>
                <textarea
                  value={question1}
                  onChange={(e) => setQuestion1(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  required
                  aria-label="Dev pain point"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  What tools do you currently use for code review, testing, or monitoring?
                </label>
                <textarea
                  value={question2}
                  onChange={(e) => setQuestion2(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  required
                  aria-label="Current tools"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  What would a perfect AI-powered dev tool help you achieve?
                </label>
                <textarea
                  value={question3}
                  onChange={(e) => setQuestion3(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  required
                  aria-label="Ideal outcome"
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 mb-4" role="alert">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#6366f1] hover:bg-[#4f46e5] w-full text-white px-6 py-3 rounded-3xl text-lg font-semibold transition-shadow duration-300 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Submitting..." : "Submit Your Answers"}
              </button>
            </form>
          </div>
        )}

        {status === "submitted" && (
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow hover:shadow-lg mt-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">🎉 You're On the List!</h3>
            <p className="text-gray-700 mb-4">
              Thanks for joining — your spot is saved! We’ll keep you updated at{" "}
              <strong>{email}</strong> as we roll out early access.
            </p>
          </div>
        )}

        {status === "already-joined" && (
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow hover:shadow-lg mt-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              You’re Already on the List!
            </h3>
            <p className="text-gray-700 mb-4">
              The email <strong>{email}</strong> is already signed up. Stay tuned — we’ll be in
              touch with early access updates.
            </p>
            <button
              onClick={() => setStatus("start")}
              className="mt-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-3xl text-lg font-semibold transition-shadow duration-300"
            >
              Back to Form
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
