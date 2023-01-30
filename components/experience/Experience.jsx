import React, { useState } from "react";
import Data from "./data";
import Card from "./card";
import TabButton from "./TabButton";
import TagButton from "./TagButton";

import "./experience.css";

const Experience = () => {
  const [item, setItem] = useState(Data);

  const [catagories, setCategories] = useState([
    "Academic Work",
    "Extracurricular Activity",
  ]);
  const [tags, setTags] = useState(["ALL ACADEMIC WORKS"]);

  const workTagItems = [
    "ALL ACADEMIC WORKS",
    ...new Set(
      Data.filter((item) => item.category === "Academic Work").map(
        (Val) => Val.tag
      )
    ),
  ];

  // const workTagItems = [
  //   {tagValue:1,label:"ALL"},
  //   ...new Set({
  //     tagValue:0 ,label:
  //     Data.filter((item) => item.category === "Academic Work").map(
  //       (Val) => Val.tag
  //     )
  //     }),
  // ];
  // console.log(workTagItems);

  const extraTagItems = [
    "ALL EXTRACURRICULAR ACTIVITY",
    ...new Set(
      Data.filter((item) => item.category === "Extracurricular Activity").map(
        (Val) => Val.tag
      )
    ),
  ];

  const genTag = (category) => {
    if (category === "Academic Work") {
      setTags(workTagItems);
      genItems("ALL ACADEMIC WORKS");
    } else if (category === "Extracurricular Activity") {
      setTags(extraTagItems);
      genItems("ALL EXTRACURRICULAR ACTIVITY");
    }
  };

  const genItems = (tag) => {
    console.log("gen");
    const newItem = Data.filter((item) => {
      if (tag === "ALL ACADEMIC WORKS") {
        return item.category === "Academic Work";
      } else if (tag === "ALL EXTRACURRICULAR ACTIVITY") {
        return item.category === "Extracurricular Activity";
      } else {
        return item.tag === tag;
      }
    });
    setItem(newItem);
  };

  const [active, setActive] = useState(false);

  return (
    <>
      <section id="experience">
        <div className="header">
          <h2 style={{ padding: "2rem 0rem 1rem 0rem" }}>Experience</h2>
        </div>
        <div className="sub-header">
          {catagories.map((category) => (
            <TabButton
              key={`${category}`}
              title={category}
              onClick={() => {
                genTag(category);
                }}
            />
          ))}
        </div>

        <div className="tag-bar">
          {tags.map((tag) => {
            let _title = tag;
            if(tag.toLowerCase().includes("all")) _title = "ALL";
            return (
            <TagButton
              key={`${tag}`}
              title={_title}
              onClick={() => {
                genItems(tag);
              }}
            />
          )})}
        </div>

        <div className="experience__container">
          <Card item={item} />
        </div>

        
      </section>
    </>
  );
};

export default Experience;
