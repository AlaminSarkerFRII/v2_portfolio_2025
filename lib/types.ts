export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
  images?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  range: string;
  url: string;
  descriptions: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

