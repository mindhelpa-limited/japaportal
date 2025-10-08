// /app/contact/page.js

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

// --- Icons for Contact Details ---
const PhoneIcon = (props) => (
  <svg xmlns="http://www.w.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const EnvelopeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const MapPinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);


export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Form submitted:", formData);
        // In a real app, you'd send this data to a backend API (e.g., using Resend, Nodemailer)
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const contactDetails = [
        { icon: PhoneIcon, title: "Call Us 24x7", detail: "+44 786 9467 057" },
        { icon: EnvelopeIcon, title: "Write Us", detail: "Info@CareerEdu.co.uk" },
        { icon: MapPinIcon, title: "Main Office", detail: "1st Floor, North Westgate House, Harlow Essex, CM20 1YS" },
    ];

    return (
        <div className="bg-slate-900 text-white font-sans">
            <Header />
            <main className="py-20 md:py-28">
                <div className="container mx-auto px-6">
                    {/* --- Header --- */}
                    <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h1>
                        <p className="mt-4 text-lg text-slate-400">
                            Have a question or a proposal? Our team is ready to answer all your inquiries.
                        </p>
                    </motion.div>

                    {/* --- Main Content Grid --- */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* --- Left Column: Details & Map --- */}
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <div className="space-y-8">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-slate-800 text-indigo-400 rounded-lg flex items-center justify-center">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{item.title}</h3>
                                            <p className="text-slate-400 mt-1">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             {/* --- Map Placeholder --- */}
                            <div className="mt-12 h-80 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                                 {/* <<< IMPORTANT >>>
                                    Go to Google Maps, find your address, click "Share" > "Embed a map",
                                    and paste the <iframe> code here to replace this div.
                                 */}
                                 <div className="w-full h-full flex items-center justify-center text-slate-500">
                                    Map loads here...
                                 </div>
                            </div>
                        </motion.div>

                        {/* --- Right Column: Contact Form --- */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                             <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Full Name" required className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email Address" required className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                                    <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" required className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                                    <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" rows="5" required className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}