// All image assets stored in public/images/ referenced using Vite's dynamic base path
export const ASSET_IMAGES = {
  heroLab: `${import.meta.env.BASE_URL}images/hero_engineering_lab_1792066341417.jpg`,
  solarStation: `${import.meta.env.BASE_URL}images/solar_charging_kiosk_1792242163533.jpg`,
  healthcareAi: `${import.meta.env.BASE_URL}images/edge_ai_healthcare_1792066342058.jpg`,
  edgeAi: `${import.meta.env.BASE_URL}images/edge_ai_healthcare_1792066342058.jpg`,
  univetGraduationHero: `${import.meta.env.BASE_URL}images/univet_graduation_hero_1792143279190.jpg`,
  univetCampusHall: `${import.meta.env.BASE_URL}images/univet_campus_hall_1792143296317.jpg`,
  univetLabResearchers: `${import.meta.env.BASE_URL}images/univet_lab_researchers_1792143310504.jpg`,
};

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'article' | 'conference';
  url?: string;
  doi?: string;
  bibtex: string;
  abstract?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  category: 'solar' | 'ai-embedded' | 'governance' | 'community';
  summary: string;
  highlights: string[];
  tags: string[];
  url?: string;
  image?: string;
}

export interface ThesisSupervision {
  year: number;
  title: string;
  level: 'BSc';
  category: 'FPGA & Hardware' | 'AI & IoT' | 'Clean Energy' | 'Automation';
  description: string;
  tech: string[];
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  category: 'AI & ML' | 'IoT & Hardware' | 'Cybersecurity' | 'Sustainable Tech & Policy';
}

export const PERSONAL_INFO = {
  name: "Goitom Yisfa Alemu",
  title: "Founder, GeometraTech | Licensed Professional Electrical Engineer | Lecturer | Director of Information Management",
  institution: "Mekelle Institute of Technology, Mekelle University",
  location: "Mekelle, Tigray, Ethiopia",
  emailPrimary: "goitomy12@gmail.com",
  emailInstitutional: "goitom.yisfa@mu.edu.et",
  phone: "@gy_alemu",
  phoneFormatted: "@gy_alemu",
  whatsappHandle: "@gy_alemu",
  whatsappUrl: "https://wa.me/gy_alemu",
  linkedin: "http://linkedin.com/in/goitomyalemu",
  github: "http://github.com/goitomyalemu",
  portfolioUrl: "https://github.com/goitomyalemu/portfolio",
  twitter: "https://x.com/GoitomYisfa",
  geometratechUrl: "https://geometratech.com/",
  thranUrl: "https://thran.org.et/",
  googleSitesUrl: "https://sites.google.com/mu.edu.et/goitomyisfaalemu/bio?authuser=2",
  bioHeadline: "Electrical Engineer bridging embedded hardware, edge AI, and renewable microgrids to power underserved communities and transform institutional data governance.",
  fullBio: `I am a Licensed Professional Electrical Engineer and Lecturer at the Mekelle Institute of Technology (MIT), currently serving as the Director of Information Management at Mekelle University. I am also the founder of GeometraTech, an engineering venture based in Mekelle that designs, installs, and services off-grid solar charging infrastructure and intelligent IoT monitoring for last-mile communities.

My engineering background spans Reconfigurable Computing (FPGAs), Embedded Systems, Software-Defined Radio (SDR), and Edge Deep Learning. At Mekelle University, I spearhead data integrity and institutional digital transformation, integrating IMS, ERP, and national HEMIS platforms. Concurrently, my research and development initiatives focus on resilient AI-driven healthcare diagnostics and distributed solar electrification across displaced and rural populations in Tigray and greater Ethiopia.`
};

