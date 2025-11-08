import { Project, Experience, SocialLink } from './types';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: 'mail' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    range: '2022 - Present',
    url: 'https://example.com',
    descriptions: [
      'Led development of scalable web applications using React and Node.js',
      'Mentored junior developers and conducted code reviews',
      'Improved application performance by 40% through optimization techniques',
    ],
  },
  {
    id: '2',
    company: 'Previous Company',
    position: 'Software Engineer',
    location: 'Remote',
    range: '2020 - 2022',
    url: 'https://example.com',
    descriptions: [
      'Developed and maintained multiple client-facing applications',
      'Collaborated with cross-functional teams to deliver high-quality products',
      'Implemented new features and fixed bugs in existing codebase',
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript. Features include authentication, real-time updates, and a responsive design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'A mobile-first e-commerce platform with advanced filtering and search capabilities. Built with React and integrated with payment gateways.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'An open-source dashboard for monitoring system metrics and analytics. Features real-time data visualization and customizable widgets.',
    tech: ['Vue.js', 'D3.js', 'Express', 'Redis'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'A collaborative task management tool with drag-and-drop functionality. Supports team collaboration and project tracking.',
    tech: ['React', 'TypeScript', 'GraphQL', 'Socket.io'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
];

