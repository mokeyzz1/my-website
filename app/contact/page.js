"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-900">Contact Me</h1>
      <p className="text-lg text-gray-600 mt-2">Fill out the form below, and I&apos;ll get back to you.</p>

      {submitted ? (
        <p className="text-green-600 mt-4">Message sent successfully! I&apos;ll reply soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg mt-6 w-full max-w-lg">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
            <input type="text" name="name" required className="mt-1 p-2 w-full border rounded" />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
            <input type="email" name="email" required className="mt-1 p-2 w-full border rounded" />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
            <textarea name="message" rows="4" required className="mt-1 p-2 w-full border rounded"></textarea>
          </label>

          <button 
            type="submit" 
            className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}
