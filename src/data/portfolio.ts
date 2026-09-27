// Complete authentic data for Sanika Tare sourced directly from:
// 1. Resumes (AI/ML Engineer & AI Software Engineer)
// 2. GitHub profile: https://github.com/sanikatare
// 3. LinkedIn: https://linkedin.com/in/sanikatare

export interface ProfileData {
  name: string
  firstName: string
  title: string
  roles: string[]
  location: string
  phone: string
  email: string
  githubUrl: string
  githubUsername: string
  linkedinUrl: string
  avatarUrl: string
  summary: string
  shortSummary: string
  quote: string
  education: {
    institution: string
    degree: string
    minor: string
    period: string
    location: string
    highlights: string[]
  }
}

export const profile: ProfileData = {
  name: 'Sanika Tare',
  firstName: 'Sanika',
  title: 'AI/ML & Software Engineer',
  roles: [
    'AI/ML Engineer',
    'Backend Engineer (Python & FastAPI)',
    'Frontend Developer (React)',
    'Digital Twin & RAG Researcher',
  ],
  location: 'Pune, Maharashtra, India',
  phone: '+91-72492 55572',
  email: 'sanikatare.work@gmail.com',
  githubUrl: 'https://github.com/sanikatare',
  githubUsername: 'sanikatare',
  linkedinUrl: 'https://linkedin.com/in/sanikatare',
  avatarUrl: '/me.png',
  quote:
    'Working on AI/ML tools and using my creative skills in building and designing high-impact products from research to production.',
  shortSummary:
    'Computer Engineering undergraduate working on AI/ML tools, creative product building and design, and full-stack software development.',
  summary:
    'Computer Engineering undergraduate at PCCOE Pune with hands-on experience developing full-stack MERN applications, NLP systems, and AI-powered automation solutions. Strong foundation in Data Structures & Algorithms, Operating Systems, DBMS, Object-Oriented Programming, and Software Engineering. Skilled in building REST APIs, implementing CRUD operations, debugging applications, and developing scalable software systems using Python, C++, Java, SQL, and JavaScript.',
  education: {
    institution: 'Pimpri Chinchwad College of Engineering (PCCOE)',
    degree: 'Bachelor of Technology – Computer Engineering',
    minor: 'Generative AI Tools & Techniques',
    period: '2023 – 2027',
    location: 'Pune, Maharashtra',
    highlights: [
      'Minor in Generative AI Tools & Techniques',
      'Strong CS fundamentals in DSA, Operating Systems, DBMS & OOP',
      'Active participant in Smart India Hackathon & Google GenAI Exchange',
    ],
  },
}

export interface Metric {
  value: string
  label: string
  sublabel: string
}

export const impactMetrics: Metric[] = [
  { value: '15+', label: 'REST APIs', sublabel: 'Designed & Shipped' },
  { value: '90%', label: 'Prediction Accuracy', sublabel: 'LiFi-WiFi Handover ML' },
  { value: '6+', label: 'Core Modules', sublabel: 'PawPrints Healthcare App' },
  { value: '1', label: 'Patent Application', sublabel: 'Officially Filed' },
]

export interface ServiceDomain {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  metrics: string
  details: string[]
}

export const servicesData: ServiceDomain[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'LLM Digital Twins, RAG Pipelines & Predictive ML',
    description:
      'Designing intelligent systems from sensor telemetry modeling to conversational diagnostic assistants using modern LLM frameworks and classical ML.',
    tags: ['FastAPI', 'LangChain', 'ChromaDB', 'XGBoost', 'LightGBM', 'Transformers'],
    metrics: '90% Accuracy · Sub-second RAG Retrieval',
    details: [
      'Vehicle Health Digital Twin architecture integrating telemetry scoring and maintenance predictions',
      'RAG-based conversational diagnostic Q&A over automotive technical documentation and OBD-II fault codes',
      'Failure prediction and Remaining Useful Life (RUL) estimation with XGBoost, LightGBM, and Random Forest',
      'Sequence classification and sentiment analysis with LSTM & BiLSTM models',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & API Engineering',
    subtitle: 'High-Throughput Python & Node.js Services',
    description:
      'Architecting resilient RESTful APIs, secure authentication systems, and scalable data schemas across SQL and NoSQL engines.',
    tags: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'JWT / RBAC'],
    metrics: '15+ REST APIs · Secure RBAC & Mongoose',
    details: [
      'Engineered 15+ REST endpoints across 6 MongoDB collections with atomic CRUD operations',
      'Stateless JWT authentication, password hashing with bcrypt, and role-based access control (RBAC)',
      'Sensor and telemetry feature ingestion pipelines feeding decision-ready outputs to downstream services',
      'Thorough API validation, Postman testing suites, and query optimization',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web Systems',
    subtitle: 'MERN Stack & Modern React Frontend',
    description:
      'Building accessible, high-performance web applications that bridge intuitive user experiences with reliable backend services.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'REST APIs'],
    metrics: 'Production Deployed · 6+ Health Modules',
    details: [
      'Responsive React.js interfaces with modular component architecture and custom hooks',
      'Figma-to-code component conversion with strict accessibility standards and zero UI clutter',
      'State management, client-side route protection, and real-time UI feedback',
      'End-to-end full-stack pet healthcare platform (PawPrints) supporting pet owners and administrators',
    ],
  },
]

