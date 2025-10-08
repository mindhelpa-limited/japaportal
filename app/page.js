'use client';
import React from 'react';
import Header from '@/app/components/Header'; // Using your custom Header component
import Footer from '@/app/components/Footer'; // Using your custom Footer component


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


export default function HomePage() {
  return (
    <div className="bg-slate-900 text-white font-sans">
      <Header />

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <section className="relative container mx-auto px-6 py-24 md:py-40 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Navigate Your Journey Abroad with Confidence
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            JapaPortal is your all-in-one platform to build the perfect international resume, get instant answers from our AI assistant, and access essential resources for your move.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/resume-builder" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-transform hover:scale-105">
              Build Your Resume Now <ArrowRightIcon className="w-5 h-5"/>
            </a>
            <a href="/about" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-8 py-3 text-base font-semibold text-white hover:bg-white/20 transition-transform hover:scale-105">
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to Succeed</h3>
                    <p className="mt-4 text-lg text-slate-400">One platform, three powerful tools.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <FeatureCard
                        icon={<DocumentTextIcon className="text-indigo-400 w-10 h-10"/>}
                        title="Professional Resume Builder"
                        description="Craft a stunning, internationally-formatted resume in minutes. Our builder makes it easy to highlight your skills and experience."
                        link="/resume-builder"
                    />
                    <FeatureCard
                        icon={<SparklesIcon className="text-purple-400 w-10 h-10"/>}
                        title="Ask Japa AI"
                        description="Have questions about visas, interviews, or cultural norms? Get instant, intelligent answers from our AI trained on immigration data."
                        link="/dashboard/ask-ai"
                    />
                    <FeatureCard
                        icon={<BookOpenIcon className="text-sky-400 w-10 h-10"/>}
                        title="The Ultimate Japa Ebook"
                        description="Your go-to guide. This resource is packed with checklists, tips, and expert advice to ensure a smooth transition abroad."
                        link="/ebook"
                    />
                </div>
            </div>
        </section>

        {/* Ask AI Section */}
        <section id="ask-ai" className="py-20 sm:py-28 overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute -top-12 -left-12 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl">
                        <SparklesIcon className="w-12 h-12 text-purple-400 mb-4"/>
                        <h3 className="text-3xl font-bold tracking-tight">Ask Japa AI</h3>
                        <p className="mt-4 text-slate-300">
                            Stuck on a specific question? Don't spend hours searching forums. Type your query below and let our AI provide you with a clear, concise answer in seconds. It's like having an immigration expert in your pocket.
                        </p>
                        <div className="mt-6">
                            <input type="text" placeholder="e.g., How do I answer 'Why this country?' in an interview?" className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"/>
                            <a href="/dashboard/ask-ai" className="mt-3 block w-full text-center bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                                Get Your Answer
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-left">
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Instant Answers, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Zero Confusion.</span></h3>
                    <p className="mt-4 text-lg text-slate-400">From visa requirements to job market insights, Japa AI is trained to help you navigate the complexities of moving abroad. Get the information you need, when you need it.</p>
                </div>
            </div>
        </section>

        {/* Ebook Section */}
        <section id="ebook" className="bg-slate-900 py-20 sm:py-28">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                     <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Guide to Success</span></h3>
                    <p className="mt-4 text-lg text-slate-400">We've compiled everything you need to know into one essential ebook. Consider it your personal roadmap to a new life abroad. Download it for free and start preparing today.</p>
                    <a href="/ebook" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-400 transition-transform hover:scale-105">
                      Download The Ebook
                    </a>
                </div>
                 <div className="relative flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 rounded-2xl blur-3xl -translate-y-4"></div>
                    {/* Placeholder for Ebook Cover */}
                    <div className="relative w-64 h-80 bg-slate-800 border-white/10 border rounded-lg shadow-2xl flex flex-col justify-center items-center text-center p-4 transform rotate-3">
                          <BookOpenIcon className="w-16 h-16 text-sky-400"/>
                          <h4 className="mt-4 text-xl font-bold">The Ultimate Japa Guide</h4>
                          <p className="mt-2 text-xs text-slate-400">Your A-Z checklist for a successful relocation.</p>
                    </div>
                 </div>
            </div>
        </section>
      </main> 
      
      {/* CORRECT PLACEMENT: Footer is now outside the main tag */}
      <Footer />

    </div>
  );
}

const FeatureCard = ({ icon, title, description, link }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-center mb-4">{icon}</div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="mt-2 text-slate-400 text-sm">{description}</p>
        <a href={link} className="mt-6 inline-block text-indigo-400 font-semibold hover:text-indigo-300">
            Learn More &rarr;
        </a>
    </div>
);