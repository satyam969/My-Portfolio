
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
      title: "Mern Stack Developer",
      company_name: "",
      icon: creator,
      iconBg: "#383E56",
      date: "December 2023 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
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
      name: "E-Commerce",
      description:
"Web-based e-commerce platform enabling users to search for products, manage their shopping cart, and complete purchases from various providers, offering a convenient and efficient shopping experience."   ,   tags: [
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Ant Design",
          color: "orange-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Braintree",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "orange-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
      ],
      image: Ecommerce,
      source_code_link: "https://github.com/satyam969/E-Commerce",
    },
    {
      name: "Knowledge Sharing Platform",
      description:
        "Web application that provides a space for users to post questions, share answers, and engage in discussions through comments. Join our community to collaborate, learn, and grow together..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "orange-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
      ],
      image: Knowledgeplatform,
      source_code_link: "https://github.com/satyam969/SummerDev",
    },
    {
      name: "TalkATive",
      description:

      "A comprehensive chat application built with the MERN stack that allows users to send messages, create group chats, and receive real-time notifications, all within an intuitive user interface.",
            tags: [
              {
                name: "react",
                color: "blue-text-gradient",
              },
              {
                name: "restapi",
                color: "green-text-gradient",
              },
              {name:"Tailwind CSS",
                color: "pink-text-gradient",
              },
              {
                name: "Bootstrap",
                color: "blue-text-gradient",
              },
              {
                name: "Mongodb",
                color: "green-text-gradient",
              },
              {
                name: "css",
                color: "pink-text-gradient",
              },
              {
                name: "JWT",
                color: "orange-text-gradient",
              },
              {
                name: "Express.js",
                color: "blue-text-gradient",
              },
      ],
      image: Chatapp,
      source_code_link: "https://github.com/satyam969/TalkATive",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };