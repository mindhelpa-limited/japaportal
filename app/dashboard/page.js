// /app/dashboard/page.js

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- Re-using icons for consistency ---
const SparklesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.6-2.6L11.25 18l1.938-.648a3.375 3.375 0 002.6-2.6l.648-1.938 1.938.648a3.375 3.375 0 002.6 2.6l.648 1.938-.648 1.938a3.375 3.375 0 00-2.6 2.6L18.75 22.5l-1.852-1.938z" />
  </svg>
);

const DocumentTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const UserCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


export default function DashboardHomePage() {
  // Replace "Alex" with dynamic user data from your auth provider
  const userName = "Alex";
  const welcomeText = `Welcome back, ${userName}!`.split("");

  const quickLinks = [
    { name: 'Ask AI', href: '/dashboard/ask-ai', icon: SparklesIcon, description: 'Get instant answers to your relocation questions.' },
    { name: 'Update Resume', href: '/dashboard/resume-builder', icon: DocumentTextIcon, description: 'Fine-tune your resume for the next big opportunity.' },
    { name: 'Manage Profile', href: '/dashboard/profile', icon: UserCircleIcon, description: 'Keep your personal information up to date.' },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // delay between each character
      },
    },
  };

  // Animation variants for each character
  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {welcomeText.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          You're one step closer to your dream move. What would you like to do today?
        </motion.p>
      </div>

      {/* Quick Start Cards */}
      <motion.div
        className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        {quickLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl h-full flex flex-col items-start hover:bg-slate-700/70 hover:-translate-y-1 transition-all duration-300">
                <link.icon className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-xl font-semibold text-white">{link.name}</h3>
                <p className="text-slate-400 mt-1 flex-1">{link.description}</p>
                <span className="text-indigo-400 mt-4 font-semibold">Go &rarr;</span>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}