export interface ExperienceItem {
  id: string
  role: string
  company: string
  domain: string
  period: string
  type: string
  location: string
  bullets: string[]
  tags: string[]
  tools?: string[]
  skills?: string[]
  current?: boolean
}

export const workExperience: ExperienceItem[] = [
  {
    id: 'tata-technologies',
    role: 'Student Intern — Vehicle Intelligence & Digital Twin Systems',
    company: 'Tata Technologies',
    domain: 'Automotive AI & Telematics Intelligence',
    period: 'June 2026 – August 2026',
    type: 'Internship',
    location: 'Pune, Maharashtra, India',
    current: true,
    bullets: [
      'Developed an LLM-powered Vehicle Health Digital Twin integrating predictive maintenance, driver analytics, and conversational AI for intelligent vehicle diagnostics.',
      'Built XGBoost, Random Forest, and LightGBM models for failure prediction, Remaining Useful Life (RUL) estimation, and maintenance recommendations.',
      'Implemented a RAG-based system using vehicle manuals and OBD-II documentation for automated fault diagnosis and automotive Q&A.',
      'Engineered vehicle health scoring and OBD-II fault explanation models using sensor and telemetry data, feeding decision-ready outputs to downstream services.',
      'Developed trip readiness and driver behavior analytics modules using weather, route, fuel, and telematics data.',
      'Utilized Python, FastAPI, Scikit-learn, LangChain, ChromaDB, and LLMs to build production-grade automotive intelligence solutions in an Agile, cross-functional team.',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'XGBoost', 'LightGBM', 'OBD-II', 'RAG'],
  },
  {
    id: 'gdgc-pccoe',
    role: 'Design Executive',
    company: 'Google Developer Groups On Campus (GDGC PCCOE)',
    domain: 'UI/UX Design, Branding & Digital Content',
    period: '2024 – 2025',
    type: 'Design Leadership & Technical Community',
    location: 'PCCOE Pune',
    current: false,
    bullets: [
      'Design Executive leading digital content creation, visual branding, UI/UX design, and event creative campaigns for GDGC PCCOE.',
      'Prototyping user interfaces, wireframes, and design systems in Figma and Canva for community initiatives and hackathon platforms.',
      'Designing social media creatives, marketing and promotional campaigns, presentation decks, and typography layouts with strict visual identity standards.',
      'Integrating modern AI design tools to accelerate creative concept development and high-impact visual communication for 500+ student developers.',
    ],
    tools: ['Canva', 'Figma', 'AI tools'],
    skills: [
      'Digital Content Creation',
      'Social Media Creatives & Posts',
      'Branding & Visual Identity',
      'Graphic Design',
      'UI/UX Design',
      'Product Design',
      'Wireframing & Prototyping',
      'User Interface Design',
      'Design Systems',
      'Creative Concept Development',
      'Marketing & Promotional Designs',
      'Presentation & Visual Communication',
      'Event & Campaign Creatives',
      'Typography & Layout Design',
    ],
    tags: ['Figma', 'Canva', 'AI Tools', 'UI/UX Design', 'Branding', 'Design Systems', 'Wireframing', 'Typography'],
  },
  {
    id: 'acm-pccoe',
    role: 'Marketing Executive',
    company: 'PCCOE ACM Student Chapter',
    domain: 'Digital Marketing, Campaign Strategy & Brand Promotion',
    period: '2024 – 2025',
    type: 'Marketing & Student Chapter Leadership',
    location: 'PCCOE Pune',
    current: false,
    bullets: [
      'Marketing Executive directing digital marketing campaigns, social media management, and content creation for PCCOE ACM Student Chapter.',
      'Spearheading campaign planning, brand promotion, and event marketing strategies to expand reach across flagship technical symposiums and hackathons.',
      'Designing promotional creatives in Canva, writing compelling marketing copy, and fostering student audience engagement and community building.',
      'Monitoring performance analytics, engagement tracking, and cross-functional team collaboration to elevate chapter outreach.',
    ],
    tools: ['Canva', 'Social Media Analytics', 'Marketing Tools'],
    skills: [
      'Digital Marketing',
      'Social Media Marketing',
      'Content Marketing',
      'Social Media Management',
      'Campaign Planning & Execution',
      'Brand Promotion',
      'Marketing Strategy',
      'Content Creation',
      'Event Marketing',
      'Audience Engagement',
      'Community Building',
      'Promotional Campaigns',
      'Copywriting',
      'Canva',
      'Analytics & Performance Tracking',
      'Communication & Team Collaboration',
    ],
    tags: ['Digital Marketing', 'Campaign Planning', 'Brand Promotion', 'Event Marketing', 'Copywriting', 'Canva', 'Community Building', 'Analytics'],
  },
  {
    id: 'patent-innovation',
    role: 'Patent Applicant',
    company: 'AI-Based LiFi-WiFi Handover System',
    domain: 'Wireless Network Automation & Deep Learning',
    period: '2024 – 2025',
    type: 'Patent Filed',
    location: 'Pune, India',
    bullets: [
      'Developed a predictive network automation system using LSTM and Transformer architectures to optimize seamless LiFi-WiFi handover decisions.',
      'Achieved approximately 90% prediction accuracy through deep feature engineering, model tuning, and rigorous performance testing.',
      'Patent application officially filed for the proposed intelligent handover system.',
    ],
    tags: ['Deep Learning', 'LSTM', 'Transformers', 'Python', 'Network Optimization', 'Patent'],
  },
  {
    id: 'hackathons',
    role: 'Participant & AI Prototype Innovator',
    company: 'Smart India Hackathon & Google GenAI Exchange',
    domain: 'Hackathons & Rapid AI Prototyping',
    period: '2024',
    type: 'Competitions',
    location: 'National Level',
    bullets: [
      'Designed and engineered rapid prototypes addressing real-world problem statements under time-constrained hackathon settings.',
      'Leveraged Generative AI tools, prompt engineering, and modern APIs to build working full-stack demonstrators.',
      'Collaborated effectively across cross-functional teams to pitch and demo working software to evaluation panels.',
    ],
    tags: ['GenAI', 'Prompt Engineering', 'Fast Prototyping', 'Team Leadership'],
  },
]

