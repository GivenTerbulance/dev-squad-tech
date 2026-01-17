'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Solutions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInStyle = (delay: number) => ({
    animation: `fadeIn 0.5s ease-out ${delay}s forwards`,
  });

  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Business Needs Online Presence',
      description: 'We build professional websites that attract customers and showcase your products/services effectively.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Inefficient Manual Processes',
      description: 'We automate workflows with custom software that saves time, reduces errors, and increases productivity.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-6.65a4.5 4.5 0 00-8.9 0" />
        </svg>
      ),
      title: 'Difficulty Reaching Customers',
      description: 'We develop mobile apps and responsive websites that connect you with your audience wherever they are.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Lack of Data Insights',
      description: 'We create dashboards and analytics tools that transform your data into actionable business intelligence.',
    },
  ];

  const steps = [
    { number: 1, title: 'You Share Your Problem', description: 'Tell us about your business challenge' },
    { number: 2, title: 'We Design The Solution', description: 'Our experts create a tailored plan' },
    { number: 3, title: 'Build & Launch', description: 'We develop and deploy your solution' },
    { number: 4, title: 'Grow Your Business', description: 'Watch your problem turn into success' },
  ];

  return (
    <section className="relative">
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
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Problems We Solve
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              We Build Solutions For{' '}
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-500),var(--color-pink-500))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Any Challenge
              </span>
            </h2>
            <p className="text-lg text-indigo-200/65">
              Whether you're a startup, small business, or enterprise, we create digital solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Problems List */}
            <div>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 hover:border-indigo-500/30 transition-all duration-300"
                    style={mounted ? fadeInStyle(index * 0.1) : { opacity: 0 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <div className="text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300">
                          {problem.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {problem.title}
                        </h3>
                        <p className="text-indigo-200/65">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Visual */}
            <div className="relative">
              <div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 shadow-2xl"
                style={mounted ? fadeInStyle(0.4) : { opacity: 0 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center mb-8">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Your Idea → Our Solution</h3>
                  <p className="text-indigo-100/80">We turn problems into opportunities</p>
                </div>
                
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div 
                      key={step.number} 
                      className="flex items-center"
                      style={mounted ? fadeInStyle(0.6 + index * 0.1) : { opacity: 0 }}
                    >
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold text-indigo-600">{step.number}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-indigo-100/80">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center btn group w-full bg-white text-indigo-600 hover:bg-indigo-50 transition-all duration-300 rounded-full font-bold shadow-lg"
                  >
                    <span className="relative inline-flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Tell Us Your Problem
                      <svg 
                        className="ml-1 w-5 h-5 tracking-normal text-indigo-600/50 transition-transform group-hover:translate-x-0.5"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}