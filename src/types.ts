export interface ProjectType {
  id: number;
  title: string;
  category: 'web' | 'mobile' | 'design';
  image: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  link?: string;
  codeLink?: string;
  client: string;
  timeline: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  position: string;
  avatar: string;
  text: string;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}