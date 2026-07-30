import { UserProfile, EducationItem, SkillCategory, Project } from '../types';

import profileAvatar from 'WhatsApp Image 2026-07-30 at 20.34.58.jpeg';
import bloodDonationThumb from '../assets/images/blood_donation_thumb_1785418132505.jpg';
import busManagementThumb from '../assets/images/bus_management_thumb_1785418147580.jpg';
import supershopThumb from '../assets/images/supershop_thumb_1785418160195.jpg';

export const initialProfile: UserProfile = {
  name: 'Mahbuba Islam',
  tagline: 'Software Engineer',
  badgeText: '',
  subtitle: 'Computer science student passionate about AI, ML, Web Development & DevOps.',
  bio: "I'm Mahbuba Islam, a computer science student with a strong passion for AI, Machine Learning etc. My long-term goal is to grow as a DevOps engineer, data engineer, and security analyst, and eventually contribute to research and teaching in these fields. Self-motivated, reliable, and always curious, I consistently work to improve my skills and create meaningful contributions wherever I work.",
  location: 'Dhaka, Bangladesh',
  phone: '+8801974060314',
  email: 'mahhhislam@gmail.com',
  university: 'Daffodil International University',
  cgpa: '3.88',
  profileImage: profileAvatar,
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/mahbubaislam',
    linkedin: 'https://linkedin.com/in/mahbubaislam',
    facebook: 'https://facebook.com/mahbubaislam',
    email: 'mailto:mahhhislam@gmail.com'
  },
  experiences: [
    {
      id: 'exp-web-dev',
      category: 'Web Development',
      role: 'Website Design',
      bullets: ['Made a website for a cake shop'],
      linkName: 'Bunny Cakes',
      linkUrl: 'https://github.com/mahbubaislam'
    },
    {
      id: 'exp-smm',
      category: 'Social Media Marketing',
      role: 'Sales Assistant and ads campaign',
      bullets: [
        'Worked for a clothing business to grow and get targeted audience',
        'Worked for cafe and made ads for promotion'
      ]
    }
  ],
  extracurriculars: [
    'I have organized more than 10 successful seminars at Daffodil International University.',
    'Volunteer, ICPC Asia Dhaka Regional 2024 - Onsite Regional Contest'
  ],
  languages: [
    { name: 'Bangla', level: 'Native' },
    { name: 'English', level: 'Fluent' }
  ],
  references: [
    {
      id: 'ref-1',
      name: 'Dr. Imran Mahmud',
      title: 'Professor & Head',
      organization: 'Department of Software Engineering, Daffodil International University',
      phone: '+8801847-140117',
      email: 'imranmahmud@daffodilvarsity.edu.bd'
    },
    {
      id: 'ref-2',
      name: 'Askar Ibn Azad',
      title: 'Senior .NET Developer',
      organization: 'Royex Technologies · Full-time',
      location: 'Dubai, United Arab Emirates',
      phone: '+8801751-242425',
      email: 'askar.ibn@gmail.com'
    }
  ]
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
    title: 'Technical & Programming Skills',
    skills: [
      { name: 'Programming', level: 'C, C++, Java', iconName: 'Code2', description: 'Core OOP, problem solving & algorithms' },
      { name: 'Web Development', level: 'Frontend', iconName: 'Globe', description: 'Responsive layouts, HTML/CSS, JavaScript & web interfaces' },
      { name: 'Graphics Design', level: 'Proficient', iconName: 'Palette', description: 'Visual design, branding & media assets' },
      { name: 'MS Office', level: 'Proficient', iconName: 'FileCode', description: 'Word, Excel, PowerPoint & documentation' }
    ]
  },
  {
    title: 'Digital Marketing & Soft Skills',
    skills: [
      { name: 'Digital Marketing', level: 'Experienced', iconName: 'Sparkles', description: 'Ads campaigns, brand growth & audience targeting' },
      { name: 'Communication Skills', level: 'Fluent', iconName: 'Terminal', description: 'Effective collaboration, presenting & seminar organization' },
      { name: 'Teamwork', level: 'Collaborative', iconName: 'GitBranch', description: 'Cross-functional teamwork & leadership' }
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
const STORAGE_KEY_PROFILE = 'mahbuba_portfolio_profile_v10';
const STORAGE_KEY_PROJECTS = 'mahbuba_portfolio_projects_v10';

export function getStoredProfile(): UserProfile {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure image is valid and not a stale temporary blob URL
      const profileImage = (parsed.profileImage && !parsed.profileImage.startsWith('blob:'))
        ? parsed.profileImage
        : initialProfile.profileImage;

      return {
        ...initialProfile,
        ...parsed,
        profileImage
      };
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
