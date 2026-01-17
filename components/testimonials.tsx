"use client";
// process page

import { useState, useEffect } from "react";

export default function Process() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Discover',
      description: 'We listen to understand your problem, business goals, and user needs.',
      tag: 'Consultation',
      color: 'purple',
    },
    {
      number: 2,
      title: 'Design',
      description: 'We create wireframes, prototypes, and design the user experience.',
      tag: 'Prototyping',
      color: 'cyan',
    },
    {
      number: 3,
      title: 'Develop',
      description: 'We build your solution using the latest technologies and best practices.',
      tag: 'Development',
      color: 'amber',
    },
    {
      number: 4,
      title: 'Deploy',
      description: 'We launch, monitor, and provide ongoing support for your solution.',
      tag: 'Launch & Support',
      color: 'green',
    },
  ];

  const fadeInStyle = (delay: number) => ({
    animation: `fadeIn 0.5s ease-out ${delay}s forwards`,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Our Process
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            How We{' '}
            <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-500),var(--color-pink-500))] bg-[length:200%_auto] bg-clip-text text-transparent">
              Solve Problems
            </span>
          </h2>
          <p className="text-lg text-indigo-200/65">
            A structured approach to ensure we deliver the right solution for your specific needs.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-transparent hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center relative"
                style={mounted ? fadeInStyle(index * 0.1) : { opacity: 0 }}
              >
                {/* Step number circle */}
                <div className="relative mx-auto mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative z-10 shadow-lg shadow-indigo-500/20">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  {/* Floating animation for odd steps */}
                  {index % 2 === 0 && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-xl animate-pulse"></div>
                  )}
                </div>

                {/* Step content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-indigo-200/65 mb-4">{step.description}</p>
                
                {/* Step tag */}
                <div className="mt-4">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-3 py-1 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    <span className={`bg-clip-text text-transparent ${
                      step.color === 'purple' ? 'bg-gradient-to-r from-indigo-500 to-purple-400' :
                      step.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-blue-400' :
                      step.color === 'amber' ? 'bg-gradient-to-r from-amber-400 to-orange-400' :
                      'bg-gradient-to-r from-green-400 to-emerald-400'
                    }`}>
                      {step.tag}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA within Process */}
        <div 
          className="mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12"
          style={mounted ? fadeInStyle(0.5) : { opacity: 0 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Solve Your Problem?</h3>
              <p className="text-indigo-200/65 text-lg">Schedule a free consultation with our experts. No obligation, just honest advice about your project.</p>
            </div>
            <div className="lg:w-1/3 text-center lg:text-right">
              <a 
                href="#contact" 
                className="btn group w-full lg:w-auto bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] flex items-center justify-center"
              >
                <span className="relative inline-flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Free Consultation
                  <svg 
                    className="ml-1 w-5 h-5 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5"
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
  );
}