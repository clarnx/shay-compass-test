import { Project } from '@/types/projectType';

export const projects: Project[] = [
  {
    id: 'innovation-platform',
    title: 'Innovation Platform',
    description: 'A cutting-edge platform designed to streamline digital workflows and enhance productivity.',
    fullDescription: 'The Innovation Platform is a comprehensive solution that revolutionizes how teams collaborate and manage their digital workflows. Built with modern technologies and scalable architecture, this platform empowers organizations to achieve more with less effort.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    features: [
      'Real-time collaboration tools',
      'Advanced workflow automation',
      'Customizable dashboards',
      'Integration with popular tools',
      'Enterprise-grade security',
    ],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'A comprehensive design system that ensures consistency and scalability across all products.',
    fullDescription: 'Our Design System is a carefully crafted collection of reusable components, patterns, and guidelines that ensure brand consistency and accelerate development across all digital products. It serves as the single source of truth for design and development teams.',
    technologies: ['React', 'Storybook', 'Tailwind CSS', 'Figma', 'TypeScript'],
    features: [
      'Extensive component library',
      'Comprehensive documentation',
      'Accessibility-first approach',
      'Dark mode support',
      'Cross-platform compatibility',
    ],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'mobile-experience',
    title: 'Mobile Experience',
    description: 'A responsive mobile-first application delivering seamless experiences across all devices.',
    fullDescription: 'The Mobile Experience project showcases cutting-edge mobile development practices, delivering a fast, intuitive, and engaging user experience. Built with performance and accessibility in mind, this application sets new standards for mobile interactions.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'GraphQL'],
    features: [
      'Offline-first architecture',
      'Push notifications',
      'Biometric authentication',
      'Smooth animations',
      'Native performance',
    ],
    links: {
      demo: '#',
      github: '#',
    },
  },
];
