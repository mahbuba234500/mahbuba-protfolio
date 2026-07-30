import { UserProfile, EducationItem, SkillCategory, Project } from '../types';

import profileAvatar from '../assets/images/mahbuba_centered_face_1785421750016.jpg';
import bloodDonationThumb from '../assets/images/blood_donation_thumb_1785418132505.jpg';
import busManagementThumb from '../assets/images/bus_management_thumb_1785418147580.jpg';
import supershopThumb from '../assets/images/supershop_thumb_1785418160195.jpg';

export const initialProfile: UserProfile = {
  name: 'Mahbuba Islam',
  tagline: '',
  badgeText: '',
  subtitle: 'Building clean, functional applications with strong software engineering principles and modern web technologies.',
  bio: 'I am Mahbuba Islam, a dedicated developer with a strong focus on software principles and web technologies. I enjoy building clean, functional applications, practicing problem solving, and continuously exploring new technologies to improve my craft.',
  location: 'Dhaka, Bangladesh',
  university: 'Daffodil International University',
  cgpa: '3.88',
  profileImage: profileAvatar,
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/mahbubaislam',
    linkedin: 'https://linkedin.com/in/mahbubaislam',
    facebook: 'https://facebook.com/mahbubaislam',
    email: 'mailto:mahbubaislam123445@gmail.com'
  }
};

export const initialEducation: EducationItem[] = [
  {
    id: 'edu-bsc',
    degree: 'B.Sc. in Software Engineering',
    institution: 'Daffodil International University',
    grade: 'CGPA: 3.88 (Running)',
    period: '2023 - Running',
    status: 'Ongoing',
    description: 'Specializing in Software Engineering principles, Web Application Development, Object-Oriented Programming, and Data Structures.',
    iconType: 'university'
  },
  {
    id: 'edu-hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Noakhali Govt. College',
    grade: 'GPA: 5.00',
    period: '2021 - 2022',
    status: 'Completed',
    description: 'Science Group — Focused on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.',
    iconType: 'college'
  },
  {
    id: 'edu-ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: "Noakhali Govt. Girls' High School",
    grade: 'GPA: 5.00',
    period: '2018 - 2019',
    status: 'Completed',
    description: 'Science Group — Strong academic record in Mathematics, Science, and Computer Fundamentals.',
    iconType: 'school'
  }
];

export const initialSkillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', level: 'Intermediate', iconName: 'Code2', description: 'Procedural programming, memory allocation & algorithms' },
      { name: 'C++', level: 'Intermediate', iconName: 'Code', description: 'Object-oriented programming, STL, data structures' },
      { name: 'Java', level: 'Intermediate', iconName: 'Coffee', description: 'OOP concepts, exception handling, class design' },
      { name: 'Python', level: 'Basic to Intermediate', iconName: 'Terminal', description: 'Scripting, basic automation & data logic' },
      { name: 'JavaScript', level: 'Intermediate', iconName: 'FileCode', description: 'ES6+, DOM manipulation, asynchronous logic' }
    ]
  },
  {
    title: 'Web & Interface Technologies',
    skills: [
      { name: 'HTML5', level: 'Proficient', iconName: 'Globe', description: 'Semantic markup, accessibility & structured web pages' },
      { name: 'CSS3', level: 'Proficient', iconName: 'Palette', description: 'Responsive layouts, Flexbox, Grid, animations & styling' }
    ]
  },
  {
    title: 'Database & Developer Tools',
    skills: [
      { name: 'SQL', level: 'Intermediate', iconName: 'Database', description: 'Relational queries, table schemas & CRUD operations' },
      { name: 'Git', level: 'Intermediate', iconName: 'GitBranch', description: 'Version control, branching, commit discipline & GitHub' }
    ]
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj-blood-donation',
    title: 'Blood Donation Management System',
    shortDescription: 'A system connecting blood donors with people in need, allowing donor registration and search by blood group and location.',
    fullDescription: 'The Blood Donation Management System is a community-driven software application designed to bridge the gap between voluntary blood donors and patients requiring emergency blood transfusions. Users can easily register as donors with their blood group, location, and contact details, while searchers can rapidly filter available donors by blood group and proximity.',
    image: bloodDonationThumb,
    techStack: ['Java', 'C++', 'SQL / Database', 'HTML/CSS', 'Git'],
    features: [
      'Donor Registration & Profile Management',
      'Instant Search by Blood Group & Location',
      'Donor Availability Status Toggle',
      'Emergency Urgent Request Board',
      'Clean & Intuitive User Interface'
    ],
    githubUrl: 'https://github.com/mahbubaislam/Blood-Donation-Management-System',
    category: 'Desktop & Web App'
  },
  {
    id: 'proj-bus-management',
    title: 'Bus Management System',
    shortDescription: 'A system to manage bus routes, schedules, and seat/ticket booking.',
    fullDescription: 'The Bus Management System provides a complete administrative and customer solution for public and private transportation. It simplifies route scheduling, seat reservation, fare calculation, and passenger ticket records, reducing manual queueing and paperwork.',
    image: busManagementThumb,
    techStack: ['C++', 'Object-Oriented Programming', 'File System / SQL', 'Git'],
    features: [
      'Bus Route & Schedule Management',
      'Interactive Seat Map & Reservation System',
      'Ticket Generation & Booking History',
      'Passenger Information Management',
      'Automated Fare Calculation'
    ],
    githubUrl: 'https://github.com/mahbubaislam/Bus-Management-System',
    category: 'Management System'
  },
  {
    id: 'proj-supershop-management',
    title: 'Supershop Management System',
    shortDescription: 'An inventory and billing management system for a retail supershop.',
    fullDescription: 'The Supershop Management System is an all-in-one inventory, sales point, and billing application designed for retail stores. It allows store managers to track product stock in real time, generate fast customer receipts, monitor sales metrics, and handle stock replenishment smoothly.',
    image: supershopThumb,
    techStack: ['Java', 'Swing / GUI', 'SQL Database', 'Git'],
    features: [
      'Product Inventory & Category Management',
      'Fast Billing & POS Checkout Counter',
      'Real-time Low Stock Alerts',
      'Sales Invoice Generation',
      'Daily / Monthly Revenue Overview'
    ],
    githubUrl: 'https://github.com/mahbubaislam/Supershop-Management-System',
    category: 'Retail & POS'
  }
];

// LocalStorage Persistence Helpers
const STORAGE_KEY_PROFILE = 'mahbuba_portfolio_profile_v9';
const STORAGE_KEY_PROJECTS = 'mahbuba_portfolio_projects_v9';

export function getStoredProfile(): UserProfile {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (saved) {
      return { ...initialProfile, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Error loading saved profile:', e);
  }
  return initialProfile;
}

export function saveStoredProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.error('Error saving profile:', e);
  }
}

export function getStoredProjects(): Project[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading saved projects:', e);
  }
  return initialProjects;
}

export function saveStoredProjects(projects: Project[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
  } catch (e) {
    console.error('Error saving projects:', e);
  }
}
