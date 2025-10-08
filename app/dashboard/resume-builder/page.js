'use client';
import React, { useState, useEffect, useRef } from 'react';

// ICONS: Using inline SVGs for icons to keep it all in one file.
const PlusCircleIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const Trash2Icon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" /></svg>
);
const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M11.25 6.168L9.29 2.505A2.25 2.25 0 0111.25 0h1.5a2.25 2.25 0 012.23 2.505l-1.96 3.663a.75.75 0 01-.67.495h-1.5a.75.75 0 01-.67-.495z" /><path fillRule="evenodd" d="M3.75 6.75A.75.75 0 003 7.5v12a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-3.528a.75.75 0 01-.67-.495L15.33 2.505A3.75 3.75 0 0011.25 0h-1.5A3.75 3.75 0 006.02 2.505l-1.96 3.663a.75.75 0 01-.67.495H3.75zM12 1.5a2.25 2.25 0 00-2.23 2.505l1.28 2.395a.75.75 0 01.67.495h1.5a.75.75 0 01.67-.495l1.28-2.395A2.25 2.25 0 0012 1.5z" clipRule="evenodd" /></svg>
);
const AcademicCapIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" /><path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
);
const WrenchScrewdriverIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-4.997.75.75 0 01.313 1.248l-3.32 3.32a6.75 6.75 0 01-7.563 8.284.75.75 0 01.886-1.065A5.25 5.25 0 0112 6.75z" clipRule="evenodd" /><path d="M14.42 18.342a.75.75 0 01-.313-1.248l3.32-3.32a5.25 5.25 0 01-6.775 4.997.75.75 0 01-.886 1.065 6.75 6.75 0 007.563-8.284.75.75 0 011.06.886 5.25 5.25 0 01-4.996 6.775z" /></svg>
);
const CodeBracketIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M10.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h3a3 3 0 003-3V7.5a3 3 0 00-3-3h-3zm-1.5 3a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5-1.5h-3a1.5 1.5 0 01-1.5-1.5V7.5z" clipRule="evenodd" /><path d="M7.125 7.5A.375.375 0 017.5 7.125h.375a.375.375 0 01.375.375v9a.375.375 0 01-.375.375H7.5a.375.375 0 01-.375-.375v-9zM16.125 7.5a.375.375 0 01.375-.375h.375a.375.375 0 01.375.375v9a.375.375 0 01-.375.375h-.375a.375.375 0 01-.375-.375v-9z" /></svg>
);
const ArrowDownTrayIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M5.625 1.5H9a.75.75 0 01.75.75v1.5H9.75v-1.5H6.375v18.75h11.25V18h1.5v2.25a.75.75 0 01-.75.75H5.625a.75.75 0 01-.75-.75V2.25a.75.75 0 01.75-.75zm11.828 7.697a.75.75 0 011.06 0l2.25 2.25a.75.75 0 01-1.06 1.06L18 10.811V15a.75.75 0 01-1.5 0V10.81l-1.682 1.682a.75.75 0 01-1.06-1.06l2.25-2.25z" clipRule="evenodd" /><path d="M12 9.75a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75z" /></svg>
);


// DEFAULT DATA for a new resume
const defaultResumeData = {
    personalInfo: {
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        linkedin: '',
        portfolio: '',
        title: '',
        summary: ''
    },
    experience: [{ id: Date.now(), company: '', role: '', dates: '', description: '' }],
    education: [{ id: Date.now(), school: '', degree: '', dates: '' }],
    skills: [{ id: Date.now(), name: '' }],
    projects: [{ id: Date.now(), name: '', description: '', link: '' }]
};

