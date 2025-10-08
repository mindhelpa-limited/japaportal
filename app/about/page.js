'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/app/components/Header'; // Assuming your Header is here
import Footer from '@/app/components/Footer'; // Assuming your Footer is here

// --- SVG Icons for Values Section ---
const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.318.232-.656.326-1.003M5.25 16.5c-.942 0-1.757.316-2.433.876M5.25 16.5c.942 0 1.757.316 2.433.876m0 0c.285.176.556.354.812.54m-2.433-.876c.285.176.556.354.812.54M9 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM14.25 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z" />
  </svg>
);

const RocketLaunchIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a16.55 16.55 0 01.33-4.42m-1.33 4.42a16.55 16.55 0 01-4.42.33m6.17-.33a9 9 0 00-9-9h-1.5a9 9 0 00-9 9v1.5a9 9 0 009 9h1.5a9 9 0 009-9v-1.5a6 6 0 00-6-6v-1.5a6 6 0 00-6 6v1.5a6 6 0 006 6v-1.5a6 6 0 006-6v-4.82z" />
  </svg>
);

const LightBulbIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.505 17.18 2.25 14.234 2.25 10.5 2.25 6.25 6.75 3 12 3s9.75 3.25 9.75 7.5c0 3.734-2.255 6.68-4.755 7.961z" />
  </svg>
);

// --- Reusable Animation Component ---
const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
};


export default function AboutPage() {
  const teamMembers = [
    { name: 'Idara', role: 'Customer Support', imageUrl: '/idara.jpg' },
    { name: 'Chisom', role: 'Customer Support', imageUrl: '/chisom.jpg' },
  ];

  return (
    <div className="bg-slate-900 text-white font-sans">
      <Header />

      <main>
        {/* --- Hero Section --- */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center px-4">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Diverse team working together" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative z-20">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
                >
                    Breaking Down Barriers to Global Opportunities.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-lg text-slate-300"
                >
                    We believe that talent has no borders. JapaPortal was born from a desire to make international relocation simpler, clearer, and more accessible for everyone.
                </motion.p>
            </div>
        </div>

        {/* --- Our Mission Section --- */}
        <AnimatedSection className="py-20 sm:py-28 text-center container mx-auto px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Mission
            </h2>
            <div className="mt-6 max-w-3xl mx-auto text-lg text-slate-400 space-y-4">
                <p>
                    The journey to a new country is one of life’s most exciting—and challenging—adventures. Our mission is to empower individuals like you to confidently navigate the complexities of moving abroad.
                </p>
                <p>
                    We provide the tools, data-driven insights, and expert guidance needed to turn your ambition of living and working internationally into a reality.
                </p>
            </div>
        </AnimatedSection>

        {/* --- Our Story Section --- */}
        <AnimatedSection className="bg-slate-950/50 py-20 sm:py-28">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                     <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Problem We Solve</h2>
                     <p className="mt-4 text-lg text-slate-400">
                        The "Japa" dream often begins with a nightmare of daunting paperwork, confusing requirements, and a lonely process of trial and error. We've been there. Our founders experienced firsthand the frustration of crafting resumes for different markets and searching for reliable visa information.
                     </p>
                     <p className="mt-4 text-lg text-slate-400">
                        JapaPortal was created to be the solution we wished we had—an all-in-one platform to demystify the entire process, from job application to final relocation.
                     </p>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Person planning a journey on a desk" className="w-full h-full object-cover"/>
                </div>
            </div>
        </AnimatedSection>
        
        {/* --- Our Values Section --- */}
        <AnimatedSection className="py-20 sm:py-28 container mx-auto px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">The principles that guide our mission and our product.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/10 text-indigo-400">
                        <UsersIcon className="w-8 h-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">Empowerment</h3>
                    <p className="mt-2 text-slate-400">We give you the tools and knowledge to take control of your journey.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500/10 text-purple-400">
                        <RocketLaunchIcon className="w-8 h-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">Innovation</h3>
                    <p className="mt-2 text-slate-400">We leverage AI and modern tech to simplify complex processes.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-500/10 text-sky-400">
                        <LightBulbIcon className="w-8 h-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">Clarity</h3>
                    <p className="mt-2 text-slate-400">No jargon, no confusion. Just clear, actionable guidance.</p>
                </div>
            </div>
        </AnimatedSection>

        {/* --- Meet the Team Section --- */}
        <AnimatedSection className="bg-slate-950/50 py-20 sm:py-28">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet The Team</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">The passionate minds behind JapaPortal.</p>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full object-cover shadow-lg"/>
                            <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                            <p className="text-indigo-400">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

        {/* --- CTA Section --- */}
        <AnimatedSection className="py-20 sm:py-28">
            <div className="container mx-auto px-6 text-center bg-slate-800/50 rounded-2xl p-10 md:p-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Journey?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                    Create your international resume, get your questions answered, and take the next confident step towards your new life abroad.
                </p>
                <a 
                    href="/pricing" 
                    className="mt-8 inline-block rounded-lg bg-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-transform hover:scale-105"
                >
                    Get Started Now
                </a>
            </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}