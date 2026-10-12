export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  image: string;
  featured: boolean;
  isConcept?: boolean;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'carenova',
    title: 'CareNova',
    tagline: 'Healthcare Web Platform & Patient Dashboard',
    category: 'Healthcare · Web Application',
    year: '2026',
    image: '/src/assets/images/carenova_ui_mockup_1791784044827.jpg',
    featured: true,
    isConcept: false,
    summary: 'A modern, dark-themed healthcare web application designed to help patients navigate appointments, clinical records, and health summaries through a clear and structured interface.',
    challenge: 'Healthcare portals are often difficult to navigate, with cluttered tables and high visual fatigue for patients seeking critical care information.',
    solution: 'Designed and implemented an organized, accessible dashboard with calm dark surfaces, clear typography, and intuitive views for patient vitals, appointments, and care history.',
    deliverables: [
      'Responsive Patient Overview Dashboard',
      'Health Records & Appointment Views',
      'Consistent Dark-Themed Component Styling',
      'Accessible, Mobile-Friendly Layout'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://carenova-healthcare-platform.vercel.app/',
    githubUrl: 'https://github.com/prathammahale04-png/carenova-healthcare-platform'
  },
  {
    id: 'sonder-ai',
    title: 'Sonder AI',
    tagline: 'Conceptual Canvas Interface for Non-Linear Storytelling',
    category: 'Concept Project · UI Exploration',
    year: '2026',
    image: '/src/assets/images/sonder_ai_interface_1791784057744.jpg',
    featured: false,
    isConcept: true,
    summary: 'A conceptual node-based interface exploring how writers and creative directors might visually map out branching plots, character relationships, and story timelines.',
    challenge: 'Standard text documents can make it hard to visualize complex non-linear narratives and multi-thread plot structures.',
    solution: 'Drafted a spatial canvas concept combining clear node relationships, focused writing panels, and a high-contrast dark workspace.',
    deliverables: [
      'Node Canvas Spatial Layout Concept',
      'Narrative Detail Panel Wireframes',
      'Dark-Mode Visual Exploration'
    ],
    techStack: ['Figma', 'UI Design', 'Concept Modeling']
  },
  {
    id: 'aura-sound',
    title: 'Aura Sound',
    tagline: 'Tactile Synthesizer Control Interface Concept',
    category: 'Concept Project · Audio Interface',
    year: '2025',
    image: '/src/assets/images/aura_sound_interface_1791784072597.jpg',
    featured: false,
    isConcept: true,
    summary: 'A digital audio interface concept balancing tactile hardware-style rotary controls with real-time waveform visualization in an uncluttered studio layout.',
    challenge: 'Digital audio tools often pack too many small dials into the screen, making quick sound adjustments difficult.',
    solution: 'Designed a spacious, high-contrast control surface with prioritized waveform feedback and distinct parameter clusters.',
    deliverables: [
      'Synthesizer Control Surface Concept',
      'Waveform Feedback Area Layout',
      'Studio-Grade Dark Palette'
    ],
    techStack: ['Figma', 'Interface Design', 'Visual Hierarchy']
  }
];

export const MANIFESTO_PILLARS = [
  {
    number: '01',
    title: 'Design Judgment Comes First',
    lead: 'AI accelerates production, but clear creative direction guides the result.',
    description: 'Generative tools make it simple to produce variations quickly. The real value comes from careful choices in typography, whitespace, and visual balance that suit the project purpose.'
  },
  {
    number: '02',
    title: 'Thoughtful Iteration',
    lead: 'Using AI to explore more ideas, not to cut corners.',
    description: 'Rather than accepting generic templates, I use modern tools to rapidly prototype distinct concepts and refine them until they feel natural, polished, and purposeful.'
  },
  {
    number: '03',
    title: 'Solid Frontend Foundations',
    lead: 'Great visuals must be backed by clean, responsive code.',
    description: 'Every layout is built with semantic structure, clean component organization, smooth animations, and solid usability across all screen sizes.'
  }
];

export const PROCESS_STEPS = [
  {
    phase: '01',
    name: 'Research & Structure',
    summary: 'Understanding user needs, key goals, and content hierarchy before starting visual design.',
    activities: [
      'Auditing user goals and key workflows',
      'Defining content structure and page hierarchy',
      'Gathering visual references and layout benchmarks'
    ]
  },
  {
    phase: '02',
    name: 'Visual Design & Prototyping',
    summary: 'Creating cohesive typography, color palettes, and component layouts in Figma.',
    activities: [
      'Establishing typography scale and spacing tokens',
      'Designing component states and responsive wireframes',
      'Reviewing visual contrast and aesthetic direction'
    ]
  },
  {
    phase: '03',
    name: 'Frontend Development',
    summary: 'Building clean, responsive React and Tailwind components with smooth interactions.',
    activities: [
      'Developing modular component architecture',
      'Implementing smooth, lightweight scroll interactions',
      'Ensuring responsive behavior across mobile and desktop'
    ]
  },
  {
    phase: '04',
    name: 'Refinement & Review',
    summary: 'Fine-tuning details, checking browser compatibility, and verifying real content.',
    activities: [
      'Checking touch targets and typography readability',
      'Testing animations and reduced-motion preferences',
      'Verifying live deployment and code repository quality'
    ]
  }
];

export const TOOLKIT_CATEGORIES = [
  {
    category: 'Design & Visual Direction',
    tools: ['Figma', 'Interface Design', 'Design Systems', 'Typography', 'Visual Prototyping']
  },
  {
    category: 'Frontend Development',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite', 'HTML5 & CSS']
  },
  {
    category: 'AI Tools & Workflow',
    tools: ['Google AI Studio', 'Cursor', 'Rapid Prototyping', 'Prompt-Assisted Coding']
  }
];
