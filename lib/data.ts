import { Project, Experience, SocialLink } from './types';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Resume file path - update this if you rename your resume file
export const resumePath = '/Alamin-Sarker-Software-Engineer(Frontend-3+-YOE).pdf';

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/AlaminSarkerFRII/', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alamin-sarker-b2676522a/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:alamin.sarker4241@gmail.com', icon: 'mail' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Technometrics Limited',
    position: 'Software Engineer',
    location: 'Banani, Dhaka, Bangladesh',
    range: 'December 2022 - Current',
    url: 'https://technometrics.net/',
    descriptions: [
      'Developed and maintained scalable backend systems for multiple projects, including Social Media Monitoring, BGB E-Recruitment (1M+ users), and Speechlytics, serving 60k+ users',
      'Optimized frontend performance and backend API efficiency, improving usability',
      'Improved frontend load speed by 40% via code-splitting, lazy loading, and Tanstack Query caching, boosting user engagement',
      'Containerized applications with Docker and managed multi-service architectures, contributing to CI/CD workflows and seamless deployments',
      'Collaborated with cross-functional teams to define technical requirements, system design, and implement modular design, code reusability, and automated testing, enhancing overall project efficiency',
    ],
  },
  {
    id: '2',
    company: 'Top IT Limited',
    position: 'Full-Stack Developer',
    location: 'Mohammadpur, Dhaka, Bangladesh',
    range: 'June 2022 - November 2022',
    url: 'https://topitltd.com/',
    descriptions: [
      'Designed and developed a high-performance SaaS platform for offer management, cutting load time by 40% and improving UX for 20K+ monthly users',
      'Built full-stack features with Next.js, Express.js, and MongoDB, ensuring a modular, scalable architecture',
      'Integrated RBAC authentication system for secure access control',
      'Worked closely with designers to deliver responsive, pixel-perfect UIs, improving mobile engagement by 25%',
    ],
  },
  {
    id: '3',
    company: 'Faizur Rahman Ideal Institute (FRII)',
    position: 'Executive of IT Department',
    location: 'Dhaka, Bangladesh',
    range: 'January 2020 - September 2022',
    url: 'https://frii.edu.bd/',
    descriptions: [
      'Provided support to all departments in hardware, software, and network-related issues',
      'Configured, installed, and maintained IT systems, laptops, and workstations',
      'Ensured data security with two-factor authentication systems and password protection',
      'Monitored system performance to optimize speeds and costs',
      'Collaborated with external vendors to resolve specialised IT issues',
      'Maintained data confidentiality and prevented unauthorized information transfer between workstations',
      'Reported anomalous behaviour such as data theft or identity mismatch',
    ],
  },
  {
    id: '4',
    company: 'P-soft—Software Company',
    position: 'Software Operations',
    location: 'Dhaka, Bangladesh',
    range: 'February 2018 - January 2020',
    url: '#',
    descriptions: [
      'Managed user accounts, including adding and maintaining user profiles',
      'Performed data entry tasks and maintained accurate records',
      'Handled CRUD operations for Students and Teachers profiles',
      'Conducted software installations and system maintenance',
      'Worked with SaaS platforms and data management systems',
    ],
  },
  {
    id: '5',
    company: 'Al Hera Coaching Center',
    position: 'Founder',
    location: 'Feni District, Chattogram, Bangladesh',
    range: 'December 2015 - December 2017',
    url: '#',
    descriptions: [
      'Established and managed Al Hera Coaching Center from the ground up',
      'Oversaw teacher staff, resolving issues and ensuring a smooth academic environment',
      'Taught Science and Math subjects, guiding students to academic success',
      'Developed leadership and startup management skills through hands-on experience',
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'SIDA',
    description: 'Ongoing private project for bkash users to analyze social media data. Leading frontend development as Lead Frontend Engineer, developing and guiding junior developers throughout the full project lifecycle. Building scalable analytics dashboards with real-time data visualization and comprehensive social media insights. I also contributed to the backend system for user authentication and authorization via an RBAC model, and implemented NLP APIs for topic modeling and sentiment analysis.',
    tech: ['React', 'Django', 'PostgreSQL', 'NLP', 'Docker', 'Nginx', 'TailwindCSS', 'antd', 'tanstack query'],
    github: '',
    external: '',
    image: '/assets/SIDA_Dashboard.png',
    images: ['/assets/SIDA_Login_Page.png', '/assets/SIDA_Dashboard.png', '/assets/SIDA_Self_Profile_View.png', '/assets/SIDA_Users_Page.png' ],
  },
  {
    id: '2',
    title: 'Social Media Monitoring (SMM)',
    description: 'Private project for NTMC and CTTC Branch in Bangladesh. Led the frontend development using React, Zustand, and Ant Design for real-time social media analytics dashboards. Built RBAC and user auth using Django and PostgreSQL. Optimized frontend performance and backend API efficiency, improving usability & load times by 30%. Integrated NLP/topic modeling APIs for sentiment analysis and content classification.',
    tech: ['React', 'Zustand', 'Django', 'PostgreSQL', 'NLP', 'Docker', 'Nginx'],
    github: '',
    external: '',
  },
  {
    id: '3',
    title: 'BGB E-Recruitment',
    description: 'Developed a live recruitment platform with job applications, admit cards, and exam center features serving 1M+ users. Improved onboarding process by 25% with responsive UI & optimized workflows. Built applicant management and education verification APIs in Django. Deployed with Docker for scalable production system.',
    tech: ['React', 'Redux Toolkit', 'Django', 'MySQL', 'Docker', 'Nginx'],
    github: '',
    external: 'https://joinborderguard.bgb.gov.bd/',
    image: '/assets/BGB_Banner.png',
    images: ['/assets/BGB_Banner.png'],
  },
  {
    id: '4',
    title: 'Top Client Offer',
    description: 'Led a team of 4 developers to deliver this SaaS project. Developed full-stack features using Next.js, Node.js, Express.js, and MongoDB, ensuring clean architecture and performance with RBAC System. Cut load time by 40% and improved UX for 20K+ monthly users. Collaborated with UI/UX designers to implement responsive, pixel-perfect interfaces across devices.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC'],
    github: '',
    external: '',
  },
];

