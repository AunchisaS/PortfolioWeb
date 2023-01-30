import React from "react";
import './experience.css'

const TabButton = ({active,title, ...props }) => {            
           // destructuring props
  return (
    <button 
             className={'TypeBtn'}
            {...props}
    >
        
        <h2 style={{maxFontSize:'1.4rem',letterSpacing :'0.75px' }}>{title}</h2>
    </button>
   
  );
};
 
export default TabButton;