// ✅ Fixed version of your portfolio constants file with corrected `PROJECT_LIST`

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
  Code2Icon,
  FolderCode,
  ActivitySquareIcon,
  Award,
  Folder,
  User,
  MessageCircle,
  Home,
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

export const SECTION_LIST = [
  { id: 1, displayText: "HOME", sectionID: "home", icon: Home },
  { id: 2, displayText: "SKILLS", sectionID: "skills", icon: Award },
  { id: 3, displayText: "PROJECTS", sectionID: "projects", icon: Folder },
  { id: 4, displayText: "ABOUT", sectionID: "about", icon: User },
  { id: 5, displayText: "CONTACT", sectionID: "contact", icon: MessageCircle },
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
  TSParticles: { component: ActivitySquareIcon, name: "TSParticles" },
  Python: { component: Cpu, name: "Python" },
};

export const TECH_STACK = [
  { name: "React", color: "#61DAFB", icon: Component },
  { name: "Node.js", color: "#68A063", icon: Server },
  { name: "MongoDB", color: "#47A248", icon: Database },
  { name: "Python", color: "#3776AB", icon: Cpu },
  { name: "AWS", color: "#FF9900", icon: Globe },
  { name: "Express", color: "#000000", icon: Code },
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
    liveLink: "https://wanderlust-airbnb-6gli.onrender.com/",
    sourceLink: "https://github.com/Likhithaj123/wanderlust_airbnb.git",
  },
  {
    title: "Movie Recommender System",
    description:
      "Content-based recommendation system built using Python, Streamlit, and TMDB API. Provides trailer embedding, genre filters, and user login.",
    tech: [
      TECH_ICONS["OpenAI API"],
      TECH_ICONS.Firebase,
      TECH_ICONS["Tailwind CSS"],
    ],
    status: "Live",
    featured: true,
    liveLink: "https://movie-recommendation-app-demo.vercel.app/",
    sourceLink: "https://github.com/Likhithaj123/Movie_recom_system.git",
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
    sourceLink: "#",
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
    sourceLink: "#",
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
    sourceLink: "https://github.com/Likhithaj123/namaste-notebook",
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
    sourceLink: "https://github.com/Likhithaj123/Namaste_React.git",
  },
  {
    title: "Netflix-GPT",
    description:
      "An AI-powered movie suggestion app using the OpenAI API to deliver personalized recommendations in a Netflix-style interface.",
    tech: [
      TECH_ICONS.React,
      TECH_ICONS.Firebase,
      TECH_ICONS["Tailwind CSS"],
      TECH_ICONS["OpenAI API"],
    ],
    status: "Paused",
    featured: true,
    liveLink: "https://netflix-gpt.example.com/",
    sourceLink: "https://github.com/Likhithaj123/netflix-gpt.git",
  },
];
