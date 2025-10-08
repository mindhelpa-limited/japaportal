'use client';
import React from 'react';

// --- SVG Icons (self-contained for portability) ---
const SendIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
        {children}
    </a>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const LinkedInIcon = () => (
     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
    </svg>
);


export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and About */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="JapaPortal Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-white tracking-wider">Japa<span className="text-indigo-400">Portal</span></span>
            </div>
            <p className="text-slate-400 text-sm">
              Your all-in-one platform to navigate your journey abroad with confidence. Build resumes, get AI-powered advice, and access essential resources.
            </p>
            <div className="flex space-x-4 pt-2">
                <SocialIcon href="https://facebook.com"><FacebookIcon /></SocialIcon>
                <SocialIcon href="https://twitter.com"><TwitterIcon /></SocialIcon>
                <SocialIcon href="https://linkedin.com"><LinkedInIcon /></SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="text-slate-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="/resume-builder" className="text-slate-400 hover:text-indigo-400 transition-colors">Resume Builder</a></li>
              <li><a href="/pricing" className="text-slate-400 hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/ask-ai" className="text-slate-400 hover:text-indigo-400 transition-colors">Ask Japa AI</a></li>
              <li><a href="/ebook" className="text-slate-400 hover:text-indigo-400 transition-colors">Ebook Guide</a></li>
              <li><a href="/blog" className="text-slate-400 hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="/privacy-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-slate-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold tracking-wider">Stay Updated</h3>
            <p className="mt-4 text-slate-400 text-sm">Subscribe to our newsletter for the latest tips and updates for your journey.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-slate-800 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
              />
              <button 
                type="submit" 
                className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors flex items-center justify-center"
                aria-label="Subscribe to newsletter"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} JapaPortal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}