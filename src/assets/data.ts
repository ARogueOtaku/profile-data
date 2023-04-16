import TProfile from "./types";

const profileData: TProfile = {
  basicInfo: {
    name: "Amit Das",
    job: "FrontEnd Developer",
    aboutMe:
      "Front End Developer with 5+ Years of experience working with JavaScript, HTML/CSS and React to deliver exceptional customer experiences. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.",
  },
  address: [
    {
      type: "CITY",
      name: "Kolakata",
    },
    {
      type: "COUNTRY",
      name: "India",
    },
  ],
  phone: {
    country: "India",
    number: 7980110095,
  },
  email: "amit.rockinad.das@gmail.com",
  socials: [
    {
      label: "Github",
      url: "https://github.com/arogueotaku",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/arogueotaku/",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/dayz_1995/",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      rating: 5,
      maxRating: 5,
    },
    {
      name: "React",
      rating: 4,
      maxRating: 5,
    },
    {
      name: "CSS",
      rating: 4,
      maxRating: 5,
    },
    {
      name: "TypeScript",
      rating: 3.5,
      maxRating: 5,
    },
    {
      name: "HTML5",
      rating: 3.5,
      maxRating: 5,
    },
    {
      name: "NodeJS",
      rating: 3,
      maxRating: 5,
    },
    {
      name: "Git",
      rating: 3,
      maxRating: 5,
    },
    {
      name: "SQL",
      rating: 3,
      maxRating: 5,
    },
    {
      name: "Java",
      rating: 2,
      maxRating: 5,
    },
  ],
  languages: [
    {
      name: "English",
      rating: 3,
      maxRating: 5,
    },
    {
      name: "Hindi",
      rating: 4,
      maxRating: 5,
    },
    {
      name: "Bengali",
      rating: 5,
      maxRating: 5,
    },
  ],
  hobbies: ["Gaming", "Coding", "Cycling"],
  experience: [
    {
      position: "FrontEnd Developer",
      employer: "Paytm (Contractor)",
      location: "Bengaluru",
      remote: true,
      start: new Date(2023, 1, 1),
      clients: ["Nagad"],
      technologies: [
        "React",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Material UI",
        "React Router",
        "Axios",
      ],
      description: [
        "Built multiple UI modules as Contractor for Paytm as a part of the BO Team for Nagad BO Portal project.",
        "Nagad BO Portal / System Portal is a web app that helps the Back Office Users to manage and maintain the Nagad platform",
        "Work with peers to determine structure and design of modules for the web app. Developed features that is reusable for future enhancements while also providing a seamless user experience",
      ],
    },
    {
      position: "UI Developer",
      employer: "Thoughtworks (Contractor)",
      location: "Bengaluru",
      remote: true,
      start: new Date(2022, 0, 1),
      end: new Date(2022, 11, 1),
      clients: ["Standard Chartered Bank"],
      technologies: [
        "HTML/CSS",
        "React",
        "TypeScript",
        "TailwindCSS",
        "GraphQL",
        "NodeJS",
        "React Testing",
      ],
      description: [
        "Built multiple UI modules as Contractor for ThoughtWorks as a part of the Wealth Team for SCNextGen Project.",
        "SCNextGen (SCNG) was a complete overhaul of the Online Banking System for Standard Chartered Bank. Worked with a team of diverse, multinational and talented individuals to integrate my modules and test the same.",
        "Followed a strictly Test Driven Development Practice to ensure high quality reusable code.",
      ],
    },
    {
      position: "Senior Software Engineer",
      employer: "Accolite Digital",
      location: "Bengaluru",
      remote: true,
      start: new Date(2021, 10, 1),
      clients: ["Thoughtworks", "Paytm"],
      description: [
        "Built multiple UI modules as Contractor for Thoughtworks and Paytm",
        "Worked on ReactJS, Redux and used a variety of libraries in the React Ecosystem",
      ],
    },
    {
      position: "Solutions Engineer",
      employer: "LabVantage Solutions",
      location: "Kolkata",
      remote: false,
      start: new Date(2019, 5, 1),
      end: new Date(2021, 10, 1),
      technologies: ["HTML/CSS", "JavaScript", "React", "Git", "SQL", "LIMS"],
      clients: [
        "Abbott",
        "Streck",
        "Baxter",
        "Cedas Sinai",
        "Capstone",
        "Gritstone",
        "Novavax",
        "Kite Pharma",
      ],
      description: [
        "Designed and Developed numerous reports of Lab Experimentation Data using Jasper.",
        "Designed and Developed bar-code labels for multiple clients using BarTender.",
        "Created Multiple Java/JavaScript micro frameworks.",
        "Worked on Multiple Projects simultaneously and handled multiple client calls. Collaborated with a team of Talented Engineers to meet Customers Requirements.",
      ],
    },
    {
      position: "Systems Engineer",
      employer: "Infosys Limited",
      location: "Bengaluru",
      remote: false,
      start: new Date(2017, 9, 1),
      end: new Date(2019, 5, 1),
      technologies: ["SQL Server", "Microsoft Excel", "JavaScript"],
      clients: ["CITI Bank"],
      description: [
        "Effectively resolved Data Inconsistencies and cleaned corrupt data from Citi Genesis Data Warehouse as part of the Data Investigation(DI) Team.",
        "CITI Genesis was CITI Banks Data Warehousing Project.",
      ],
    },
  ],
  education: [
    {
      degree: "BACHELORS",
      location: "Jaipur",
      graduated: true,
      school: "University of Engineering & Management",
      start: new Date(2013, 0, 1),
      end: new Date(2017, 0, 1),
      specialization: "Computer Science Engineer",
      rating: 7.11,
      maxRating: 10,
      ratingType: "CGPA",
    },
    {
      degree: "HIGHER_SECONDARY",
      location: "Kolkata",
      graduated: true,
      school: "St. Xavier's Institution",
      start: new Date(2011, 0, 1),
      end: new Date(2013, 0, 1),
      specialization: "Science",
      board: "ISC",
      rating: 73.2,
      maxRating: 100,
      ratingType: "PERCENT",
    },
    {
      degree: "SECONDARY",
      location: "Kolkata",
      graduated: true,
      school: "St. Xavier's Institution",
      start: new Date(2019, 0, 1),
      end: new Date(2011, 0, 1),
      board: "ICSE",
      rating: 94.3,
      maxRating: 100,
      ratingType: "PERCENT",
    },
  ],
  projects: [
    {
      name: "Wordle",
      technologies: ["TypeScript", "React", "HTML/CSS"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/wordle",
      },
      demo: {
        label: "Live App",
        url: "https://arogueotaku.github.io/wordle",
      },
      description: ["A minimal Clone of the famous Wordle game."],
    },
    {
      name: "Authentication",
      technologies: ["Java", "Spring Boot", "Rest", "JWT"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/authentication",
      },
      description: ["Spring Boot Authentication API."],
    },
    {
      name: "GRPC/Rest",
      technologies: ["JavaScript", "NodeJS", "GRPC", "Google Protobuf", "JSON"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/grpc-rest-api",
      },
      description: ["A Simple API written in both gRPC and Rest."],
    },
    {
      name: "WCreate",
      technologies: ["Typescript", "NodeJS"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/wcreate",
      },
      demo: {
        label: "NPM Package",
        url: "https://www.npmjs.com/package/wcreate",
      },
      description: ["A Node CLI Utility to create Vanilla Webpage."],
    },
    {
      name: "RoomWS",
      technologies: ["JavaScript", "NodeJS", "WebSockets"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/RoomWS",
      },
      description: [
        "A Simple Chat App that uses basic WebSocket Server to implement a Lobby like Feature and Allow chatting.",
        "This is a POC Project I did to see if I could emulate a Room without using any Third Party Websocket Libraries. Although I was successful in what I set out to do, it involved a lot of boilerplating and hassle just to set up rooms and keep track of them.",
        "Please use dedicated libraries like Socket.IO if you wish to emulate rooms via WebSockets.",
      ],
    },
    {
      name: "Simple Stats",
      technologies: ["Java", "Minecraft 1.18 API"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/SimpleStats",
      },
      demo: {
        label: "Download",
        url: "https://www.curseforge.com/minecraft/mc-mods/simple-stats",
      },
      description: [
        "A Simple Stats Mod which show useful Statistics like Player Coordinates, Food Levels, FPS and Latency.",
      ],
    },
    {
      name: "YTAudioStream",
      technologies: ["NodeJS", "Express"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/YTAudioStream",
      },
      demo: {
        label: "Demo (Has a Cold Start)",
        url: "https://yd-loader.glitch.me/audio?v=dQw4w9WgXcQ",
      },
      description: [
        "A Web Server that Responds with YouTube Audio Readable Streams.",
      ],
    },
    {
      name: "BeforeAfter",
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/BeforeAfter",
      },
      demo: {
        label: "Demo",
        url: "https://arogueotaku.github.io/BeforeAfter",
      },
      description: ["A Before After Image Slider Utility."],
    },
    {
      name: "CardPerspective",
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/CardPerspective",
      },
      demo: {
        label: "Demo",
        url: "https://arogueotaku.github.io/CardPerspective",
      },
      description: [
        "A Vanilla JS tilt Effect POC. No Libraries Used.",
        "This is just for POC. For a more Production Ready Tilt Effect please check out this Awesome Library by Gijs Rogé called tilt.js.",
      ],
    },
    {
      name: "TimeKeeper",
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/TimeKeeper",
      },
      demo: {
        label: "Download",
        url: "https://chrome.google.com/webstore/detail/timekeeper/kmcglconamolngmdcmmklkipkplfjhim",
      },
      description: [
        "A Chromium based Extensions to add clocks to Your Browser.",
      ],
    },
    {
      name: "ExtensionTunes",
      technologies: ["HTML", "CSS", "JavaScript"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/ExtensionTunes",
      },
      demo: {
        label: "Download",
        url: "https://chrome.google.com/webstore/detail/extensiontunes/nhocfnegiaknbpdpfphdffcppbhodpfc",
      },
      description: ["An Audio Player Chrome Extension."],
    },
    {
      name: "AlfaBot",
      technologies: ["JavaScript", " Discord API"],
      sourceCode: {
        label: "Source",
        url: "https://github.com/ARogueOtaku/AlfaBot",
      },
      description: [
        "Nifty Discord Buddy who provides Steam Game Details via commands.",
        "Due to recent changes to Heroku free plan, this bot is now dead. It might come alive in future when I port it to serverless architecture.",
      ],
    },
  ],
};

export default profileData;
