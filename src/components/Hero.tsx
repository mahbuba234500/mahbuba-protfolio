import React from 'react';
import { UserProfile } from '../types';
import { initialProfile } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  ArrowDown,
  Settings
} from 'lucide-react';

interface HeroProps {
  profile: UserProfile;
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenCustomizer }) => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Profile Avatar */}
        <div className="relative mb-6 group">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.55)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
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
                className="w-full h-full rounded-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Settings Customizer Icon */}
          <button
            onClick={onOpenCustomizer}
            title="Customize Profile"
            className="absolute bottom-1 right-1 p-2.5 bg-slate-900/90 text-cyan-400 border border-cyan-500/50 rounded-full shadow-lg hover:bg-cyan-500 hover:text-slate-950 transition-all duration-200 hover:scale-110"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* Name Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-3">
          <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 tracking-wide">
          Software Developer | Full-Stack Web Developer
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
          Passionate software developer focused on building modern, responsive, and user-friendly web applications. Interested in full-stack development, problem solving, clean code, and continuous learning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo('#projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Projects
          </button>

          <button
            onClick={() => handleScrollTo('#about')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
          >
            About & Education
          </button>

          <button
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-cyan-400 bg-slate-950/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center space-x-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 shadow-md transition-all duration-200 transform hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 shadow-md transition-all duration-200 transform hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="p-3.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 shadow-md transition-all duration-200 transform hover:-translate-y-1"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href={profile.socials.email}
            aria-label="Send Email"
            className="p-3.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 shadow-md transition-all duration-200 transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Subtle Scroll Down Indicator */}
        <button
          onClick={() => handleScrollTo('#about')}
          className="mt-14 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce p-2"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