// Main App Component
export default function App() {
    const [resumeData, setResumeData] = useState(defaultResumeData);
    const [activeSection, setActiveSection] = useState('personal');
    const resumePreviewRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);

    // Load data from localStorage on initial render
    useEffect(() => {
        try {
            const savedData = localStorage.getItem('resume-data');
            if (savedData) {
                setResumeData(JSON.parse(savedData));
            }
        } catch (error) {
            console.error("Failed to parse resume data from localStorage", error);
        }
    }, []);

    // Save data to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('resume-data', JSON.stringify(resumeData));
        } catch (error) {
            console.error("Failed to save resume data to localStorage", error);
        }
    }, [resumeData]);
    
    // Generic handler for Personal Info
    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [name]: value }
        }));
    };

    // Generic handler for array sections (experience, education, etc.)
    const handleSectionChange = (section, index, e) => {
        const { name, value } = e.target;
        const list = [...resumeData[section]];
        list[index][name] = value;
        setResumeData(prev => ({ ...prev, [section]: list }));
    };

    // Generic function to add a new item to a section
    const addSectionItem = (section, newItem) => {
        setResumeData(prev => ({
            ...prev,
            [section]: [...prev[section], { ...newItem, id: Date.now() }]
        }));
    };

    // Generic function to remove an item from a section
    const removeSectionItem = (section, index) => {
        const list = [...resumeData[section]];
        list.splice(index, 1);
        setResumeData(prev => ({ ...prev, [section]: list }));
    };

    // --- [FIXED] PDF Download Handler ---
    const handleDownloadPdf = async () => {
        setIsDownloading(true);

        const loadScript = (src) => new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                return resolve();
            }
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Script load error for ${src}`));
            document.head.appendChild(script);
        });

        try {
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
            
            const { jsPDF } = window.jspdf;
            const html2canvas = window.html2canvas;

            const input = resumePreviewRef.current;
            if (!input) {
                throw new Error("Resume preview element not found.");
            }

            const canvas = await html2canvas(input, { scale: 2, useCORS: true });
            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'pt',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / canvasHeight;
            const imgHeight = pdfWidth / ratio;
            
            const finalHeight = imgHeight > pdfHeight ? pdfHeight : imgHeight;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, finalHeight);
            pdf.save(`${(resumeData.personalInfo.fullName || 'resume').replace(/\s/g, '_')}.pdf`);

        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Could not generate PDF. Please check the console for details.");
        } finally {
            setIsDownloading(false);
        }
    };

    const sections = {
        personal: { label: 'Personal Info', icon: <UserIcon />, component: <PersonalInfoForm data={resumeData.personalInfo} onChange={handlePersonalInfoChange} /> },
        experience: { label: 'Experience', icon: <BriefcaseIcon />, component: <ExperienceForm data={resumeData.experience} onChange={(i, e) => handleSectionChange('experience', i, e)} onAdd={() => addSectionItem('experience', { company: '', role: '', dates: '', description: '' })} onRemove={(i) => removeSectionItem('experience', i)} /> },
        education: { label: 'Education', icon: <AcademicCapIcon />, component: <EducationForm data={resumeData.education} onChange={(i, e) => handleSectionChange('education', i, e)} onAdd={() => addSectionItem('education', { school: '', degree: '', dates: '' })} onRemove={(i) => removeSectionItem('education', i)} /> },
        skills: { label: 'Skills', icon: <WrenchScrewdriverIcon />, component: <SkillsForm data={resumeData.skills} onChange={(i, e) => handleSectionChange('skills', i, e)} onAdd={() => addSectionItem('skills', { name: '' })} onRemove={(i) => removeSectionItem('skills', i)} /> },
        projects: { label: 'Projects', icon: <CodeBracketIcon />, component: <ProjectsForm data={resumeData.projects} onChange={(i, e) => handleSectionChange('projects', i, e)} onAdd={() => addSectionItem('projects', { name: '', description: '', link: '' })} onRemove={(i) => removeSectionItem('projects', i)} /> },
    };

    // --- [NEW] Navigation Logic ---
    const sectionKeys = Object.keys(sections);
    const activeIndex = sectionKeys.indexOf(activeSection);

    const handleNext = () => {
        if (activeIndex < sectionKeys.length - 1) {
            setActiveSection(sectionKeys[activeIndex + 1]);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveSection(sectionKeys[activeIndex - 1]);
        }
    };


    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <header className="bg-white shadow-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        Resume<span className="text-indigo-600">Builder</span>
                    </h1>
                    <button
                        onClick={handleDownloadPdf}
                        disabled={isDownloading}
                        className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                       {isDownloading ? (
                            <>
                            <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                            Generating...
                            </>
                        ) : (
                            <>
                            <ArrowDownTrayIcon className="w-5 h-5" />
                            Download PDF
                            </>
                        )}
                    </button>
                </div>
            </header>

            <main className="container mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Form Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
                    <nav className="flex space-x-2 sm:space-x-4 border-b border-slate-200 pb-4 overflow-x-auto">
                        {Object.entries(sections).map(([key, { label, icon }]) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeSection === key 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                                }`}
                            >
                                {React.cloneElement(icon, { className: "w-5 h-5" })}
                                {label}
                            </button>
                        ))}
                    </nav>

                    <div>
                        {sections[activeSection].component}
                    </div>
                    
                    {/* --- [NEW] Navigation Buttons --- */}
                    <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={activeIndex === sectionKeys.length - 1}
                            className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Preview Section */}
                <div className="sticky top-24">
                     <div className="bg-white rounded-xl shadow-lg p-2">
                        <div ref={resumePreviewRef} className="bg-white p-8 md:p-12 text-sm text-gray-800 aspect-[1/1.414]">
                           <ResumePreview data={resumeData} />
                         </div>
                     </div>
                </div>
            </main>
        </div>
    );
}


