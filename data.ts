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
  experience: [],
  education: [],
  projects: [],
};

export default profileData;
