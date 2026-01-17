"use client";

/**Contact Page */

import { useState, useEffect } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const budgetOptions = [
    { label: 'R5k - R10k', value: '5-10k' },
    { label: 'R10k - R25k', value: '10-25k' },
    { label: 'R25k+', value: '25k-plus' },
  ];

  const problemOptions = [
    'Need a website for my business',
    'Want to build a mobile app',
    'Looking for e-commerce solution',
    'Have inefficient manual processes',
    'Need to modernize existing software',
    'Other (describe below)',
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Simple websites: 2-4 weeks. Complex applications: 8-16 weeks. We provide detailed timelines after understanding your requirements."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We specialize in MVP development for startups and offer flexible engagement models for early-stage companies."
    },
    {
      question: "What if I don't know exactly what I need?",
      answer: "That's why we're here! We offer discovery workshops to help clarify your needs and define the right solution for your business."
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  const fadeInStyle = (delay: number) => ({
    animation: `fadeIn 0.5s ease-out ${delay}s forwards`,
  });

  return (
    <section className="relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Tell Us About{' '}
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-500),var(--color-pink-500))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Your Problem
              </span>
            </h2>
            <p className="text-lg text-indigo-200/65">
              Describe your challenge and we'll propose a solution tailored to your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              className="relative"
              style={mounted ? fadeInStyle(0.1) : { opacity: 0 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Problem Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      What's Your Problem? *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors appearance-none"
                    >
                      <option value="" disabled selected>
                        Select the closest match
                      </option>
                      {problemOptions.map((problem, index) => (
                        <option key={index} value={problem}>
                          {problem}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Describe Your Challenge *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors resize-none"
                      placeholder="Tell us about your business, your challenges, and what you hope to achieve..."
                    />
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSelectedBudget(option.value)}
                          className={`px-4 py-2 rounded-xl border transition-all text-sm ${
                            selectedBudget === option.value
                              ? 'border-indigo-500 bg-indigo-900/30 text-indigo-200'
                              : 'border-gray-700 text-gray-400 hover:border-indigo-400 hover:text-indigo-200'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] flex items-center justify-center py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative inline-flex items-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Your Problem
                          <svg 
                            className="ml-1 w-5 h-5 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-center text-indigo-200/65 text-sm">
                    We'll respond within 24 hours with initial thoughts on your solution.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-gray-700/50 p-8"
                style={mounted ? fadeInStyle(0.2) : { opacity: 0 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mr-4 border border-indigo-500/20">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Visit Our Office</h4>
                      <p className="text-indigo-200/65">123 Tech Street, San Francisco, CA 94107</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mr-4 border border-indigo-500/20">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Call Us</h4>
                      <p className="text-indigo-200/65">+1 (555) 123-4567</p>
                      <p className="text-sm text-indigo-200/50">Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mr-4 border border-indigo-500/20">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email Us</h4>
                      <p className="text-indigo-200/65">solutions@devsquadtech.com</p>
                      <p className="text-sm text-indigo-200/50">Response within 24 hours</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mr-4 border border-indigo-500/20">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Business Hours</h4>
                      <p className="text-indigo-200/65">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-indigo-200/65">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div 
                style={mounted ? fadeInStyle(0.3) : { opacity: 0 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details 
                      key={index} 
                      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 hover:border-indigo-500/30 transition-colors"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h4 className="font-bold text-white group-open:text-indigo-300">
                          {faq.question}
                        </h4>
                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-indigo-200/65">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}