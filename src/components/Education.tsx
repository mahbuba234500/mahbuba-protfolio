import React from 'react';
import { EducationItem } from '../types';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface EducationProps {
  educationList: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ educationList }) => {
  const getIcon = (type: EducationItem['iconType']) => {
    switch (type) {
      case 'university':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'college':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'school':
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      default:
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="education" className="py-24 bg-gradient-dark relative border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">Academic Journey</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Education</p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {educationList.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-slate-950 border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300">
                {getIcon(item.iconType)}
              </div>

              {/* Date / Period Tag on Large Screens */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28 text-xs font-semibold text-cyan-400">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 inline-block">
                  {item.period}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="md:hidden text-xs font-medium text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                  
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800 shadow-sm">
                    {item.grade}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>

                <p className="text-slate-300 text-sm font-medium mb-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{item.institution}</span>
                </p>

                {item.description && (
                  <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/80 pt-3">
                    {item.description}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
