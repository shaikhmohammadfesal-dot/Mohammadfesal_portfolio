import { Skill, Experience, Project, Achievement, NavItem } from './types';

export const PERSONAL_INFO = {
  name: 'Mohammadfesal Shaikh',
  nickname: 'Fesal',
  title: 'Computer Science Student & Full-Stack Developer',
  university: 'The Maharaja Sayajirao University of Baroda (MSU Baroda)',
  branch: 'BE Computer Science Engineering (2nd Year / BE-2)',
  location: 'Vadodara, Gujarat, India',
  email: 'shaikhmohammadfesal@gmail.com',
  github: 'https://github.com/shaikhmohammadfesal', // Realistic placeholder/active
  linkedin: 'https://www.linkedin.com/in/mohammadfesal-shaikh',
  tagline: 'Bridging logic with beautiful interactive experiences. Passionate about community leadership and building production-ready products.',
  roles: [
    'Computer Science Student',
    'Full-Stack Developer',
    'Club President — Dev Infinity',
    'Web Developer',
    'Community Leader'
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'C++', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Java', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', category: 'languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },

  // Frontend
  { name: 'React.js', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
  { name: 'HTML5', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Bootstrap', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },

  // Databases
  { name: 'MongoDB', category: 'databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', category: 'databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },

  // Tools
  { name: 'Git', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Postman', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Club President',
    organization: 'Dev Infinity Club (MSU Baroda)',
    duration: '2025 – Present',
    responsibilities: [
      'Leading a core team of student developers to design tech workshops, dynamic projects, and programming events.',
      'Spearheading peer mentoring programs to help 150+ junior students build foundations in Web Development and DSA.',
      'Coordinating guest lectures and establishing relationships with external sponsors to enable annual hackathons.'
    ],
    skillsLearned: ['Leadership', 'Event Planning', 'Public Speaking', 'Peer Mentoring', 'Agile Methodologies']
  },
  {
    id: 'exp-2',
    role: 'Web Team Member',
    organization: 'Code Vimarsh Club (MSU Baroda)',
    duration: '2024 – Present',
    responsibilities: [
      'Collaborating in a group of 5 to develop and maintain responsive registration portals for coding contests.',
      'Optimizing page load performance by refactoring stylesheets and bundle sizes during peak traffic periods.',
      'Assisting in compiling practice problem descriptions and maintaining open-source repositories of solutions.'
    ],
    skillsLearned: ['React.js', 'Collaborative Coding', 'Git & GitHub', 'Performance Optimization', 'UX Design']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Dev Infinity Club Hub',
    description: 'An interactive, glassmorphic portal designed for Dev Infinity members to check event schedules, RSVP to workshops, and complete web development challenges with real-time feedback.',
    longDescription: 'This project serves as the official portal for the student club, incorporating an admin panel for posting workshops, automated registration sheets, and an interactive coding challenge widget designed for beginners.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/shaikhmohammadfesal/dev-infinity-hub',
    liveUrl: 'https://dev-infinity.msu.in',
    imageUrl: 'gradient-blue-indigo',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'MERN-Stack Event Hub',
    description: 'A robust campus-wide hackathon and event registration manager featuring email reminders, dual authorization roles (host and student), and a real-time team matching feature.',
    longDescription: 'Designed to solve the problem of student team coordination during hackathons, this platform allows single users to create teams, display open vacancies, and accept matching requests instantly with full authentication.',
    tags: ['MongoDB', 'Express', 'React.js', 'Node.js', 'JWT', 'Tailwind'],
    githubUrl: 'https://github.com/shaikhmohammadfesal/mern-event-hub',
    liveUrl: 'https://mern-event-hub.vercel.app',
    imageUrl: 'gradient-indigo-cyan',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Syllabus Discord Notifier',
    description: 'A modular Python automated web scraping suite that checks the MSU University portal for syllabus changes or announcements, instantly notifying students via webhook integrations.',
    longDescription: 'Automates academic notice checking by utilizing BeautifulSoup to parse university announcements. Integrates custom filters to discard unrelated events and pipes results to targeted Discord channels.',
    tags: ['Python', 'BeautifulSoup', 'Discord API', 'Web Scraping', 'GitHub Actions'],
    githubUrl: 'https://github.com/shaikhmohammadfesal/syllabus-discord-notifier',
    liveUrl: undefined,
    imageUrl: 'gradient-cyan-purple',
    featured: false
  },
  {
    id: 'proj-4',
    title: 'Glassmorphism Developer Portfolio',
    description: 'A highly polished single-page portfolio with glassmorphic cards, shrinking sticky navbar, scroll-based viewport triggers, typewriter hero subtitles, and high-performance custom particle backgrounds.',
    longDescription: 'This specific portfolio, built using React 19, Tailwind CSS, and Motion, emphasizes fluid motion physics, optimized scroll interactions, and modern accessibility standards for recruiting.',
    tags: ['React 19', 'Tailwind v4', 'Motion', 'Lucide Icons'],
    githubUrl: 'https://github.com/shaikhmohammadfesal/premium-portfolio',
    liveUrl: 'https://fesal-shaikh.dev',
    imageUrl: 'gradient-blue-cyan',
    featured: true
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Hackathon Top 5 Finalist',
    date: 'February 2025',
    organization: 'MSU Annual Techfest - CodeCraft',
    description: 'Designed and presented "EduBridge", a web application addressing regional educational deficits by pairing student tutors with local communities. Competed against 40+ teams.',
    badge: 'Techfest Award'
  },
  {
    id: 'ach-2',
    title: 'Google Cloud Study Jams Facilitator / Cohort',
    date: 'November 2024',
    organization: 'Google Developer Student Clubs',
    description: 'Successfully completed the Google Cloud track in Generative AI and Cloud Infrastructure, helping peers set up projects on GCP console.',
    badge: 'Cloud Badge'
  },
  {
    id: 'ach-3',
    title: 'Club Growth & Excellence Recognition',
    date: 'January 2025',
    organization: 'MSU Faculty of Technology',
    description: 'Awarded leadership honor for expanding Dev Infinity Club from 50 to 180 active student members in under one semester, organizing three successful multi-day workshops.',
    badge: 'Leadership Award'
  },
  {
    id: 'ach-4',
    title: 'Coding Competition Rank 12/250',
    date: 'September 2024',
    organization: 'Code Vimarsh Competitive Coding Contest',
    description: 'Placed 12th in a timed, campus-wide competitive programming tournament, solving 4 out of 5 algorithmic puzzles efficiently.',
    badge: 'DSA Honor'
  }
];
