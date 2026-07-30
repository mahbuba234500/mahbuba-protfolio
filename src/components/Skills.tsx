import React, { useState } from 'react';
import { SkillCategory } from '../types';
import { Code2, Code, Coffee, Terminal, FileCode, Globe, Palette, Database, GitBranch, Sparkles } from 'lucide-react';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-cyan-400" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-cyan-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'FileCode':
        return <FileCode className="w-6 h-6 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-cyan-400" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-cyan-400" />;
      default:
        return <Code className="w-6 h-6 text-cyan-400" />;
    }
  };

  const tabs = ['All', ...categories.map((c) => c.title)];

  const filteredCategories =
    activeTab === 'All'
      ? categories
      : categories.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">Technical Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Skills & Tools</p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid per Category */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.title} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2 border-b border-slate-800/80 pb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{cat.title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 shadow-md hover:shadow-cyan-950/40 transition-all duration-300 transform hover:-translate-y-1 flex items-start space-x-4 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />
                    
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      {getIcon(skill.iconName)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {skill.level}
                        </span>
                      </div>
                      
                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-relaxed truncate group-hover:whitespace-normal group-hover:line-clamp-2 transition-all">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