export const IMPACT_METRICS = [
  { 
    id: "theses-supervision",
    value: "40+", 
    label: "Theses & Research Supervised", 
    sublabel: "Master's and undergraduate engineering capstones guided at Mekelle Institute of Technology",
    tag: "Academic Leadership",
    category: "academic"
  },
  { 
    id: "amd-contest",
    value: "Global Finalist", 
    label: "AMD Pervasive AI 2024", 
    sublabel: "Selected globally for developing an offline edge AI diagnostic triage assistant on Ryzen AI NPU",
    tag: "Edge AI Innovation",
    category: "ai"
  },
  { 
    id: "upskilling",
    value: "1,000+", 
    label: "Students & Tech Upskilled", 
    sublabel: "Trained in software engineering & AI via Gebeya-Safaricom & Mastercard Foundation SEED",
    tag: "Capacity Building",
    category: "education"
  },
  { 
    id: "entrepreneurs",
    value: "200+", 
    label: "Entrepreneurs Mentored", 
    sublabel: "Certified UNCTAD-EMPRETEC & EBMS trainer with Entrepreneurship Development Institute (EDI)",
    tag: "Venture Leadership",
    category: "mentorship"
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Founder & Lead Engineer",
    organization: "GeometraTech",
    location: "Mekelle, Tigray",
    period: "2024 – Present",
    current: true,
    description: [
      "Founded a local engineering venture delivering solar-powered charging stations, community charging hubs, and technical field support for off-grid communities.",
      "Engineers hardware enclosures, battery management telemetry, and local maintenance protocols with a dedicated Mekelle technical team.",
      "Delivered centralized clean energy access and mobile charging hubs to displaced families across Tigray."
    ]
  },
  {
    role: "Director, Information Management",
    organization: "Mekelle University",
    location: "Mekelle, Ethiopia",
    period: "Apr 2025 – Present",
    current: true,
    description: [
      "Oversees university-wide data governance, security protocols, and national compliance across all constituent colleges and institutes.",
      "Spearheaded development of MU-DataLink and MU-KPI automated platforms, synchronizing university indicators with national HEMIS and ERP platforms.",
      "Leads institutional data validation to eliminate manual reporting errors and enable evidence-based executive decision making."
    ]
  },
  {
    role: "Head, Institute Transformation & Quality Assurance Office",
    organization: "Mekelle Institute of Technology (MIT), Mekelle University",
    location: "Mekelle, Ethiopia",
    period: "Oct 2023 – Apr 2025",
    description: [
      "Directed academic modernization, quality assurance audits, and curriculum updates across engineering departments.",
      "Introduced continuous faculty upskilling programs in Artificial Intelligence, Internet of Things (IoT), and Renewable Energy systems.",
      "Streamlined institutional reporting workflows and laboratory equipment management."
    ]
  },
  {
    role: "Lecturer",
    organization: "Mekelle Institute of Technology (MIT), Mekelle University",
    location: "Mekelle, Ethiopia",
    period: "Aug 2014 – Present",
    current: true,
    description: [
      "Instructs undergraduate courses in Machine Learning, Neural Networks, Microcontrollers, and Emerging Technologies.",
      "Supervises undergraduate engineering theses on FPGA hardware acceleration (PYNQ-Z1), embedded IoT, and edge AI.",
      "Coordinates laboratory coursework in VHDL/Verilog, embedded C/C++, and signal processing."
    ]
  },
  {
    role: "Head, Research and Community Service Office",
    organization: "MIT, Mekelle University",
    location: "Mekelle, Ethiopia",
    period: "Apr 2020 – Oct 2020",
    description: [
      "Directed the project evaluation and grant allocation lifecycle for engineering and community outreach programs.",
      "Catalyzed interdisciplinary technology projects addressing local agricultural and post-conflict rehabilitation needs."
    ]
  },
  {
    role: "Head, Industry Linkage & Consultancy Service Office",
    organization: "Aksum University",
    location: "Axum, Ethiopia",
    period: "Nov 2012 – Jul 2014",
    description: [
      "Built technology transfer agreements between academia and regional manufacturing enterprises.",
      "Facilitated engineering student internships, external industry consultations, and joint R&D initiatives."
    ]
  },
  {
    role: "Lecturer",
    organization: "Aksum University",
    location: "Axum, Ethiopia",
    period: "Sep 2011 – Jul 2014",
    description: [
      "Taught Analog Electronics, VLSI Circuit Design, Digital Signal Processing (DSP), Digital Logic Design, and Algorithms.",
      "Co-developed Tigrinya-language IT curriculum for middle school students in partnership with Gelfand Families Charitable Trust."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "MSc in Microelectronics Engineering",
    institution: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "2010 – 2011 (Coursework); Thesis completed 2016 – 2017",
    thesis: "Design of Optimized Digital Circuit for Multi-Fed Junction Railway Traffic Control System (Parallel Finite State Machine Implemented on FPGA Technology)",
    advisor: "Dr. Getachew Alemu"
  },
  {
    degree: "BSc in Electrical Engineering",
    institution: "Mekelle University",
    location: "Mekelle, Ethiopia",
    period: "2006 – 2010",
    highlights: "Distinction graduate; foundational coursework in circuit theory, power systems, telecommunications, and digital electronics."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "teame-2026-cart",
    title: "Pre-conflict prescription patterns and virological effectiveness of combination antiretroviral therapy (cART) in HIV-1 patients in Tigray, Ethiopia",
    authors: ["Teame, G.", "Gebreyohannes, G.", "Tilahun, M.", "Yisfa, G.", "et al."],
    venue: "AIDS Research and Therapy",
    year: 2026,
    type: "journal",
    doi: "10.1186/s12981-026-00871-8",
    url: "https://doi.org/10.1186/s12981-026-00871-8",
    abstract: "Investigates pre-conflict prescription patterns, treatment transitions, and virological suppression efficacy of combination antiretroviral therapy (cART) regimens in HIV-1 cohorts in Tigray, Ethiopia, providing vital evidence for healthcare continuity in resource-constrained and conflict-affected settings.",
    bibtex: `@article{teame2026preconflict,
  title={Pre-conflict prescription patterns and virological effectiveness of combination antiretroviral therapy (cART) in HIV-1 patients in Tigray, Ethiopia},
  author={Teame, Gebrecherkos and Gebreyohannes, Gebreselema and Tilahun, Mulugeta and Yisfa, Goitom and others},
  journal={AIDS Research and Therapy},
  year={2026},
  doi={10.1186/s12981-026-00871-8},
  url={https://doi.org/10.1186/s12981-026-00871-8}
}`
  },
  {
    id: "bjet-2025",
    title: "Deployment of a Polling-Based Assembly Language Programmed 8051 Microcontroller for Traffic Light Control with Consideration for Emergency Vehicles",
    authors: ["Meresa, S. T.", "Alemu, G. Y.", "Desta, G.", "Tareke, H. B.", "Kiday, H.", "Weldegebriel, G."],
    venue: "Branna Journal of Engineering and Technology (BJET)",
    year: 2025,
    type: "journal",
    doi: "10.71624/3ebk5z08",
    url: "https://doi.org/10.71624/3ebk5z08",
    abstract: "Presents a hardware-efficient polling-based traffic light controller implemented on an 8051 microcontroller using optimized assembly language. The architecture introduces emergency override interrupts for ambulances and fire trucks, mitigating junction congestion in developing municipal road networks.",
    bibtex: `@article{meresa2025deployment,
  title={Deployment of a Polling-Based Assembly Language Programmed 8051 Microcontroller for Traffic Light Control with Consideration for Emergency Vehicles},
  author={Meresa, S. T. and Alemu, G. Y. and Desta, G. and Tareke, H. B. and Kiday, H. and Weldegebriel, G.},
  journal={Branna Journal of Engineering and Technology (BJET)},
  year={2025},
  doi={10.71624/3ebk5z08},
  url={https://doi.org/10.71624/3ebk5z08}
}`
  },
  {
    id: "teame-2025-immunization",
    title: "Prevalence and Determinants of Child Immunization Coverage in Ethiopia: Evidence from the 2019 Mini-Demographic and Health Survey",
    authors: ["Teame, G.", "Tilahun, M.", "Yisfa, G.", "et al."],
    venue: "Human Vaccines & Immunotherapeutics, 21(1), 2478707",
    year: 2025,
    type: "journal",
    doi: "10.1080/21645515.2025.2478707",
    url: "https://doi.org/10.1080/21645515.2025.2478707",
    abstract: "Examines epidemiological and demographic determinants associated with full child immunization coverage across Ethiopian administrative zones using data from the 2019 EMDHS, highlighting actionable public health targets to enhance rural and underserved vaccine delivery.",
    bibtex: `@article{teame2025prevalence,
  title={Prevalence and Determinants of Child Immunization Coverage in Ethiopia: Evidence from the 2019 Mini-Demographic and Health Survey},
  author={Teame, Gebrecherkos and Tilahun, Mulugeta and Yisfa, Goitom and others},
  journal={Human Vaccines & Immunotherapeutics},
  volume={21},
  number={1},
  pages={2478707},
  year={2025},
  doi={10.1080/21645515.2025.2478707},
  url={https://doi.org/10.1080/21645515.2025.2478707}
}`
  },
  {
    id: "ai4sd-2026",
    title: "MU-DataLink & MU-KPI: Automated Data Validation and AI-Driven Institutional Performance Monitoring in African Universities",
    authors: ["Alemu, G. Y."],
    venue: "International Conference on AI for Sustainable Development in Africa (AI4SD 2026), Mekelle University",
    year: 2026,
    type: "conference",
    abstract: "Demonstrates the architecture of automated validation pipelines and AI-assisted KPI monitoring developed for Mekelle University, replacing fragmented manual reporting with real-time verifiable Higher Education Management Information Systems (HEMIS) feeds.",
    bibtex: `@inproceedings{alemu2026datalink,
  title={MU-DataLink & MU-KPI: Automated Data Validation and AI-Driven Institutional Performance Monitoring in African Universities},
  author={Alemu, Goitom Yisfa},
  booktitle={International Conference on AI for Sustainable Development in Africa (AI4SD 2026)},
  year={2026},
  address={Mekelle, Ethiopia}
}`
  },
  {
    id: "talloires-2024",
    title: "Solar-Powered Charging Stations for Internally Displaced Persons (IDPs) in Tigray",
    authors: ["Woldehiowt, S. T.", "Gebru, A. K.", "Alemu, G. Y."],
    venue: "Talloires Network of Engaged Universities (Tufts University)",
    year: 2024,
    type: "article",
    url: "https://talloiresnetwork.tufts.edu/blog/news/2024/10/08/solar-powered-charging-stations-for-internally-displaced-persons-idps-in-tigray/",
    abstract: "Examines the deployment of community-engaged solar charging stations across displaced communities in Tigray. Explores the socio-economic impacts of reliable mobile phone charging and lighting for displaced families, focusing on communication access and family cohesion.",
    bibtex: `@article{woldehiowt2024solar,
  title={Solar-Powered Charging Stations for Internally Displaced Persons (IDPs) in Tigray},
  author={Woldehiowt, S. T. and Gebru, A. K. and Alemu, G. Y.},
  journal={Talloires Network of Engaged Universities},
  year={2024},
  url={https://talloiresnetwork.tufts.edu/blog/news/2024/10/08/solar-powered-charging-stations-for-internally-displaced-persons-idps-in-tigray/}
}`
  },
  {
    id: "uwn-2024",
    title: "Power for Refugees in Ethiopia: University-Community Partnership Models",
    authors: ["Woldehiowt, S. T.", "Gebru, A. K.", "Alemu, G. Y."],
    venue: "University World News",
    year: 2024,
    type: "article",
    url: "https://www.universityworldnews.com/post.php?story=20240322091144382",
    abstract: "Analyzes how academic institutions in post-conflict environments can operationalize engineering expertise to provide clean, decentralized energy infrastructure for vulnerable displaced populations.",
    bibtex: `@article{woldehiowt2024power,
  title={Power for Refugees in Ethiopia},
  author={Woldehiowt, S. T. and Gebru, A. K. and Alemu, G. Y.},
  journal={University World News},
  year={2024},
  url={https://www.universityworldnews.com/post.php?story=20240322091144382}
}`
  }
];

export const PROJECTS: Project[] = [
  {
    id: "amd-ryzen-ai",
    title: "AMD Ryzen AI Healthcare Assistant",
    role: "Lead Hardware & Edge AI Engineer",
    period: "Nov 2023 – Oct 2024",
    category: "ai-embedded",
    summary: "Recognized as a global Finalist Team in the AMD Pervasive AI Developer Contest 2024 (Hackster.io). Developed an offline diagnostic and triage assistant for rural Ethiopian clinics running on AMD Ryzen AI NPU processors.",
    highlights: [
      "Global finalist team in AMD Pervasive AI Developer Contest (Hackster.io).",
      "Offline symptom analysis and triage support with zero cloud dependency.",
      "Integrated NPU-accelerated quantized models to achieve sub-second clinical inference on low-power devices."
    ],
    tags: ["AMD Ryzen AI", "NPU Acceleration", "Edge AI", "Rural Healthcare", "Offline Diagnostics"],
    image: ASSET_IMAGES.healthcareAi
  },
  {
    id: "solar-idp-charging",
    title: "Solar Charging Stations for IDPs in Tigray",
    role: "Project Principal & Technical Lead",
    period: "Nov 2023 – Apr 2024",
    category: "solar",
    summary: "Community-engaged solar infrastructure project delivering durable, secure charging kiosks to displaced households and families across Tigray.",
    highlights: [
      "Engineered multi-channel DC charging hubs with ruggedized solar charge controllers.",
      "Partnered with camp committees and youth technicians for sustainable local operation.",
      "Documented in international publications (Talloires Network & University World News)."
    ],
    tags: ["Solar PV", "Battery Systems", "IDP Relief", "Off-Grid Energy", "Community Impact"],
    url: "https://talloiresnetwork.tufts.edu/blog/news/2024/10/08/solar-powered-charging-stations-for-internally-displaced-persons-idps-in-tigray/",
    image: ASSET_IMAGES.solarStation
  },
  {
    id: "mu-governance",
    title: "MU-DataLink & MU-KPI Digital Governance Platforms",
    role: "System Architect & Director of Information Management",
    period: "2025 – 2026",
    category: "governance",
    summary: "Architected centralized university data validation and performance tracking platforms that harmonize academic, HR, and research data across Mekelle University.",
    highlights: [
      "Automated indicator verification and real-time synchronization with national HEMIS.",
      "Replaced error-prone manual spreadsheets with role-based validation pipelines.",
      "Presented system architecture at AI4SD 2026 international conference."
    ],
    tags: ["Digital Transformation", "HEMIS", "Data Governance", "KPI Automation", "Enterprise Systems"]
  },
  {
    id: "erasmus-greening",
    title: "Erasmus+ CBHE: Greening Ethiopia Higher Education",
    role: "Work Package 2 (WP2) Core Contributor",
    period: "2025 – Present",
    category: "governance",
    summary: "Transnational capacity-building initiative with Maastricht University and Ethiopian institutions to integrate climate-responsive technologies and circular economy principles into engineering curricula.",
    highlights: [
      "Conducted institutional baseline audits on campus energy and waste footprint.",
      "Co-developing course syllabi and lab modules on clean energy integration."
    ],
    tags: ["Erasmus+ CBHE", "Maastricht University", "Curriculum Greening", "Renewable Energy"]
  },
  {
    id: "amref-incubation",
    title: "Digital Incubation Hub (AMREF–KEFETA Collaboration)",
    role: "Institutional Lead",
    period: "Dec 2024 – Jul 2025",
    category: "community",
    summary: "Established a university-wide digital innovation center in partnership with AMREF Health Africa, fostering youth ventures in e-health, AI, and digital livelihoods.",
    highlights: [
      "Secured strategic equipment and international mentorship for student startups.",
      "Organized hackathons and incubation cohorts focusing on healthcare challenges in Tigray."
    ],
    tags: ["Incubation", "Digital Health", "AMREF Africa", "Youth Innovation", "Tech Transfer"]
  },
  {
    id: "thran-platform",
    title: "WEBlog for THRAN (Tigray Human Rights Advocacy Network)",
    role: "Lead Platform Architect",
    period: "Dec 2025 – Mar 2026",
    category: "community",
    summary: "Designed and launched an accessible digital platform to document chronological human rights developments, survivor narratives, and research reports.",
    highlights: [
      "Built resilient, low-bandwidth architecture with high-uptime international mirrors.",
      "Integrated secure archival workflows and multi-language support."
    ],
    tags: ["Web Architecture", "Human Rights", "Digital Archive", "THRAN"],
    url: "https://thran.org.et/"
  },
  {
    id: "sdr-design",
    title: "Freelance Software-Defined Radio (SDR) System Design",
    role: "DSP & FPGA Engineer",
    period: "2017",
    category: "ai-embedded",
    summary: "Full-chain software-defined radio simulation and hardware verification using MATLAB/Simulink and Xilinx System Generator for DSP (XSG).",
    highlights: [
      "End-to-end transceiver DSP pipeline covering modulation, filtering, carrier recovery, and timing sync.",
      "Targeted for high-speed FPGA synthesis with strict clock timing and bitstream generation."
    ],
    tags: ["Software-Defined Radio", "Simulink", "Xilinx DSP", "FPGA Synthesis", "Signal Processing"],
    image: ASSET_IMAGES.heroLab
  }
];

export const THESIS_SUPERVISIONS: ThesisSupervision[] = [
  {
    year: 2026,
    title: "Performance and Computational Analysis of Machine Learning and CNN for Audio Replay Attack Detection on PYNQ-Z1 FPGA",
    level: "BSc",
    category: "FPGA & Hardware",
    description: "Evaluated 11 model variants across classical machine learning (SVM, KNN, Random Forest) and convolutional neural networks trained on a self-collected low-resource Tigrinya audio replay dataset. Advised on fixed-point quantization and hardware acceleration on PYNQ-Z1 FPGA.",
    tech: ["PYNQ-Z1 FPGA", "CNN", "MFCC Feature Extraction", "Tigrinya Dataset", "Vitis HLS"]
  },
  {
    year: 2026,
    title: "AI-Based Mobile Device Protection and Real-Time Tracking System",
    level: "BSc",
    category: "AI & IoT",
    description: "Cross-platform mobile application utilizing Flutter and Firebase for anti-theft surveillance. Includes background facial verification, SIM swap detection, and automated Telegram bot dispatch with geofenced location telemetry.",
    tech: ["Flutter", "Firebase", "Face Verification", "Telegram Bot API", "Mobile Security"]
  },
  {
    year: 2025,
    title: "Wi-Fi Controlled Robot Car Using Blynk IoT and FreeRTOS",
    level: "BSc",
    category: "AI & IoT",
    description: "Smart robotic vehicle engineered with ESP32 microcontrollers, ultrasonic HC-SR04 sensors for obstacle evasion, and FreeRTOS preemptive multitasking for zero-latency telemetry streaming over Blynk IoT.",
    tech: ["ESP32", "FreeRTOS", "Blynk IoT", "Ultrasonic Sensors", "Embedded C++"]
  },
  {
    year: 2024,
    title: "Clinical Decision Support System (CDSS) using Quantized Large Language Models",
    level: "BSc",
    category: "AI & IoT",
    description: "Engineered offline clinical diagnostic assistant for low-connectivity district clinics, leveraging quantized LLMs executed locally through TensorFlow Lite and ONNX Runtime.",
    tech: ["Quantized LLMs", "TensorFlow Lite", "ONNX Runtime", "Edge Clinical AI"]
  },
  {
    year: 2024,
    title: "Solar-Powered Water Pumper for Smallholder Irrigation",
    level: "BSc",
    category: "Clean Energy",
    description: "Photovoltaic-powered submersible water pumping controller with automatic duty-cycle adjustment based on solar irradiance, engineered for sustainable dry-season irrigation.",
    tech: ["Solar Photovoltaics", "MPPT Control", "Submersible Pumps", "Rural AgTech"]
  },
  {
    year: 2023,
    title: "Wireless Automatic Water Level Controller with Dry-Run Protection",
    level: "BSc",
    category: "Clean Energy",
    description: "Arduino-based wireless controller preventing pump burnout and optimizing municipal and residential water storage.",
    tech: ["Arduino", "RF Transceivers", "Sensor Calibration", "Power Management"]
  },
  {
    year: 2022,
    title: "PLC-Controlled Spark Detection and Extinguishment System at Maichew Particle Board",
    level: "BSc",
    category: "Automation",
    description: "Industrial safety system incorporating infrared optical spark sensors and high-pressure solenoid water mists controlled by Siemens S7 PLCs to prevent factory dust explosions.",
    tech: ["Siemens PLC", "Ladder Logic", "IR Optical Sensors", "Industrial Automation"]
  },
  {
    year: 2017,
    title: "Embedded System for Prevention of Vehicle Accidents Due to Drowsy or Alcoholic Driving",
    level: "BSc",
    category: "Automation",
    description: "Multi-sensor biometric safety interlock monitoring driver blink frequency and alcohol vapors, automatically restricting ignition and initiating hazard warning lights.",
    tech: ["Microcontrollers", "MQ-3 Alcohol Sensor", "Computer Vision Eye Tracking", "Automotive Safety"]
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Hardware & Reconfigurable Computing",
    items: [
      { name: "FPGAs & SoCs", detail: "PYNQ-Z1, Xilinx ZCU104 MPSoC, Basys3, Intel Stratix V GX, Cyclone V SoC" },
      { name: "HDLs & Toolchains", detail: "VHDL, Verilog, Vivado Design Suite, Quartus Prime, Vitis HLS, ModelSim" },
      { name: "DSP & Signal Processing", detail: "MATLAB/Simulink, Xilinx System Generator for DSP (XSG), SDR Transceiver Design" }
    ]
  },
  {
    category: "Microcontrollers & Embedded IoT",
    items: [
      { name: "Microcontrollers", detail: "ARM Cortex, ESP32, STM32, Arduino, Microchip PIC, 8051, Freescale FRDM-K64F" },
      { name: "Protocols & Wireless", detail: "Bluetooth Low Energy (BLE), Cellular IoT (NB-IoT/LTE-M), ZigBee, LoRa, I2C, SPI, UART" },
      { name: "Real-Time OS", detail: "FreeRTOS multitasking, Nordic nRF Connect SDK, Zephyr RTOS" }
    ]
  },
  {
    category: "Artificial Intelligence & Software",
    items: [
      { name: "Machine Learning & AI", detail: "PyTorch, Scikit-learn, TensorFlow Lite, ONNX Runtime, AMD Ryzen AI NPU" },
      { name: "Languages", detail: "Python, C, C++, Assembly (8051/x86), SQL, TypeScript, MATLAB" },
      { name: "Data & Governance", detail: "Institutional MIS/ERP, HEMIS compliance, Tableau, Power BI, Postgres" }
    ]
  },
  {
    category: "Clean Energy & Renewable Systems",
    items: [
      { name: "Solar PV Engineering", detail: "Off-grid microgrid sizing, charge controller topology, battery bank telemetry" },
      { name: "Field Commissioning", detail: "Testing, electrical safety compliance, warranty and maintenance protocols" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Learning AI Through Visualization", issuer: "Columbia+ (Columbia University)", year: "2025", category: "AI & ML" },
  { title: "NO LONG TING' Web 3 & Emerging Tech Bootcamp", issuer: "Global Web3 Consortium", year: "2025", category: "AI & ML" },
  { title: "Bluetooth Low Energy (BLE) Fundamentals", issuer: "Nordic Semiconductor", year: "2024", category: "IoT & Hardware" },
  { title: "Cellular-IoT Fundamentals (NB-IoT & LTE-M)", issuer: "Nordic Semiconductor", year: "2024", category: "IoT & Hardware" },
  { title: "nRF Connect SDK Intermediate", issuer: "Nordic Semiconductor", year: "2024", category: "IoT & Hardware" },
  { title: "Career Essentials in Sustainable Tech", issuer: "Microsoft & LinkedIn", year: "2024", category: "Sustainable Tech & Policy" },
  { title: "Implementation of Farmer Field School Programmes", issuer: "FAO (United Nations)", year: "2024", category: "Sustainable Tech & Policy" },
  { title: "General Course on Intellectual Property", issuer: "WIPO (World Intellectual Property Organization)", year: "2024", category: "Sustainable Tech & Policy" },
  { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI / Coursera", year: "2020", category: "AI & ML" },
  { title: "Machine Learning (Supervised & Unsupervised)", issuer: "Stanford University / Andrew Ng", year: "2014", category: "AI & ML" },
  { title: "Certified Network Security Specialist (CNSS)", issuer: "ICSI International Cybersecurity Institute", year: "2020", category: "Cybersecurity" },
  { title: "NSE 2 Network Security Associate", issuer: "Fortinet", year: "2020", category: "Cybersecurity" },
  { title: "Introduction to the Internet of Things and Embedded Systems", issuer: "UC Irvine / Coursera", year: "2020", category: "IoT & Hardware" },
  { title: "Cybersecurity and the Internet of Things", issuer: "USSystem / Coursera", year: "2020", category: "Cybersecurity" },
  { title: "Fundamentals of Digital Image & Video Processing", issuer: "Northwestern University", year: "2014", category: "AI & ML" }
];

export const COMMUNITY_AND_NETWORKS = [
  {
    name: "Tigray ICT Professionals Association (TIPA)",
    role: "Co-Founder & Active Researcher (2023 – Present)",
    detail: "Collaborates on digital infrastructure restoration, technical training initiatives, and ICT policy recommendations for post-war rehabilitation in Tigray."
  },
  {
    name: "Rotary International (Rotary Club of Mekelle, District 9212)",
    role: "Active Member & Project Lead (2024 – Present)",
    detail: "Led high-impact community programs in water access, educational material distribution, and peace-building touching over 5,000 residents."
  },
  {
    name: "Entrepreneurship Development Institute (EDI)",
    role: "Certified UNCTAD-EMPRETEC & EBMS Trainer / BDS Advisor (2024 – Present)",
    detail: "Conducted behavioral transformation and business diagnostic workshops mentoring 200+ micro and small enterprise founders."
  },
  {
    name: "SAFEE Project (Kifiya Financial Tech & Mohas Consult)",
    role: "Certified Local Trainer (Oct 2025 – Present)",
    detail: "Delivers community training in Interest-Free Banking (IFB), working capital management, and financial technology adoption."
  },
  {
    name: "Guzakuza Women in Agrifood Network",
    role: "Voluntary Ambassador (Feb 2026 – Present)",
    detail: "Promotes smart farming technologies, mentorship, and funding connections for women-led agritech startups across Ethiopia."
  },
  {
    name: "Mekelle Center for Robotics & AI",
    role: "Contributing Research Member (2020 – Present)",
    detail: "Facilitates NeurIPS AI meetups in Mekelle and advances applied AI in agriculture and clinical diagnostics."
  },
  {
    name: "OPTICA (formerly Optical Society of America)",
    role: "Member (2023 – 2025)",
    detail: "Engaged in global optics, photonics, and signal transmission research networks."
  }
];

export const REFERENCES = [
  {
    name: "Dr. Fana Hagos Berhane",
    title: "President",
    organization: "Mekelle University",
    note: "Contact details available on request"
  },
  {
    name: "Dr. Getachew Alemu",
    title: "Assistant Professor",
    organization: "AAiT, Addis Ababa University",
    note: "Contact details available on request"
  },
  {
    name: "Dr. Leake Enquay Weldemariam",
    title: "Assistant Professor",
    organization: "Mekelle Institute of Technology (MIT), Mekelle University",
    note: "Contact details available on request"
  }
];

export interface CourseTaught {
  title: string;
  code?: string;
  level: 'Undergraduate' | 'Graduate' | 'Laboratory';
  institution: string;
  topics: string[];
}

export const COURSES_TAUGHT: CourseTaught[] = [
  {
    title: "Microcontrollers & Embedded Systems",
    code: "ECE 3201",
    level: "Undergraduate",
    institution: "Mekelle Institute of Technology (MIT)",
    topics: ["8051 Assembly Architecture", "ARM Cortex-M", "Embedded C/C++", "Timers, Interrupts & UART"]
  },
  {
    title: "Machine Learning & Neural Networks",
    code: "ECE 4205",
    level: "Undergraduate",
    institution: "Mekelle Institute of Technology (MIT)",
    topics: ["Supervised & Unsupervised Learning", "Deep Neural Networks", "Edge Model Quantization", "PyTorch & ONNX Runtime"]
  },
  {
    title: "Digital Logic Design & FPGA Lab",
    code: "ECE 2102",
    level: "Laboratory",
    institution: "Mekelle Institute of Technology (MIT)",
    topics: ["VHDL & Verilog RTL", "Xilinx Vivado Suite", "PYNQ-Z1 Reconfigurable Computing", "Finite State Machines"]
  },
  {
    title: "Digital Signal Processing (DSP)",
    code: "ECE 3104",
    level: "Undergraduate",
    institution: "Aksum University & MIT",
    topics: ["Discrete-Time Fourier Transform", "IIR/FIR Digital Filter Design", "Spectral Analysis", "MATLAB Modeling"]
  }
];

export const ACADEMIC_BLURBS = {
  shortBio: "Goitom Yisfa Alemu is a Licensed Professional Electrical Engineer, Lecturer at the Mekelle Institute of Technology (MIT), and Director of Information Management at Mekelle University, Ethiopia. He holds an MSc in Microelectronics Engineering from Addis Ababa University and is the founder of GeometraTech, a clean-energy engineering venture delivering decentralized solar charging microgrids in Tigray. His research spans reconfigurable computing (FPGAs), embedded hardware architectures, and offline edge deep learning for low-resource communities.",
  researchStatement: "Goitom Yisfa Alemu's research focuses on the intersection of embedded systems, reconfigurable computing (FPGAs), and edge artificial intelligence for resilient infrastructure in energy-constrained and post-conflict environments. His recent scholarship includes microcomputer-based traffic automation with emergency vehicle preemption in the Branna Journal of Engineering and Technology (BJET), as well as clinical data analytics on antiretroviral therapy (cART) efficacy. In 2024, he was recognized globally as an AMD Pervasive AI contest finalist for designing an offline clinical triage AI assistant on Ryzen AI NPUs."
};

