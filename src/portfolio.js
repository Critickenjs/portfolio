/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yliess El atifi",
  title: "Bonjour, moi c'est Yliess El Atifi",
  subTitle: emoji(
    "Actuellement étudiant dans la formation BUT 3 informatique en parcours réalisation d'application, je recherche activement d'unne alternance pour l'année 2025-2026"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tS2oRIxghdCQpp-BQj-2RDBQt1oV4XIN/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Critickenjs",
  linkedin: "https://www.linkedin.com/in/yliess-el-atifi-a16793291/",
  gmail: "yliesselatifi@gmail.com",
  gitlab: "https://gitlab.univ-lille.fr/yliess.elatifi.etu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Mes compétences",
  subTitle: "Mes compétences en tant qu'étudiant ",
  skills: [
    emoji(
      "⚡ Développement d'applications web et mobile avec React et React Native"
    ), 
    emoji("⚡ Développement d'applications backend avec Java et Golang"),
    emoji(
      "⚡ Conception de base de données relationnelles et non relationnelles"
    ),    
    emoji("⚡ Développement d'API REST sécurisées et performantes avec Spring Boot"),
    emoji("⚡ Gestion de la persistance des données avec Spring Data JPA et Hibernate"),
    emoji("⚡ Implémentation de tests unitaires et d'intégration avec JUnit et Mockito"),
    emoji("⚡ Conception et manipulation de bases de données NoSQL (MongoDB, Firebase, etc.)"),
    emoji("⚡ Optimisation des performances et mise en place de modèles de données adaptés aux architectures distribuées"),
    emoji("⚡ Automatisation du déploiement avec GitHub Actions, GitLab CI/CD ou Jenkins"),
    emoji("⚡ Mise en place de pipelines CI/CD pour garantir l'intégration et la livraison continues"),
    emoji("⚡Gestion de projet agile et workflow Git"),
    emoji("⚡Anglais (C1)"),
  ],

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "node",
      fontAwesomeClassname: "fab fa-node fa-bounce"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    }
    
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IUT de Lille",
      logo: require("./assets/images/iut.png"),
      subHeader: "BUT Informatique",
      duration: "Septembre 2022-Maintenant",
      desc: "Actuellement en parcours réalisation D'application",
      descBullets: [

      ]
    },
    {
      schoolName: "Lycée Jean Bart",
      logo: require("./assets/images/logo-jean-bart.png"),
      subHeader: "Baccalauréat mention bien",
      duration: "Septembre 2019 - juin 2022",
      desc: " Spécialité Mathématiques et Numérique et Sciences de l'Informatique",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Stagiaire au laboratoire CRIStAL au PaDR",
      company: "CRIStAL",
      companylogo: require("./assets/images/cristam.png"),
      date: "avril-juin 2024",
      desc: "Developpement et conteynérisation d'un  d’un système d’information cartographique pour véhicules autonomes",
      descBullets: [
        "Le but de mon projet était de mettre en œuvre un SIG (Système d’Information Géographique) pour les véhicules autonomes (Renault zoé). J’avais comme fonctionnalités à implémenter : un interfaçage logiciel entre le SIG et le système de localisation, développement d’un horizon électronique (ensemble des routes accessibles par le véhicule dans sa trajectoire), Mise à disposition de l’horizon électronique sous un topic ROS, Extraction d’attributs de base de données dans cet horizon électronique, conteneurisation du système sous Docker pour la diffusion du code et la documentation associée. Dans les grandes lignes, je dois faire un logiciel capable de visualiser une map routière pour localiser la voiture autonome. La bonne conduite de ce projet pourrait permettre le développement d’algorithmes de conduite autonome"
      ]
    },
    {
      role: "Animateur",
      company: "Mairie de Dunkerque",
      companylogo: require("./assets/images/2016-02-logoDK.jpg"),
      date: "juillet-aout 2022",
      desc: "Travail en tant qu'animateur dans la mairie de Dunkerque.",
      descBullets: []
    },
    {
      role: "Employé libre-service",
      company: "Adecco",
      companylogo: require("./assets/images/Adecco_2016.png"),
      date: "juillet-aout 2023",
      desc: "Travail en tant qu'interimaire chez Carrefour"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/sql.png"),
      projectName: "SQL - Jeux olympique",
      projectDesc: "Création et ventilation de données dans une base de données relationnelle PostreSQL",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/Bdd-de-JO"
        }

      ]
    },
    {
      image: require("./assets/images/tetris.jpeg"),
      projectName: "Projet-agile",
      projectDesc: "Jeu tétris codé en java avec la méthode scrum et agile",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/Projet-agile",
          description: "Projet agile"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chasse-au-monstre.png"),
      projectName: "Chasse au monstre",
      projectDesc: "Un jeu éducatif ludique qui intègre des algorithmes de recherche de chemins.",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/Chasse-au-monstre.git"
        },
        {
          name: "descriptif du projet",
          url: "https://docs.google.com/document/d/e/2PACX-1vSUB25RseKRAyvkmXfrizlZKnidVCfiCRKfoWVk4sQbY-yKj-VQEwTgHZoi7Q5MWiOQ2zywI5fCLN-C/pub"
        }
      ]
    },
    {
      image: require("./assets/images/rest.png"),
      projectName: "API Rest - Pizzeria",
      projectDesc: "API Rest codé en java pour une pizzeria",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/Api-Rest-pizzeria.git"
        },
        {
          name: "descriptif du projet",
          url: "https://docs.google.com/document/d/e/2PACX-1vTr2fV1diNMI9Z89WP8H-DSfgTl_TLSEHKGKz_QazCb36_UxSOEkAljOgaP6n7Co7Ie2CCVInTAQy0u/pub"
        }
      ]
    },
    {
      image: require("./assets/images/js-em-up.png"),
      projectName: "Js em up",
      projectDesc: "jeu JavaScript avec Canvas, intégré à Webpack, Babel, Node.js et Express",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/js-em-up.git"
        },
        {
          name: "descriptif du projet",
          url: "https://docs.google.com/document/d/e/2PACX-1vRjAoPudXWt5BVWbIZ5fjK9DWCQHXKnEgPSD73yGU1SyUTFsBwPop8cMrmrF5y27MOqR-ewnLzjpzni/pub"
        }
      ]
    },
    {
      image: require("./assets/images/riscv.jpg"),
      projectName: "Emulateur Risc-v",
      projectDesc: "Emulateur Risc-v codé en Go",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/js-em-up.git"
        },
       
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez moi ☎️"),
  email_address: "yliesselatifi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
