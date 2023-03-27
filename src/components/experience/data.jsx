import web from "../../assets/internet.png";
import game from "../../assets/joystick.png";
import trophy from "../../assets/trophy.png";
import microphone from "../../assets/microphone.png";
import team from "../../assets/teamwork.png";
import event from "../../assets/event.png";
import charity from "../../assets/charity.png"
import github from "../../assets/github2.png"
import figma from "../../assets/figma.png";

const Data = [
    {
      id:1,
      name: "FlashCards",
      category: "Academic Work",
      categoryValue: 1,
      tag: "WEBSITE",
      taglogo: web,
      desc: "Single Webpage to help student practice for remembering vocabulary ",
      skill: "HTML, CSS, Javascript",
      link: "https://github.com/SirapoomL/Flashcards.git",
      linklogo: github
    },

    {
      id:2,
      name: "Ice Wars",
      category: "Academic Work",
      categoryValue: 1,
      tag: "GAME",
      taglogo: game,
      desc: "Inspired by Battle City, it is fighting game. The player need to fight with their enemy bear to stay alive.",
      skill: "Java",
      link: "https://github.com/AunchisaS/Ice-War",
      linklogo: github

 
    },
    {
      id:3,
      name: "CU Freelance",
      category: "Academic Work",
      tag: "UX/UI",
      taglogo: web,
      desc: "Designed the user interface of CU Freelance, a platform connecting Chulalongkorn University students with freelance opportunities. Focused on creating an intuitive and visually appealing experience for users.",
      skill:"Design",
      link: "https://www.figma.com/file/f1srmEuC2mT0aiNs0cqEdk/Use-Case?node-id=0%3A1&t=KYa19BMJzKEiTNeA-1",
      linklogo: figma

    }  ,
    {
      id:4,
      name: "Tourister",
      category: "Academic Work",
      tag: "UX/UI",
      taglogo: web,
      desc: "Contributed to the design of Tourister, a platform that matches tourist guides with travelers. Designed key aspects of the user interface to enhance usability and promote engagement. Worked closely with the development team to ensure the design was implemented effectively.",
      skill:"Design",
      link: "https://www.figma.com/proto/MHeOEkfhVtfethEyhBPdAE/Tourister?node-id=61-1344&scaling=scale-down&page-id=0%3A1&starting-point-node-id=61%3A1344&show-proto-sidebar=1",
      linklogo: figma

    }, 

    {
      id: 5,
      name: "Engineering Student Committee",
      category: "Extracurricular Activity",
      tag: "LEADERSHIP",
      taglogo: team,
      desc: "As a member of the Engineering Student Committee (ESC) in 2021, I conducted various activities and coordinated with the faculty of Engineering and other faculties.",
      skill: "Coordination, Leadership",
      link: "",
      linklogo: ""
    },
    {
      id: 6,
      name: "MC",
      category: "Extracurricular Activity",
      tag: "SPEAKING",
      taglogo: microphone,
      desc: "As the Master of Ceremonies at the Chula Freshman First Date 2021 event, I smoothly operated the welcome event for 200+ new college students.",
      skill: "Public speaking, Event hosting",
      link: "",
      linklogo: ""
    },
    {
      id: 7,
      name: "Debater",
      category: "Extracurricular Activity",
      tag: "SPEAKING",
      taglogo: microphone,
      desc: "As a debater, I developed critical thinking and public speaking skills, and received an Honorable Mention at the Chula Freshy Debate 2020.",
      skill: "Critical thinking, Persuasion",
      link: "",
      linklogo: ""
    },
    {
      id: 8,
      name: "Head of the activity team",
      category: "Extracurricular Activity",
      tag: "EVENTS",
      taglogo: event,
      desc: "As the Head of the Activity Team, I created and organized activities for the IN(tania) ART EAT Fair 2022 event that had over 700 attendees.",
      skill: "Creativity, Event planning",
      link: "",
      linklogo: ""
    },

    
    
  ];
   
  export default Data;