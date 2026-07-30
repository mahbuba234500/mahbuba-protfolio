import React, { useState, useEffect } from 'react';
import {
  initialProfile,
  initialProjects,
  initialEducation,
  initialSkillCategories
} from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Section Observer for Active Nav Link
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
    
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero profile={initialProfile} />
        
        <About profile={initialProfile} />

        <Education educationList={initialEducation} />

        <Experience profile={initialProfile} />

        <Skills categories={initialSkillCategories} />

        <Projects projects={initialProjects} />

        <Contact profile={initialProfile} />
      </main>

      {/* Footer */}
      <Footer profile={initialProfile} />

    </div>
  );
}
