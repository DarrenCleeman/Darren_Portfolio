export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  coverImage: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  images: string[];
  learnedSkills: string[];
}

export interface Skill {
  name: string;
  category: 'programming' | 'libraries' | 'robotics' | 'ides-os' | 'soft-skills';
  learnedFrom?: string;
}

export interface Course {
  name: string;
  description: string;
}

export interface Education {
  university: string;
  location: string;
  degree: string;
  major: string;
  minor: string;
  relevantCoursework: Course[];
}

export interface HomeContent {
  welcomeBackground: string;
  profileImage: string;
  welcomeMessage: string;
  shortBio: string;
  resumeLink: string;
  education: Education;
  linkedinUrl: string;
  email: string;
}
