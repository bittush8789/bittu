import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Bittu Sharma",
    stack: ["AI|ML Engineer", "MLOps Engineer", "DevOps Engineer","Data"],
    bio: "I'm a passionate DevOps Engineer dedicated to designing and implementing efficient, scalable, and secure infrastructure solutions. With a focus on automation, monitoring, and optimization, I bridge the gap between development and operations to ensure seamless delivery of high-quality applications. Let's collaborate and create a robust, reliable, and high-performing system that exceeds expectations!"
}



const ProjectInfo = [
    {
        title: "Ekart E-comm App",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Facebook Clone",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/Code-Mars/Facebook-Clone"
    },

    {
        title: "Facebook Clone",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/Code-Mars/Facebook-Clone"
    },
    
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/Code-Mars/Travel-Tracker"
    },
    
]


const SkillInfo = [
    {
        title: "DevOps",
        skills: ["Docker", "kubernates","Jenkins", "GitLab", "Circle CI", "Ansible", "Terraform", "AWS", "Linux", "SDLC"
        ]
    },
    {
        title: "MLOps",
        skills: ["AWS Sagemaker", "kubeflow", "MLflow", "MySQL", "MongoDB", "Airflow", "DVC","Langcahin"]
    },
    {
        title: "Backend Development",
        skills: ["Python", "Java", "Django", "Flask", "FastAPI"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Jupyter-notebook"]
    }
]
const socialLinks = [
    { link: "https://github.com/bittush8789", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/bittu-sharma-54ab13254/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/bittush8789", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
    { link: "https://bittublog.hashnode.dev/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Specialist Programmer",
        company: "Infosys",
        date: "Oct 2023 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "System Engineer",
        company: "Infosys",
        date: "Nov 2022 - Sep 2023",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "linux",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "jenkins",
    "express",
    "ansible",
    "terraform",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "circleci",
    "githubaction",
    "airflow",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
    "k8s",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };