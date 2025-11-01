// ✅ Fixed version of your portfolio constants file with corrected `PROJECT_LIST`
import { SiTypescript } from "react-icons/si";
import {
  Globe,
  Mail,
  Database,
  Brain,
  Code,
  Server,
  MousePointerClick,
  LayoutPanelLeft,
  Cpu,
  GitBranch,
  ActivitySquare,
  Workflow,
  Bot,
  ContactRound,
  Component,
  Briefcase,
  GraduationCap,
  Code2,
  FolderCode,
  Award,
  Folder,
  User,
  MessageCircle,
  Home,
  BookOpen,
  Users,
  Bolt,
} from "lucide-react";



import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaReact as ReactIcon,
  FaAws,
} from "react-icons/fa";
import { GoHomeFill, GoProjectRoadmap } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { FiAward } from "react-icons/fi";
import {
  FaWrench as Wrench,
  FaChrome as Chrome,
  FaGithub as Github,
  FaFlask as Flask,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiJest,
  SiNginx,
  SiExpress,
  SiNodedotjs as Node,
  SiJsonwebtokens,
  SiVite,
  SiGooglegemini,
} from "react-icons/si";
import { image } from "framer-motion/client";

export const SECTION_LIST = [
  { id: 1, displayText: "HOME", sectionID: "home", icon: Home },
  { id: 2, displayText: "SKILLS", sectionID: "skills", icon: Award },
  { id: 3, displayText: "PROJECTS", sectionID: "projects", icon: Folder },
  { id: 4, displayText: "BLOG", sectionID: "blog", icon: BookOpen },
  { id: 5, displayText: "COLLABORATIONS", sectionID: "collaborations", icon: Users },
  { id: 6, displayText: "ACHIEVEMENTS", sectionID: "achievements", icon: Award },
  { id: 7, displayText: "ABOUT", sectionID: "about", icon: User },
  { id: 8, displayText: "CONTACT", sectionID: "contact", icon: MessageCircle },
];

const TECH_ICONS = {
  React: { component: ReactIcon, name: "React" },
  "Tailwind CSS": { component: SiTailwindcss, name: "Tailwind CSS" },
  "Node.js": { component: Node, name: "Node.js" },
  Express: { component: SiExpress, name: "Express" },
  MongoDB: { component: SiMongodb, name: "MongoDB" },
  JWT: { component: SiJsonwebtokens, name: "JWT" },
  "AWS EC2": { component: FaAws, name: "AWS EC2" },
  Nginx: { component: SiNginx, name: "Nginx" },
  PM2: { component: Server, name: "PM2" },
  Redux: { component: SiRedux, name: "Redux" },
  "React Router v6": { component: ReactIcon, name: "React Router v6" },
  Parcel: { component: Server, name: "Parcel" },
  Jest: { component: SiJest, name: "Jest" },
  Firebase: { component: SiFirebase, name: "Firebase" },
  "OpenAI API": { component: Brain, name: "OpenAI API" },
  Vite: { component: SiVite, name: "Vite" },
  "Google Generative AI": {
    component: SiGooglegemini,
    name: "Google Generative AI",
  },
  TSParticles: { component: ActivitySquare, name: "TSParticles" },
  Python: { component: Cpu, name: "Python" },
   TypeScript: { component: SiTypescript, name: "TypeScript" },
};

