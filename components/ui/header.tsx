"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

const navItems = [
  
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];
  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Get the target element
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate position with offset
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active section
      setActiveSection(targetId);
      
      // Update URL hash
      window.history.pushState(null, '', href);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.replace('#', ''),
        element: document.getElementById(item.href.replace('#', ''))
      }));
      
      const scrollPosition = window.scrollY + 100;

      // Find the current active section
      let currentSection = "home";
      
      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = "contact";
      }
      
      setActiveSection(currentSection);
    };

    // Run once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial page load with hash
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          setActiveSection(hash);
        }, 100);
      }
    }
  }, []);

  return (
    <header className="z-50 mt-2 w-full md:mt-5 fixed top-2 left-0 right-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Logo - FIXED: Showing "DEV Squad TECH" properly */}
          <div className="flex flex-1 items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  DEV Squad
                </span>
                <span className="text-xl font-bold text-white">TECH</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm transition-colors duration-300 relative group ${
                    activeSection === sectionId 
                      ? 'text-white font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                    activeSection === sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Get Quote Button */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-gray-900/95 backdrop-blur-md border border-gray-800 overflow-hidden animate-fadeIn z-50">
            <div className="p-6 space-y-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center justify-between py-3 font-medium transition-colors border-b border-gray-800 last:border-b-0 ${
                      activeSection === sectionId 
                        ? 'text-white bg-gray-800/50 px-4 -mx-4 rounded-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/30 px-4 -mx-4 rounded-lg'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === sectionId && (
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                    )}
                  </a>
                );
              })}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="block w-full text-center bg-gradient-to-t from-indigo-600 to-indigo-500 text-white px-4 py-3 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 shadow-lg"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}