// --- Form Section Components ---

const FormSection = ({ title, children }) => (
    <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">{title}</h2>
        <div className="space-y-4">{children}</div>
    </div>
);

const Input = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
        <input {...props} className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
    </div>
);

const Textarea = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
        <textarea {...props} rows="4" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
    </div>
);


const PersonalInfoForm = ({ data, onChange }) => (
    <FormSection title="Personal Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Full Name" name="fullName" value={data.fullName} onChange={onChange} placeholder="e.g., Jane Doe" />
            <Input label="Job Title" name="title" value={data.title} onChange={onChange} placeholder="e.g., Senior Software Engineer" />
            <Input label="Email Address" name="email" type="email" value={data.email} onChange={onChange} placeholder="e.g., jane.doe@example.com" />
            <Input label="Phone Number" name="phoneNumber" type="tel" value={data.phoneNumber} onChange={onChange} placeholder="e.g., +1 (555) 123-4567" />
        </div>
        <Input label="Address" name="address" value={data.address} onChange={onChange} placeholder="e.g., San Francisco, CA" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="LinkedIn Profile" name="linkedin" value={data.linkedin} onChange={onChange} placeholder="e.g., linkedin.com/in/janedoe" />
            <Input label="Portfolio/Website" name="portfolio" value={data.portfolio} onChange={onChange} placeholder="e.g., janedoe.dev" />
        </div>
         <Textarea label="Professional Summary" name="summary" value={data.summary} onChange={onChange} placeholder="A brief summary of your skills and experience..." />
    </FormSection>
);

const ExperienceForm = ({ data, onChange, onAdd, onRemove }) => (
    <FormSection title="Work Experience">
        {data.map((exp, index) => (
            <div key={exp.id} className="p-4 border border-slate-200 rounded-lg space-y-4 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Company" name="company" value={exp.company} onChange={(e) => onChange(index, e)} />
                    <Input label="Role" name="role" value={exp.role} onChange={(e) => onChange(index, e)} />
                </div>
                 <Input label="Dates (e.g., Jan 2020 - Present)" name="dates" value={exp.dates} onChange={(e) => onChange(index, e)} />
                <Textarea label="Description" name="description" value={exp.description} onChange={(e) => onChange(index, e)} placeholder="Describe your responsibilities and achievements..." />
                 {data.length > 1 && (
                    <button onClick={() => onRemove(index)} className="absolute -top-3 -right-3 bg-white p-1 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors">
                        <Trash2Icon className="w-5 h-5" />
                    </button>
                )}
            </div>
        ))}
        <button onClick={onAdd} className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <PlusCircleIcon className="w-5 h-5"/> Add Experience
        </button>
    </FormSection>
);

const EducationForm = ({ data, onChange, onAdd, onRemove }) => (
    <FormSection title="Education">
        {data.map((edu, index) => (
            <div key={edu.id} className="p-4 border border-slate-200 rounded-lg space-y-4 relative">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="School/University" name="school" value={edu.school} onChange={(e) => onChange(index, e)} />
                    <Input label="Degree" name="degree" value={edu.degree} onChange={(e) => onChange(index, e)} />
                </div>
                 <Input label="Graduation Date (e.g., May 2019)" name="dates" value={edu.dates} onChange={(e) => onChange(index, e)} />
                 {data.length > 1 && (
                       <button onClick={() => onRemove(index)} className="absolute -top-3 -right-3 bg-white p-1 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors">
                            <Trash2Icon className="w-5 h-5" />
                       </button>
                 )}
            </div>
        ))}
        <button onClick={onAdd} className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <PlusCircleIcon className="w-5 h-5"/> Add Education
        </button>
    </FormSection>
);

const SkillsForm = ({ data, onChange, onAdd, onRemove }) => (
    <FormSection title="Skills">
         <p className="text-sm text-slate-500">Add your key technical and soft skills.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.map((skill, index) => (
            <div key={skill.id} className="relative">
                <Input label={`Skill #${index + 1}`} name="name" value={skill.name} onChange={(e) => onChange(index, e)} />
                {data.length > 1 && (
                    <button onClick={() => onRemove(index)} className="absolute top-0 right-0 p-1 text-red-400 hover:text-red-600">
                         <Trash2Icon className="w-4 h-4" />
                    </button>
                )}
            </div>
        ))}
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <PlusCircleIcon className="w-5 h-5"/> Add Skill
        </button>
    </FormSection>
);

