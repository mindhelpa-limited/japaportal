// /app/dashboard/profile/page.js

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Reusable Input Component for Forms ---
const Input = ({ label, type, name, value, onChange, placeholder, disabled = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-slate-300">
            {label}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
        />
    </div>
);

export default function ProfilePage() {
    // --- State Management ---
    // In a real app, this data would come from your backend/auth provider
    const [profile, setProfile] = useState({
        fullName: 'Alex Doe',
        email: 'alex.doe@japaportal.com',
        currentLocation: 'Lagos, Nigeria',
        targetCountry: 'Canada',
    });

    const [password, setPassword] = useState({
        current: '',
        new: '',
        confirm: '',
    });
    
    const [isSaving, setIsSaving] = useState(false);

    // --- Handlers ---
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword(prev => ({ ...prev, [name]: value }));
    };
    
    const handleProfileSave = (e) => {
        e.preventDefault();
        setIsSaving(true);
        console.log('Saving profile data:', profile);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            // Add a success toast notification here in a real app
        }, 1500);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight text-white">
                Account Settings
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- Left Column: Profile Picture --- */}
                <motion.div variants={itemVariants} className="lg:col-span-1">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                        <img
                            src="https://via.placeholder.com/128" // Replace with user's actual avatar URL
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto"
                        />
                        <h2 className="mt-4 text-xl font-semibold text-white">{profile.fullName}</h2>
                        <p className="text-slate-400">{profile.email}</p>
                        <button className="mt-4 w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                            Change Photo
                        </button>
                    </div>
                </motion.div>

                {/* --- Right Column: Forms --- */}
                <div className="lg:col-span-2 space-y-8">
                    {/* --- Personal Information Form --- */}
                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleProfileSave} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 space-y-4">
                            <h3 className="text-xl font-semibold text-white">Personal Information</h3>
                            <Input label="Full Name" type="text" name="fullName" value={profile.fullName} onChange={handleProfileChange} />
                            <Input label="Email Address" type="email" name="email" value={profile.email} onChange={handleProfileChange} disabled />
                            <Input label="Current Location" type="text" name="currentLocation" value={profile.currentLocation} onChange={handleProfileChange} />
                            <Input label="Target Relocation Country" type="text" name="targetCountry" value={profile.targetCountry} onChange={handleProfileChange} />
                            <div className="text-right">
                                <button type="submit" disabled={isSaving} className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed">
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* --- Security Form --- */}
                     <motion.div variants={itemVariants}>
                        <form className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 space-y-4">
                            <h3 className="text-xl font-semibold text-white">Change Password</h3>
                            <Input label="Current Password" type="password" name="current" value={password.current} onChange={handlePasswordChange} />
                             <Input label="New Password" type="password" name="new" value={password.new} onChange={handlePasswordChange} />
                            <div className="text-right">
                                <button type="submit" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* --- Danger Zone --- */}
                    <motion.div variants={itemVariants}>
                         <div className="bg-red-900/20 p-6 rounded-xl border border-red-500/30">
                            <h3 className="text-xl font-semibold text-red-300">Danger Zone</h3>
                             <p className="mt-2 text-red-300/80">Once you delete your account, there is no going back. Please be certain.</p>
                            <div className="text-right mt-4">
                                <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}