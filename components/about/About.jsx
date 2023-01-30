import React from "react";
import "./about.css";
import "./SkillItem.jsx";
import cpp from "../../assets/c++.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import figma from "../../assets/figma.png";
import SkillItem from "./SkillItem.jsx";
import beaker from "../../assets/chemistry.png";
import comp from "../../assets/desktop-computer.png";
import road from "../../assets/long-road.png";
import sign from "../../assets/signpost.png";
import tree from "../../assets/tree.png";
import tree2 from "../../assets/tree (1).png";
import circle from '../../assets/vector2.jpg';

const About = () => {
  const skillList = [
    { name: "FIGMA", icon: figma },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "C++", icon: cpp },
    { name: "PYTHON", icon: python },
    { name: "JAVA", icon: java },
  ];

  return (
    <section id="about">
      {/* version phone */}
      <div className="about-ver-phone">
        <h1 style={{ padding: "0% 0% 5% 5%" }}>About me</h1>
        <div
          className="phoneSkill"
          style={{ display: "inline-flex", gap: "1rem" }}
        >
          <h3> SKILL:</h3>
          <h4> C++, Python, Java, HTML, CSS</h4>
        </div>

        <div style={{ display: "inline" }}>
          <h3>EDUCATION</h3>
          <h4 style={{ padding: "0% 0% 0% 8%" }}>
            - Kamnoetvidya Science Academy(KVIS)
          </h4>
          <h4 style={{ padding: "0% 0% 0% 8%" }}>
            - Computer Engineering, Chulalongkorn University
          </h4>
        </div>
      </div>

      {/* version tablet */}
      <div className="about-ver-tablet">
        <h2 style={{ padding: "2rem 0rem 1rem 7rem" }}>About me</h2>

        <div className="container about__container">
          <h3 style={{ padding: "0rem 0rem 0rem 4rem" }}>Skill</h3>
          
          <div className="container about__skill">
            {skillList.map((skill) => (
              <SkillItem
                key={`${skill}`}
                name={skill.name}
                image={skill.icon}
              />
            ))}
          </div>

          <h3 style={{ padding: "0rem 0rem 0rem 4rem" }}>Education</h3>
          <div className="container about__Education">
            <div className="each__edu">
              <div className="animate-beaker">
                  <img src={beaker} className="skill__logo beaker" />
                  {/* <img src={circle} className="skill__logo circle" /> */}

              </div>
              <img src={road} alt="" />
              <h4>Kamnoetvidya</h4>
              <h4>Science Academy</h4>
              <h4>(KVIS)</h4>
              <h5>2017-2019</h5>
            </div>

            <div className="each__edu">
              <img src={comp} className="skill__logo"  />
              <img src={road} className="road" alt="" />
              <h4>Computer Engineering,</h4>
              <h4>Chulalongkorn University</h4>
              <h5>2020-now</h5>
            </div>

            <div className="each__edu">
              <div className="tree">
                <img src={tree} className="skill__logo" />
                {/* <img src= {tree}  className="skill__logo" alt="" />
                <img src= {tree}  className="skill__logo" alt="" /> */}
              </div>
              <img src={road} className="road" alt="" />
              <div className="tree2">
                <img src={tree2} className="skill__logo"  />
                <img src={tree2} className="skill__logo" />
              </div>
            </div>

            <div className="each__edu">
              <div className="sign">
                <img src={sign} className="skill__logo"  />
              </div>
              <img src={road} className="road"  />
              <div className="tree">
                <img src={tree2} className="skill__logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// const Footer = () => {
//   const [tagInput, setTagInput] = useState("")
//   const cardItems = [
//     {name:'apple', tag:'fruit'},
//     {name:'banana', tag:'fruit'},
//     {name:'carrot', tag:'vegetable'},
//     {name:'dog', tag:'animal'},
//   ]
//   return(<>
//     <div>Footer</div>
//     <input title="Test" onChange={(e) => {setTagInput(e.target.value)}} />
//     <CardList>
//       {cardItems.filter(item => item.tag === tagInput).map(item => <Card name={item.name} />)}
//     </CardList>
//   </>)
