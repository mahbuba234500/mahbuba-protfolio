import React, { useState, useEffect } from 'react';
import { UserProfile, Project, SkillCategory, EducationItem } from './types';
import {
  getStoredProfile,
  saveStoredProfile,
  getStoredProjects,
  saveStoredProjects,
  initialProfile,
  initialProjects,
  initialEducation,
  initialSkillCategories
} from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProfileCustomizer } from './components/ProfileCustomizer';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(getStoredProfile);
  const [projects, setProjects] = useState<Project[]>(getStoredProjects);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Section Observer for Active Nav Link
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    saveStoredProfile(updatedProfile);
  };

  const handleSaveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    saveStoredProjects(updatedProjects);
  };

  const handleResetDefaults = () => {
    localStorage.removeItem('mahbuba_portfolio_profile_v1');
    localStorage.removeItem('mahbuba_portfolio_projects_v1');
    setProfile(initialProfile);
    setProjects(initialProjects);
    setIsCustomizerOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
        
        <About profile={profile} />

        <Education educationList={initialEducation} />

        <Skills categories={initialSkillCategories} />

        <Projects projects={projects} />

        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Profile & Links Settings Customizer Drawer */}
      <ProfileCustomizer
        profile={profile}
        projects={projects}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onSaveProfile={handleSaveProfile}
        onSaveProjects={handleSaveProjects}
        onReset={handleResetDefaults}
      />

    </div>
  );
}
