import { ProjectType } from '../types';

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    category: 'web',
    image: 'https://images.pexels.com/photos/6956936/pexels-photo-6956936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'A complete redesign of an e-commerce platform to improve user experience and increase conversions.',
    description: 'This project involved a comprehensive redesign of an established e-commerce platform to modernize its user interface, streamline the checkout process, and implement a responsive design that works across all devices.',
    problem: 'The client was experiencing high cart abandonment rates and poor mobile conversion. Their legacy platform was slow, difficult to navigate, and lacked modern e-commerce features.',
    solution: 'I implemented a modern, responsive design with an intuitive user interface, optimized the checkout flow to reduce friction, and added features like saved shopping carts, wishlists, and product recommendations to enhance the shopping experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe API', 'Webpack'],
    link: 'https://example.com/ecommerce',
    codeLink: 'https://github.com/yourusername/ecommerce-platform',
    client: 'FashionRetail Inc.',
    timeline: '3 months'
  },
  {
    id: 2,
    title: 'Financial Dashboard Application',
    category: 'web',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'An interactive dashboard for financial data visualization and analysis.',
    description: 'Developed a comprehensive financial dashboard that allows users to visualize, analyze, and gain insights from complex financial data through interactive charts, reports, and customizable widgets.',
    problem: 'The client needed a way to present complex financial data to their customers in an intuitive, visual format that would help users make informed financial decisions without requiring deep financial expertise.',
    solution: 'I created an interactive dashboard with real-time data visualization, customizable reports, and intelligent insights that highlighted important trends and anomalies in the user\'s financial data.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Express', 'PostgreSQL', 'AWS'],
    link: 'https://example.com/finance-dashboard',
    client: 'FinTech Solutions',
    timeline: '4 months'
  },
  {
    id: 3,
    title: 'Health & Fitness Mobile App',
    category: 'mobile',
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'A mobile application that helps users track fitness goals, nutrition, and wellness activities.',
    description: 'This cross-platform mobile application allows users to track workouts, monitor nutrition, set fitness goals, and connect with a community of like-minded individuals for motivation and support.',
    problem: 'The client wanted to create a comprehensive fitness solution that would differentiate itself in a crowded market by offering personalized guidance and fostering a supportive community.',
    solution: 'I developed a feature-rich mobile app with workout tracking, meal planning, progress visualization, and social features that allowed users to connect, share achievements, and participate in challenges.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
    link: 'https://example.com/fitness-app',
    codeLink: 'https://github.com/yourusername/fitness-mobile-app',
    client: 'WellnessTech Inc.',
    timeline: '5 months'
  },
  {
    id: 4,
    title: 'Corporate Brand Identity',
    category: 'design',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'A complete brand identity redesign for a corporate client entering a new market.',
    description: 'Created a comprehensive brand identity for a B2B company expanding into new markets, including logo design, color palette, typography, brand guidelines, and marketing materials.',
    problem: 'The client was expanding into new markets and needed to refresh their outdated corporate identity to appeal to a more modern, international audience while maintaining recognition from existing clients.',
    solution: 'I developed a refreshed brand identity that maintained core elements of their existing brand while modernizing the visual language and creating a flexible system that could adapt to different cultural contexts.',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    client: 'GlobalTech Solutions',
    timeline: '2 months'
  },
  {
    id: 5,
    title: 'Real Estate Listing Platform',
    category: 'web',
    image: 'https://images.pexels.com/photos/7578916/pexels-photo-7578916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'A modern real estate platform with advanced search capabilities and virtual tours.',
    description: 'Developed a comprehensive real estate platform that allows users to search for properties using advanced filters, view virtual tours, schedule viewings, and connect with real estate agents.',
    problem: 'The client needed a digital platform to showcase their properties and streamline the property search and viewing process for potential buyers and renters.',
    solution: 'I created a feature-rich platform with interactive property maps, advanced search filters, virtual tour integration, and a robust communication system between agents and potential buyers/renters.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps API', 'WebRTC'],
    link: 'https://example.com/realestate',
    client: 'Prime Properties',
    timeline: '4 months'
  },
  {
    id: 6,
    title: 'Event Management App',
    category: 'mobile',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'A mobile application for planning, organizing, and managing events of all sizes.',
    description: 'This mobile application helps event organizers manage all aspects of event planning, from guest lists and invitations to venue selection, vendor management, and day-of coordination.',
    problem: 'The client wanted to transform their manual event planning process into a digital solution that would streamline workflows, improve communication, and enhance the experience for both planners and attendees.',
    solution: 'I developed a comprehensive event management application with features for guest management, vendor coordination, budget tracking, timeline planning, and real-time updates during events.',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions', 'Google Maps API'],
    link: 'https://example.com/event-app',
    client: 'EventPro Inc.',
    timeline: '3 months'
  }
];