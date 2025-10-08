'use client';
import React, { useState } from 'react';

// --- SVG Icons (to keep it self-contained) ---
const ArrowRightIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);

const DocumentTextIcon = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

const SparklesIcon = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.6-2.6L11.25 18l1.938-.648a3.375 3.375 0 002.6-2.6l.648-1.938 1.938.648a3.375 3.375 0 002.6 2.6l.648 1.938-.648 1.938a3.375 3.375 0 00-2.6 2.6L18.75 22.5l-1.852-1.938z" />
    </svg>
);

const BookOpenIcon = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-white font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-30 p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-wider">Japa<span className="text-indigo-400">Portal</span></a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-indigo-400 transition-colors">About Us</a>
            <div className="relative group">
                <button className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                    <span>Services</span>
                    <ChevronDownIcon />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <a href="/resume-builder" className="block px-4 py-2 text-sm text-slate-300 hover:bg-indigo-600 hover:text-white rounded-t-lg">Resume Builder</a>
                    <a href="/ask-ai" className="block px-4 py-2 text-sm text-slate-300 hover:bg-indigo-600 hover:text-white">Ask AI</a>
                    <a href="/ebook" className="block px-4 py-2 text-sm text-slate-300 hover:bg-indigo-600 hover:text-white rounded-b-lg">Ebook Resource</a>
                </div>
            </div>
            <a href="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</a>
            <a href="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex">
             <a href="/resume-builder" className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
               Get Started
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="md:hidden mt-4 bg-slate-800 rounded-lg p-4 space-y-2 text-center">
                <a href="/" className="block py-2 hover:text-indigo-400 transition-colors">Home</a>
                <a href="/about" className="block py-2 hover:text-indigo-400 transition-colors">About Us</a>
                <a href="/resume-builder" className="block py-2 hover:text-indigo-400 transition-colors">Resume Builder</a>
                <a href="/ask-ai" className="block py-2 hover:text-indigo-400 transition-colors">Ask AI</a>
                <a href="/ebook" className="block py-2 hover:text-indigo-400 transition-colors">Ebook Resource</a>
                <a href="/dashboard" className="block py-2 hover:text-indigo-400 transition-colors">Dashboard</a>
                <a href="/pricing" className="block py-2 hover:text-indigo-400 transition-colors">Pricing</a>
                <a href="/contact" className="block py-2 hover:text-indigo-400 transition-colors">Contact</a>
                <a href="/resume-builder" className="block w-full mt-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Get Started
                </a>
            </nav>
        )}
      </header>
    </div>
  );
}