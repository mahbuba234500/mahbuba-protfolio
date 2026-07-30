export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  grade: string;
  period: string;
  status: string;
  description?: string;
  iconType: 'university' | 'college' | 'school';
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: string; // e.g. 'Intermediate', 'Learning', 'Basic'
  iconName: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  facebook: string;
  email: string;
}

export interface WorkExperienceItem {
  id: string;
  category: string;
  role: string;
  bullets: string[];
  linkName?: string;
  linkUrl?: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  title: string;
  organization: string;
  location?: string;
  phone: string;
  email: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface UserProfile {
  name: string;
  tagline: string;
  badgeText?: string;
  subtitle: string;
  bio: string;
  location: string;
  phone?: string;
  email?: string;
  university?: string;
  cgpa?: string;
  profileImage: string;
  resumeUrl: string;
  socials: SocialLinks;
  experiences?: WorkExperienceItem[];
  extracurriculars?: string[];
  languages?: LanguageItem[];
  references?: ReferenceItem[];
}
