import React from 'react';
import { UserProfile } from '../types';
import { Github, Linkedin, Facebook, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white tracking-tight">Mahbuba Islam</p>
          {profile.tagline && (
            <p className="text-xs text-slate-400 mt-1">
              {profile.tagline}
            </p>
          )}
          <p className="text-xs text-slate-500 mt-2">
            &copy; {new Date().getFullYear()} Mahbuba Islam. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>

          <a
            href={profile.socials.email}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 hover:border-cyan-500/50 shadow-md transition-all duration-200 hover:-translate-y-1 flex items-center gap-2 text-xs font-semibold"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
