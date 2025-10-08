// /app/dashboard/ask-ai/page.js

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Icons ---
const SendIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.533h4.484a.75.75 0 000-1.5H5.093L3.679 3.239a.75.75 0 00-.574-.95z" />
    <path d="M18 9.25a.75.75 0 000-1.5H7.5a.75.75 0 000 1.5H18z" />
  </svg>
);

const UserIcon = () => <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0"></div>;
const AiIcon = () => <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0"></div>;


export default function AskAiPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Automatically scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI.');
      }

      const aiMessage = await response.json();
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage = { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-800/50 rounded-xl">
      {/* --- Chat History --- */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {messages.length === 0 && (
          <div className="text-center text-slate-400">
            <h2 className="text-2xl font-semibold">JapaPortal AI</h2>
            <p>Ask me anything about relocation!</p>
          </div>
        )}
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}
          >
            {msg.role === 'assistant' && <AiIcon />}
            <div className={`max-w-lg p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-indigo-600'
                  : 'bg-slate-700'
              }`}
            >
              {/* Using a div to render newlines from AI response correctly */}
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
            {msg.role === 'user' && <UserIcon />}
          </motion.div>
        ))}
        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-4">
            <AiIcon />
            <div className="max-w-lg p-3 rounded-lg bg-slate-700">
              <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0ms]"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:200ms]"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:400ms]"></span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* --- Input Form --- */}
      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about visas, cost of living, passports..."
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-indigo-600 p-3 rounded-lg hover:bg-indigo-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
            disabled={isLoading}
          >
            <SendIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}