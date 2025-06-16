import project1 from "../assets/projects/e-commerce.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/portfolio.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack web developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, Javascript, Tailwind CSS and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack web developer with a passion for creating efficient and user-friendly web applications. With 1+ years of experience, I have worked with a variety of technologies, including React, Javascript,  Tailwind CSS, Next.js, Node.js, MySQL, Express, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I learn Java with DSA and enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2025",
    role: "Greater Noida Instuation of techonology",
    company: "BTech, CSE",
    //description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["CGPA-7.0"],
  },
  {
    year: "2019 - 2020",
    role: "LBS Intercollege",
    company: "Intermediate, UP Board",
    //description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Percentage-72"],
  },
  {
    year: "2017 - 2018",
    role: "LBS Intercollege",
    company: " Highschool, UP Board",
    //description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Percentage-84"],
  },
  // {
  //   year: "Nov 2024 - Feb 2025",
  //   role: "Frontend Developer Intern",
  //   company: "GAO Tek Inc",
  //   description: `Worked on the development and maintenance of e-commerce web pages using WooCommerce and WordPress. Assisted in creating responsive UI components with HTML, CSS, and JavaScript. Collaborated with the team to enhance website performance and user experience.`,
  //   technologies: ["HTML", "CSS", "JavaScript", "WordPress", "WooCommerce"],
  // },
];

export const PROJECTS = [
  {
    title: "Wanderlust: A Global Travel Discovery Platform",
    image: project6,
    description:
      "Wanderlust is a full-stack platform designed for travel enthusiasts to discover and share amazing travel destinations. Built with JavaScript, Express.js, Node.js, MongoDB, CSS, and EJS, the platform allows users to explore new places, post reviews, and connect with a community of travelers. This project showcases my expertise in full-stack development, with a focus on creating robust backend services and engaging, responsive user interfaces. Through Wanderlust, I gained hands-on experience in managing a full development cycle, from server-side logic to database management and frontend design, further enhancing my proficiency in web technologies.",
    technologies: ["JavaScript", "NodeJs","ExpressJs","MongoDb","Joi"],
      link: "https://wanderlust-sem2.onrender.com/listings"
  },
  {
    title: "Video Streaming App",
    image: project4,
    description:
      "Designed and implemented a video streaming system that transmitted video data in small packets, achieving less than 1-second latency for real-time playback.Employed M3U8 format to implement adaptive bitrate streaming, resulting in a 25% reduction in buffering by dynamically adjusting video quality based on the user’s internet connection speed.",
    technologies: ["React", "NodeJs","ExpressJs","FFmpeg","videojs","Context API"],
      // link: "https://react-e-commerce-shop-xi.vercel.app/"
  },
  {
    title: "E-commerce Shopping Website",
    image: project1,
    description:
      "This is a fully responsive e-commerce shopping website project built using React and Tailwind CSS. The website utilizes the Fake Store API to fetch data and display products. The Context API is used to manage state throughout the application.",
    technologies: ["React", "Tailwind CSS", "Context API"],
    link: "https://react-e-commerce-shop-xi.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.Developed a responsive and visually appealing portfolio website using React, a popular JavaScript library for building user interfaces, and Tailwind CSS, a utility-first CSS framework for styling and layout.",
    technologies: ["React", "Tailwind CSS"],
    link: "#home"
  },
  {
    title: "Weather-react App",
    image: project5,
    description:
      "A dynamic weather application built using React that provides real-time weather updates for locations worldwide. Leveraging a clean and intuitive UI, users can search for any city to view current weather conditions, temperature, humidity, and forecasts. The app integrates with a weather API to fetch accurate and up-to-date data. This project demonstrates my skills in React, API integration, and responsive design for a seamless user experience across all devices.",
    technologies: ["React.js", "openweathermap Api"],
    link: "https://weather-reactapp-henna.vercel.app/"
  },
  {
    title: "TO-DO App",
    image: project2,
    description:
      "Develop a user-friendly interface using React components to allow users to create, edit, and delete TO-DO list items. Implemented authentication and authorization using Fairbase, a cloud-based database and authentication service, to manage user accounts and ensure secure data storage",
    technologies: ["Next.js", "Firebase"],
    link: "https://todo-next-firebase-xi.vercel.app/"
  },
  {
    title: "Creator Dashboard: A Full-Stack Role-Based Content Management Platform",
    image: project4,
    description:
      "Creator Dashboard is a secure and scalable platform designed to empower creators and administrators with real-time content management capabilities. Built using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB, the application includes features such as JWT-based user authentication, a credit point system, and content aggregation from Twitter and Reddit APIs. Users can interact with posts (save, share, report), while administrators have a dedicated panel for managing user activity and platform content. This project demonstrates my full-stack development skills, including building RESTful APIs, implementing role-based access control, integrating third-party APIs, and deploying a complete web solution on modern cloud platforms. The frontend is deployed on Firebase Hosting, the backend is hosted on Render, and the database is managed through MongoDB Atlas, ensuring reliable performance and scalability across all layers of the stack.",
    technologies: ["ReactJs", "TailwindCss", "NodeJs", "ExpressJs", "JWT", "MongoDBAtlas"],
  },
];

export const CONTACT = {
  address: "Noida Sector - 62, Uttar Predesh",
  phoneNo: "+91 6388443418",
  email: "mallabhishekpratap88@gmail.com",
};
