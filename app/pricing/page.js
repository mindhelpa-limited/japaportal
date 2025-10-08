// /app/pricing/page.js

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header'; // Assuming your Header is here
import Footer from '@/app/components/Footer'; // Assuming your Footer is here

// --- Check Icon for feature lists ---
const CheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);

const tabs = [
    { id: 'ai', label: 'Ask AI' },
    { id: 'resume', label: 'Resume Builder' },
    { id: 'ebook', label: 'Ebook Access' },
];

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState('ai');
    const [billingCycle, setBillingCycle] = useState('monthly');

    return (
        <div className="bg-slate-900 text-white font-sans">
            <Header />

            <main className="container mx-auto px-6 py-20 md:py-28">
                {/* --- Header --- */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        The Perfect Plan for Your Journey
                    </h1>
                    <p className="mt-4 text-lg text-slate-400">
                        Simple, transparent pricing. Choose the tools you need to succeed.
                    </p>
                </div>

                {/* --- Tab Navigation --- */}
                <div className="mt-12 flex justify-center">
                    <div className="relative flex items-center p-1 bg-slate-800 rounded-full">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative z-10 w-32 md:w-40 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                                    activeTab === tab.id ? 'text-white' : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                        <motion.div
                            layoutId="active-tab-indicator"
                            className="absolute inset-0 z-0 bg-indigo-600 rounded-full"
                            initial={{ x: tabs.findIndex(t => t.id === activeTab) * 100 + '%' }}
                            animate={{ x: tabs.findIndex(t => t.id === activeTab) === 0 ? '0%' : tabs.findIndex(t => t.id === activeTab) === 1 ? '100%' : '200%'}}
                            style={{ width: `${100/tabs.length}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>

                {/* --- Content for Each Tab --- */}
                <div className="mt-12">
                    {/* Ask AI Pricing */}
                    {activeTab === 'ai' && (
                        <PricingContent
                            key="ai"
                            billingCycle={billingCycle}
                            setBillingCycle={setBillingCycle}
                            plans={{
                                monthly: { price: '30,000', features: ['Unlimited AI Questions', 'All Country Data Access', 'Conversation History', 'Standard Support'] },
                                yearly: { price: '200,000', features: ['Unlimited AI Questions', 'All Country Data Access', 'Conversation History', 'Priority Support'], savings: 'Save ₦160,000' }
                            }}
                        />
                    )}
                    
                    {/* Resume Builder Pricing */}
                    {activeTab === 'resume' && (
                         <PricingContent
                            key="resume"
                            billingCycle={billingCycle}
                            setBillingCycle={setBillingCycle}
                            plans={{
                                monthly: { price: '5,000', features: ['Unlimited Resumes', 'All ATS Templates', 'AI Writing Assistant', 'PDF Downloads'] },
                                yearly: { price: '40,000', features: ['All Monthly Features', 'Unlimited Cover Letters', 'Advanced AI Suggestions', 'Priority Support'], savings: 'Save ₦20,000' }
                            }}
                        />
                    )}

                    {/* Ebook Pricing */}
                    {activeTab === 'ebook' && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 max-w-md mx-auto">
                            <div className="relative bg-slate-800 p-8 rounded-2xl border-2 border-sky-500 shadow-2xl">
                                <h3 className="text-2xl font-bold">The Ultimate Japa Guide</h3>
                                <p className="mt-2 text-slate-400">A one-time purchase for lifetime access.</p>
                                <p className="mt-6 text-5xl font-extrabold">₦40,000</p>
                                <p className="text-slate-500">One-time fee</p>
                                <ul className="mt-8 space-y-3 text-left">
                                    {['Comprehensive Country Guides', 'Printable Checklists', 'Visa Application Walkthroughs', 'Free Lifetime Updates'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><CheckIcon className="w-5 h-5 text-sky-400"/><span>{f}</span></li>
                                    ))}
                                </ul>
                                <a href="#" className="mt-8 block w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center py-3 rounded-lg transition-colors">
                                    Buy Now
                                </a>
                            </div>
                        </motion.div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

// Reusable component for pricing cards with a toggle
function PricingContent({ billingCycle, setBillingCycle, plans }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* --- Monthly/Yearly Toggle --- */}
            <div className="flex items-center justify-center space-x-4">
                <span className={`font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
                <button
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    className="relative w-14 h-8 bg-slate-700 rounded-full flex items-center px-1"
                >
                    <motion.div
                        layout
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        className={`w-6 h-6 bg-white rounded-full ${billingCycle === 'yearly' ? 'ml-auto' : ''}`}
                    />
                </button>
                <span className={`font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>Yearly</span>
            </div>
            
            {/* --- Pricing Cards --- */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Monthly Plan */}
                <PriceCard
                    planName="Monthly"
                    price={plans.monthly.price}
                    billingType="/ month"
                    features={plans.monthly.features}
                    isActive={billingCycle === 'monthly'}
                />

                {/* Yearly Plan */}
                <PriceCard
                    planName="Yearly"
                    price={plans.yearly.price}
                    billingType="/ year"
                    features={plans.yearly.features}
                    isActive={billingCycle === 'yearly'}
                    isRecommended={true}
                    savings={plans.yearly.savings}
                />
            </div>
        </motion.div>
    );
}

function PriceCard({ planName, price, billingType, features, isActive, isRecommended = false, savings }) {
    if (!isActive) return null;

    return (
        <div className={`relative bg-slate-800 p-8 rounded-2xl border-2 ${isRecommended ? 'border-indigo-500' : 'border-slate-700'}`}>
            {isRecommended && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                </div>
            )}
            <h3 className="text-2xl font-bold">{planName}</h3>
            {savings && <p className="mt-1 text-indigo-400 font-semibold">{savings}</p>}
            <p className="mt-6 text-5xl font-extrabold">₦{price}</p>
            <p className="text-slate-500">{billingType}</p>
            <ul className="mt-8 space-y-3 text-left">
                {features.map(f => (
                    <li key={f} className="flex items-center gap-3"><CheckIcon className={`w-5 h-5 ${isRecommended ? 'text-indigo-400' : 'text-slate-400'}`}/><span>{f}</span></li>
                ))}
            </ul>
            <a href="#" className={`mt-8 block w-full text-white font-semibold text-center py-3 rounded-lg transition-colors ${
                isRecommended ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-slate-700 hover:bg-slate-600'
            }`}>
                Get Started
            </a>
        </div>
    );
}