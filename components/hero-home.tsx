'use client';

import { useState, useEffect } from 'react';

export default function HeroHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: '250+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Industries Served' },
  ];

  const solutions = [
    'Website for local bakery',
    'Delivery app for pharmacy',
    'Inventory system for retailer',
    'Booking platform for yoga studio',
  ];

  // Simple fade-in animation using CSS
  const fadeInStyle = {
    animation: 'fadeIn 0.5s ease-out forwards',
  };

  // Custom styles for animations
  const floatAnimation = {
    animation: 'float 3s ease-in-out infinite',
  };

  const floatAnimationDelayed = {
    animation: 'float 3s ease-in-out infinite 0.5s',
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900/20">
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
        
        @keyframes gradient {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        .gradient-text {
          background: linear-gradient(to right, #818cf8, #a855f7, #ec4899);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradient 6s linear infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(to right, #4f46e5, #7c3aed, #ec4899);
        }
      `}</style>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            {/* Animated badge */}
            <div 
              style={mounted ? fadeInStyle : { opacity: 0 }}
              className="inline-flex items-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 text-indigo-200 px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
              data-aos="fade-up"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="font-semibold">Find an easier way to solve your problems</span>
            </div>

            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
              style={mounted ? fadeInStyle : { opacity: 0 }}
            >
              We Build{' '}
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-500),var(--color-pink-500))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Digital Solutions
              </span>{' '}
              For Any Problem
            </h1>
             
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
                style={mounted ? { ...fadeInStyle, animationDelay: '0.2s' } : { opacity: 0 }}
              >
                From simple websites to complex applications, we help businesses transform ideas into reality. 
                Tell us your problem, we'll build the solution.
              </p>

              {/* CTA Buttons */}
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div 
                  data-aos="fade-up" 
                  data-aos-delay={400}
                  style={mounted ? { ...fadeInStyle, animationDelay: '0.4s' } : { opacity: 0 }}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto flex items-center justify-center"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Discuss Your Project
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
                <div 
                  data-aos="fade-up" 
                  data-aos-delay={600}
                  style={mounted ? { ...fadeInStyle, animationDelay: '0.6s' } : { opacity: 0 }}
                >
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    View Our Work
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div 
              className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto"
              data-aos="fade-up"
              data-aos-delay={800}
              style={mounted ? { ...fadeInStyle, animationDelay: '0.8s' } : { opacity: 0 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-indigo-200/65 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Card Section */}
          <div 
            className="relative mt-12"
            style={mounted ? { ...fadeInStyle, animationDelay: '1s' } : { opacity: 0 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-white font-semibold">DEV Squad TECH Dashboard</div>
                  <div className="w-6"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <svg 
                      className="w-8 h-8 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Problem Solved!</h3>
                    <p className="text-indigo-200/65">Your custom solution is ready</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-xl bg-gray-800/30 hover:bg-indigo-900/20 transition-colors border border-gray-700/50"
                      style={mounted ? { 
                        ...fadeInStyle, 
                        animationDelay: `${1.2 + index * 0.1}s`,
                        transform: 'translateX(0)' 
                      } : { opacity: 0, transform: 'translateX(-20px)' }}
                    >
                      <svg 
                        className={`w-6 h-6 mr-4 ${index === 3 ? 'text-blue-400' : 'text-green-400'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-200 font-medium">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div 
              className="absolute -top-6 -right-6 hidden lg:block"
              style={floatAnimation}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mr-4 border border-purple-500/20">
                    <svg 
                      className="w-6 h-6 text-purple-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white">Mobile Apps</div>
                    <div className="text-sm text-indigo-200/65">iOS & Android</div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="absolute -bottom-6 -left-6 hidden lg:block"
              style={floatAnimationDelayed}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-900/30 rounded-xl flex items-center justify-center mr-4 border border-indigo-500/20">
                    <svg 
                      className="w-6 h-6 text-indigo-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white">Websites</div>
                    <div className="text-sm text-indigo-200/65">Responsive Design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}