import React from "react";
import './experience.css'

const Card = ({ item }) => {            
           // destructuring props
  return (<>
          {item.map((Val) => {
            return (
              <div className="work__container" key={Val.id}>
                <div >
                  <img src={Val.taglogo} alt={Val.name} className="logo__tag" />
                </div>

                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    <h3>{Val.name}</h3>
                    <p>{Val.desc}</p>
                    <p>{Val.skill}</p>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};
export default Card;