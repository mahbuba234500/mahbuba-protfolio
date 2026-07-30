import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Download, GraduationCap, Award, BookOpen, Code, CheckCircle2 } from 'lucide-react';
import { ResumeModal } from './ResumeModal';

interface AboutProps {
  profile: UserProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">Get To Know Me</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">About Me</p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Software Engineering Student</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800">B.Sc. Undergraduate</span>
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {profile.bio}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>University: <strong>Daffodil International Univ.</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Major: <strong>Software Engineering</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Academic Standing: <strong>CGPA 3.88</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Location: <strong>{profile.location}</strong></span>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="mt-8 pt-2">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-cyan-500/40 hover:border-cyan-400 shadow-md hover:shadow-cyan-500/20 transition-all duration-200 group"
                >
                  <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="p-3 rounded-lg bg-cyan-950/60 text-cyan-400 w-fit mb-3">
                <Code className="w-6 h-6" />
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Core Skill</p>
              <p className="text-white font-bold text-lg mt-1">Software Dev</p>
              <p className="text-xs text-cyan-300 mt-1">OOP & Clean Code</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="p-3 rounded-lg bg-cyan-950/60 text-cyan-400 w-fit mb-3">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Problem Solving</p>
              <p className="text-white font-bold text-lg mt-1">Logic & Algms</p>
              <p className="text-xs text-cyan-300 mt-1">Data Structures</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="p-3 rounded-lg bg-cyan-950/60 text-cyan-400 w-fit mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Mindset</p>
              <p className="text-white font-bold text-lg mt-1">Continuous</p>
              <p className="text-xs text-slate-400 mt-1">Learning & Growth</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="p-3 rounded-lg bg-cyan-950/60 text-cyan-400 w-fit mb-3">
                <Code className="w-6 h-6" />
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Passion</p>
              <p className="text-white font-bold text-lg mt-1">Open Source</p>
              <p className="text-xs text-slate-400 mt-1">Building projects</p>
            </div>
          </div>

        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <ResumeModal profile={profile} onClose={() => setShowResumeModal(false)} />
      )}
    </section>
  );
};
