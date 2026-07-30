import React from 'react';
import { UserProfile } from '../types';
import { X, Printer, Download, ExternalLink, Mail, MapPin, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  profile: UserProfile;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ profile, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Mahbuba Islam — Curriculum Vitae</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / Printable Document Area */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-200 max-h-[75vh] overflow-y-auto">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <p className="text-cyan-400 font-medium text-sm mt-0.5">{profile.subtitle}</p>
              <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <span>{profile.location}</span>
              </p>
            </div>
            <div className="text-left sm:text-right text-xs space-y-1 text-slate-300">
              <p className="flex sm:justify-end items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>mahbubaislam123445@gmail.com</span>
              </p>
              <p className="text-slate-400">{profile.location}</p>
            </div>
          </div>

          {/* About Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-2">Summary</h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {profile.bio}
            </p>
          </div>

          {/* Education Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-3">Education</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                <div className="flex justify-between items-start font-semibold text-white">
                  <span>B.Sc. in Software Engineering</span>
                  <span className="text-cyan-400 text-xs">2023 - Running</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">Daffodil International University &bull; <strong>CGPA: 3.88</strong> (Running)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                <div className="flex justify-between items-start font-semibold text-white">
                  <span>Higher Secondary Certificate (HSC)</span>
                  <span className="text-slate-400 text-xs">2021 - 2022</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">Noakhali Govt. College &bull; <strong>GPA: 5.00</strong></p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                <div className="flex justify-between items-start font-semibold text-white">
                  <span>Secondary School Certificate (SSC)</span>
                  <span className="text-slate-400 text-xs">2018 - 2019</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">Noakhali Govt. Girls' High School &bull; <strong>GPA: 5.00</strong></p>
              </div>
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-2">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Git', 'OOP', 'Data Structures'].map((skill) => (
                <span key={skill} className="px-2.5 py-1 bg-slate-800 text-slate-200 text-xs font-medium rounded-md border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-2">Key Projects</h4>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              <li><strong>Blood Donation Management System:</strong> Donor search and request portal.</li>
              <li><strong>Bus Management System:</strong> Ticket booking & route scheduling system in C++.</li>
              <li><strong>Supershop Management System:</strong> Inventory & POS billing system in Java.</li>
            </ul>
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
            <span>Download CV</span>
          </button>
        </div>

      </div>
    </div>
  );
};
