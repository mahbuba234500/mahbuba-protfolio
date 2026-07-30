import React from 'react';
import { UserProfile } from '../types';
import { initialProfile } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, Phone, Briefcase, GraduationCap, Award, ExternalLink, Globe, UserCheck, Code2 } from 'lucide-react';

interface ResumeModalProps {
  profile: UserProfile;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ profile, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const phone = profile.phone || '+8801974060314';
  const email = profile.email || 'mahhhislam@gmail.com';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header Controls */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">{profile.name} — Resume / CV</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-300" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Container / Printable CV Paper */}
        <div className="p-6 sm:p-10 space-y-8 text-slate-200 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:bg-white print:text-slate-900">
          
          {/* Top Profile Header */}
          <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-cyan-400/80 overflow-hidden shadow-lg flex-shrink-0 bg-slate-900">
                <img
                  src={profile.profileImage || initialProfile.profileImage}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback1) {
                      target.dataset.fallback1 = 'true';
                      target.src = initialProfile.profileImage;
                    } else if (!target.dataset.fallback2) {
                      target.dataset.fallback2 = 'true';
                      target.src = '/mahbubafinal.jpg';
                    } else if (!target.dataset.fallback3) {
                      target.dataset.fallback3 = 'true';
                      target.src = '/profile.jpg';
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{profile.name}</h1>
                <p className="text-cyan-400 font-semibold text-lg mt-1 tracking-wide">Software Engineering Student</p>
                <p className="text-slate-400 text-xs mt-2 flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{profile.location}</span>
                </p>
              </div>
            </div>

            {/* Quick Contact Badges */}
            <div className="flex flex-col items-center md:items-end text-xs space-y-2 text-slate-300">
              <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{email}</span>
              </a>
            </div>
          </div>

          {/* Two Column Grid layout matching the physical resume */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar (Education, Expertise & Skills, Language) */}
            <div className="md:col-span-4 space-y-8 md:border-r md:border-slate-800/80 md:pr-6">
              
              {/* EDUCATION */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-4 pb-1 border-b border-cyan-500/30 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Education</span>
                </h2>
                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    <p className="font-bold text-white text-sm">B.Sc in Software Engineering</p>
                    <p className="text-cyan-400 font-medium mt-0.5">Daffodil International University</p>
                    <p className="text-slate-400 text-[11px] mt-1">2023 &ndash; Present</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    <p className="font-bold text-white text-sm">Higher Secondary Certificate (HSC)</p>
                    <p className="text-slate-300 font-medium mt-0.5">Noakhali Govt. College</p>
                    <p className="text-slate-400 text-[11px] mt-1">2021 &ndash; 2022 &bull; GPA: 5.00</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    <p className="font-bold text-white text-sm">Secondary School Certificate (SSC)</p>
                    <p className="text-slate-300 font-medium mt-0.5">Noakhali Govt. Girls' High School</p>
                    <p className="text-slate-400 text-[11px] mt-1">2018 &ndash; 2019 &bull; GPA: 5.00</p>
                  </div>
                </div>
              </div>

              {/* EXPERTISE & SKILLS */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-4 pb-1 border-b border-cyan-500/30 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Expertise & Skills</span>
                </h2>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Programming (C, C++, Java)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Web Development (Frontend)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>MS Office</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Digital Marketing</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Communication Skills</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Graphics Design</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Teamwork</span>
                  </li>
                </ul>
              </div>

              {/* LANGUAGE */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3 pb-1 border-b border-cyan-500/30">
                  Language
                </h2>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p><strong className="text-white">Bangla:</strong> Native</p>
                  <p><strong className="text-white">English:</strong> Fluent</p>
                </div>
              </div>

            </div>

            {/* Right Main Column (Profile, Experience, Extracurricular, References) */}
            <div className="md:col-span-8 space-y-8">
              
              {/* PROFILE */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3 pb-1 border-b border-cyan-500/30">
                  Profile
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  I'm Mahbuba Islam, a computer science student with a strong passion for AI, Machine Learning etc. My long-term goal is to grow as a DevOps engineer, data engineer, and security analyst, and eventually contribute to research and teaching in these fields. Self-motivated, reliable, and always curious, I consistently work to improve my skills and create meaningful contributions wherever I work.
                </p>
              </div>

              {/* WORK EXPERIENCE */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-4 pb-1 border-b border-cyan-500/30 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span>Work Experience</span>
                </h2>

                <div className="space-y-4">
                  {/* Web Development */}
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-white">Web Development</h3>
                        <p className="text-cyan-400 text-xs font-medium mt-0.5">Website Design</p>
                      </div>
                    </div>
                    <ul className="mt-2.5 list-disc list-inside text-xs text-slate-300 space-y-1">
                      <li>Made a website for a cake shop</li>
                      <li>The Link &ndash; <span className="text-cyan-300 font-semibold underline underline-offset-2">Bunny Cakes</span></li>
                    </ul>
                  </div>

                  {/* Social Media Marketing */}
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-white">Social Media Marketing</h3>
                        <p className="text-cyan-400 text-xs font-medium mt-0.5">Sales Assistant and ads campaign</p>
                      </div>
                    </div>
                    <ul className="mt-2.5 list-disc list-inside text-xs text-slate-300 space-y-1">
                      <li>Worked for a clothing business to grow and get targeted audience.</li>
                      <li>Worked for cafe and made ads for promotion</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EXTRACURRICULAR ACTIVITY */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3 pb-1 border-b border-cyan-500/30 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Extracurricular Activity</span>
                </h2>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
                    <span>I have organized more than 10 successful seminars at Daffodil International University.</span>
                  </li>
                  <li className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
                    <span>Volunteer, ICPC Asia Dhaka Regional 2024 &ndash; Onsite Regional Contest</span>
                  </li>
                </ul>
              </div>

              {/* REFERENCES */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-4 pb-1 border-b border-cyan-500/30 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>References</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* Ref 1 */}
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1.5">
                    <p className="font-bold text-white text-sm">Dr. Imran Mahmud</p>
                    <p className="text-cyan-400 font-medium">Professor & Head</p>
                    <p className="text-slate-400">Department of Software Engineering</p>
                    <p className="text-slate-400">Daffodil International University</p>
                    <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                      <p><strong>Phone:</strong> +8801847-140117</p>
                      <p><strong>Email:</strong> imranmahmud@daffodilvarsity.edu.bd</p>
                    </div>
                  </div>

                  {/* Ref 2 */}
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1.5">
                    <p className="font-bold text-white text-sm">Askar Ibn Azad</p>
                    <p className="text-cyan-400 font-medium">Senior .NET Developer</p>
                    <p className="text-slate-400">Royex Technologies &bull; Full-time</p>
                    <p className="text-slate-400">Dubai, United Arab Emirates</p>
                    <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                      <p><strong>Phone:</strong> +8801751-242425</p>
                      <p><strong>Email:</strong> askar.ibn@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-950"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </button>
        </div>

      </div>
    </div>
  );
};

