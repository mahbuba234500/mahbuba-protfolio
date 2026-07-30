import React from 'react';
import { UserProfile } from '../types';
import { Briefcase, Award, UserCheck, ExternalLink, Globe } from 'lucide-react';

interface ExperienceProps {
  profile: UserProfile;
}

export const Experience: React.FC<ExperienceProps> = ({ profile }) => {
  const experiences = profile.experiences || [];
  const extracurriculars = profile.extracurriculars || [];
  const references = profile.references || [];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">Career & Background</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Experience & Activities</p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Work Experience & Extracurriculars */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Work Experience */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span>Work Experience</span>
              </h3>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 shadow-xl"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-white">{exp.category}</h4>
                        <p className="text-cyan-400 text-sm font-medium mt-0.5">{exp.role}</p>
                      </div>
                    </div>

                    <ul className="mt-3.5 space-y-2 text-sm text-slate-300">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                      {exp.linkName && (
                        <li className="flex items-center gap-2 pt-1 text-cyan-300 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <span>The Link &ndash; <strong>{exp.linkName}</strong></span>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Activity */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <span>Extracurricular Activity</span>
              </h3>

              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 shadow-xl space-y-3">
                {extracurriculars.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-slate-200 leading-relaxed">{activity}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: References */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <span>References</span>
            </h3>

            <div className="space-y-4">
              {references.map((ref) => (
                <div
                  key={ref.id}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 shadow-xl space-y-2"
                >
                  <p className="text-lg font-bold text-white">{ref.name}</p>
                  <p className="text-cyan-400 text-sm font-semibold">{ref.title}</p>
                  <p className="text-slate-300 text-xs">{ref.organization}</p>
                  {ref.location && (
                    <p className="text-slate-400 text-xs">{ref.location}</p>
                  )}

                  <div className="pt-3 mt-3 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                    <p><strong className="text-slate-400">Phone:</strong> {ref.phone}</p>
                    <p><strong className="text-slate-400">Email:</strong> <a href={`mailto:${ref.email}`} className="text-cyan-300 hover:underline">{ref.email}</a></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
