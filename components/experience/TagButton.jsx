import React from "react";
import './experience.css'

const TagButton = ({active,title, ...props }) => {            
           // destructuring props
  return (
    <button 
             className={'btn'}
            {...props}
    >
        
        <h3 style={{maxFontSize:'1rem',letterSpacing :'0.75px'}}>{title}</h3>
    </button>
   
  );
};
 
export default TagButton;