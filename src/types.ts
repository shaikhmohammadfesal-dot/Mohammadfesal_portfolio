export type SectionId = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'achievements' | 'contact';

export interface NavItem {
  label: string;
  id: SectionId;
}

export interface Skill {
  name: string;
  icon: string; // Devicon or custom SVG class name
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  skillsLearned: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string; // Visual or gradient representation
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  organization: string;
  badge?: string;
}
