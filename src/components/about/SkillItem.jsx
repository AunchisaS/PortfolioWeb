import React from "react";
import './about.css'

const SkillItem = ({ name,image, ...props }) => {            
  return (
    <div className="each__skill">
            <img src= {image} className="skill__logo"  />
            <h4>{name}</h4>
    </div>
  );
};
 
export default SkillItem;


