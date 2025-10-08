'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

// --- Helper Components & Icons ---

// Reusable Animation Component
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

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-700 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-indigo-400">
                        <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, marginTop: isOpen ? '16px' : '0px' }}
                className="overflow-hidden"
            >
                <p className="text-slate-400">{answer}</p>
            </motion.div>
        </div>
    );
};

// Feature Card Icon
const CheckBadgeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export default function ResumeBuilderPage() {

    const features = [
        { title: "ATS-Verified Templates", description: "Beat the robots. Our templates are designed to pass through Applicant Tracking Systems, getting your resume into human hands." },
        { title: "AI-Powered Suggestions", description: "Stuck on what to write? Our AI assistant provides expert-level suggestions for bullet points and skills based on your role." },
        { title: "Auto-Save Functionality", description: "Never lose your progress. We automatically save your work as you type, so you can pick up right where you left off." },
        { title: "Unlimited Generations", description: "Create and download as many versions of your resume as you need. Tailor your application for every single job." },
        { title: "Real-Time Preview", description: "See your changes instantly. Our live preview shows you exactly what your final resume will look like as you build it." },
        { title: "Full Customization", description: "Make it yours. Easily change colors, fonts, and layouts to perfectly match your personal brand and the job you want." },
    ];
    
    return (
        <div className="bg-slate-900 text-white font-sans">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 opacity-80 z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                                Build a Job-Winning Resume in Minutes
                            </h1>
                            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
                                Our intelligent builder helps you craft a professional, ATS-friendly resume that stands out to recruiters and gets you hired faster.
                            </p>
                            <a
                                href="/pricing" // Link to the actual builder tool
                                className="mt-10 inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
                            >
                                Start Building
                            </a>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.0, delay: 0.3 }} className="mt-12">
                           <img 
                                src="/resume-builder-hero.png" 
                                alt="Resume builder interface showing a resume being edited" 
                                className="mx-auto rounded-xl shadow-2xl border border-white/10"
                                style={{ width: '600px', height: 'auto' }} 
                            />
                        </motion.div>
                    </div>
                </section>
                
                {/* --- Trusted By Section --- */}
                <AnimatedSection className="py-12 bg-slate-950/50">
                    <div className="container mx-auto px-6">
                        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Our Users Land Jobs At Top Companies
                        </p>
                        <div className="mt-6 flex justify-center items-center gap-x-8 md:gap-x-12 opacity-60 grayscale">
                            <img className="h-8" src="/google.svg" alt="Google logo" />
                            <img className="h-8" src="/microsoft.svg" alt="Microsoft logo" />
                            <img className="h-8" src="/amazon.svg" alt="Amazon logo" />
                            <img className="h-10" src="/linkedin.svg" alt="LinkedIn logo" />
                        </div>
                    </div>
                </AnimatedSection>


                {/* --- Features Section --- */}
                <AnimatedSection className="py-20 sm:py-28 container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to Succeed</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">A powerful suite of tools designed for the modern job seeker.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                             <motion.div
                                 key={index}
                                 initial={{ opacity: 0, y: 30 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true, amount: 0.5 }}
                                 transition={{ duration: 0.5, delay: index * 0.1 }}
                                 className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                             >
                                 <CheckBadgeIcon className="w-8 h-8 text-indigo-400" />
                                 <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                                 <p className="mt-2 text-slate-400">{feature.description}</p>
                             </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
                
                {/* --- Template Showcase Section --- */}
                <AnimatedSection className="py-20 sm:py-28 bg-slate-950/50">
                    <div className="text-center container mx-auto px-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Templates That Make an Impact</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Choose from a selection of professionally designed and ATS-ready templates.</p>
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <img src="/template1.png" alt="Modern resume template" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                            <img src="/template2.png" alt="Creative resume template" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                            <img src="/template3.png" alt="Professional resume template" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- FAQ Section --- */}
                <AnimatedSection className="py-20 sm:py-28 container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center">
                              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
                        </div>
                        <div className="mt-12">
                            <FAQItem 
                                question="Is the resume builder free to use?"
                                answer="Yes! You can create, edit, and download your resume completely for free. We offer optional premium features for advanced customization and AI credits, but the core builder is free forever."
                            />
                            <FAQItem 
                                question="Are the templates really ATS-friendly?"
                                answer="Absolutely. We've designed and tested our templates with leading ATS software in mind. They use standard fonts, clear layouts, and parseable structures to ensure your information gets read correctly."
                            />
                             <FAQItem 
                                question="Can I come back and edit my resume later?"
                                answer="Yes. Thanks to our auto-save feature, your resume is securely stored in your dashboard. You can log in anytime from any device to make updates or create different versions for new job applications."
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Final CTA Section --- */}
                 <AnimatedSection className="pb-20 sm:pb-28 container mx-auto px-6">
                    <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 md:p-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Land Your Dream Job?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100">
                            Stop wrestling with Word templates. Start building a resume that opens doors.
                        </p>
                        <a 
                            href="/pricing" 
                            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow-lg hover:bg-slate-100 transition-transform hover:scale-105"
                        >
                            Build My Resume Now
                        </a>
                    </div>
                </AnimatedSection>
            </main>

            <Footer />
        </div>
    );
}