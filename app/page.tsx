"use client";

import { useState } from "react";

export default function Home() {
  const [jobTitle, setJobTitle] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateQuestions = async () => {
    setError("");
    setQuestions("");

    if (!jobTitle.trim()) {
      setError("Please enter a job title.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobTitle }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate questions");
      }

      setQuestions(data.questions);
    } catch (err) {
      setError("Failed to generate interview questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          AI Interview Question Generator
        </h1>

        <input
          type="text"
          placeholder="Enter a job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <button
          onClick={generateQuestions}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>

        {error && (
          <p className="text-red-500 mt-4 text-sm">
            {error}
          </p>
        )}

        {questions && (
          <div className="mt-6 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border">
            {questions}
          </div>
        )}
      </div>
    </main>
  );
}