export interface EducationItem {
  id: string
  institution: string
  degree: string
  field: string
  period: string
  location: string
  badge: string
  highlights: string[]
  activities?: string[]
  coursework: string[]
}

export const educationHistory: EducationItem[] = [
  {
    id: 'dav',
    institution: 'D.A.V. Public School (DAV)',
    degree: 'Schooling & Junior College (Class X & Class XII)',
    field: 'Science Stream (Physics, Chemistry, Mathematics with Computer Science)',
    period: '2010 – 2021',
    location: 'Pune, Maharashtra',
    badge: 'Schooling & Junior College',
    highlights: [
      'Completed Class XII and Class X CBSE board education with high distinction in Mathematics and Sciences',
      'Early foundation in computer programming, algorithmic logic, and analytical problem solving',
      'Active participant in regional science exhibitions, mathematics olympiads, and school academic forums',
    ],
    activities: [
      'Leadership & Teamwork',
      'Strong Communication & Interpersonal Skills',
      'Active Participation in Competitions',
      'Event Participation & Coordination',
      'Outgoing & Proactive',
      'Problem-Solving & Adaptability',
    ],
    coursework: [
      'Mathematics & Calculus',
      'Computer Science (C++ & Python)',
      'Physics',
      'Chemistry',
      'English & Technical Communication',
    ],
  },
  {
    id: 'pccoe',
    institution: 'Pimpri Chinchwad College of Engineering (PCCOE)',
    degree: 'Bachelor of Technology (B.Tech) – Computer Engineering',
    field: 'Minor: Generative AI Tools & Techniques',
    period: '2023 – 2027',
    location: 'Pune, Maharashtra',
    badge: 'Undergraduate Degree',
    highlights: [
      'Pursuing B.Tech in Computer Engineering with specialized minor in Generative AI Tools & Techniques',
      'Design Executive at Google Developer Groups On Campus (GDGC PCCOE)',
      'Marketing Executive at PCCOE ACM Student Chapter',
      'Inventor & Researcher on filed patent for AI-Based LiFi-WiFi Intelligent Handover System',
      'Strong academic foundation in Data Structures & Algorithms, DBMS, Operating Systems, and OOP',
    ],
    activities: [
      'GDGC PCCOE Design Executive',
      'PCCOE ACM Marketing Executive',
      'Patent Research Team (AI Handover System)',
      'Hackathon & Technical Symposium Coordination',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Generative AI Tools & Techniques',
      'Machine Learning & Deep Learning',
      'Software Engineering & Agile',
      'Computer Networks',
    ],
  },
]

