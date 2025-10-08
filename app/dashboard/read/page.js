// /app/dashboard/read/page.js

'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Icon ---
const BookOpenIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export default function ReadPage() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-3000"></div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <BookOpenIcon className="w-24 h-24 text-slate-500" />
        </motion.div>

        <motion.h1
          className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Knowledge Hub is Coming Soon
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-lg text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We're currently curating in-depth guides, success stories, and expert articles to help you on your relocation journey.
        </motion.p>

        <motion.div
          className="mt-6 font-semibold text-indigo-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Please stay tuned!
        </motion.div>
      </div>
    </section>
  );
}