
// skills and other things in this

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Ecommerce,
    logo,
    threejs,
    Chatapp,
    Knowledgeplatform,
  } from "../assets";
import CollabAI from "../assets/collab-ai.png";
import SafeGuard from "../assets/safeguard.png";
import InterviewAI from "../assets/interview-ai.png";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mern Stack",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Marcocabs ",
    icon: creator, 
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Developing a full-stack cab management platform focused on scalability and modular deployment.",
      "Designed and optimized MySQL schemas using transactions and indexing, reducing query cost by 40%.",
      "Integrated AuthGrad APIs for real-time Aadhaar, PAN, and vendor/driver verification.",
      "Implemented Google Maps and Places API to track user locations and display optimal paths.",
      "Proposed and structured a multi-domain architecture (e.g., vendor.marcocabs.com) for cleaner role-based separation.",
    ],
  },
];

  
  const testimonials = [
    {
      testimonial:"Looking for my first opportunity to contribute and grow as a software developer.",
      name: "Priya Raj",
      designation: "Student",
      company: "Nit Jsr",
      image: logo,
    },
  ];
  
const projects = [
  {
    name: "Collab-AI",
    description:
      "Real-time collaborative code editor for developers with AI-generated code assistance, multi-user editing, in-editor chat, and live file tree management. Supports React, Next.js, Express apps with live preview.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Socket.IO", color: "orange-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
    ],
    image: CollabAI, 
    source_code_link: "https://github.com/satyam969/collab-ai",
  },
  {
    name: "SafeGuard",
    description:
      "Streamlit-based real-time violence detection system using deep learning, IP-based geolocation, and Twilio SMS alerts. Supports webcam and video uploads with timeline visualization.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "Streamlit", color: "orange-text-gradient" },
      { name: "Twilio", color: "blue-text-gradient" },
    ],
    image: SafeGuard, // Add corresponding image file
    source_code_link: "https://github.com/satyam969/SafeGuard",
  },
  {
    name: "Interview-AI",
    description:
      "Voice-based mock interview platform with AI-generated questions using Gemini, Vapi voice agent, and Firebase Firestore performance tracking. Supports multiple interview modes and resume-based questions.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
      { name: "Gemini", color: "green-text-gradient" },
      { name: "Vapi.ai", color: "blue-text-gradient" },
    ],
    image: InterviewAI, // Add your image import
    source_code_link: "https://github.com/satyam969/Interview-AI",
  },
  {
    name: "E-Commerce",
    description:
      "Web-based e-commerce platform enabling users to search products, manage cart, and make secure purchases using JWT authentication and MongoDB backend.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "JWT", color: "orange-text-gradient" },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/satyam969/E-Commerce",
  },
  {
    name: "Knowledge Sharing Platform",
    description:
      "Q&A-style community platform for posting questions, answering, commenting, and discussing technical topics. Built with MERN stack and secure token-based auth.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "JWT", color: "orange-text-gradient" },
    ],
    image: Knowledgeplatform,
    source_code_link: "https://github.com/satyam969/SummerDev",
  },
];

  
  export { services, technologies, experiences, testimonials, projects };
