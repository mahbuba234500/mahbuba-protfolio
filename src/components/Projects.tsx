import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ArrowRight, Eye, Code } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-dark relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">My Featured Works</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Projects</p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-950/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden relative backdrop-blur-sm"
            >
              {/* Card Image Header */}
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-950/80 text-cyan-300 border border-slate-800 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* View Details Hover Overlay */}
                <div className="absolute inset-0 bg-cyan-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/90 text-cyan-300 border border-cyan-500/50 text-xs font-semibold shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-950 text-slate-300 text-[11px] font-medium rounded-md border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-slate-950 text-slate-400 text-[11px] rounded-md border border-slate-800">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span className="flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
