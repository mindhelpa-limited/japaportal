// /app/ask-ai/page.js

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

// --- Reusable Animation Component ---
const AnimatedSection = ({ children, className }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// --- Icons for Scope Section ---
const GlobeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);
const BriefcaseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.98a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.52-1.42l3.5-4.5a2.25 2.25 0 012.87-.5l.91.68a2.25 2.25 0 002.87-.5l.91-.68a2.25 2.25 0 012.87.5l3.5 4.5a2.25 2.25 0 01.52 1.42zM3.75 12h16.5" />
    </svg>
);
const PassportIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5A.75.75 0 014.5 3h15a.75.75 0 01.75.75v15a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5m-7.5 3h7.5m-7.5 3h7.5m-7.5 3h7.5M12 5.25v13.5" />
    </svg>
);


export default function AskAiPage() {
    
    return (
        <div className="bg-slate-900 text-white font-sans">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 rounded-b-full z-0"></div>
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
                        <div className="text-center md:text-left">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                                Your 24/7 Relocation AI Expert
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 text-lg text-slate-300">
                                Stop the endless searching. Get instant, accurate answers to your toughest questions about visas, jobs, and moving to any country in the world.
                            </motion.p>
                             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                <a
                                    href="#pricing"
                                    className="mt-10 inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    Ask Your First Question
                                </a>
                            </motion.div>
                        </div>
                        {/* Animated Chat Interface */}
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.0 }} className="bg-slate-800/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="space-y-4">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.5 }} className="p-3 rounded-lg bg-slate-700 max-w-xs">
                                    <p className="text-sm">What are the main requirements for the UK Skilled Worker visa?</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8, duration: 0.5 }} className="p-3 rounded-lg bg-indigo-600 max-w-xs ml-auto">
                                    <p className="text-sm font-semibold">Japa AI is typing...</p>
                                </motion.div>
                                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5, duration: 0.5 }} className="p-4 rounded-lg bg-slate-700 max-w-full">
                                    <p className="text-sm">You need a certificate of sponsorship from a licensed employer, proof of English proficiency, and meet a minimum salary threshold. I can provide the exact salary figures for your specific occupation...</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- Problem/Solution Section --- */}
                <AnimatedSection className="py-20 sm:py-28">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tired of Conflicting Information?</h2>
                            <p className="mt-4 text-lg text-slate-400">The path to relocation is filled with outdated blog posts, confusing government websites, and expensive consultants who give slow replies. It's a maze designed to be frustrating.</p>
                        </div>
                         <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                             <h3 className="text-2xl font-bold text-indigo-400">The Japa AI Solution</h3>
                             <p className="mt-3 text-slate-300">We provide one source of truth. Our AI is your always-on, expert guide, delivering clear, concise, and up-to-date information in seconds, not days.</p>
                         </div>
                    </div>
                </AnimatedSection>

                {/* --- Scope Section --- */}
                <AnimatedSection className="py-20 sm:py-28 bg-slate-950/50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ask Anything, About Anywhere.</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">Our knowledge base covers every aspect of relocation for every country. If you can ask it, we can answer it.</p>
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-slate-800 p-6 rounded-xl text-left"><GlobeIcon className="w-8 h-8 text-indigo-400"/> <h3 className="mt-4 text-xl font-semibold">Visa Pathways</h3> <p className="mt-1 text-slate-400">Skilled worker, student, family sponsorship, digital nomad, and more.</p></div>
                            <div className="bg-slate-800 p-6 rounded-xl text-left"><BriefcaseIcon className="w-8 h-8 text-purple-400"/> <h3 className="mt-4 text-xl font-semibold">Job Market Insights</h3> <p className="mt-1 text-slate-400">In-demand jobs, salary expectations, and local hiring practices.</p></div>
                            <div className="bg-slate-800 p-6 rounded-xl text-left"><PassportIcon className="w-8 h-8 text-sky-400"/> <h3 className="mt-4 text-xl font-semibold">Citizenship & Passports</h3> <p className="mt-1 text-slate-400">Naturalization requirements, investment programs, and timelines.</p></div>
                        </div>
                    </div>
                </AnimatedSection>
                
                {/* --- Technology Section --- */}
                <AnimatedSection className="py-20 sm:py-28 container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powered by Verifiable Data</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">Japa AI isn't just a chatbot. It's a sophisticated engine trained on a massive library of official immigration documents, embassy guidelines, legal statutes, and real-world data points, updated continuously.</p>
                         <div className="mt-8 border-2 border-indigo-500/30 rounded-xl max-w-lg mx-auto p-6 bg-slate-800/30">
                            <p className="font-mono text-indigo-300">Trust in every answer.</p>
                         </div>
                    </div>
                </AnimatedSection>

                {/* --- Final CTA / Pricing Section --- */}
                 <AnimatedSection id="pricing" className="pb-20 sm:pb-28 container mx-auto px-6">
                    <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 md:p-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unlock Unlimited Expert Knowledge</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100">
                           Stop guessing and start getting the right answers. Gain the confidence to make your dream move a reality.
                        </p>
                        <a 
                            href="/pricing"
                            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow-lg hover:bg-slate-100 transition-transform hover:scale-105"
                        >
                            Get Unlimited Access Now
                        </a>
                    </div>
                </AnimatedSection>
            </main>

            <Footer />
        </div>
    );
}