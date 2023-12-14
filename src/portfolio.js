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
    "Actuellement étudiant dans la formation BUT 2 informatique en parcours réalisation d'application, je recherche activement un stage de fin d'année d'une durée de 10 semaines, débutant le 15 avril."
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
    "- Qualité développement (Bonnes pratiques de programmation orienté-objet (SOLID), tests, CI/CD)",
    "- Gestion de projet agile et workflow Git",
    "- Anglais (B2)",
    "- Espagnol (B1)",
      
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css-3",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
      role: "Animateur",
      company: "Mairie de Dunkerque",
      companylogo: require("./assets/images/2016-02-logoDK.jpg"),
      date: "juillet-aout 2022",
      desc: "Travail en tant qu'animateur dans la mairie de Dunkerque.",
      descBullets: [
      ]
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
          url: "https://github.com/Critickenjs/Projet-agile"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ashitaka.jpg"),
      projectName: "Bot discord",
      projectDesc: "Bot permettant de créer des compositions de foot en python",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/tournoi"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/monko.png"),
      projectName: "MONKO",
      projectDesc: "Jeu de mémoire sur terminal codé en java",
      footerLink: [
        {
          name: "lien github",
          url: "https://github.com/Critickenjs/monko.git"
        }
      ]
    }
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
        {name: "Certification", url: ""},
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
  number: "07 60 19 91 53",
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
