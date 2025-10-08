// /app/ebook/page.js

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

// --- Check Icon ---
const CheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);


export default function EbookPage() {

    const whatsInside = [
        { title: "Visa Application Deep Dive", description: "Step-by-step guides for work, study, and family visas." },
        { title: "Financial Planning & Proof of Funds", description: "Templates and strategies to meet financial requirements." },
        { title: "Pre-Departure Checklist", description: "A complete, printable checklist for everything you need before you fly." },
        { title: "Settling In Smoothly", description: "How to open a bank account, get a SIM card, and navigate local transport." },
        { title: "Career & Job Hunting", description: "Strategies for adapting your resume and finding jobs in a new market." },
        { title: "Cultural Integration", description: "Mastering local etiquette and building your new social circle." },
    ];
    
    return (
        <div className="bg-slate-900 text-white font-sans">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 z-0"></div>
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
                        <div className="text-center md:text-left">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                                Your A-Z Roadmap to a New Life Abroad.
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 text-lg text-slate-300">
                                Stop the guesswork. This is the ultimate, all-in-one digital guide covering everything you need for a successful relocation—from initial planning to your first month in a new country.
                            </motion.p>
                             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                <a
                                    href="/pricing"
                                    className="mt-10 inline-block rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    Download The Ebook Now
                                </a>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.0 }}>
                            <img src="/images/ebook-cover-3d.png" alt="3D cover of the Ultimate Japa Ebook" className="max-w-sm mx-auto md:max-w-md" />
                        </motion.div>
                    </div>
                </section>
                
                {/* --- Is This You? Section --- */}
                <AnimatedSection className="py-20 sm:py-24">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Overwhelmed by the process? You're not alone.</h2>
                        <p className="mt-4 text-lg text-slate-400">This guide was created for ambitious individuals who are...</p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-slate-300">
                            <span className="bg-slate-800 rounded-full px-4 py-2 border border-slate-700">Tired of conflicting advice</span>
                            <span className="bg-slate-800 rounded-full px-4 py-2 border border-slate-700">Worried about making costly mistakes</span>
                            <span className="bg-slate-800 rounded-full px-4 py-2 border border-slate-700">Wishing for a step-by-step plan</span>
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- What's Inside Section --- */}
                <AnimatedSection className="py-20 sm:py-28 bg-slate-950/50">
                    <div className="container mx-auto px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A Look Inside The Ultimate Guide</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">We've packed years of expert research and first-hand experience into one place.</p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whatsInside.map((feature, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center">
                                        <CheckIcon className="w-5 h-5"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        <p className="mt-1 text-slate-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
                
                {/* --- Sneak Peek Section --- */}
                <AnimatedSection className="py-20 sm:py-28">
                    <div className="container mx-auto px-6 text-center">
                         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Beautifully Designed & Easy to Follow</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Actionable advice presented in a clean, digestible format. No fluff.</p>
                         <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
                            <img src="/images/ebook-page-checklist.png" alt="A sample checklist page from the ebook" className="rounded-xl shadow-2xl border border-white/10 w-full" />
                            <img src="/images/ebook-page-chapter.png" alt="A sample chapter introduction page from the ebook" className="rounded-xl shadow-2xl border border-white/10 w-full" />
                         </div>
                    </div>
                </AnimatedSection>

                {/* --- Final CTA Section --- */}
                 <AnimatedSection id="download" className="pb-20 sm:pb-28 container mx-auto px-6">
                    <div className="relative text-center bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-10 md:py-16 md:px-10 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="relative">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Stop Stressing, Start Planning.</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-sky-100">
                                Get instant access to the guide that has helped thousands of people successfully start their new lives abroad. Your journey begins now.
                            </p>
                            <a 
                                href="/pricing" // Link to your payment/download page
                                className="mt-8 inline-block rounded-lg bg-white px-10 py-4 text-base font-semibold text-indigo-600 shadow-lg hover:bg-slate-100 transition-transform hover:scale-105"
                            >
                                Download Your Ebook
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </main>

            <Footer />
        </div>
    );
}