export interface PortfolioProject {
  id: string
  title: string
  subtitle: string
  category: 'AI / ML & RAG' | 'Distributed Systems' | 'Full-Stack MERN' | 'Full-Stack & Web' | 'Deep Learning & IoT' | 'Patents'
  description: string
  highlights: string[]
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  badge?: string
  impact: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'ds-distributed-banking',
    title: 'DS – Distributed Banking Architecture',
    subtitle: 'NPCI UPI Simulator & Multi-Bank Event-Driven Microservices',
    category: 'Distributed Systems',
    featured: true,
    badge: 'gRPC & RabbitMQ',
    description:
      'A high-throughput distributed banking and payment processing engine simulating NPCI UPI protocols. Built with FastAPI microservices, gRPC inter-service communication, RabbitMQ (aio-pika) event streaming, WebSockets for live settlements, and a React frontend.',
    highlights: [
      'Architected a multi-service ecosystem: Transaction Service, Sender Bank Service, Receiver Bank Service, and NPCI Switch Simulator.',
      'Implemented high-performance gRPC protobuf contracts and RabbitMQ asynchronous queues for resilient multi-phase transaction commitments.',
      'Developed WebSockets pipeline for instantaneous account balance push and real-time transaction lifecycle notifications.',
      'Built a comprehensive 7-phase automated test suite (test_phase1 to test_phase7) validating concurrency, network partition recovery, and idempotent retries.',
    ],
    tech: ['Python', 'FastAPI', 'gRPC', 'Protobuf', 'RabbitMQ (aio-pika)', 'WebSockets', 'SQLAlchemy', 'React.js'],
    githubUrl: 'https://github.com/sanikatare/DS',
    impact: 'gRPC & RabbitMQ · 7-Phase Test Suite · NPCI UPI Sim',
  },
  {
    id: 'pawprints',
    title: 'PawPrints',
    subtitle: 'Pet Health Monitoring & Diagnosis System',
    category: 'Full-Stack MERN',
    featured: true,
    badge: 'Live Full-Stack App',
    description:
      'A comprehensive full-stack MERN platform designed for pet healthcare management, providing pet owners and clinic administrators with diagnostics history, appointment scheduling, and vaccination tracking.',
    highlights: [
      'Developed 6+ core modules: pet profiles, digital medical records, vaccination schedules, appointments, diagnosis history, and community interactions.',
      'Architected 15+ REST APIs and CRUD operations across 6 MongoDB collections with robust data validation.',
      'Implemented secure JWT authentication, password hashing with bcrypt, protected routes, and role-based access control (RBAC) for Pet Owners and Administrators.',
      'Crafted responsive React interfaces with integrated backend services, optimizing queries with Postman and Mongoose.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Mongoose', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sanikatare/Pawprints',
    liveUrl: 'https://pawprints-lake.vercel.app',
    impact: '15+ REST APIs · 6 Core Modules · Deployed Live',
  },
  {
    id: 'vehicle-digital-twin',
    title: 'Vehicle Health Digital Twin',
    subtitle: 'LLM-Powered Automotive Telematics & Diagnostics',
    category: 'AI / ML & RAG',
    featured: true,
    badge: 'Tata Technologies Project',
    description:
      'An enterprise AI-driven digital twin combining real-time vehicle sensor telemetry, machine learning failure prediction, and an interactive RAG conversational assistant over automotive manuals and OBD-II codes.',
    highlights: [
      'Engineered an LLM-powered conversational interface for intelligent vehicle diagnostic troubleshooting.',
      'Trained XGBoost, Random Forest, and LightGBM models for predictive failure detection and Remaining Useful Life (RUL) estimation.',
      'Built a RAG pipeline utilizing LangChain, ChromaDB vector store, and LLMs over OEM vehicle documentation.',
      'Developed telemetry scoring algorithms calculating overall vehicle health index from raw sensor streams.',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'XGBoost', 'LightGBM', 'Scikit-learn', 'LLMs'],
    githubUrl: 'https://github.com/sanikatare',
    impact: 'Predictive RUL · RAG Q&A · Telemetry Scoring',
  },
  {
    id: 'juris-ai',
    title: 'JurisAI',
    subtitle: 'Legal Document Intelligence & Semantic Search Platform',
    category: 'AI / ML & RAG',
    featured: true,
    badge: 'NLP & RAG Pipeline',
    description:
      'An AI-powered legal document processing platform utilizing optical character recognition (OCR), NLP, and Retrieval-Augmented Generation to automate clause extraction, summarization, and query answering.',
    highlights: [
      'Engineered automated workflows for semantic search, complex clause extraction, and document summarization.',
      'Built RAG pipelines allowing legal practitioners to interrogate contracts with citation backing.',
      'Designed scalable Python document-processing pipelines handling scanned PDFs and unstructured text.',
    ],
    tech: ['Python', 'NLP', 'OCR', 'LLMs', 'RAG', 'ChromaDB', 'FastAPI'],
    githubUrl: 'https://github.com/sanikatare',
    impact: 'Automated Clause Extraction · Semantic Search',
  },
  {
    id: 'tasktrack-ai',
    title: 'TaskTrack AI',
    subtitle: 'Intelligent Task Orchestration & Automated Workflow Assistant',
    category: 'AI / ML & RAG',
    featured: true,
    badge: 'LLM & Productivity Agent',
    description:
      'An AI-driven task management and productivity engine that automates task decomposition, dynamic priority scoring, deadline estimation, and natural language query assistance for software engineering workflows.',
    highlights: [
      'Built an intelligent task-parsing engine using LLM function calling to convert unstructured team meeting notes and prompts into actionable, prioritized backlog items.',
      'Engineered dynamic priority scoring algorithms considering urgency, dependency graphs, and historical completion velocity.',
      'Developed interactive Kanban and sprint milestone boards with smart daily workload balancing and automated reminders.',
      'Integrated RESTful FastAPI microservices and WebSocket channels for instant team synchronization and real-time task updates.',
    ],
    tech: ['Python', 'FastAPI', 'React.js', 'LLMs', 'LangChain', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/sanikatare/TaskTrack-AI',
    impact: 'Smart Decomposition · Real-Time Sync · Dynamic Priority',
  },
  {
    id: 'hinglish-sentiment',
    title: 'Hinglish Sentiment Analysis',
    subtitle: 'Comparative Deep Learning (RNN vs LSTM vs BiLSTM)',
    category: 'Deep Learning & IoT',
    badge: '94.86% BiLSTM Accuracy',
    description:
      'A deep learning research benchmark comparing RNN, LSTM, and BiLSTM architectures for hate-speech and sentiment detection in noisy, code-mixed Hinglish text.',
    highlights: [
      'Implemented clean text preprocessing: lowercase normalization, slang resolution, and sequence padding.',
      'Trained and evaluated RNN (85.20%), LSTM (91.40%), and BiLSTM (94.86% accuracy, 0.942 Macro F1).',
      'Demonstrated bidirectional contextual superiority for capturing sarcasm in code-mixed languages.',
    ],
    tech: ['Python', 'BiLSTM', 'LSTM', 'RNN', 'NLP', 'TensorFlow', 'Scikit-learn'],
    githubUrl: 'https://github.com/sanikatare/Hinglish-sentiment-analysis-rnn-lstm-bilstm',
    impact: '94.86% Accuracy · Code-mixed NLP Benchmark',
  },
  {
    id: 'electrofine',
    title: 'Electrofine',
    subtitle: 'Smart E-Waste Recycling & Real-Time Collector Tracking',
    category: 'Full-Stack MERN',
    badge: 'Next.js & TypeScript',
    description:
      'A modern sustainability platform enabling citizens to schedule e-waste pickups, track field collectors live, and receive verified transparent valuations for recycled hardware.',
    highlights: [
      'Engineered responsive scheduling interface with Next.js, TypeScript, and Prisma.',
      'Real-time status updates and collector allocation workflow.',
      'Transparent pricing calculator based on device category and condition.',
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/sanikatare/Electrofine',
    impact: 'Live Pickup Tracking · Transparent Recycling',
  },
]

export interface TestimonialItem {
  id: string
  name: string
  role: string
  organization: string
  stars: number
  quote: string
  tag: string
}

export const testimonials: TestimonialItem[] = [
  {
    id: 'tata-feedback',
    name: 'Vehicle Intelligence Engineering Team',
    role: 'Project Review & Mentorship',
    organization: 'Tata Technologies',
    stars: 5,
    quote:
      'Sanika demonstrated outstanding technical ownership in developing our Vehicle Health Digital Twin. Her work combining Python FastAPI microservices, LangChain RAG pipelines, and XGBoost failure prediction delivered remarkable accuracy and real-world utility.',
    tag: 'Automotive Intelligence',
  },
  {
    id: 'patent-review',
    name: 'Patent Innovation Review',
    role: 'Patent Application Ref: Intelligent Handover',
    organization: 'Intellectual Property Review',
    stars: 5,
    quote:
      'The proposed LiFi-WiFi handover architecture establishes a novel predictive approach using LSTM and Transformer networks, achieving 90% prediction accuracy and successfully solving signal degradation prior to connection drop.',
    tag: 'Patent & Research',
  },
  {
    id: 'academic-evaluation',
    name: 'Department of Computer Engineering',
    role: 'Academic & Hackathon Mentorship',
    organization: 'PCCOE Pune',
    stars: 5,
    quote:
      'Sanika consistently excels in applying core computer science fundamentals to cutting-edge software systems. From full-stack MERN implementations to Generative AI architectures, she shows exceptional execution speed and problem-solving capability.',
    tag: 'Academic Excellence',
  },
]

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  credential: string
  date: string
  skills: string[]
  icon: 'aws' | 'ml' | 'dsa' | 'web' | 'patent'
  link?: string
}

export const certifications: CertificationItem[] = [
  {
    id: 'cert-aws',
    title: 'AWS Certified Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    credential: 'AWS Cloud Fundamentals & Infrastructure',
    date: 'Certified',
    skills: ['Cloud Architecture', 'AWS IAM', 'EC2', 'S3', 'Cloud Security'],
    icon: 'aws',
  },
  {
    id: 'cert-patent',
    title: 'Patent Application Filed: LiFi-WiFi Handover System',
    issuer: 'Indian Patent Office',
    credential: 'AI-Based Predictive Network Handover',
    date: 'Officially Filed',
    skills: ['Deep Learning', 'Transformers', 'LSTM', 'Network Telemetry'],
    icon: 'patent',
  },
  {
    id: 'cert-iit-guwahati',
    title: 'Data Science & Machine Learning',
    issuer: 'IIT Guwahati',
    credential: 'Advanced ML & Data Science Specialization',
    date: 'Certified',
    skills: ['Supervised Learning', 'Feature Engineering', 'Model Evaluation', 'Python'],
    icon: 'ml',
  },
  {
    id: 'cert-abdul-bari',
    title: 'Mastering Data Structures & Algorithms using C & C++',
    issuer: 'Abdul Bari / Udemy',
    credential: 'Comprehensive CS & Algorithm Mastery',
    date: 'Completed',
    skills: ['DSA', 'Time Complexity', 'Dynamic Programming', 'Trees & Graphs'],
    icon: 'dsa',
  },
  {
    id: 'cert-web-dev',
    title: 'Complete Web Development Bootcamp',
    issuer: 'Udemy',
    credential: 'Full-Stack MERN & Modern Web Architecture',
    date: 'Completed',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    icon: 'web',
  },
]

export const technicalSkills = {
  backend: [
    'Python',
    'FastAPI',
    'Flask (familiar)',
    'Node.js',
    'Express.js',
    'REST API Design',
    'JWT Authentication',
    'bcrypt',
    'Role-Based Access Control (RBAC)',
  ],
  frontend: [
    'React.js',
    'JavaScript (ES6+)',
    'TypeScript',
    'Responsive UI Development',
    'Tailwind CSS',
    'Figma-to-Component',
    'API Integration',
  ],
  databases: [
    'MongoDB (NoSQL)',
    'Mongoose ODM',
    'SQL / MySQL',
    'Data Modelling',
    'Query Optimization',
    'Aggregation Pipelines',
  ],
  aiMl: [
    'LangChain',
    'ChromaDB',
    'Retrieval-Augmented Generation (RAG)',
    'Large Language Models (LLMs)',
    'TensorFlow',
    'Scikit-Learn',
    'XGBoost',
    'LightGBM',
    'Random Forest',
    'LSTM & Transformers',
    'Pandas',
    'NumPy',
    'NLP & OCR',
  ],
  aiDevTools: [
    'Cursor',
    'Claude',
    'ChatGPT',
    'GitHub Copilot workflows',
    'Antigravity',
    'Qoder',
    'Prompt Engineering for Productivity',
  ],
  coreCs: [
    'Data Structures & Algorithms (DSA)',
    'Operating Systems (OS)',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Software Engineering',
    'Agile, Scrum & Jira (SDLC)',
  ],
  toolsAndCloud: [
    'Jira & Agile Scrum',
    'AWS Cloud Practitioner (certified)',
    'Git & GitHub',
    'Postman (API Testing)',
    'VS Code',
  ],
}

export interface MethodologyPillar {
  id: string
  title: string
  subtitle: string
  badge: string
  description: string
  metrics: string
  practices: string[]
  tools: string[]
}

export const methodologyPillars: MethodologyPillar[] = [
  {
    id: 'requirements-discovery',
    title: 'Requirements Gathering & Discovery',
    subtitle: 'Problem Framing, Epics & Acceptance Criteria',
    badge: 'Phase 01 · Discovery',
    description:
      'Translating ambiguous domain challenges into structured product requirements, user stories, and measurable engineering specifications before writing code.',
    metrics: '100% Spec-Driven API & ML Contracts',
    practices: [
      'Decomposing complex systems into Epics, User Stories, and testable Acceptance Criteria',
      'Stakeholder interviews and domain modeling (automotive OBD-II fault codes, legal clause taxonomies, dual-role healthcare workflows)',
      'Defining non-functional SLAs early: sub-second RAG retrieval latency, API response schemas, and RBAC security boundaries',
    ],
    tools: ['Jira Epics', 'User Stories', 'PRD & Specs', 'Figma Wireframes'],
  },
  {
    id: 'agile-scrum-jira',
    title: 'Agile, Scrum & Jira Execution',
    subtitle: 'Sprint Planning, Backlog Grooming & Velocity Tracking',
    badge: 'Phase 02 · Agile & Jira',
    description:
      'Driving predictable iterative delivery through structured Scrum ceremonies, transparent Jira sprint boards, and disciplined backlog prioritization.',
    metrics: 'Iterative 2-Week Sprints · Zero Scope Creep',
    practices: [
      'Managing Jira Scrum & Kanban boards across To-Do, In-Progress, Code Review, QA, and Done workflows',
      'Story point estimation, sprint capacity planning, and critical-path dependency resolution',
      'Active participation in daily standups, sprint reviews, and retrospectives to continuously refine team velocity',
    ],
    tools: ['Jira Software', 'Scrum Sprints', 'Kanban Boards', 'Burndown Tracking'],
  },
  {
    id: 'delivery-qa',
    title: 'End-to-End Delivery & Quality Gates',
    subtitle: 'Incremental Releases, CI Validation & Definition of Done',
    badge: 'Phase 03 · Delivery',
    description:
      'Ensuring every sprint increment ships as production-grade software backed by automated regression suites, API contract validation, and telemetry.',
    metrics: '15+ Production APIs · 7-Phase Test Suites',
    practices: [
      'Enforcing strict Definition of Done (DoD) with Postman API suites, pytest phase verification, and model ROC-AUC/F1 benchmarks',
      'Phased milestone rollouts — such as the 7-phase UPI Distributed Simulator and 6-module PawPrints healthcare platform',
      'Continuous risk mitigation, circuit-breaker fault tolerance, and post-deployment observability',
    ],
    tools: ['Definition of Done', 'Git PR Workflows', 'Postman Suites', 'Pytest / QA'],
  },
  {
    id: 'cross-functional-leadership',
    title: 'Cross-Functional Leadership',
    subtitle: 'Bridging Engineering, ML Research, Design & Outreach',
    badge: 'Phase 04 · Leadership',
    description:
      'Leading across technical and creative boundaries by aligning backend engineers, ML researchers, UI/UX designers, and community stakeholders.',
    metrics: '500+ Developers Reached · Multi-Squad Alignment',
    practices: [
      'Collaborating in cross-functional Agile pods at Tata Technologies across telematics, ML modeling, and FastAPI services',
      'Leading UI/UX design systems at GDGC PCCOE and strategic campaign execution at PCCOE ACM Student Chapter',
      'Directing rapid time-boxed hackathon squads (Smart India Hackathon & Google GenAI Exchange) from ideation to live pitch',
    ],
    tools: ['Cross-Functional Pods', 'Stakeholder Demos', 'Figma-to-Code', 'Team Leadership'],
  },
]

export interface DeliveryCaseStudy {
  id: string
  project: string
  organization: string
  frameworkBadge: string
  requirementsLens: string
  deliveryLens: string
  leadershipLens: string
  jiraArtifacts: string[]
}

export const deliveryCaseStudies: DeliveryCaseStudy[] = [
  {
    id: 'delivery-digitwin',
    project: 'Vehicle Health Digital Twin & RAG Diagnostics',
    organization: 'Tata Technologies',
    frameworkBadge: 'Agile Scrum · Jira Sprint Workflows',
    requirementsLens:
      'Gathered automotive diagnostic requirements from OEM manuals, OBD-II fault standards, and telematics streams to define ML health-scoring thresholds and conversational RAG user stories.',
    deliveryLens:
      'Delivered XGBoost/LightGBM RUL predictors, ChromaDB vector pipelines, and FastAPI endpoints across iterative sprints with regular stakeholder demos.',
    leadershipLens:
      'Partnered across cross-functional engineering and data science tracks to align telemetry ingestion schemas with downstream diagnostic UI consumers.',
    jiraArtifacts: ['Epic: Telemetry & RUL Engine', 'Epic: OBD-II RAG Assistant', 'Sprint Demo & QA Sign-off'],
  },
  {
    id: 'delivery-pawprints-ds',
    project: 'PawPrints MERN Platform & DS UPI Simulator',
    organization: 'Full-Stack & Distributed Systems Engineering',
    frameworkBadge: 'Jira Backlog · Phased Milestone Delivery',
    requirementsLens:
      'Translated dual-role healthcare workflows into 6 core modules & 15+ REST API specs for PawPrints, and scoped 7 progressive distributed-systems phases (REST, gRPC, RabbitMQ, WebSockets, WebRTC) for DS.',
    deliveryLens:
      'Executed milestone-driven releases with JWT/RBAC security, MongoDB schema validation, Saga rollbacks, and automated phase regression scripts (test_phase1–7).',
    leadershipLens:
      'Bridged frontend React/Vite telemetry dashboards with backend microservice contracts, ensuring seamless end-to-end integration and live deployment.',
    jiraArtifacts: ['6 Healthcare Epics', '7 Distributed Phase Gates', '15+ Validated API Contracts'],
  },
  {
    id: 'delivery-community-hackathons',
    project: 'GDGC PCCOE, ACM Chapter & National Hackathons',
    organization: 'Design, Marketing & Rapid AI Prototyping',
    frameworkBadge: 'Time-Boxed Sprints · Cross-Disciplinary Squads',
    requirementsLens:
      'Scoped problem statements, target audience personas, and Figma design systems for campus-wide technical symposiums and 36-hour national hackathons.',
    deliveryLens:
      'Shipped working GenAI full-stack prototypes under strict hackathon deadlines and delivered cohesive multi-channel branding and promotional campaigns on schedule.',
    leadershipLens:
      'Led cross-functional student teams across UI/UX design (GDGC), digital marketing analytics (ACM), and full-stack engineering to impact 500+ developers.',
    jiraArtifacts: ['Design System Handoffs', 'Campaign Roadmaps', 'Rapid MVP Sprint Boards'],
  },
]

export function getTechBadgeStyle(tech: string): { badge: string; dot: string } {
  const normalized = tech.toLowerCase()

  if (normalized.includes('python')) {
    return {
      badge: 'bg-blue-50 text-blue-700 border-blue-200/90 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60',
      dot: 'bg-blue-500 dark:bg-blue-400',
    }
  }
  if (
    normalized.includes('fastapi') ||
    normalized.includes('streamlit') ||
    normalized.includes('geopandas') ||
    normalized.includes('folium')
  ) {
    return {
      badge: 'bg-teal-50 text-teal-700 border-teal-200/90 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800/60',
      dot: 'bg-teal-500 dark:bg-teal-400',
    }
  }
  if (normalized.includes('react') || normalized.includes('tailwind') || normalized.includes('vite')) {
    return {
      badge: 'bg-sky-50 text-sky-700 border-sky-200/90 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60',
      dot: 'bg-sky-500 dark:bg-sky-400',
    }
  }
  if (
    normalized.includes('next.js') ||
    normalized.includes('typescript') ||
    normalized.includes('postgresql') ||
    normalized.includes('postgres') ||
    normalized.includes('sql')
  ) {
    return {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/90 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60',
      dot: 'bg-indigo-500 dark:bg-indigo-400',
    }
  }
  if (
    normalized.includes('langchain') ||
    normalized.includes('llm') ||
    normalized.includes('chromadb') ||
    normalized.includes('rag')
  ) {
    return {
      badge: 'bg-violet-50 text-violet-700 border-violet-200/90 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800/60',
      dot: 'bg-violet-500 dark:bg-violet-400',
    }
  }
  if (
    normalized.includes('node') ||
    normalized.includes('express') ||
    normalized.includes('mongodb') ||
    normalized.includes('mongoose') ||
    normalized.includes('prisma')
  ) {
    return {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/90 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60',
      dot: 'bg-emerald-500 dark:bg-emerald-400',
    }
  }
  if (
    normalized.includes('grpc') ||
    normalized.includes('rabbitmq') ||
    normalized.includes('websocket') ||
    normalized.includes('webrtc')
  ) {
    return {
      badge: 'bg-purple-50 text-purple-700 border-purple-200/90 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/60',
      dot: 'bg-purple-500 dark:bg-purple-400',
    }
  }
  if (
    normalized.includes('tensorflow') ||
    normalized.includes('lstm') ||
    normalized.includes('rnn') ||
    normalized.includes('nlp') ||
    normalized.includes('ocr') ||
    normalized.includes('tf-idf')
  ) {
    return {
      badge: 'bg-rose-50 text-rose-700 border-rose-200/90 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800/60',
      dot: 'bg-rose-500 dark:bg-rose-400',
    }
  }
  if (
    normalized.includes('xgboost') ||
    normalized.includes('lightgbm') ||
    normalized.includes('scikit') ||
    normalized.includes('random forest') ||
    normalized.includes('regression') ||
    normalized.includes('machine learning') ||
    normalized.includes('scheduling')
  ) {
    return {
      badge: 'bg-amber-50 text-amber-800 border-amber-200/90 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60',
      dot: 'bg-amber-500 dark:bg-amber-400',
    }
  }
  if (normalized.includes('jwt') || normalized.includes('bcrypt')) {
    return {
      badge: 'bg-orange-50 text-orange-700 border-orange-200/90 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800/60',
      dot: 'bg-orange-500 dark:bg-orange-400',
    }
  }

  return {
    badge: 'bg-slate-100 text-slate-700 border-slate-200/90 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    dot: 'bg-slate-500 dark:bg-slate-400',
  }
}