const ProjectsForm = ({ data, onChange, onAdd, onRemove }) => (
    <FormSection title="Projects">
        {data.map((proj, index) => (
            <div key={proj.id} className="p-4 border border-slate-200 rounded-lg space-y-4 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Project Name" name="name" value={proj.name} onChange={(e) => onChange(index, e)} />
                    <Input label="Link" name="link" value={proj.link} onChange={(e) => onChange(index, e)} />
                </div>
                <Textarea label="Description" name="description" value={proj.description} onChange={(e) => onChange(index, e)} />
                 {data.length > 1 && (
                    <button onClick={() => onRemove(index)} className="absolute -top-3 -right-3 bg-white p-1 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors">
                        <Trash2Icon className="w-5 h-5" />
                    </button>
                )}
            </div>
        ))}
        <button onClick={onAdd} className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
            <PlusCircleIcon className="w-5 h-5"/> Add Project
        </button>
    </FormSection>
);


// --- Resume Preview Component ---

const ResumePreview = ({ data }) => {
    const { personalInfo, experience, education, skills, projects } = data;

    return (
        <div className="font-serif">
            {/* Header */}
            <div className="text-center border-b-2 border-gray-200 pb-4 mb-6">
                {personalInfo.fullName && <h1 className="text-4xl font-bold tracking-wider uppercase text-gray-800">{personalInfo.fullName || 'Your Name'}</h1>}
                {personalInfo.title && <p className="text-lg text-indigo-600 font-medium mt-1">{personalInfo.title || 'Your Title'}</p>}
                
                <div className="flex justify-center items-center gap-x-4 gap-y-1 text-xs mt-3 text-gray-600 flex-wrap">
                    {personalInfo.email && <span>{personalInfo.email}</span>}
                    {personalInfo.phoneNumber && <span>&bull; {personalInfo.phoneNumber}</span>}
                    {personalInfo.address && <span>&bull; {personalInfo.address}</span>}
                    {personalInfo.linkedin && <span>&bull; {personalInfo.linkedin}</span>}
                    {personalInfo.portfolio && <span>&bull; {personalInfo.portfolio}</span>}
                </div>
            </div>
            
            {/* Summary */}
            {personalInfo.summary && (
                 <ResumeSection title="Summary">
                    <p className="text-gray-700 text-sm leading-relaxed">{personalInfo.summary}</p>
                 </ResumeSection>
            )}

            {/* Experience */}
            {experience[0]?.company && (
                <ResumeSection title="Experience">
                    {experience.map(exp => exp.company && (
                        <div key={exp.id} className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-md font-bold text-gray-800">{exp.role || 'Role'}</h3>
                                <p className="text-xs text-gray-500 font-medium">{exp.dates || 'Dates'}</p>
                            </div>
                            <p className="text-sm italic text-gray-600">{exp.company || 'Company'}</p>
                            <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                                {exp.description?.split('\n').map((line, i) => line && <li key={i}>{line}</li>)}
                            </ul>
                        </div>
                    ))}
                </ResumeSection>
            )}

            {/* Education */}
            {education[0]?.school && (
                <ResumeSection title="Education">
                    {education.map(edu => edu.school && (
                        <div key={edu.id} className="mb-2">
                             <div className="flex justify-between items-baseline">
                                <h3 className="text-md font-bold text-gray-800">{edu.school || 'School'}</h3>
                                <p className="text-xs text-gray-500 font-medium">{edu.dates || 'Date'}</p>
                            </div>
                            <p className="text-sm italic text-gray-600">{edu.degree || 'Degree'}</p>
                        </div>
                    ))}
                </ResumeSection>
            )}
            
            {/* Projects */}
             {projects[0]?.name && (
                <ResumeSection title="Projects">
                    {projects.map(proj => proj.name && (
                        <div key={proj.id} className="mb-3">
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-md font-bold text-gray-800">{proj.name || 'Project Name'}</h3>
                                {proj.link && <a href={proj.link} className="text-xs text-indigo-500 hover:underline">({proj.link})</a>}
                            </div>
                            <p className="text-sm text-gray-700">{proj.description || 'Description'}</p>
                        </div>
                    ))}
                </ResumeSection>
            )}

            {/* Skills */}
            {skills.some(s => s.name) && (
                <ResumeSection title="Skills">
                    <p className="text-sm text-gray-700">
                        {skills.map(skill => skill.name).filter(Boolean).join(' • ')}
                    </p>
                </ResumeSection>
            )}
        </div>
    );
};

const ResumeSection = ({ title, children }) => (
    <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-700 border-b-2 border-indigo-200 pb-1 mb-3">{title}</h2>
        {children}
    </div>
);