export const TECH_STACK = [
  { name: "React", color: "#61DAFB", icon: Component },
  { name: "Node.js", color: "#68A063", icon: Server },
  { name: "MongoDB", color: "#47A248", icon: Database },
  { name: "Python", color: "#3776AB", icon: Cpu },
  { name: "AWS", color: "#FF9900", icon: Globe },
  { name: "Express", color: "#000000", icon: Code },
  { name: "JAVA", color: "#000000", icon: Code2 }, 
  { name: "Tailwind CSS", color: "#38B2AC", icon: LayoutPanelLeft },
  { name: "Firebase", color: "#FFCA28", icon: Bolt },
];
export const PROJECTS = [
  {
    title: "Wanderlust",
    description:
      "A travel-friendly stay-booking platform built using the MERN stack. Includes authentication, accessible UI, and dynamic room listings.",
    tech: [
      TECH_ICONS.React,
      TECH_ICONS["Tailwind CSS"],
      TECH_ICONS["Node.js"],
      TECH_ICONS.Express,
      TECH_ICONS.MongoDB,
    ],
    status: "Live",
    featured: true,
    liveLink: "https://wanderlust-likhithajagadeesh.onrender.com/",
    sourceLink: "https://github.com/TensorDevLJ/Wanderlust-Airbnb-full-stack-Clone.git",
    image: "images/image2.png",
  },
  {
    title: "EmpowerHER – Women Empowerment & Healing Platform ",
    description:
      "A safe, anonymous, and empowering space for women to share experiences, express emotions, and find strength in community. Includes secure authentication, AES-encrypted data, SOS alerts, and wellness tools for mental and emotional support..",
    tech: [
      TECH_ICONS["React"],
       TECH_ICONS["Vite"],
      TECH_ICONS.Firebase,
      TECH_ICONS["Tailwind CSS"],
    ],
    status: "Live",
    featured: true,
    liveLink: "https://risewithin.netlify.app/",
    sourceLink: "https://github.com/TensorDevLJ/InnerBloom-Women-Empowerment-Healing-Platform.git",
     image: "images/image3.png",
  },
  {
    title: "Real-Time Traffic Management System (YOLOv8)",
    description:
      "YOLOv8-powered smart signal system from a national-level hackathon. Reduced traffic waiting time using real-time object detection.",
    tech: [
      TECH_ICONS["OpenAI API"],
      TECH_ICONS.Python,
    ],
    status: "Prototype",
    featured: true,
    liveLink:
      "https://unstop.com/hackathons/i-solve-nitte-meenakshi-institute-of-technology-bangalore-karnataka-1060100/case-submissions/405868",
    sourceLink: "https://github.com/TensorDevLJ/traffic-management.git",
    image: "images/image4.png",
  },
  {
    title: "Sales Forecasting - Cisco League",
    description:
      "Built statistical models like Auto ARIMA and Holt-Winters to forecast sales data with 89% accuracy using Python and Statsmodels.",
    tech: [
      TECH_ICONS.Python,
    ],
    status: "Completed",
    featured: false,
    liveLink:
      "https://cisco.sharepoint.com/:u:/r/sites/CiscoForecastLeagueCompetition/SitePages/Phase-1-results---BIT.aspx?csf=1&web=1&e=YGp5WQ",
    sourceLink: "https://credsverse.com/credentials/dbc0107a-679a-4586-b03a-aa1a83264eb7?preview=1",
    image: "images/image5.jpg",
  },
  {
    title: "EEG-Based Brain-Computer Interface For Emotion Recognition",
      description:  "An AI-powered backend for EEG-based emotion and depression analysis. Built with FastAPI and Transformer models, it processes EEG features from CSV uploads, performs model inference, and returns diagnostic graphs with explainable results.",
    tech: [
      TECH_ICONS.React,
      TECH_ICONS.Firebase,
      TECH_ICONS["TypeScript"],
       TECH_ICONS.Python, 
      TECH_ICONS["OpenAI API"],
    ],
    status: "Live",
    featured: true,
    liveLink: "#",
    sourceLink: "https://github.com/TensorDevLJ/EEG-Based-Brain-Computer-Interface-For-Emotion-Recognition.git",
    image: "images/image10.jpg",
  },
  {
    title: "Namaste Notebook",
    description:
      "An open-source learning companion for the NamasteDev series, organizing course notes into a clean, readable web UI.",
    tech: [
      TECH_ICONS.React,
      TECH_ICONS["Tailwind CSS"],
      TECH_ICONS["React Router v6"],
      TECH_ICONS.Vite,
    ],
    status: "Live",
    featured: true,
    liveLink: "https://namastenotebook.vercel.app/",
    sourceLink: "https://github.com/TensorDevLJ/namaste-notebook.git",
    image: "images/image6.png",
  },
  {
    title: "TasteBytes - Swiggy Clone",
    description:
      "A Swiggy and Instamart clone using live data from real-time APIs, featuring filters, a cart, and shimmer UI effects.",
    tech: [
      TECH_ICONS.React,
      TECH_ICONS["Tailwind CSS"],
      TECH_ICONS.Parcel,
      TECH_ICONS.Jest,
    ],
    status: "Live",
    featured: true,
    liveLink: "https://sanlik-soulspice.netlify.app/",
    sourceLink: "https://github.com/TensorDevLJ/Namaste_React_SWIGGY_USING_LIVE_API.git",
    image: "images/image7.png",
  },
  {
    title: "CyberGuard-AI-Full-Stack-Risk-Assessment-System",
    description:
      "An AI-powered Full Stack Risk Assessment System that evaluates cybersecurity risks using OpenAI's API, built with React, TypeScript, Firebase, and Python.",
    tech: [
      TECH_ICONS.React,
      TECH_ICONS.Firebase,
      TECH_ICONS["TypeScript"],
       TECH_ICONS.Python, 
      TECH_ICONS["OpenAI API"],
    ],
    status: "Completed",
    featured: true,
    liveLink: "#",
    sourceLink: "https://github.com/TensorDevLJ/CyberGuard-AI-Full-Stack-Risk-Assessment-System.git",
    image: "images/image9.png",
  },
    {
    title: "FastAPI system for PDF Question Answering using RAG Pinecone Llama3",
    description:
      "A production-ready FastAPI system that processes PDF documents and answers questions using RAG (Retrieval-Augmented Generation).",
    tech: [
      TECH_ICONS.React,
      TECH_ICONS.Firebase,
      TECH_ICONS["TypeScript"],
       TECH_ICONS.Python, 
      TECH_ICONS["OpenAI API"],
    ],
    status: "Completed",
    featured: true,
    liveLink: "#",
    sourceLink: "https://github.com/TensorDevLJ/CyberGuard-AI-Full-Stack-Risk-Assessment-System.git",
    image: "images/image8.jpg",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt: "Learn how to structure React applications for scalability using modern patterns and best practices.",
    content: "In this comprehensive guide, we'll explore the essential patterns and practices for building scalable React applications...",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    featured: true,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "The Future of Web Development: AI Integration",
    excerpt: "Exploring how AI is transforming the web development landscape and what developers need to know.",
    content: "Artificial Intelligence is revolutionizing how we build web applications. From automated code generation to intelligent user interfaces...",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["AI", "Web Development", "Future Tech"],
    featured: true,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Optimizing Performance in Node.js Applications",
    excerpt: "Practical tips and techniques for improving the performance of your Node.js backend services.",
    content: "Performance optimization is crucial for Node.js applications. In this article, we'll cover caching strategies, database optimization...",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Node.js", "Performance", "Backend"],
    featured: false,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const COLLABORATIONS = [
  {
    id: 1,
    title: "Open Source Contribution - React Router",
    description: "Contributed to React Router v6 documentation and bug fixes, helping improve the developer experience for thousands of users.",
    type: "Open Source",
    status: "Merged",
    date: "2024-01-20",
    technologies: ["React", "TypeScript", "Documentation"],
    link: "https://github.com/remix-run/react-router",
    collaborators: ["React Router Team"],
    impact: "Improved documentation clarity for 50K+ weekly users"
  },
  {
    id: 2,
    title: "Hackathon Winner - Smart City Solutions",
    description: "Led a team of 4 developers to create an AI-powered traffic management system that won first place at the National Smart City Hackathon.",
    type: "Hackathon",
    status: "Winner",
    date: "2023-12-15",
    technologies: ["Python", "YOLOv8", "IoT", "Machine Learning"],
    link: "https://github.com/your-username/smart-traffic-system",
    collaborators: ["Team Alpha", "City Planning Department"],
    impact: "Potential to reduce traffic congestion by 30%"
  },
  {
    id: 3,
    title: "Mentorship Program - Code for Good",
    description: "Mentoring junior developers in full-stack development through a 3-month intensive program focused on building real-world applications.",
    type: "Mentorship",
    status: "Ongoing",
    date: "2024-01-01",
    technologies: ["MERN Stack", "Best Practices", "Career Guidance"],
    link: "#",
    collaborators: ["10 Junior Developers", "Code for Good NGO"],
    impact: "Helped 8 developers land their first tech jobs"
  },
  {
    id: 4,
    title: "Community Project - Developer Tools",
    description: "Co-created a VS Code extension that helps developers write better commit messages, now used by 5K+ developers worldwide.",
    type: "Community",
    status: "Published",
    date: "2023-11-10",
    technologies: ["TypeScript", "VS Code API", "Git"],
    link: "https://marketplace.visualstudio.com/items?itemName=your-extension",
    collaborators: ["Developer Community", "VS Code Team"],
    impact: "5,000+ active installations"
  }
];

export const CODING_PROFILES = [
  {
    id: 1,
    platform: "LeetCode",
    username: "likhitha_j",
    profileUrl: "https://leetcode.com/u/busydev/",
    stats: {
      problemsSolved: "200+",
      ranking: "Top 15%",
      badges: ["50 Days Badge", "100 Days Badge"]
    },
    description: "Consistent problem solver with focus on algorithms and data structures",
    color: "from-orange-500 to-yellow-500",
    icon: "🧩"
  },
  {
    id: 2,
    platform: "CodeChef",
    username: "likhitha123",
    profileUrl: "https://www.codechef.com/users/likhitha_j",
    stats: {
      rating: "1650+",
      stars: "3 Star",
      contests: "25+ Contests"
    },
    description: "Active competitive programmer participating in monthly contests",
    color: "from-brown-500 to-orange-500",
    icon: "👨‍🍳"
  },
  {
    id: 3,
    platform: "GeeksforGeeks",
    username: "likhithaj",
    profileUrl: "https://www.geeksforgeeks.org/user/likhithafvee/",
    stats: {
      problemsSolved: "180+",
      articles: "5 Articles",
      score: "850+"
    },
    description: "Regular contributor with articles on data structures and algorithms",
    color: "from-green-500 to-emerald-500",
    icon: "🤓"
  },
  {
    id: 4,
    platform: "HackerRank",
    username: "@likhithajlikhi",
    profileUrl: "https://www.hackerrank.com/profile/likhithajlikhi",
    stats: {
      badges: "15+ Badges",
      stars: "5 Star (Python)",
      rank: "Gold Badge"
    },
    description: "Certified in Python, SQL, and Problem Solving domains",
    color: "from-green-600 to-blue-600",
    icon: "🏆"
  }
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-01-15",
    credentialId: "AWS-CCP-2024-001",
    verifyUrl: "https://aws.amazon.com/verification",
    description: "Foundational understanding of AWS Cloud services and architecture",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
    type: "Cloud"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2024-01-10",
    credentialId: "GCP-PD-2024-002",
    verifyUrl: "https://cloud.google.com/certification",
    description: "Professional-level certification in Google Cloud Platform development",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["Google Cloud", "Kubernetes", "Cloud Functions"],
    type: "Cloud"
  },
  {
    id: 3,
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta (Facebook)",
    date: "2023-12-20",
    credentialId: "META-FE-2023-003",
    verifyUrl: "https://coursera.org/verify/professional-cert",
    description: "Comprehensive front-end development program covering React, JavaScript, and UX/UI",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["React", "JavaScript", "HTML/CSS", "UX/UI Design"],
    type: "Development"
  },
  {
    id: 4,
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "2023-12-15",
    credentialId: "MONGO-DEV-2023-004",
    verifyUrl: "https://university.mongodb.com/certification",
    description: "Database design, development, and administration with MongoDB",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["MongoDB", "Database Design", "NoSQL", "Aggregation"],
    type: "Database"
  },
  {
    id: 5,
    title: "Cisco Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023-11-30",
    credentialId: "CISCO-NET-2023-005",
    verifyUrl: "https://cisco.netacad.com/verification",
    description: "Fundamental networking concepts and Cisco networking technologies",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["Networking", "TCP/IP", "Routing", "Switching"],
    type: "Networking"
  },
  {
    id: 6,
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023-11-15",
    credentialId: "IBM-PY-DS-2023-006",
    verifyUrl: "https://ibm.com/training/verification",
    description: "Data analysis, visualization, and machine learning with Python",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
    type: "Data Science"
  }
];