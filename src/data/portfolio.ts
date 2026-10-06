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
  mediumUrl: string
  portfolioUrl: string
  resumeUrl: string
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
  title: 'AI Software Engineer',
  roles: [
    'AI Software Engineer',
    'AI/ML Engineering Intern (Tata Technologies)',
    'Full-Stack Developer (FastAPI & React 19)',
    'Multi-Agent & RAG Architect',
  ],
  location: 'Pune, Maharashtra, India',
  phone: '+91-7249255572',
  email: 'sanikatare.work@gmail.com',
  githubUrl: 'https://github.com/sanikatare',
  githubUsername: 'sanikatare',
  linkedinUrl: 'https://linkedin.com/in/sanikatare',
  mediumUrl: 'https://medium.com/@sanikatare.work',
  portfolioUrl: 'https://portfolio-three-bay-okimzvh4sn.vercel.app',
  resumeUrl: '/Sanika_Tare_Resume.pdf',
  avatarUrl: '/me.png',
  quote:
    'Results-driven Software Engineer and Computer Engineering student who builds sustainable, efficient web applications with exceptional user interfaces.',
  shortSummary:
    'Results-driven AI Software Engineer and Computer Engineering student (B.E., 2027) building sustainable, efficient web applications, LLM Digital Twins, and grounded RAG systems.',
  summary:
    'Results-driven Software Engineer and Computer Engineering student (B.E., 2027) who builds sustainable, efficient web applications with exceptional user interfaces. Strong in full-stack development, system design, and data-driven problem solving, with measurable results across an industry internship and two benchmarked projects. Collaborative leader who takes ownership and delivers reliable, user-focused solutions.',
  education: {
    institution: 'Pimpri Chinchwad College of Engineering | Pune, Maharashtra',
    degree: 'Bachelor of Engineering in Computer Engineering',
    minor: 'Generative AI Tools & Techniques',
    period: '2023 – 2027 (Expected)',
    location: 'Pune, Maharashtra',
    highlights: [
      'Coursework: AI, ML, DSA, DBMS, Networks, Distributed Systems',
      'Filed patent for ML-based predictive Li-Fi/Wi-Fi handover system using smartphone motion sensors',
      'Presented AI/ML predictive-systems research at KSHITIJ 2026',
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
    id: 'vehicle-digital-twin',
    title: 'Digital Twin — Vehicle Brain',
    subtitle: 'AI-Powered Vehicle Telemetry, Predictive Maintenance & RAG Diagnostics',
    category: 'AI / ML & RAG',
    featured: true,
    badge: '8-Phase Automotive AI',
    description:
      'An AI-powered digital twin platform for real-time vehicle telemetry, anomaly detection, route intelligence, and predictive analytics — unifying Health Score, Predictive Maintenance, Digital Twin, OBD Diagnostics, RAG Knowledge Base, Assistant, Trip Planner, and Driver Behaviour.',
    highlights: [
      'Unified 8-phase automotive intelligence dashboard featuring a custom 270° instrument-cluster telemetry gauge system.',
      'Trained XGBoost, Random Forest, and LightGBM models for predictive failure detection and Remaining Useful Life (RUL) estimation.',
      'Built a RAG pipeline utilizing LangChain, ChromaDB vector store, and LLMs over vehicle manuals and OBD-II diagnostic codes.',
      'Architected containerized Python FastAPI backend services with Nginx gateway routing, real-time telemetry health scoring, and route intelligence.',
    ],
    tech: ['Python', 'FastAPI', 'React.js', 'LangChain', 'ChromaDB', 'XGBoost', 'LightGBM', 'Docker'],
    githubUrl: 'https://github.com/sanikatare/DigitalTwin',
    liveUrl: 'https://digitaltwin-w1l1.onrender.com/',
    impact: '8 Backend Phases · Predictive RUL · Deployed Live',
  },
  {
    id: 'genai-vedawise',
    title: 'GenAI — VedaWise',
    subtitle: 'Explainable AI for Life-Oriented Knowledge Discovery from the Rig Veda',
    category: 'AI / ML & RAG',
    featured: true,
    badge: 'Explainable Hybrid RAG',
    description:
      'An explainable hybrid Retrieval-Augmented Generation (RAG) system that retrieves and contextualizes life-oriented themes from the Rig Veda while enforcing strict epistemic boundaries to prevent hallucinations and unsupported claims.',
    highlights: [
      'Separated grounded outputs into 4 explicit epistemic layers: Textual Evidence (Direct), Theme (Thematic), Contemporary Connection (Interpretive), and Unsupported Claim Guardrails.',
      'Built hybrid retrieval combining semantic vector embeddings and lexical search with verbatim Sanskrit, transliteration, and [RV_M_S_V] verse citations.',
      'Designed explainable AI verification workflows ensuring modern reflective analogies are clearly distinguished from primary scriptural text.',
      'Deployed an interactive TypeScript & React web interface for querying life-oriented motifs with transparent source attribution.',
    ],
    tech: ['TypeScript', 'React.js', 'Python', 'FastAPI', 'Hybrid RAG', 'LLMs', 'Vector Search', 'NLP'],
    githubUrl: 'https://github.com/sanikatare/GENAI',
    liveUrl: 'https://genai-hv7o.onrender.com',
    impact: '4 Epistemic Layers · Hybrid RAG · Deployed Live',
  },
  {
    id: 'electrofine',
    title: 'ElectroFine',
    subtitle: 'Smart E-Waste Recycling & Real-Time Collector Tracking',
    category: 'Full-Stack MERN',
    featured: true,
    badge: 'Live E-Waste Platform',
    description:
      'A modern e-waste recycling platform that helps individuals and businesses dispose of electronic waste responsibly. Users can schedule pickups, monitor collector location in real time, and receive transparent, fair payouts based on recyclable value.',
    highlights: [
      'Smart pickup scheduling based on availability and location with device type, quantity, condition, and weight tracking.',
      'Real-time collector tracking on a live map with status transitions from Scheduled to Completed.',
      'Dynamic fair payout valuation engine based on device category, material recovery potential, and item condition.',
      'Autonomous Mongoose & MongoDB document store with digitized recycling records and CO₂ impact metrics.',
    ],
    tech: ['TypeScript', 'React.js', 'Node.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'REST APIs'],
    githubUrl: 'https://github.com/sanikatare/ElectroFinee',
    liveUrl: 'https://electro-finee-ebon.vercel.app',
    impact: 'Live Pickup Tracking · Fair Payout Engine · Deployed Live',
  },
  {
    id: 'home-iq',
    title: 'Home IQ',
    subtitle: 'Autonomous Household Intelligence & Multi-Agent Estate Management Platform',
    category: 'AI / ML & RAG',
    featured: true,
    badge: 'Multi-Agent AI & 22-Table Core',
    description:
      'A full-stack, policy-governed household operating system unifying 8 core household domains under a deterministic 22-table relational core and a multi-agent intelligence plane powered by Gemini 2.5 Flash, BioBERT + PubMedQA (99.7% F1), LayoutLMv3, Donut, grounded RAG citations, and Human-in-the-Loop (HITL) approval gates.',
    highlights: [
      'Architected an 8-domain household workspace (Kitchen, Laundry, Maintenance, Finance, EV Mobility, Document Vault, Parents\' Health, Travel) backed by 22 normalized SQLAlchemy 2.0 / PostgreSQL 16 tables.',
      'Engineered a grounded Multi-Agent Orchestrator with 3-tier tool permission sandboxing and mandatory Human-in-the-Loop (HITL) approval gates for consequential financial actions.',
      'Integrated domain-specific models including BioBERT + PubMedQA (99.7% F1 across 8 clinical biomarkers), LayoutLMv3, Donut, and SciBERT with SHA-256 OCR document deduplication.',
      'Built an interactive 84-piece self-pinning landing portal with React 19, TypeScript, Tailwind CSS v4, Node.js 22, FastAPI, Pydantic v2, and a 12-document golden evaluation benchmark.',
    ],
    tech: ['React 19', 'TypeScript', 'Python', 'FastAPI', 'SQLAlchemy 2.0', 'PostgreSQL', 'Gemini 2.5 Flash', 'BioBERT', 'LayoutLMv3', 'Multi-Agent RAG', 'Docker'],
    githubUrl: 'https://github.com/sanikatare/HomeIQ',
    liveUrl: 'https://homeiq-platform.onrender.com/',
    impact: '8 Domains · 99.7% BioBERT F1 · Deployed Live',
  },
  {
    id: 'pawprints',
    title: 'PawPrints',
    subtitle: 'Full-Stack Pet Health Monitoring & Diagnosis System',
    category: 'Full-Stack MERN',
    featured: true,
    badge: 'Full-Stack MERN App',
    description:
      'A full-stack MERN web application designed to help pet owners monitor, manage, and track the health of their pets through pet profiles, medical records, vaccination schedules, symptom-based disease predictions, and veterinary appointments.',
    highlights: [
      'Developed 6+ core modules: pet profiles, digital medical records, vaccination schedules, appointments, symptom-based diagnosis engine, and community forum.',
      'Architected 15+ REST APIs and CRUD operations across 6 MongoDB collections with Mongoose schema validation.',
      'Implemented secure JWT authentication, password encryption with bcrypt, protected routes, and role-based access control (RBAC).',
      'Crafted a responsive React.js analytics dashboard with Chart.js visualizations, React Router DOM, and Axios integration.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Chart.js'],
    githubUrl: 'https://github.com/sanikatare/Pawprints',
    liveUrl: 'https://pawprints-lake.vercel.app',
    impact: '15+ REST APIs · 6 Core Modules · Deployed Live',
  },
  {
    id: 'hinglish-sentiment',
    title: 'Hinglish Sentiment Analysis',
    subtitle: 'Comparative Deep Learning (RNN vs LSTM vs BiLSTM)',
    category: 'Deep Learning & IoT',
    featured: true,
    badge: '94.86% BiLSTM Accuracy',
    description:
      'Comparative deep learning analysis of RNN, LSTM, and BiLSTM architectures for Hinglish hate speech and sentiment detection on noisy, code-mixed Hindi-English social media text.',
    highlights: [
      'Built a robust preprocessing pipeline tailored to code-mixed Hinglish social media data, handling slang, abbreviations, and sequence padding.',
      'Benchmarked RNN (85.20%), LSTM (91.40%), and Bidirectional LSTM (94.86% accuracy, 0.942 Macro F1) on the same dataset.',
      'Demonstrated that Bidirectional LSTM captures long-range bidirectional context best in informal code-mixed text.',
    ],
    tech: ['Python', 'BiLSTM', 'LSTM', 'RNN', 'TensorFlow', 'Keras', 'NLP', 'Scikit-learn'],
    githubUrl: 'https://github.com/sanikatare/Hinglish-sentiment-analysis-rnn-lstm-bilstm',
    impact: '94.86% Accuracy · Code-Mixed NLP Benchmark',
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
    id: 'cert-databricks',
    title: 'Generative AI Fundamentals',
    issuer: 'Databricks',
    credential: 'LLMs & GenAI Solution Architecture',
    date: 'Certified',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Vector Search'],
    icon: 'ml',
  },
  {
    id: 'cert-aws',
    title: 'Cloud Practitioner Essentials',
    issuer: 'AWS',
    credential: 'AWS Cloud Fundamentals & Infrastructure',
    date: 'Certified',
    skills: ['Cloud Architecture', 'AWS IAM', 'EC2', 'S3', 'Cloud Security'],
    icon: 'aws',
  },
  {
    id: 'cert-ai-engineer',
    title: 'The AI Engineer Course',
    issuer: 'Bootcamp',
    credential: 'Production AI Systems & LLM Workflows',
    date: 'Completed',
    skills: ['AI Agents', 'LangChain', 'FastAPI', 'RAG Pipelines'],
    icon: 'ml',
  },
  {
    id: 'cert-aicte',
    title: 'Generative AI Virtual Internship',
    issuer: 'AICTE',
    credential: 'Applied Generative AI & Automation',
    date: 'Completed',
    skills: ['GenAI Tools', 'Python', 'Embeddings', 'Transformers'],
    icon: 'ml',
  },
  {
    id: 'cert-dsa',
    title: 'Data Structures using C and C++',
    issuer: 'Mastery Course',
    credential: 'Core Computer Science & Algorithms',
    date: 'Completed',
    skills: ['DSA', 'Pointers', 'Dynamic Programming', 'Complexity Analysis'],
    icon: 'dsa',
  },
  {
    id: 'cert-iitg',
    title: 'Summer Analytics',
    issuer: 'IIT Guwahati',
    credential: 'Data Science & Machine Learning Specialization',
    date: 'Completed',
    skills: ['Supervised Learning', 'Feature Engineering', 'Model Evaluation', 'Python'],
    icon: 'ml',
  },
]

export const technicalSkills = {
  backend: [
    'Python',
    'FastAPI & Uvicorn',
    'Pydantic v2',
    'Node.js 22 & Express.js',
    'RESTful APIs & Microservices',
    'gRPC & Protobuf',
    'RabbitMQ (aio-pika) & Event Bus',
    'WebSockets',
    'Node-Cron & Background Workers',
  ],
  frontend: [
    'React 19 / React.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Tailwind CSS v4',
    'Vite',
    'Responsive UI Development',
    'Figma-to-Component',
  ],
  databases: [
    'SQL & AWS RDS',
    'PostgreSQL 16 & pgvector',
    'MongoDB (NoSQL)',
    'Mongoose ODM',
    'ChromaDB & FAISS Vector Store',
    'Relational Modelling & Query Optimization',
  ],
  aiMl: [
    'Google GenAI (Gemini 2.5 Flash)',
    'Multi-Agent Orchestration & HITL',
    'Hybrid & Grounded RAG Pipelines',
    'LangChain',
    'BioBERT & PubMedQA Clinical AI',
    'LayoutLMv3, Donut & SciBERT',
    'XGBoost, LightGBM & Random Forest',
    'TensorFlow & Keras',
    'BiLSTM, LSTM & RNN',
    'Scikit-Learn',
    'Pandas, NumPy & Matplotlib',
    'NLP & Document OCR (SHA-256)',
  ],
  aiDevTools: [
    'Cursor',
    'Claude',
    'ChatGPT',
    'GitHub Copilot workflows',
    'Prompt Engineering & Epistemic Guardrails',
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
    'Docker & Docker Compose',
    'Nginx Gateway',
    'Render & Vercel Deployment',
    'AWS Cloud Practitioner (Certified)',
    'Git & GitHub',
    'Postman & pytest',
    'Jira & Agile Scrum',
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

export function getTechBadgeStyle(_tech: string): { badge: string; dot: string } {
  return {
    badge: 'bg-brand-50 text-brand-700 border-brand-200/90 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800/60',
    dot: 'bg-brand-500 dark:bg-brand-400',
  }
}
